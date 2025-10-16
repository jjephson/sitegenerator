import Stripe from 'stripe'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const stripe = new Stripe(config.stripeSecretKey)
  
  const body = await readBody(event)
  const { plan, userId } = body

  const prices = {
    pro: {
      amount: 1900, // $19.00
      name: 'Pro Plan'
    },
    enterprise: {
      amount: 9900, // $99.00
      name: 'Enterprise Plan'
    }
  }

  const selectedPrice = prices[plan]
  
  if (!selectedPrice) {
    throw createError({
      statusCode: 400,
      message: 'Invalid plan selected'
    })
  }

  try {
    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: selectedPrice.name,
              description: 'OnePage AI Builder Subscription'
            },
            unit_amount: selectedPrice.amount,
            recurring: {
              interval: 'month'
            }
          },
          quantity: 1
        }
      ],
      mode: 'subscription',
      success_url: `${getRequestURL(event).origin}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${getRequestURL(event).origin}/billing`,
      client_reference_id: userId,
      metadata: {
        userId,
        plan
      }
    })

    return {
      sessionId: session.id
    }
  } catch (error) {
    console.error('Stripe error:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to create checkout session'
    })
  }
})


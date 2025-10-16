import Stripe from 'stripe'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const stripe = new Stripe(config.stripeSecretKey)
  
  const body = await readRawBody(event)
  const signature = getHeader(event, 'stripe-signature')
  
  if (!signature) {
    throw createError({
      statusCode: 400,
      message: 'Missing stripe signature'
    })
  }

  try {
    // Verify webhook signature
    const webhookEvent = stripe.webhooks.constructEvent(
      body,
      signature,
      config.stripeWebhookSecret
    )

    // Handle the event
    switch (webhookEvent.type) {
      case 'checkout.session.completed':
        await handleCheckoutComplete(webhookEvent.data.object)
        break
      
      case 'customer.subscription.updated':
        await handleSubscriptionUpdate(webhookEvent.data.object)
        break
      
      case 'customer.subscription.deleted':
        await handleSubscriptionCancelled(webhookEvent.data.object)
        break
      
      default:
        console.log(`Unhandled event type: ${webhookEvent.type}`)
    }

    return { received: true }
  } catch (error) {
    console.error('Webhook error:', error)
    throw createError({
      statusCode: 400,
      message: 'Webhook signature verification failed'
    })
  }
})

async function handleCheckoutComplete(session) {
  // Update user's subscription status in Supabase
  console.log('Checkout completed:', session.id)
  
  // TODO: Update user record with subscription details
  // const userId = session.client_reference_id
  // await supabase
  //   .from('users')
  //   .update({ 
  //     subscription_status: 'active',
  //     subscription_id: session.subscription 
  //   })
  //   .eq('id', userId)
}

async function handleSubscriptionUpdate(subscription) {
  console.log('Subscription updated:', subscription.id)
  
  // TODO: Update user's subscription status
}

async function handleSubscriptionCancelled(subscription) {
  console.log('Subscription cancelled:', subscription.id)
  
  // TODO: Update user's subscription status to cancelled
}


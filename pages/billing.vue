<template>
  <div>
    <div class="navbar mb-2">
      <NuxtLink to="/dashboard" class="navbar-brand">← Back to Dashboard</NuxtLink>
    </div>

    <div class="container" style="padding: 2rem;">
      <h1 class="text-center mb-3">Choose Your Plan</h1>
      
      <div class="pricing-grid">
        <div class="card">
          <h2 class="text-center mb-2">Free</h2>
          <div class="text-center mb-2">
            <span style="font-size: 3rem; font-weight: bold;">$0</span>
            <span style="color: var(--text-gray);">/month</span>
          </div>
          <ul class="plan-features">
            <li>✓ 1 Project</li>
            <li>✓ Basic Blocks</li>
            <li>✓ Export to ZIP</li>
            <li>✗ AI Generation</li>
            <li>✗ GitHub Deploy</li>
          </ul>
          <button class="btn btn-outline" style="width: 100%;" disabled>Current Plan</button>
        </div>

        <div class="card" style="border: 2px solid var(--primary-color);">
          <div style="background: var(--primary-color); color: white; text-align: center; padding: 0.5rem; margin: -1.5rem -1.5rem 1rem -1.5rem; border-radius: 0.5rem 0.5rem 0 0;">
            POPULAR
          </div>
          <h2 class="text-center mb-2">Pro</h2>
          <div class="text-center mb-2">
            <span style="font-size: 3rem; font-weight: bold;">$19</span>
            <span style="color: var(--text-gray);">/month</span>
          </div>
          <ul class="plan-features">
            <li>✓ Unlimited Projects</li>
            <li>✓ All Blocks</li>
            <li>✓ Export to ZIP</li>
            <li>✓ AI Generation</li>
            <li>✓ GitHub Deploy</li>
            <li>✓ Custom Domain</li>
            <li>✓ Priority Support</li>
          </ul>
          <button @click="handleCheckout('pro')" class="btn btn-primary" style="width: 100%;" :disabled="loading">
            {{ loading ? 'Processing...' : 'Upgrade to Pro' }}
          </button>
        </div>

        <div class="card">
          <h2 class="text-center mb-2">Enterprise</h2>
          <div class="text-center mb-2">
            <span style="font-size: 3rem; font-weight: bold;">$99</span>
            <span style="color: var(--text-gray);">/month</span>
          </div>
          <ul class="plan-features">
            <li>✓ Everything in Pro</li>
            <li>✓ White Label</li>
            <li>✓ Team Collaboration</li>
            <li>✓ API Access</li>
            <li>✓ Custom Integrations</li>
            <li>✓ Dedicated Support</li>
          </ul>
          <button @click="handleCheckout('enterprise')" class="btn btn-secondary" style="width: 100%;" :disabled="loading">
            {{ loading ? 'Processing...' : 'Contact Sales' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { loadStripe } from '@stripe/stripe-js'

definePageMeta({
  middleware: 'auth'
})

useHead({
  title: 'Pricing Plans - OnePage AI Builder',
  meta: [
    { name: 'description', content: 'Choose the perfect plan for your needs. Upgrade to unlock AI generation, unlimited projects, and GitHub deployment.' }
  ]
})

const config = useRuntimeConfig()
const { user } = useSupabase()
const loading = ref(false)

const handleCheckout = async (plan) => {
  loading.value = true
  
  try {
    // Initialize Stripe
    const stripe = await loadStripe(config.public.stripePublishableKey)
    
    if (!stripe) {
      throw new Error('Stripe failed to load')
    }

    // Create checkout session
    const response = await $fetch('/api/create-checkout-session', {
      method: 'POST',
      body: {
        plan,
        userId: user.value?.id
      }
    })

    // Redirect to Stripe Checkout
    const { error } = await stripe.redirectToCheckout({
      sessionId: response.sessionId
    })

    if (error) {
      throw error
    }
  } catch (error) {
    console.error('Checkout error:', error)
    alert('Failed to start checkout process. Please try again.')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.plan-features {
  list-style: none;
  margin: 2rem 0;
  padding: 0;
}

.plan-features li {
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--border-color);
}

.plan-features li:last-child {
  border-bottom: none;
}
</style>


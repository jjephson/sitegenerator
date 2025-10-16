// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  modules: ['@pinia/nuxt'],
  
  css: ['~/assets/css/main.css'],
  
  runtimeConfig: {
    // Server-side only (private)
    supabaseUrl: process.env.SUPABASE_URL || '',
    supabaseKey: process.env.SUPABASE_KEY || '',
    stripeSecretKey: process.env.STRIPE_SECRET_KEY || '',
    stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET || '',
    aiApiKey: process.env.AI_API_KEY || '',
    githubClientId: process.env.GITHUB_CLIENT_ID || '',
    githubClientSecret: process.env.GITHUB_CLIENT_SECRET || '',
    
    public: {
      // Client-side accessible
      supabaseUrl: process.env.SUPABASE_URL || '',
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY || '',
      stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY || '',
      aiApiEndpoint: process.env.AI_API_ENDPOINT || 'https://ai.yo.help/api/v1/generate',
    }
  }
})

export default defineNuxtRouteMiddleware(async (to, from) => {
  // Only run on client-side
  if (process.server) {
    return
  }
  
  const { user, supabase } = useSupabase()
  
  // Wait a moment for the auth plugin to initialize the session
  if (!user.value) {
    try {
      const { data } = await supabase.auth.getSession()
      
      if (!data.session) {
        return navigateTo('/login')
      }
      
      // Update user state
      user.value = data.session.user
    } catch (error) {
      console.error('Auth middleware error:', error)
      return navigateTo('/login')
    }
  }
})


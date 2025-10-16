export default defineNuxtRouteMiddleware(async (to, from) => {
  // Skip middleware on server-side during initial load
  if (process.server) {
    return
  }
  
  const { user, getSession } = useSupabase()
  
  // If user state is not set, check session
  if (!user.value) {
    const { data } = await getSession()
    
    if (!data.session) {
      return navigateTo('/login')
    }
  }
})


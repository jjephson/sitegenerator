export default defineNuxtRouteMiddleware(async (to, from) => {
  const { getSession } = useSupabase()
  
  const { data } = await getSession()
  
  if (!data.session) {
    return navigateTo('/login')
  }
})


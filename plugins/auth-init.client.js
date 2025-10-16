export default defineNuxtPlugin(async () => {
  const { getSession } = useSupabase()
  
  // Initialize session on app load
  await getSession()
})


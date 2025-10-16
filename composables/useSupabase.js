import { createClient } from '@supabase/supabase-js'

export const useSupabase = () => {
  const config = useRuntimeConfig()
  
  const supabase = createClient(
    config.public.supabaseUrl,
    config.public.supabaseAnonKey,
    {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        storageKey: 'onepage-builder-auth',
        storage: process.client ? window.localStorage : undefined
      }
    }
  )

  const user = useState('user', () => null)
  const isAuthenticated = computed(() => !!user.value)
  
  // Initialize session on client-side
  if (process.client && !user.value) {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        user.value = data.session.user
      }
    })
    
    // Listen to auth state changes
    supabase.auth.onAuthStateChange((event, session) => {
      user.value = session?.user || null
    })
  }

  // Sign up
  const signUp = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      })
      
      if (error) throw error
      
      if (data.user) {
        user.value = data.user
      }
      
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  // Sign in
  const signIn = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      
      if (error) throw error
      
      if (data.user) {
        user.value = data.user
      }
      
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  // Sign out
  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      user.value = null
      return { error: null }
    } catch (error) {
      return { error }
    }
  }

  // Get current session
  const getSession = async () => {
    try {
      const { data, error } = await supabase.auth.getSession()
      if (error) throw error
      
      if (data.session) {
        user.value = data.session.user
      }
      
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  // Listen to auth changes
  const onAuthStateChange = (callback) => {
    return supabase.auth.onAuthStateChange((event, session) => {
      user.value = session?.user || null
      callback(event, session)
    })
  }

  return {
    supabase,
    user,
    isAuthenticated,
    signUp,
    signIn,
    signOut,
    getSession,
    onAuthStateChange,
  }
}


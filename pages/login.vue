<template>
  <div class="login-container">
    <div class="login-card card">
      <h1 class="login-title">OnePage AI Builder</h1>
      
      <div v-if="message" :class="['message', messageType]">
        {{ message }}
      </div>

      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label class="form-label" for="email">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            class="form-input"
            placeholder="you@example.com"
            required
          />
        </div>

        <div class="form-group">
          <label class="form-label" for="password">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            class="form-input"
            placeholder="••••••••"
            required
          />
        </div>

        <button type="submit" class="btn btn-primary" style="width: 100%;" :disabled="loading">
          {{ loading ? 'Please wait...' : (isSignUp ? 'Sign Up' : 'Sign In') }}
        </button>
      </form>

      <div class="text-center mt-2">
        <button @click="toggleMode" class="btn btn-outline" style="width: 100%;">
          {{ isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { signIn, signUp } = useSupabase()
const router = useRouter()

const email = ref('')
const password = ref('')
const isSignUp = ref(false)
const loading = ref(false)
const message = ref('')
const messageType = ref('info')

const toggleMode = () => {
  isSignUp.value = !isSignUp.value
  message.value = ''
}

const handleSubmit = async () => {
  loading.value = true
  message.value = ''
  
  try {
    const { data, error } = isSignUp.value 
      ? await signUp(email.value, password.value)
      : await signIn(email.value, password.value)
    
    if (error) {
      message.value = error.message
      messageType.value = 'error'
    } else {
      message.value = isSignUp.value 
        ? 'Account created! Please check your email for verification.'
        : 'Logged in successfully!'
      messageType.value = 'success'
      
      if (!isSignUp.value) {
        setTimeout(() => {
          router.push('/dashboard')
        }, 1000)
      }
    }
  } catch (err) {
    message.value = 'An unexpected error occurred'
    messageType.value = 'error'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.message {
  padding: 0.75rem;
  border-radius: 0.375rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
}

.message.success {
  background-color: #d1fae5;
  color: #065f46;
  border: 1px solid #6ee7b7;
}

.message.error {
  background-color: #fee2e2;
  color: #991b1b;
  border: 1px solid #fca5a5;
}

.message.info {
  background-color: #dbeafe;
  color: #1e40af;
  border: 1px solid #93c5fd;
}
</style>


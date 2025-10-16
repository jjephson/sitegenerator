<template>
  <div class="auth-page">
    <!-- Navigation -->
    <nav class="landing-nav">
      <div class="container">
        <div class="nav-content">
          <NuxtLink to="/" class="nav-brand">
            <Logo :width="36" :height="36" />
            <span class="brand-name">OnePage AI Builder</span>
          </NuxtLink>
          <div class="nav-actions">
            <NuxtLink to="/" class="nav-link">← Back to Home</NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <div class="auth-container">
      <div class="auth-content">
        <!-- Left Side - Marketing -->
        <div class="auth-marketing">
          <h1 class="marketing-title">
            <span class="gradient-text">Build Beautiful</span><br />
            Websites in Minutes
          </h1>
          <p class="marketing-subtitle">
            Join thousands of creators using AI-powered tools to build accessible, professional websites.
          </p>

          <div class="feature-highlights">
            <div class="highlight-item">
              <div class="highlight-icon">✓</div>
              <div class="highlight-text">No code required</div>
            </div>
            <div class="highlight-item">
              <div class="highlight-icon">✓</div>
              <div class="highlight-text">AI content generation</div>
            </div>
            <div class="highlight-item">
              <div class="highlight-icon">✓</div>
              <div class="highlight-text">WCAG AA compliant</div>
            </div>
            <div class="highlight-item">
              <div class="highlight-icon">✓</div>
              <div class="highlight-text">Deploy in seconds</div>
            </div>
          </div>
        </div>

        <!-- Right Side - Auth Form -->
        <div class="auth-form-wrapper">
          <div class="auth-card">
            <div class="auth-header">
              <h2>{{ isSignUp ? 'Create Account' : 'Welcome Back' }}</h2>
              <p>{{ isSignUp ? 'Start building your perfect website' : 'Sign in to continue building' }}</p>
            </div>

            <!-- Status Message -->
            <div
              v-if="message"
              :class="['auth-message', messageType]"
              role="alert"
              aria-live="polite"
              aria-atomic="true"
            >
              <span class="message-text">{{ message }}</span>
              <button 
                @click="message = ''" 
                class="message-close"
                aria-label="Close message"
              >
                ✕
              </button>
            </div>

            <form @submit.prevent="handleSubmit" novalidate>
              <div class="form-group">
                <label for="email" class="form-label">
                  Email Address
                  <span class="required" aria-label="required">*</span>
                </label>
                <input
                  id="email"
                  v-model="email"
                  type="email"
                  class="form-input"
                  placeholder="you@example.com"
                  required
                  autocomplete="email"
                  aria-required="true"
                />
              </div>

              <div class="form-group">
                <label for="password" class="form-label">
                  Password
                  <span class="required" aria-label="required">*</span>
                </label>
                <input
                  id="password"
                  v-model="password"
                  type="password"
                  class="form-input"
                  :placeholder="isSignUp ? 'Create a strong password' : '••••••••'"
                  required
                  autocomplete="current-password"
                  aria-required="true"
                  :minlength="isSignUp ? 6 : undefined"
                />
                <p v-if="isSignUp" class="form-hint">Minimum 6 characters</p>
              </div>

              <button 
                type="submit" 
                class="btn btn-primary btn-full" 
                :disabled="loading"
                :aria-busy="loading"
              >
                <span v-if="loading">
                  <span class="spinner" aria-hidden="true"></span>
                  {{ isSignUp ? 'Creating Account...' : 'Signing In...' }}
                </span>
                <span v-else>
                  {{ isSignUp ? 'Create Account' : 'Sign In' }} →
                </span>
              </button>
            </form>

            <div class="auth-divider">
              <span>or</span>
            </div>

            <button @click="toggleMode" class="btn btn-outline btn-full">
              {{ isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up' }}
            </button>

            <p class="auth-footer-note">
              By continuing, you agree to our 
              <a href="#terms">Terms of Service</a> and 
              <a href="#privacy">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Logo from '~/components/ui/Logo.vue'

const { signIn, signUp, user } = useSupabase()
const router = useRouter()

const email = ref('')
const password = ref('')
const isSignUp = ref(false)
const loading = ref(false)
const message = ref('')
const messageType = ref('info')

useHead({
  title: computed(() => isSignUp.value ? 'Sign Up - OnePage AI Builder' : 'Sign In - OnePage AI Builder'),
  meta: [
    { name: 'description', content: 'Sign in to OnePage AI Builder to create beautiful, accessible websites with AI-powered tools.' }
  ]
})

// If already logged in, redirect to dashboard
onMounted(() => {
  if (user.value) {
    router.push('/dashboard')
  }
})

const toggleMode = () => {
  isSignUp.value = !isSignUp.value
  message.value = ''
}

const handleSubmit = async () => {
  loading.value = true
  message.value = ''
  
  // Basic client-side validation
  if (!email.value || !password.value) {
    message.value = 'Please fill in all fields'
    messageType.value = 'error'
    loading.value = false
    return
  }

  if (isSignUp.value && password.value.length < 6) {
    message.value = 'Password must be at least 6 characters'
    messageType.value = 'error'
    loading.value = false
    return
  }
  
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
/* Auth Page Layout */
.auth-page {
  min-height: 100vh;
  background-color: #f9fafb;
}

/* Navigation (same as landing) */
.landing-nav {
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e5e7eb;
  padding: 1rem 0;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  font-weight: 700;
  text-decoration: none;
}


.brand-name {
  background: linear-gradient(135deg, #4338ca 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-link {
  color: #1f2937;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #4338ca;
}

/* Auth Container */
.auth-container {
  padding: 3rem 1rem;
}

.auth-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

/* Marketing Side */
.auth-marketing {
  padding: 2rem;
}

.marketing-title {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #111827;
}

.gradient-text {
  background: linear-gradient(135deg, #4338ca 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.marketing-subtitle {
  font-size: 1.25rem;
  color: #4b5563;
  line-height: 1.7;
  margin-bottom: 2.5rem;
}

.feature-highlights {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.highlight-item:hover {
  transform: translateX(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.highlight-icon {
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, #4338ca 0%, #7c3aed 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
}

.highlight-text {
  font-weight: 600;
  color: #1f2937;
  font-size: 1rem;
}

/* Auth Form */
.auth-form-wrapper {
  display: flex;
  justify-content: center;
}

.auth-card {
  width: 100%;
  max-width: 480px;
  background-color: #ffffff;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.auth-header {
  text-align: center;
  margin-bottom: 2rem;
}

.auth-header h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
}

.auth-header p {
  color: #6b7280;
  font-size: 1rem;
}

/* Status Message */
.auth-message {
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.message-text {
  flex: 1;
  font-size: 0.9375rem;
}

.message-close {
  background: none;
  border: none;
  color: inherit;
  font-size: 1.25rem;
  line-height: 1;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s, background-color 0.2s;
}

.message-close:hover {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.1);
}

.message-close:focus {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

.auth-message.success {
  background-color: #d1fae5;
  color: #065f46;
  border: 1px solid #10b981;
}

.auth-message.error {
  background-color: #fee2e2;
  color: #991b1b;
  border: 1px solid #ef4444;
}

.auth-message.info {
  background-color: #dbeafe;
  color: #1e40af;
  border: 1px solid #3b82f6;
}

/* Form Elements */
.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #111827;
  font-size: 0.9375rem;
}

.required {
  color: #ef4444;
  margin-left: 0.25rem;
}

.form-input {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.2s;
  background-color: #ffffff;
}

.form-input:hover {
  border-color: #d1d5db;
}

.form-input:focus {
  outline: none;
  border-color: #4338ca;
  box-shadow: 0 0 0 3px rgba(67, 56, 202, 0.1);
}

.form-input::placeholder {
  color: #9ca3af;
}

.form-hint {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
}

.btn-primary {
  background: linear-gradient(135deg, #4338ca 0%, #7c3aed 100%);
  color: white;
  box-shadow: 0 4px 6px -1px rgba(67, 56, 202, 0.3);
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(67, 56, 202, 0.4);
}

.btn-outline {
  background-color: transparent;
  border: 2px solid #e5e7eb;
  color: #1f2937;
}

.btn-outline:hover:not(:disabled) {
  border-color: #4338ca;
  color: #4338ca;
  background-color: #f9fafb;
}

.btn-full {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
  margin-right: 0.5rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Divider */
.auth-divider {
  margin: 1.5rem 0;
  text-align: center;
  position: relative;
}

.auth-divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #e5e7eb;
}

.auth-divider span {
  position: relative;
  background-color: white;
  padding: 0 1rem;
  color: #6b7280;
  font-size: 0.875rem;
}

/* Footer Note */
.auth-footer-note {
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.8125rem;
  color: #6b7280;
}

.auth-footer-note a {
  color: #4338ca;
  text-decoration: none;
  font-weight: 500;
}

.auth-footer-note a:hover {
  text-decoration: underline;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .auth-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .auth-marketing {
    text-align: center;
  }

  .marketing-title {
    font-size: 2.5rem;
  }

  .highlight-item {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .auth-card {
    padding: 2rem 1.5rem;
  }

  .marketing-title {
    font-size: 2rem;
  }

  .marketing-subtitle {
    font-size: 1.125rem;
  }

  .auth-header h2 {
    font-size: 1.75rem;
  }

  .brand-name {
    display: none;
  }
}

/* Accessibility Enhancements */
a:focus,
button:focus {
  outline: 2px solid #4338ca;
  outline-offset: 2px;
}

/* Skip to main content link for screen readers */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #4338ca;
  color: white;
  padding: 8px;
  text-decoration: none;
  z-index: 1000;
}

.skip-link:focus {
  top: 0;
}
</style>

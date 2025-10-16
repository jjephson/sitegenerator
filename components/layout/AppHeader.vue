<template>
  <nav class="app-header">
    <div class="container">
      <div class="nav-content">
        <NuxtLink to="/" class="nav-brand">
          <Logo :width="36" :height="36" />
          <span class="brand-name">OnePage AI Builder</span>
        </NuxtLink>
        <div class="nav-actions">
          <template v-if="user">
            <NuxtLink to="/dashboard" class="nav-link">Dashboard</NuxtLink>
            <button @click="handleLogout" class="btn btn-outline">Logout</button>
          </template>
          <template v-else>
            <NuxtLink to="/login" class="nav-link">Sign In</NuxtLink>
            <NuxtLink to="/login" class="btn btn-primary">Get Started Free</NuxtLink>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import Logo from '~/components/ui/Logo.vue'

const { user, signOut } = useSupabase()
const router = useRouter()

const handleLogout = async () => {
  await signOut()
  user.value = null
  router.push('/')
}
</script>

<style scoped>
.app-header {
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 1rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
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
  transition: opacity 0.2s;
}

.nav-brand:hover {
  opacity: 0.8;
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

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.btn-primary {
  background: linear-gradient(135deg, #4338ca 0%, #7c3aed 100%);
  color: white;
  box-shadow: 0 4px 6px -1px rgba(67, 56, 202, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(67, 56, 202, 0.4);
}

.btn-outline {
  background-color: transparent;
  border: 2px solid #4338ca;
  color: #4338ca;
}

.btn-outline:hover {
  background-color: #4338ca;
  color: white;
}

@media (max-width: 768px) {
  .brand-name {
    display: none;
  }

  .nav-actions {
    gap: 1rem;
  }
}
</style>


<template>
  <div class="login-container">
    <div class="login-card card" style="max-width: 600px;">
      <h1 class="login-title">OnePage AI Builder</h1>
      
      <p class="text-center mb-3" style="font-size: 1.125rem; color: var(--text-gray);">
        Build beautiful one-page websites with drag-and-drop, AI-powered content generation, and seamless deployment.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <NuxtLink to="/login" class="btn btn-primary" style="text-align: center; width: 100%;">
          Get Started →
        </NuxtLink>
        
        <div class="feature-list">
          <div class="feature-item">✨ Drag & Drop Builder</div>
          <div class="feature-item">🤖 AI Content Generation</div>
          <div class="feature-item">📦 Export to ZIP</div>
          <div class="feature-item">🚀 Deploy to GitHub Pages</div>
          <div class="feature-item">💾 Save & Load Projects</div>
          <div class="feature-item">👁️ Live Preview</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { getSession } = useSupabase()

onMounted(async () => {
  const { data } = await getSession()
  if (data.session) {
    navigateTo('/dashboard')
  }
})
</script>

<style scoped>
.feature-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-top: 2rem;
}

.feature-item {
  padding: 0.75rem;
  background-color: var(--bg-light);
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  text-align: center;
}

@media (max-width: 600px) {
  .feature-list {
    grid-template-columns: 1fr;
  }
}
</style>


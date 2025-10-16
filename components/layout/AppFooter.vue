<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="footer-brand">
            <Logo :width="32" :height="32" />
            <span class="brand-name-footer">OnePage AI Builder</span>
          </div>
          <p class="footer-tagline">Build beautiful, accessible websites with the power of AI.</p>
        </div>

        <div class="footer-col">
          <h2>Product</h2>
          <ul class="footer-links">
            <li><a href="/#features">Features</a></li>
            <li><NuxtLink to="/dashboard">Dashboard</NuxtLink></li>
            <li><a href="/#blocks">Blocks</a></li>
            <li><NuxtLink to="/billing">Pricing</NuxtLink></li>
          </ul>
        </div>

        <div class="footer-col">
          <h2>Resources</h2>
          <ul class="footer-links">
            <li><NuxtLink to="/documentation">Documentation</NuxtLink></li>
            <li><NuxtLink to="/accessibility">Accessibility</NuxtLink></li>
            <li><a href="https://github.com/jjephson/sitegenerator" target="_blank">GitHub</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h2>Company</h2>
          <ul class="footer-links">
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
            <li><NuxtLink to="/privacy">Privacy</NuxtLink></li>
            <li><NuxtLink to="/terms">Terms</NuxtLink></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2025 OnePage AI Builder. All rights reserved.</p>
        <p class="footer-tech">Built with Nuxt 3 • Supabase • Stripe</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Logo from '~/components/ui/Logo.vue'
</script>

<style scoped>
.app-footer {
  background-color: #111827;
  color: #d1d5db;
  padding: 3rem 0 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.brand-name-footer {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
}

.footer-tagline {
  font-size: 0.9375rem;
  line-height: 1.6;
  max-width: 300px;
}

.footer-col h2 {
  color: white;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  color: #d1d5db;
  text-decoration: none;
  transition: color 0.2s;
  font-size: 0.9375rem;
}

.footer-links a:hover {
  color: #ffffff;
}

.footer-bottom {
  border-top: 1px solid #374151;
  padding-top: 2rem;
  text-align: center;
  font-size: 0.875rem;
}

.footer-tech {
  margin-top: 0.5rem;
  font-size: 0.8125rem;
  opacity: 0.7;
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>


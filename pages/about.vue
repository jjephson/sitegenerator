<template>
  <div class="doc-page">
    <AppHeader />

    <main class="doc-content">
      <div class="container">
        <article>
          <h1>About OnePage AI Builder</h1>
          
          <section>
            <h2>Our Mission</h2>
            <p>OnePage AI Builder was created with a simple mission: make professional web design accessible to everyone. We believe that creating a beautiful, functional website shouldn't require coding knowledge or expensive tools.</p>
          </section>

          <section>
            <h2>What We Do</h2>
            <p>We provide a no-code platform that combines:</p>
            <ul>
              <li><strong>Visual Drag & Drop Builder</strong> - Intuitive interface anyone can use</li>
              <li><strong>AI-Powered Content</strong> - Generate professional copy instantly</li>
              <li><strong>Accessibility First</strong> - WCAG AA compliance built-in</li>
              <li><strong>12 Professional Blocks</strong> - Pre-designed, customizable components</li>
              <li><strong>Instant Deployment</strong> - Go live in minutes, not days</li>
            </ul>
          </section>

          <section>
            <h2>Why We Built This</h2>
            <p>We've seen too many people struggle with:</p>
            <ul>
              <li>Expensive web designers and agencies</li>
              <li>Complex website builders with steep learning curves</li>
              <li>Inaccessible websites that exclude users</li>
              <li>Templates that all look the same</li>
              <li>Technical barriers to getting online</li>
            </ul>
            <p>OnePage AI Builder solves these problems by providing powerful tools that are simple to use, affordable, and produce accessible, professional results.</p>
          </section>

          <section>
            <h2>Our Values</h2>
            
            <div class="value-card">
              <h3>♿ Accessibility First</h3>
              <p>Every website created with our platform meets WCAG AA standards. Accessibility isn't optional—it's fundamental to good design.</p>
            </div>

            <div class="value-card">
              <h3>🎨 Creative Freedom</h3>
              <p>We provide the tools and structure, but you control the design. Customize colors, content, and layout to match your vision.</p>
            </div>

            <div class="value-card">
              <h3>⚡ Speed & Simplicity</h3>
              <p>Build professional pages in minutes, not weeks. Simple doesn't mean limited—it means efficient and intuitive.</p>
            </div>

            <div class="value-card">
              <h3>🌍 Open & Transparent</h3>
              <p>Open source codebase, clear pricing, no hidden fees. You own your content and exported code completely.</p>
            </div>
          </section>

          <section>
            <h2>The Technology</h2>
            <p>OnePage AI Builder is built with modern, reliable technologies:</p>
            <ul>
              <li><strong>Nuxt 3</strong> - Fast, modern Vue.js framework</li>
              <li><strong>Supabase</strong> - Secure, scalable backend</li>
              <li><strong>AI Integration</strong> - Advanced language models for content</li>
              <li><strong>Stripe</strong> - Secure payment processing</li>
              <li><strong>GitHub Pages</strong> - Free, reliable hosting</li>
            </ul>
            <p>All open source and available on <a href="https://github.com/jjephson/sitegenerator" target="_blank" rel="noopener">GitHub</a>.</p>
          </section>

          <section>
            <h2>Our Commitment</h2>
            <p>We're committed to:</p>
            <ul>
              <li><strong>Continuous Improvement</strong> - Regular updates and new features</li>
              <li><strong>User Feedback</strong> - Building features you actually need</li>
              <li><strong>Data Privacy</strong> - Your data is yours, period</li>
              <li><strong>Fair Pricing</strong> - Free tier always available, paid plans stay affordable</li>
              <li><strong>Support</strong> - Helping you succeed with comprehensive documentation</li>
            </ul>
          </section>

          <section>
            <h2>Join Us</h2>
            <p>Whether you're a freelancer, small business, non-profit, or just someone with an idea—OnePage AI Builder is here to help you get online quickly and professionally.</p>
            
            <div class="cta-box">
              <h3>Ready to Build?</h3>
              <p>Start creating your beautiful, accessible website today. No credit card required.</p>
              <NuxtLink to="/login" class="btn btn-primary">Get Started Free →</NuxtLink>
            </div>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>Have questions or feedback? We'd love to hear from you:</p>
            <ul>
              <li><strong>GitHub</strong>: <a href="https://github.com/jjephson/sitegenerator" target="_blank" rel="noopener">github.com/jjephson/sitegenerator</a></li>
              <li><strong>Email</strong>: support@onepageai.builder</li>
              <li><strong>Issues</strong>: Report bugs or request features on GitHub</li>
            </ul>
          </section>
        </article>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'

useHead({
  title: 'About - OnePage AI Builder',
  meta: [
    { name: 'description', content: 'Learn about OnePage AI Builder, our mission to make professional web design accessible to everyone, and the values that drive our platform.' }
  ]
})
</script>

<style scoped>
@import './docs-styles.css';
</style>


<template>
  <div class="landing-page">
    <!-- Skip to main content for keyboard users -->
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <!-- Navigation -->
    <nav class="landing-nav" role="navigation" aria-label="Main navigation">
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

    <!-- Hero Section -->
    <main id="main-content">
    <section class="hero-landing" aria-labelledby="hero-title">
      <div class="container">
        <div class="hero-content">
          <h1 id="hero-title" class="hero-title">
            Build Beautiful One-Page Websites with
            <span class="gradient-text">AI-Powered Design</span>
          </h1>
          <p class="hero-subtitle">
            The complete no-code solution for creating stunning, accessible websites. 
            Drag, drop, customize, and deploy—all with built-in WCAG AA compliance.
          </p>
          <div class="hero-buttons">
            <NuxtLink to="/login" class="btn btn-primary btn-lg">
              Start Building Free →
        </NuxtLink>
            <a href="#features" class="btn btn-outline btn-lg">
              See How It Works
            </a>
          </div>
          <div class="hero-badges">
            <div class="badge-item">
              <div class="badge-icon">✓</div>
              <div class="badge-text">WCAG AA Compliant</div>
            </div>
            <div class="badge-item">
              <div class="badge-icon">🚀</div>
              <div class="badge-text">Deploy in Minutes</div>
            </div>
            <div class="badge-item">
              <div class="badge-icon">🤖</div>
              <div class="badge-text">AI-Powered Content</div>
            </div>
            <div class="badge-item">
              <div class="badge-icon">🎨</div>
              <div class="badge-text">No Code Required</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features-section" aria-labelledby="features-title">
      <div class="container">
        <div class="section-header">
          <h2 id="features-title" class="section-title">Everything You Need to Build Stunning Pages</h2>
          <p class="section-subtitle">
            A complete platform with powerful features designed for creators, businesses, and agencies.
          </p>
        </div>

        <div class="features-grid-large">
          <div class="feature-card">
            <div class="feature-icon-large">🎯</div>
            <h3>Drag & Drop Builder</h3>
            <p>Intuitive visual editor with 7+ pre-built blocks. Create professional layouts in minutes without writing a single line of code.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon-large">🤖</div>
            <h3>AI Content Generation</h3>
            <p>Powered by advanced AI to generate compelling headlines, descriptions, and copy. Get professional content with one click.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon-large">♿</div>
            <h3>WCAG AA Compliance</h3>
            <p>Built-in contrast checker ensures every page meets accessibility standards. Real-time validation prevents non-compliant designs.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon-large">🎨</div>
            <h3>Full Design Control</h3>
            <p>Customize every color, font, image, and layout. Add logos, background images, and fine-tune every detail to match your brand.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon-large">👁️</div>
            <h3>Live Preview</h3>
            <p>See changes instantly in a real-time preview. What you see is exactly what you'll get—no surprises.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon-large">🚀</div>
            <h3>One-Click Deploy</h3>
            <p>Deploy to GitHub Pages instantly or export as a ZIP file. Your site goes live in seconds, not hours.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="how-it-works">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">From Idea to Live Site in 3 Steps</h2>
        </div>

        <div class="steps-grid">
          <div class="step-card">
            <div class="step-number">1</div>
            <h3>Choose & Customize Blocks</h3>
            <p>Pick from Hero, Features, Pricing, Testimonials, Contact, and more. Drag them onto your canvas and customize every detail with our visual editor.</p>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <h3>Design & Preview</h3>
            <p>Add your colors, images, and content. Use AI to generate compelling copy. Watch your page come to life with real-time preview.</p>
          </div>

          <div class="step-card">
            <div class="step-number">3</div>
            <h3>Deploy & Share</h3>
            <p>One click to deploy to GitHub Pages or download as a standalone website. Your professional site is ready to share with the world.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pre-built Blocks Section -->
    <section class="blocks-showcase">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">7 Professional Blocks Ready to Use</h2>
          <p class="section-subtitle">Every block is fully customizable and accessible</p>
        </div>

        <div class="blocks-grid">
          <div class="block-showcase-item">
            <div class="block-icon">🎯</div>
            <h3>Hero Section</h3>
            <p>Eye-catching headers with titles, CTAs, logos, and background images</p>
          </div>

          <div class="block-showcase-item">
            <div class="block-icon">✨</div>
            <h3>Features Grid</h3>
            <p>Showcase your product features with icons and descriptions</p>
          </div>

          <div class="block-showcase-item">
            <div class="block-icon">📢</div>
            <h3>Call to Action</h3>
            <p>Conversion-focused sections to drive user engagement</p>
          </div>

          <div class="block-showcase-item">
            <div class="block-icon">💰</div>
            <h3>Pricing Tables</h3>
            <p>Beautiful pricing displays with multiple plan options</p>
          </div>

          <div class="block-showcase-item">
            <div class="block-icon">💬</div>
            <h3>Testimonials</h3>
            <p>Social proof sections with customer reviews and ratings</p>
          </div>

          <div class="block-showcase-item">
            <div class="block-icon">📧</div>
            <h3>Contact Forms</h3>
            <p>Professional contact sections to connect with visitors</p>
          </div>

          <div class="block-showcase-item">
            <div class="block-icon">📄</div>
            <h3>Footer</h3>
            <p>Complete footers with links, copyright, and social media</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-choose">
      <div class="container">
        <div class="two-column">
          <div class="column-content">
            <h2 class="section-title">Why OnePage AI Builder?</h2>
            <div class="benefit-list">
              <div class="benefit-item">
                <div class="benefit-icon">⚡</div>
                <div>
                  <h3>Lightning Fast</h3>
                  <p>Build professional pages in minutes, not days. No coding or design skills required.</p>
                </div>
              </div>

              <div class="benefit-item">
                <div class="benefit-icon">♿</div>
                <div>
                  <h3>Accessibility Built-In</h3>
                  <p>Every page meets WCAG AA standards automatically. Real-time contrast checking prevents issues.</p>
                </div>
              </div>

              <div class="benefit-item">
                <div class="benefit-icon">💾</div>
                <div>
                  <h3>Save & Collaborate</h3>
                  <p>Cloud storage keeps your projects safe. Work from anywhere, on any device.</p>
                </div>
              </div>

              <div class="benefit-item">
                <div class="benefit-icon">📦</div>
                <div>
                  <h3>Export Freedom</h3>
                  <p>Own your code. Download as ZIP or deploy to GitHub Pages. No vendor lock-in.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="column-visual">
            <div class="visual-box">
              <div class="visual-stat">
                <div class="stat-number">7+</div>
                <div class="stat-label">Pre-built Blocks</div>
              </div>
              <div class="visual-stat">
                <div class="stat-number">100%</div>
                <div class="stat-label">WCAG AA Compliant</div>
              </div>
              <div class="visual-stat">
                <div class="stat-number">< 5min</div>
                <div class="stat-label">To First Deploy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Start Building Your Perfect Page Today</h2>
          <p>Join creators and businesses building accessible, beautiful websites with AI-powered tools.</p>
          <div class="cta-buttons">
            <NuxtLink to="/login" class="btn btn-primary btn-lg">
              Get Started Free →
            </NuxtLink>
            <p class="cta-note">No credit card required • Deploy in minutes</p>
          </div>
        </div>
      </div>
    </section>

    </main>
    
    <!-- Footer -->
    <footer class="landing-footer" role="contentinfo">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <div class="footer-brand">
              <span class="brand-icon">🎨</span>
              <span class="brand-name">OnePage AI Builder</span>
            </div>
            <p class="footer-tagline">Build beautiful, accessible websites with the power of AI.</p>
          </div>

          <div class="footer-col">
            <h2>Product</h2>
            <ul class="footer-links">
              <li><a href="#features">Features</a></li>
              <li><NuxtLink to="/login">Dashboard</NuxtLink></li>
              <li><a href="#blocks">Blocks</a></li>
              <li><NuxtLink to="/billing">Pricing</NuxtLink></li>
            </ul>
          </div>

          <div class="footer-col">
            <h2>Resources</h2>
            <ul class="footer-links">
              <li><a href="/QUICKSTART.md" target="_blank">Quick Start</a></li>
              <li><a href="/README.md" target="_blank">Documentation</a></li>
              <li><a href="/TESTING.md" target="_blank">Testing Guide</a></li>
              <li><a href="https://github.com/jjephson/sitegenerator" target="_blank">GitHub</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h2>Company</h2>
            <ul class="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#privacy">Privacy</a></li>
              <li><a href="#terms">Terms</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© 2025 OnePage AI Builder. All rights reserved.</p>
          <p class="footer-tech">Built with Nuxt 3 • Supabase • Stripe</p>
      </div>
    </div>
    </footer>
  </div>
</template>

<script setup>
import Logo from '~/components/ui/Logo.vue'

const { user, signOut } = useSupabase()
const router = useRouter()

useHead({
  title: 'OnePage AI Builder - Build Beautiful Websites with AI',
  meta: [
    { name: 'description', content: 'Create stunning, accessible one-page websites with drag-and-drop, AI-powered content generation, and WCAG AA compliance. Deploy in minutes.' }
  ]
})

const handleLogout = async () => {
  await signOut()
  user.value = null
}
</script>

<style scoped>
/* Landing Page Styles */
.landing-page {
  background-color: #ffffff;
}

/* Navigation */
.landing-nav {
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 100;
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

/* Hero Section */
.hero-landing {
  padding: 6rem 0 4rem;
  background: linear-gradient(180deg, #f9fafb 0%, #ffffff 100%);
}

.hero-content {
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3.5rem;
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

.hero-subtitle {
  font-size: 1.375rem;
  color: #4b5563;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.btn-lg {
  padding: 1rem 2.5rem;
  font-size: 1.125rem;
  font-weight: 600;
}

.hero-badges {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
}

.badge-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.badge-icon {
  font-size: 1.5rem;
}

.badge-text {
  font-weight: 600;
  color: #1f2937;
  font-size: 0.9375rem;
}

/* Features Section */
.features-section {
  padding: 5rem 0;
  background-color: #ffffff;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.75rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.25rem;
  color: #6b7280;
  max-width: 700px;
  margin: 0 auto;
}

.features-grid-large {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.feature-card {
  padding: 2.5rem;
  background-color: #f9fafb;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  transition: all 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  border-color: #4338ca;
}

.feature-icon-large {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #111827;
}

.feature-card p {
  color: #4b5563;
  line-height: 1.7;
  font-size: 1rem;
}

/* How It Works */
.how-it-works {
  padding: 5rem 0;
  background: linear-gradient(135deg, #4338ca 0%, #7c3aed 100%);
  color: white;
}

.how-it-works .section-title {
  color: white;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
}

.step-card {
  text-align: center;
}

.step-number {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  border: 3px solid rgba(255, 255, 255, 0.3);
}

.step-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
}

.step-card p {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  font-size: 1rem;
}

/* Blocks Showcase */
.blocks-showcase {
  padding: 5rem 0;
  background-color: #f9fafb;
}

.blocks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
}

.block-showcase-item {
  text-align: center;
  padding: 2rem;
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.block-showcase-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.block-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.block-showcase-item h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #111827;
}

.block-showcase-item p {
  color: #6b7280;
  font-size: 0.9375rem;
  line-height: 1.6;
}

/* Why Choose Section */
.why-choose {
  padding: 5rem 0;
  background-color: #ffffff;
}

.two-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.column-content .section-title {
  text-align: left;
  margin-bottom: 2rem;
}

.benefit-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.benefit-item {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
}

.benefit-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.benefit-item h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #111827;
}

.benefit-item p {
  color: #4b5563;
  line-height: 1.6;
}

.column-visual {
  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-box {
  background: linear-gradient(135deg, #4338ca 0%, #7c3aed 100%);
  padding: 3rem;
  border-radius: 1.5rem;
  color: white;
  box-shadow: 0 20px 25px -5px rgba(67, 56, 202, 0.3);
  width: 100%;
  max-width: 400px;
}

.visual-stat {
  text-align: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.visual-stat:last-child {
  border-bottom: none;
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.9;
}

/* CTA Section */
.cta-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #1e40af 0%, #4338ca 100%);
  color: white;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.75rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
}

.cta-content p {
  font-size: 1.375rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
}

.cta-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.cta-section .btn-primary {
  background-color: white;
  color: #1e40af;
}

.cta-section .btn-primary:hover {
  background-color: #f3f4f6;
  transform: translateY(-2px);
}

.cta-note {
  font-size: 0.9375rem;
  opacity: 0.8;
  margin: 0;
}

/* Footer */
.landing-footer {
  background-color: #111827;
  color: #d1d5db;
  padding: 3rem 0 2rem;
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
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
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

/* Responsive */
@media (max-width: 1024px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .two-column {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .column-content .section-title {
  text-align: center;
}

  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.125rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .nav-brand {
    font-size: 1rem;
  }

  .brand-name {
    display: none;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .hero-badges {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .cta-content h2 {
    font-size: 2rem;
  }

  .cta-content p {
    font-size: 1.125rem;
  }
}

/* Skip Link for Accessibility */
.skip-link {
  position: absolute;
  top: -100px;
  left: 0;
  background: #4338ca;
  color: white;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  z-index: 1000;
  border-radius: 0 0 0.5rem 0;
  font-weight: 600;
}

.skip-link:focus {
  top: 0;
  outline: 3px solid #7c3aed;
  outline-offset: 2px;
}

/* Smooth Scroll */
html {
  scroll-behavior: smooth;
}

/* Reduced Motion for Accessibility */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Button Enhancements */
.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  border: none;
  cursor: pointer;
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
</style>

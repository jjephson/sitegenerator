<template>
  <div class="doc-page">
    <AppHeader />

    <main class="doc-content">
      <div class="container-docs">
        <aside class="docs-sidebar">
          <nav class="docs-nav">
            <h3>Documentation</h3>
            <a href="#getting-started">Getting Started</a>
            <a href="#blocks">Block System</a>
            <a href="#colors">Color Customization</a>
            <a href="#autosave">Auto-Save</a>
            <a href="#ai">AI Generation</a>
            <a href="#export">Export & Deploy</a>
            <a href="#pricing">Pricing</a>
            <a href="#accessibility">Accessibility</a>
            <a href="#troubleshooting">Troubleshooting</a>
          </nav>
        </aside>

        <article class="docs-main">
          <h1>Complete Documentation</h1>
          <p class="lead">Everything you need to know about OnePage AI Builder.</p>

          <section id="getting-started">
            <h2>Getting Started</h2>
            <p>OnePage AI Builder is a no-code platform for creating beautiful, accessible one-page websites with AI-powered content generation.</p>
            <p><strong>Quick Start:</strong> <NuxtLink to="/quickstart">See our 5-minute setup guide</NuxtLink></p>
          </section>

          <section id="blocks">
            <h2>Block System (12 Blocks)</h2>
            <p>All blocks are fully customizable with WCAG AA compliant defaults:</p>
            
            <div class="blocks-list">
              <div class="block-doc">
                <h3>🎯 Hero Section</h3>
                <p>Eye-catching page headers with titles, CTAs, logos, and background images.</p>
              </div>
              
              <div class="block-doc">
                <h3>✨ Features Grid</h3>
                <p>Showcase product features with icons and descriptions in a responsive grid.</p>
              </div>
              
              <div class="block-doc">
                <h3>📢 Call to Action</h3>
                <p>Conversion-focused sections to drive user engagement and actions.</p>
              </div>
              
              <div class="block-doc">
                <h3>💰 Pricing Tables</h3>
                <p>Display multiple pricing plans with feature lists and CTAs.</p>
              </div>
              
              <div class="block-doc">
                <h3>💬 Testimonials</h3>
                <p>Build trust with customer reviews and social proof.</p>
              </div>
              
              <div class="block-doc">
                <h3>📧 Contact Forms</h3>
                <p>Professional contact sections to connect with visitors.</p>
              </div>
              
              <div class="block-doc">
                <h3>🏢 Logo Cloud</h3>
                <p>Display partner and client logos in a professional grid layout.</p>
              </div>
              
              <div class="block-doc">
                <h3>👥 Team Section</h3>
                <p>Showcase team members with photos, roles, and bios.</p>
              </div>
              
              <div class="block-doc">
                <h3>📊 Statistics</h3>
                <p>Highlight impressive metrics and key numbers with icons.</p>
              </div>
              
              <div class="block-doc">
                <h3>❓ FAQ Section</h3>
                <p>Answer common questions in an organized, scannable format.</p>
              </div>
              
              <div class="block-doc">
                <h3>📮 Newsletter Signup</h3>
                <p>Capture emails and grow your subscriber list effortlessly.</p>
              </div>
              
              <div class="block-doc">
                <h3>📄 Footer</h3>
                <p>Complete footers with links, copyright, and company information.</p>
              </div>
            </div>
          </section>

          <section id="colors">
            <h2>Color Customization</h2>
            <p>Every color in your design can be customized with real-time WCAG AA compliance checking:</p>
            <ul>
              <li><strong>Minimum Contrast:</strong> 4.5:1 ratio required</li>
              <li><strong>Real-time Validation:</strong> Cannot save blocks with insufficient contrast</li>
              <li><strong>Color Picker:</strong> Visual selector or hex code input</li>
              <li><strong>Default Colors:</strong> All defaults pass WCAG AA standards</li>
            </ul>
          </section>

          <section id="autosave">
            <h2>Auto-Save System</h2>
            <p>Your work is automatically protected:</p>
            <ul>
              <li><strong>Instant localStorage:</strong> Every change saved immediately to browser</li>
              <li><strong>Silent Auto-Save:</strong> Syncs to database every 30 seconds</li>
              <li><strong>Auto-Recovery:</strong> Page refresh automatically restores your work</li>
              <li><strong>Manual Save:</strong> Click Save button for immediate confirmation</li>
            </ul>
          </section>

          <section id="ai">
            <h2>AI Content Generation</h2>
            <p>Generate professional content with one click:</p>
            <ul>
              <li>Headlines and titles</li>
              <li>Descriptions and body text</li>
              <li>Feature descriptions</li>
              <li>FAQ questions and answers</li>
              <li>Button text and CTAs</li>
            </ul>
          </section>

          <section id="export">
            <h2>Export & Deployment</h2>
            <h3>Export as ZIP</h3>
            <p>Download a complete, standalone website including HTML, CSS, and all assets.</p>
            
            <h3>Deploy to GitHub Pages</h3>
            <p>One-click deployment to free GitHub hosting with automatic setup.</p>
          </section>

          <section id="pricing">
            <h2>Pricing & Plans</h2>
            <div class="pricing-summary">
              <div>
                <h3>Basic (Free)</h3>
                <p>All 12 blocks, WCAG AA compliance, 1 project, export to ZIP</p>
              </div>
              <div>
                <h3>Pro ($19/mo)</h3>
                <p>Unlimited projects, AI generation, GitHub deploy, priority support</p>
              </div>
              <div>
                <h3>Business ($49/mo)</h3>
                <p>Team collaboration, white-label, analytics, dedicated support</p>
              </div>
            </div>
          </section>

          <section id="accessibility">
            <h2>Accessibility</h2>
            <p>Built-in WCAG AA compliance:</p>
            <ul>
              <li>Real-time contrast checking (4.5:1 minimum)</li>
              <li>Keyboard navigation support</li>
              <li>Screen reader compatible</li>
              <li>Semantic HTML structure</li>
              <li>ARIA labels and roles</li>
              <li>Focus indicators</li>
            </ul>
          </section>

          <section id="troubleshooting">
            <h2>Troubleshooting</h2>
            
            <div class="faq-list">
              <details>
                <summary><strong>Cannot save block: Insufficient contrast ratio</strong></summary>
                <p>Use the color picker's contrast indicator to adjust colors until you achieve 4.5:1 or higher.</p>
              </details>
              
              <details>
                <summary><strong>Work disappeared after refresh</strong></summary>
                <p>Work should auto-restore. Check if you're logged in and look in projects list.</p>
              </details>
              
              <details>
                <summary><strong>Preview not updating</strong></summary>
                <p>Wait a moment (updates every 100ms), try saving, or hard refresh browser.</p>
              </details>
              
              <details>
                <summary><strong>Export not downloading</strong></summary>
                <p>Check browser download settings and popup blocker. Try a different browser.</p>
              </details>
            </div>
          </section>

          <div class="cta-box">
            <h3>Need More Help?</h3>
            <p>Visit our Quick Start guide or contact support.</p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
              <NuxtLink to="/quickstart" class="btn btn-primary">Quick Start</NuxtLink>
              <NuxtLink to="/contact" class="btn btn-outline">Contact Us</NuxtLink>
            </div>
          </div>
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
  title: 'Documentation - OnePage AI Builder',
  meta: [
    { name: 'description', content: 'Complete documentation for OnePage AI Builder. Learn about all 12 blocks, color customization, auto-save, AI generation, and more.' }
  ]
})
</script>

<style scoped>
@import './docs-styles.css';

.container-docs {
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 3rem;
}

.docs-sidebar {
  position: sticky;
  top: 5rem;
  height: fit-content;
}

.docs-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.docs-nav h3 {
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
}

.docs-nav a {
  color: #4b5563;
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  transition: all 0.2s;
  font-size: 0.9375rem;
}

.docs-nav a:hover {
  background-color: #f3f4f6;
  color: #4338ca;
}

.docs-main {
  max-width: 900px;
}

.lead {
  font-size: 1.25rem;
  color: #4b5563;
  margin-bottom: 2rem;
}

.blocks-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.block-doc {
  background-color: #f9fafb;
  padding: 1.25rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
}

.block-doc h3 {
  margin-top: 0;
  font-size: 1.125rem;
  color: #111827;
}

.block-doc p {
  margin-bottom: 0;
  font-size: 0.9375rem;
}

.pricing-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.pricing-summary > div {
  background-color: #f9fafb;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
}

.pricing-summary h3 {
  margin-top: 0;
  color: #4338ca;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

details {
  background-color: #f9fafb;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  cursor: pointer;
}

summary {
  font-size: 1.0625rem;
  margin-bottom: 0.5rem;
}

details[open] summary {
  margin-bottom: 1rem;
  color: #4338ca;
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

@media (max-width: 1024px) {
  .container-docs {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .docs-sidebar {
    position: static;
    background-color: #f9fafb;
    padding: 1rem;
    border-radius: 0.5rem;
  }
  
  .docs-nav {
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>

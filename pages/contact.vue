<template>
  <div class="doc-page">
    <nav class="doc-nav">
      <div class="container">
        <NuxtLink to="/" class="nav-brand">
          <Logo :width="32" :height="32" />
          <span>OnePage AI Builder</span>
        </NuxtLink>
        <NuxtLink to="/" class="back-link">← Back to Home</NuxtLink>
      </div>
    </nav>

    <main class="doc-content">
      <div class="container">
        <article>
          <h1>Contact Us</h1>
          
          <p>Have questions, feedback, or need help? We're here for you. Choose the best way to reach out:</p>

          <div class="contact-grid">
            <div class="contact-card">
              <h3><span class="icon">💬</span> GitHub Issues</h3>
              <p><strong>Best for:</strong> Bug reports, feature requests, technical questions</p>
              <p>Our primary support channel. Open issues are visible to the community and help everyone.</p>
              <a href="https://github.com/jjephson/sitegenerator/issues" target="_blank" rel="noopener" class="btn btn-primary">Open an Issue</a>
            </div>

            <div class="contact-card">
              <h3><span class="icon">📧</span> Email Support</h3>
              <p><strong>Best for:</strong> Account issues, billing questions, private inquiries</p>
              <p><strong>Free Plan:</strong> Community support only<br>
              <strong>Pro/Business:</strong> Priority email support</p>
              <p>Email: <a href="mailto:support@onepageai.builder">support@onepageai.builder</a></p>
            </div>

            <div class="contact-card">
              <h3><span class="icon">📚</span> Documentation</h3>
              <p><strong>Best for:</strong> Learning how to use features, troubleshooting</p>
              <p>Check our comprehensive guides before reaching out:</p>
              <ul style="margin-top: 0.5rem;">
                <li><NuxtLink to="/documentation">Full Documentation</NuxtLink></li>
                <li><a href="/QUICKSTART.md" target="_blank">Quick Start Guide</a></li>
                <li><a href="/TESTING.md" target="_blank">Testing Guide</a></li>
              </ul>
            </div>
          </div>

          <section>
            <h2>Before You Contact Us</h2>
            <p>To help us assist you faster, please:</p>
            
            <div class="value-card">
              <h3>✅ For Bug Reports</h3>
              <ul>
                <li>Describe what you were trying to do</li>
                <li>Explain what happened instead</li>
                <li>Include steps to reproduce the issue</li>
                <li>Share screenshots or screen recordings</li>
                <li>Note your browser and OS version</li>
                <li>Check browser console for errors (F12)</li>
              </ul>
            </div>

            <div class="value-card">
              <h3>💡 For Feature Requests</h3>
              <ul>
                <li>Describe the problem you're trying to solve</li>
                <li>Explain your proposed solution</li>
                <li>Share use cases or examples</li>
                <li>Note if this would help others</li>
                <li>Check if it's already been requested</li>
              </ul>
            </div>

            <div class="value-card">
              <h3>🆘 For Support Questions</h3>
              <ul>
                <li>Check the documentation first</li>
                <li>Search existing GitHub issues</li>
                <li>Include your account email (for Pro/Business)</li>
                <li>Describe what you've already tried</li>
                <li>Be specific about the problem</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>Response Times</h2>
            <p>We strive to respond as quickly as possible:</p>
            <ul>
              <li><strong>GitHub Issues:</strong> Usually within 24-48 hours</li>
              <li><strong>Email (Pro/Business):</strong> Within 24 hours on business days</li>
              <li><strong>Email (Free Plan):</strong> Community support only</li>
              <li><strong>Critical Issues:</strong> Prioritized for Pro/Business plans</li>
            </ul>
          </section>

          <section>
            <h2>Community</h2>
            <p>Join our growing community:</p>
            <ul>
              <li><strong>GitHub Discussions:</strong> Ask questions, share tips, showcase your sites</li>
              <li><strong>GitHub Repository:</strong> Star the project, contribute code</li>
              <li><strong>Share Your Work:</strong> We love seeing what you build!</li>
            </ul>
          </section>

          <section>
            <h2>Business Inquiries</h2>
            <p>For partnerships, press inquiries, or enterprise solutions:</p>
            <p>Email: <a href="mailto:business@onepageai.builder">business@onepageai.builder</a></p>
          </section>

          <section>
            <h2>Social Media</h2>
            <p>Follow us for updates, tips, and announcements:</p>
            <ul>
              <li><strong>GitHub:</strong> <a href="https://github.com/jjephson/sitegenerator" target="_blank" rel="noopener">@jjephson/sitegenerator</a></li>
              <li><strong>Updates:</strong> Watch the repository for release notifications</li>
            </ul>
          </section>

          <div class="cta-box">
            <h3>Ready to Get Started?</h3>
            <p>Try OnePage AI Builder for free. No credit card required.</p>
            <NuxtLink to="/login" class="btn btn-primary">Start Building →</NuxtLink>
          </div>
        </article>
      </div>
    </main>

    <footer class="doc-footer">
      <div class="container">
        <p>© 2025 OnePage AI Builder. All rights reserved.</p>
        <div class="footer-links">
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/privacy">Privacy</NuxtLink>
          <NuxtLink to="/terms">Terms</NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Logo from '~/components/ui/Logo.vue'

useHead({
  title: 'Contact Us - OnePage AI Builder',
  meta: [
    { name: 'description', content: 'Get in touch with OnePage AI Builder for support, bug reports, feature requests, or business inquiries. Multiple contact options available.' }
  ]
})
</script>

<style scoped>
@import './docs-styles.css';
</style>


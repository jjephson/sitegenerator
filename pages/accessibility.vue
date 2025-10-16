<template>
  <div class="doc-page">
    <AppHeader />

    <main class="doc-content">
      <div class="container">
        <article>
          <h1>Accessibility Statement</h1>
          
          <p><strong>Last Updated:</strong> January 2025</p>
          <p><strong>Last Reviewed:</strong> January 2025</p>

          <section>
            <h2>Our Commitment to Accessibility</h2>
            <p>OnePage AI Builder is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards.</p>
            
            <p>This accessibility statement applies to the OnePage AI Builder platform available at onepageai.builder and all websites created using our platform.</p>
          </section>

          <section>
            <h2>Conformance Status</h2>
            <p>The <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener">Web Content Accessibility Guidelines (WCAG)</a> defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.</p>
            
            <div class="status-box">
              <h3>✓ OnePage AI Builder is partially conformant with WCAG 2.1 Level AA</h3>
              <p>"Partially conformant" means that some parts of the content do not fully conform to the accessibility standard.</p>
            </div>
          </section>

          <section>
            <h2>Standards and Legislation</h2>
            <p>OnePage AI Builder aims to comply with the following standards and legislation:</p>
            <ul>
              <li><strong>Swedish Law:</strong> Lag (2018:1937) om tillgänglighet till digital offentlig service (Law on accessibility to digital public services)</li>
              <li><strong>EU Directive:</strong> Directive (EU) 2016/2102 on the accessibility of websites and mobile applications</li>
              <li><strong>EN 301 549:</strong> European Standard for ICT Accessibility</li>
              <li><strong>WCAG 2.1 Level AA:</strong> Web Content Accessibility Guidelines</li>
            </ul>
          </section>

          <section>
            <h2>Accessibility Features</h2>
            <p>OnePage AI Builder includes the following accessibility features:</p>

            <div class="feature-grid">
              <div class="feature-item">
                <h3>♿ WCAG AA Compliance Tools</h3>
                <p>Built-in contrast checker ensures all text meets the 4.5:1 minimum ratio. The system prevents saving designs that don't meet accessibility standards.</p>
              </div>

              <div class="feature-item">
                <h3>⌨️ Keyboard Navigation</h3>
                <p>Full keyboard support with Tab navigation, Enter/Space activation, and Escape to close modals. Visible focus indicators on all interactive elements.</p>
              </div>

              <div class="feature-item">
                <h3>📢 Screen Reader Support</h3>
                <p>Semantic HTML, ARIA labels, proper heading hierarchy, and descriptive link text ensure compatibility with assistive technologies.</p>
              </div>

              <div class="feature-item">
                <h3>🎨 Visual Accessibility</h3>
                <p>High contrast UI, readable fonts (minimum 16px), clear focus indicators, and no reliance on color alone to convey information.</p>
              </div>

              <div class="feature-item">
                <h3>🌐 Language Support</h3>
                <p>Proper lang attributes, consistent terminology, and clear, simple language throughout the interface.</p>
              </div>

              <div class="feature-item">
                <h3>⏸️ User Control</h3>
                <p>No auto-playing content, no time limits on interactions, and respect for prefers-reduced-motion preferences.</p>
              </div>
            </div>
          </section>

          <section>
            <h2>Known Limitations and Issues</h2>
            <p>Despite our best efforts to ensure accessibility, there may be some limitations. Below is a description of known issues:</p>

            <div class="limitation-item">
              <h3>Color Picker Interface</h3>
              <p><strong>Issue:</strong> The visual color picker may be difficult to use with keyboard only.</p>
              <p><strong>Workaround:</strong> Users can enter hex color codes directly using the text input field.</p>
              <p><strong>Status:</strong> Planned for improvement in future update.</p>
            </div>

            <div class="limitation-item">
              <h3>Preview Iframe</h3>
              <p><strong>Issue:</strong> The live preview iframe has limited keyboard navigation within the preview.</p>
              <p><strong>Workaround:</strong> All editing functionality is available in the main interface. The preview is for visual reference only.</p>
              <p><strong>Status:</strong> Under review.</p>
            </div>

            <div class="limitation-item">
              <h3>Third-Party Services</h3>
              <p><strong>Issue:</strong> Some third-party integrations (Stripe, GitHub) may have their own accessibility limitations.</p>
              <p><strong>Workaround:</strong> We work with providers who prioritize accessibility and provide alternative methods when possible.</p>
              <p><strong>Status:</strong> Ongoing monitoring.</p>
            </div>
          </section>

          <section>
            <h2>Technical Specifications</h2>
            <p>Accessibility of OnePage AI Builder relies on the following technologies:</p>
            <ul>
              <li><strong>HTML5</strong> - Semantic markup</li>
              <li><strong>CSS3</strong> - Visual presentation</li>
              <li><strong>JavaScript</strong> - Interactive functionality</li>
              <li><strong>ARIA</strong> - Enhanced accessibility attributes</li>
              <li><strong>Vue.js 3</strong> - Framework with accessibility features</li>
            </ul>

            <p>These technologies are relied upon for conformance with the accessibility standards used.</p>
          </section>

          <section>
            <h2>Assessment Approach</h2>
            <p>OnePage AI Builder assessed the accessibility of this website by the following approaches:</p>
            <ul>
              <li><strong>Self-evaluation:</strong> Internal testing with accessibility tools and screen readers</li>
              <li><strong>Automated testing:</strong> Using tools like WAVE, axe DevTools, and Lighthouse</li>
              <li><strong>Manual testing:</strong> Keyboard-only navigation and screen reader testing</li>
              <li><strong>User testing:</strong> Feedback from users with disabilities</li>
            </ul>
          </section>

          <section>
            <h2>Feedback and Contact Information</h2>
            <p>We welcome your feedback on the accessibility of OnePage AI Builder. Please let us know if you encounter accessibility barriers:</p>

            <div class="contact-methods">
              <div class="contact-method">
                <h3>📧 Email</h3>
                <p><a href="mailto:accessibility@onepageai.builder">accessibility@onepageai.builder</a></p>
                <p>We aim to respond within 5 business days.</p>
              </div>

              <div class="contact-method">
                <h3>💬 GitHub Issues</h3>
                <p><a href="https://github.com/jjephson/sitegenerator/issues" target="_blank" rel="noopener">Report accessibility issues</a></p>
                <p>Public issue tracker for transparency and community input.</p>
              </div>

              <div class="contact-method">
                <h3>📝 General Contact</h3>
                <p><NuxtLink to="/contact">Contact page</NuxtLink></p>
                <p>Multiple support channels available.</p>
              </div>
            </div>

            <p>When reporting accessibility issues, please include:</p>
            <ul>
              <li>The page or feature where you encountered the issue</li>
              <li>A description of the problem</li>
              <li>Your operating system and browser</li>
              <li>Any assistive technologies you use</li>
              <li>Steps to reproduce the issue</li>
            </ul>
          </section>

          <section>
            <h2>Enforcement Procedure</h2>
            <p>Under Swedish law (Lag 2018:1937), if you are not satisfied with how we respond to your accessibility feedback, you can report it to:</p>
            
            <div class="authority-box">
              <h3>Myndigheten för digital förvaltning (DIGG)</h3>
              <p><strong>Address:</strong> Box 5032, 102 41 Stockholm, Sweden</p>
              <p><strong>Website:</strong> <a href="https://www.digg.se" target="_blank" rel="noopener">www.digg.se</a></p>
              <p><strong>Email:</strong> <a href="mailto:tillganglighet@digg.se">tillganglighet@digg.se</a></p>
              <p><strong>Phone:</strong> 010-447 80 00</p>
            </div>

            <p>DIGG is the Swedish Agency for Digital Government responsible for monitoring compliance with accessibility legislation.</p>
          </section>

          <section>
            <h2>Websites Created With Our Platform</h2>
            <p>All websites created using OnePage AI Builder benefit from our accessibility features:</p>
            <ul>
              <li>Automatic WCAG AA contrast validation during design</li>
              <li>Semantic HTML structure in exported code</li>
              <li>Proper heading hierarchy</li>
              <li>Accessible forms with proper labels</li>
              <li>Keyboard-navigable elements</li>
              <li>Screen reader-friendly markup</li>
            </ul>

            <p><strong>Note:</strong> Content creators are responsible for:</p>
            <ul>
              <li>Providing meaningful alt text for images</li>
              <li>Writing clear, understandable content</li>
              <li>Using descriptive link text</li>
              <li>Maintaining logical content structure</li>
              <li>Testing their own websites for accessibility</li>
            </ul>
          </section>

          <section>
            <h2>Continuous Improvement</h2>
            <p>We are committed to continuous improvement of accessibility. Our roadmap includes:</p>
            <ul>
              <li><strong>Q1 2025:</strong> Enhanced keyboard navigation in color picker</li>
              <li><strong>Q2 2025:</strong> Comprehensive accessibility audit by external experts</li>
              <li><strong>Q3 2025:</strong> User testing with people with disabilities</li>
              <li><strong>Ongoing:</strong> Regular automated accessibility testing in CI/CD pipeline</li>
              <li><strong>Ongoing:</strong> Staff training on accessibility best practices</li>
            </ul>
          </section>

          <section>
            <h2>Formal Complaints</h2>
            <p>If you wish to make a formal complaint about accessibility, please contact us at <a href="mailto:accessibility@onepageai.builder">accessibility@onepageai.builder</a> with:</p>
            <ul>
              <li>Your name and contact information</li>
              <li>Description of the accessibility issue</li>
              <li>The page or feature affected</li>
              <li>Date and time you encountered the issue</li>
              <li>Impact on your ability to use the service</li>
            </ul>

            <p>We will investigate all formal complaints and provide a written response within 3 weeks.</p>
          </section>

          <section>
            <h2>Additional Resources</h2>
            <p>Learn more about web accessibility:</p>
            <ul>
              <li><a href="https://www.w3.org/WAI/" target="_blank" rel="noopener">W3C Web Accessibility Initiative (WAI)</a></li>
              <li><a href="https://www.digg.se/kunskap-och-stod/digital-tillganglighet" target="_blank" rel="noopener">DIGG - Digital Tillgänglighet</a></li>
              <li><a href="https://www.funka.com/" target="_blank" rel="noopener">Funka - Accessibility Experts</a></li>
              <li><a href="https://webaim.org/" target="_blank" rel="noopener">WebAIM - Web Accessibility Resources</a></li>
            </ul>
          </section>

          <div class="cta-box">
            <h3>Help Us Improve</h3>
            <p>Your feedback is essential to improving accessibility. If you encounter any barriers, please let us know.</p>
            <a href="mailto:accessibility@onepageai.builder" class="btn btn-primary">Report Accessibility Issue</a>
          </div>

          <section>
            <h2>Statement Approval</h2>
            <p>This accessibility statement was created on <strong>January 2025</strong> and last reviewed on <strong>January 2025</strong>.</p>
            <p>This statement will be reviewed and updated at least annually and whenever significant changes are made to the website.</p>
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
  title: 'Accessibility Statement - OnePage AI Builder',
  meta: [
    { name: 'description', content: 'Accessibility statement for OnePage AI Builder. WCAG 2.1 Level AA compliant. Learn about our commitment to digital accessibility and how to report issues.' }
  ]
})
</script>

<style scoped>
@import './docs-styles.css';

.status-box {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  padding: 2rem;
  border-radius: 0.75rem;
  margin: 2rem 0;
  text-align: center;
}

.status-box h3 {
  color: white;
  margin-top: 0;
  font-size: 1.5rem;
}

.status-box p {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.feature-item {
  background-color: #f9fafb;
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
}

.feature-item h3 {
  margin-top: 0;
  font-size: 1.125rem;
  color: #111827;
}

.feature-item p {
  margin-bottom: 0;
  font-size: 0.9375rem;
}

.limitation-item {
  background-color: #fef3c7;
  border-left: 4px solid #f59e0b;
  padding: 1.5rem;
  border-radius: 0 0.5rem 0.5rem 0;
  margin-bottom: 1.5rem;
}

.limitation-item h3 {
  margin-top: 0;
  color: #92400e;
  font-size: 1.125rem;
}

.limitation-item p {
  margin-bottom: 0.5rem;
}

.limitation-item p:last-child {
  margin-bottom: 0;
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.contact-method {
  background-color: #f9fafb;
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
}

.contact-method h3 {
  margin-top: 0;
  font-size: 1.125rem;
  color: #4338ca;
}

.authority-box {
  background-color: #eff6ff;
  border: 2px solid #3b82f6;
  padding: 2rem;
  border-radius: 0.75rem;
  margin: 2rem 0;
}

.authority-box h3 {
  margin-top: 0;
  color: #1e40af;
  font-size: 1.25rem;
}

.authority-box p {
  margin-bottom: 0.5rem;
}

.authority-box p:last-child {
  margin-bottom: 0;
}
</style>


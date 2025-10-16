<template>
  <div class="doc-page">
    <AppHeader />

    <main class="doc-content">
      <div class="container-docs">
        <aside class="docs-sidebar">
          <nav class="docs-nav">
            <h3>Testing Guide</h3>
            <a href="#overview">Overview</a>
            <a href="#auth">Authentication</a>
            <a href="#blocks">Block Management</a>
            <a href="#colors">Color System</a>
            <a href="#autosave">Auto-Save</a>
            <a href="#ai">AI Generation</a>
            <a href="#export">Export</a>
            <a href="#accessibility">Accessibility</a>
            <a href="#performance">Performance</a>
          </nav>
        </aside>

        <article class="docs-main">
          <h1>Testing Guide</h1>
          <p class="lead">Comprehensive testing procedures for OnePage AI Builder.</p>

          <section id="overview">
            <h2>Testing Overview</h2>
            <p>Test these critical areas:</p>
            <ul>
              <li>Authentication & session persistence (24h)</li>
              <li>All 12 blocks with fixed header/footer</li>
              <li>Color customization with WCAG AA validation</li>
              <li>Auto-save and localStorage backup</li>
              <li>AI content generation</li>
              <li>Export and deployment</li>
              <li>Access level system</li>
              <li>UI/UX & accessibility</li>
            </ul>
          </section>

          <section id="auth">
            <h2>Authentication Testing</h2>
            
            <div class="checklist">
              <h3>Registration</h3>
              <label><input type="checkbox"> Can create account with valid email/password</label>
              <label><input type="checkbox"> Cannot register with invalid email</label>
              <label><input type="checkbox"> Redirected to dashboard after registration</label>
            </div>

            <div class="checklist">
              <h3>Login & Session</h3>
              <label><input type="checkbox"> Can log in with valid credentials</label>
              <label><input type="checkbox"> Session persists on page reload (F5)</label>
              <label><input type="checkbox"> Session lasts 24 hours</label>
              <label><input type="checkbox"> Auto-refresh token works</label>
            </div>

            <div class="checklist">
              <h3>Logout</h3>
              <label><input type="checkbox"> Can log out successfully</label>
              <label><input type="checkbox"> Cannot access dashboard after logout</label>
              <label><input type="checkbox"> localStorage cleared on logout</label>
            </div>
          </section>

          <section id="blocks">
            <h2>Block Management (12 Blocks)</h2>
            
            <div class="checklist">
              <h3>All 12 Blocks Available</h3>
              <label><input type="checkbox"> Hero Section (Header)</label>
              <label><input type="checkbox"> Features Grid</label>
              <label><input type="checkbox"> Call to Action</label>
              <label><input type="checkbox"> Pricing Tables</label>
              <label><input type="checkbox"> Testimonials</label>
              <label><input type="checkbox"> Contact Forms</label>
              <label><input type="checkbox"> Logo Cloud</label>
              <label><input type="checkbox"> Team Section</label>
              <label><input type="checkbox"> Statistics</label>
              <label><input type="checkbox"> FAQ Section</label>
              <label><input type="checkbox"> Newsletter Signup</label>
              <label><input type="checkbox"> Footer</label>
            </div>

            <div class="checklist">
              <h3>Fixed Header/Footer</h3>
              <label><input type="checkbox"> Hero always at top</label>
              <label><input type="checkbox"> Footer always at bottom</label>
              <label><input type="checkbox"> Content blocks draggable in middle</label>
              <label><input type="checkbox"> Only one header and footer allowed</label>
            </div>

            <div class="checklist">
              <h3>Editing Blocks</h3>
              <label><input type="checkbox"> Edit modal opens correctly</label>
              <label><input type="checkbox"> All text fields editable</label>
              <label><input type="checkbox"> Color pickers work</label>
              <label><input type="checkbox"> Array items (features, FAQs) can be added/removed</label>
              <label><input type="checkbox"> Changes save correctly</label>
              <label><input type="checkbox"> Preview updates after saving</label>
            </div>
          </section>

          <section id="colors">
            <h2>Color Customization</h2>
            
            <div class="checklist">
              <h3>Color Pickers</h3>
              <label><input type="checkbox"> Color picker opens</label>
              <label><input type="checkbox"> Can select colors visually</label>
              <label><input type="checkbox"> Can enter hex codes</label>
              <label><input type="checkbox"> Real-time contrast checking displays ratio</label>
            </div>

            <div class="checklist">
              <h3>WCAG AA Validation</h3>
              <label><input type="checkbox"> Contrast ratio displayed</label>
              <label><input type="checkbox"> Warning when contrast < 4.5:1</label>
              <label><input type="checkbox"> Cannot save with insufficient contrast</label>
              <label><input type="checkbox"> Error message is accessible</label>
              <label><input type="checkbox"> All defaults pass WCAG AA</label>
            </div>
          </section>

          <section id="autosave">
            <h2>Auto-Save System</h2>
            
            <div class="checklist">
              <h3>localStorage Backup</h3>
              <label><input type="checkbox"> Changes saved to localStorage instantly</label>
              <label><input type="checkbox"> Page refresh (F5) restores work automatically</label>
              <label><input type="checkbox"> No popup on restore (silent recovery)</label>
              <label><input type="checkbox"> Works in private/incognito mode</label>
            </div>

            <div class="checklist">
              <h3>Auto-Save to Database</h3>
              <label><input type="checkbox"> Auto-saves every 30 seconds silently</label>
              <label><input type="checkbox"> No UI notifications during auto-save</label>
              <label><input type="checkbox"> Works for new projects</label>
              <label><input type="checkbox"> Works for existing projects</label>
            </div>

            <div class="checklist">
              <h3>Manual Save</h3>
              <label><input type="checkbox"> Save button works</label>
              <label><input type="checkbox"> Shows success message</label>
              <label><input type="checkbox"> localStorage cleared after save</label>
              <label><input type="checkbox"> Status message is dismissible</label>
            </div>
          </section>

          <section id="ai">
            <h2>AI Content Generation</h2>
            
            <div class="checklist">
              <label><input type="checkbox"> AI button appears next to text fields</label>
              <label><input type="checkbox"> Generates content on click</label>
              <label><input type="checkbox"> Shows loading state</label>
              <label><input type="checkbox"> Handles errors gracefully</label>
              <label><input type="checkbox"> Fallback content in development</label>
            </div>
          </section>

          <section id="export">
            <h2>Export & Deployment</h2>
            
            <div class="checklist">
              <h3>ZIP Export</h3>
              <label><input type="checkbox"> Export button works</label>
              <label><input type="checkbox"> ZIP downloads</label>
              <label><input type="checkbox"> Contains all files</label>
              <label><input type="checkbox"> All 12 blocks render in export</label>
              <label><input type="checkbox"> Custom colors applied</label>
              <label><input type="checkbox"> Exported site works standalone</label>
            </div>

            <div class="checklist">
              <h3>GitHub Deployment</h3>
              <label><input type="checkbox"> Auth flow works</label>
              <label><input type="checkbox"> Repository created</label>
              <label><input type="checkbox"> Files pushed</label>
              <label><input type="checkbox"> GitHub Pages enabled</label>
              <label><input type="checkbox"> Site accessible at URL</label>
            </div>
          </section>

          <section id="accessibility">
            <h2>Accessibility Testing</h2>
            
            <div class="checklist">
              <h3>Keyboard Navigation</h3>
              <label><input type="checkbox"> Tab navigation works</label>
              <label><input type="checkbox"> Enter/Space activates buttons</label>
              <label><input type="checkbox"> Escape closes modals</label>
              <label><input type="checkbox"> Focus indicators visible</label>
            </div>

            <div class="checklist">
              <h3>Screen Reader</h3>
              <label><input type="checkbox"> Images have alt text</label>
              <label><input type="checkbox"> Buttons have labels</label>
              <label><input type="checkbox"> Forms have associated labels</label>
              <label><input type="checkbox"> Proper heading hierarchy</label>
              <label><input type="checkbox"> Status messages use aria-live</label>
            </div>

            <div class="checklist">
              <h3>Color & Contrast</h3>
              <label><input type="checkbox"> All text meets WCAG AA (4.5:1)</label>
              <label><input type="checkbox"> Buttons have sufficient contrast</label>
              <label><input type="checkbox"> Focus indicators visible</label>
              <label><input type="checkbox"> lang attribute on html element</label>
            </div>
          </section>

          <section id="performance">
            <h2>Performance Testing</h2>
            
            <div class="checklist">
              <h3>Load Times</h3>
              <label><input type="checkbox"> Landing page loads < 3s</label>
              <label><input type="checkbox"> Dashboard loads < 3s</label>
              <label><input type="checkbox"> Preview updates < 100ms</label>
              <label><input type="checkbox"> Auto-save completes < 1s</label>
            </div>

            <div class="checklist">
              <h3>Browser Compatibility</h3>
              <label><input type="checkbox"> Chrome (latest)</label>
              <label><input type="checkbox"> Firefox (latest)</label>
              <label><input type="checkbox"> Safari (latest)</label>
              <label><input type="checkbox"> Edge (latest)</label>
              <label><input type="checkbox"> Mobile Safari (iOS 15+)</label>
              <label><input type="checkbox"> Chrome Mobile (Android)</label>
            </div>
          </section>

          <div class="info-box">
            <h3>Quick Test Script</h3>
            <pre><code># 1. Start server
npm run dev

# 2. Test auth flow
- Register new account
- Verify dashboard loads
- Logout
- Login again

# 3. Test builder
- Add all 12 blocks
- Edit each block
- Change colors
- Refresh page (verify restore)
- Save project
- Export ZIP

# 4. Test preview
- Verify all blocks render
- Check color customizations
- Verify responsive layout

# Pass ✓</code></pre>
          </div>

          <div class="cta-box">
            <h3>Found an Issue?</h3>
            <p>Report bugs or request features on GitHub.</p>
            <a href="https://github.com/jjephson/sitegenerator/issues" target="_blank" class="btn btn-primary">Open an Issue</a>
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
  title: 'Testing Guide - OnePage AI Builder',
  meta: [
    { name: 'description', content: 'Comprehensive testing guide for OnePage AI Builder. Test all features, blocks, accessibility, and performance.' }
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

.checklist {
  background-color: #f9fafb;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  margin-bottom: 1.5rem;
}

.checklist h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: #111827;
  font-size: 1.125rem;
}

.checklist label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0;
  cursor: pointer;
  transition: color 0.2s;
}

.checklist label:hover {
  color: #4338ca;
}

.checklist input[type="checkbox"] {
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
}

.info-box {
  background-color: #eff6ff;
  border-left: 4px solid #3b82f6;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin: 2rem 0;
}

.info-box h3 {
  margin-top: 0;
  font-size: 1.125rem;
  color: #1e40af;
}

pre {
  background-color: #1f2937;
  color: #f3f4f6;
  padding: 1.5rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin: 1rem 0;
  font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
}

code {
  font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
  font-size: 0.875rem;
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

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
          <h1>Privacy Policy</h1>
          
          <p><strong>Last Updated:</strong> January 2025</p>
          <p><strong>Effective Date:</strong> January 2025</p>

          <section>
            <h2>1. Introduction</h2>
            <p>OnePage AI Builder ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.</p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            
            <h3>2.1 Information You Provide</h3>
            <ul>
              <li><strong>Account Information:</strong> Email address, password (encrypted), name (optional)</li>
              <li><strong>Project Data:</strong> Website content, block configurations, color customizations</li>
              <li><strong>Payment Information:</strong> Processed by Stripe; we don't store card details</li>
              <li><strong>Communications:</strong> Support requests, feedback, inquiries</li>
            </ul>

            <h3>2.2 Automatically Collected Information</h3>
            <ul>
              <li><strong>Usage Data:</strong> Pages visited, features used, time spent</li>
              <li><strong>Device Information:</strong> Browser type, operating system, IP address</li>
              <li><strong>Cookies:</strong> Authentication tokens, preferences, analytics</li>
              <li><strong>localStorage:</strong> Auto-save backups, session data</li>
            </ul>

            <h3>2.3 Third-Party Information</h3>
            <ul>
              <li><strong>GitHub:</strong> Account info when you authorize GitHub deployment</li>
              <li><strong>Stripe:</strong> Payment verification for subscriptions</li>
              <li><strong>AI Service:</strong> Content generation requests (anonymized)</li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            
            <p>We use collected information to:</p>
            <ul>
              <li><strong>Provide Services:</strong> Enable website building, save projects, process payments</li>
              <li><strong>Improve Platform:</strong> Analyze usage patterns, fix bugs, develop features</li>
              <li><strong>Communication:</strong> Send updates, respond to support requests</li>
              <li><strong>Security:</strong> Protect against fraud, unauthorized access, abuse</li>
              <li><strong>Compliance:</strong> Meet legal obligations, enforce terms</li>
              <li><strong>Analytics:</strong> Understand how our service is used (anonymized)</li>
            </ul>
          </section>

          <section>
            <h2>4. Data Storage and Security</h2>
            
            <h3>4.1 Where We Store Data</h3>
            <ul>
              <li><strong>Supabase:</strong> User accounts, project data (PostgreSQL database)</li>
              <li><strong>Your Browser:</strong> localStorage for auto-save backups</li>
              <li><strong>Stripe:</strong> Payment and subscription data</li>
            </ul>

            <h3>4.2 Security Measures</h3>
            <ul>
              <li>Passwords encrypted with bcrypt</li>
              <li>HTTPS encryption for all data transmission</li>
              <li>Row-level security (RLS) in Supabase</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication</li>
            </ul>

            <h3>4.3 Data Retention</h3>
            <ul>
              <li><strong>Active Accounts:</strong> Data retained while account is active</li>
              <li><strong>Deleted Accounts:</strong> Data permanently deleted within 30 days</li>
              <li><strong>Backups:</strong> May persist in backups for up to 90 days</li>
              <li><strong>localStorage:</strong> Cleared after successful save or 24 hours</li>
            </ul>
          </section>

          <section>
            <h2>5. Data Sharing and Disclosure</h2>
            
            <p>We do not sell your personal data. We may share information with:</p>

            <h3>5.1 Service Providers</h3>
            <ul>
              <li><strong>Supabase:</strong> Database and authentication hosting</li>
              <li><strong>Stripe:</strong> Payment processing</li>
              <li><strong>AI Provider:</strong> Content generation (anonymized requests)</li>
              <li><strong>GitHub:</strong> When you use deployment features</li>
            </ul>

            <h3>5.2 Legal Requirements</h3>
            <p>We may disclose information if required to:</p>
            <ul>
              <li>Comply with legal obligations or court orders</li>
              <li>Protect our rights and property</li>
              <li>Prevent fraud or security threats</li>
              <li>Protect user safety</li>
            </ul>

            <h3>5.3 Business Transfers</h3>
            <p>If we merge, are acquired, or sell assets, user data may be transferred. We'll notify you of any such changes.</p>
          </section>

          <section>
            <h2>6. Your Rights and Choices</h2>
            
            <h3>6.1 Access and Control</h3>
            <ul>
              <li><strong>Access:</strong> View all your data in the dashboard</li>
              <li><strong>Correction:</strong> Update account information anytime</li>
              <li><strong>Export:</strong> Download your projects as ZIP files</li>
              <li><strong>Deletion:</strong> Delete projects or your entire account</li>
            </ul>

            <h3>6.2 Communication Preferences</h3>
            <ul>
              <li>Opt out of marketing emails (account emails still sent)</li>
              <li>Manage notification preferences in account settings</li>
            </ul>

            <h3>6.3 Cookie Controls</h3>
            <ul>
              <li>Required cookies: Essential for authentication and security</li>
              <li>Optional cookies: Can be controlled via browser settings</li>
              <li>localStorage: Can be cleared via browser settings</li>
            </ul>
          </section>

          <section>
            <h2>7. Cookies and Tracking</h2>
            
            <h3>7.1 Types of Cookies</h3>
            <ul>
              <li><strong>Essential:</strong> Authentication, security, session management</li>
              <li><strong>Functional:</strong> Remember preferences, auto-save data</li>
              <li><strong>Analytics:</strong> Understand how the platform is used</li>
            </ul>

            <h3>7.2 Third-Party Cookies</h3>
            <ul>
              <li><strong>Stripe:</strong> Payment processing</li>
              <li><strong>GitHub:</strong> OAuth authentication</li>
            </ul>

            <h3>7.3 localStorage</h3>
            <p>We use browser localStorage to:</p>
            <ul>
              <li>Auto-save your work every time you make changes</li>
              <li>Restore your work if you refresh the page</li>
              <li>Store session information for 24 hours</li>
              <li>Data is stored only on your device, not on our servers until you save</li>
            </ul>
          </section>

          <section>
            <h2>8. Children's Privacy</h2>
            <p>Our service is not intended for users under 13 years of age. We do not knowingly collect information from children under 13. If we learn we have collected such information, we will delete it immediately.</p>
          </section>

          <section>
            <h2>9. International Data Transfers</h2>
            <p>Your data may be stored and processed in any country where we or our service providers operate. By using our service, you consent to such transfers. We ensure appropriate safeguards are in place to protect your data.</p>
          </section>

          <section>
            <h2>10. Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. We will notify you of significant changes by:</p>
            <ul>
              <li>Posting the new policy on this page</li>
              <li>Updating the "Last Updated" date</li>
              <li>Sending an email for material changes (if you're subscribed)</li>
            </ul>
            <p>Continued use after changes constitutes acceptance of the new policy.</p>
          </section>

          <section>
            <h2>11. Data Protection Rights (GDPR)</h2>
            <p>If you are in the European Economic Area (EEA), you have the following rights:</p>
            <ul>
              <li><strong>Right to Access:</strong> Request a copy of your data</li>
              <li><strong>Right to Rectification:</strong> Correct inaccurate data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your data</li>
              <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
              <li><strong>Right to Data Portability:</strong> Receive your data in a usable format</li>
              <li><strong>Right to Object:</strong> Object to certain processing activities</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
            </ul>
            <p>To exercise these rights, contact us at privacy@onepageai.builder</p>
          </section>

          <section>
            <h2>12. California Privacy Rights (CCPA)</h2>
            <p>California residents have additional rights:</p>
            <ul>
              <li>Know what personal information is collected</li>
              <li>Know if personal information is sold or disclosed</li>
              <li>Opt-out of the sale of personal information (we don't sell data)</li>
              <li>Access personal information</li>
              <li>Request deletion of personal information</li>
              <li>Non-discrimination for exercising privacy rights</li>
            </ul>
          </section>

          <section>
            <h2>13. Contact Us</h2>
            <p>For questions about this privacy policy or our data practices:</p>
            <ul>
              <li><strong>Email:</strong> privacy@onepageai.builder</li>
              <li><strong>Support:</strong> <NuxtLink to="/contact">Contact Page</NuxtLink></li>
              <li><strong>GitHub:</strong> <a href="https://github.com/jjephson/sitegenerator" target="_blank" rel="noopener">Open an Issue</a></li>
            </ul>
          </section>

          <section>
            <h2>14. Your Consent</h2>
            <p>By using OnePage AI Builder, you consent to this privacy policy and our processing of your information as described herein.</p>
          </section>

          <div class="cta-box" style="background: #f3f4f6; color: #111827;">
            <h3 style="color: #111827;">Questions About Privacy?</h3>
            <p style="color: #4b5563;">We're here to help. Reach out anytime.</p>
            <NuxtLink to="/contact" class="btn" style="background: #4338ca; color: white;">Contact Us</NuxtLink>
          </div>
        </article>
      </div>
    </main>

    <footer class="doc-footer">
      <div class="container">
        <p>© 2025 OnePage AI Builder. All rights reserved.</p>
        <div class="footer-links">
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/terms">Terms</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Logo from '~/components/ui/Logo.vue'

useHead({
  title: 'Privacy Policy - OnePage AI Builder',
  meta: [
    { name: 'description', content: 'OnePage AI Builder Privacy Policy. Learn how we collect, use, and protect your data. GDPR and CCPA compliant.' }
  ]
})
</script>

<style scoped>
@import './docs-styles.css';
</style>


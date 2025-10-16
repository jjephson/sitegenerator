<template>
  <div class="doc-page">
    <AppHeader />

    <main class="doc-content">
      <div class="container">
        <article>
          <h1>Quick Start Guide</h1>
          
          <p class="lead">Get OnePage AI Builder running in 5 minutes! This guide covers local development setup.</p>

          <section>
            <h2>Prerequisites</h2>
            <ul>
              <li>Node.js 18+ installed</li>
              <li>npm or yarn package manager</li>
              <li>A Supabase account (free)</li>
              <li>A code editor (VS Code recommended)</li>
            </ul>
          </section>

          <section>
            <h2>Step 1: Install Dependencies (1 min)</h2>
            <pre><code>npm install</code></pre>
          </section>

          <section>
            <h2>Step 2: Set Up Environment Variables (2 min)</h2>
            <p>Create a `.env` file in the root directory with these variables:</p>
            
            <pre><code># Required for basic functionality
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-service-key
SUPABASE_ANON_KEY=your-anon-key

# Optional (use placeholders for development)
STRIPE_SECRET_KEY=
STRIPE_PUBLISHABLE_KEY=
AI_API_KEY=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=</code></pre>

            <div class="info-box">
              <h3>Don't have Supabase yet?</h3>
              <p>Get free credentials in 2 minutes:</p>
              <ol>
                <li>Go to <a href="https://supabase.com" target="_blank">supabase.com</a></li>
                <li>Click "Start your project"</li>
                <li>Create a new project</li>
                <li>Go to Settings → API to get your keys</li>
              </ol>
            </div>
          </section>

          <section>
            <h2>Step 3: Set Up Database (1 min)</h2>
            <p>In your Supabase project, go to SQL Editor and run this SQL:</p>
            
            <pre><code>-- Create projects table
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  data JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Users can only see their own projects
CREATE POLICY "Users can view own projects" 
  ON projects FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own projects" 
  ON projects FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own projects" 
  ON projects FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own projects" 
  ON projects FOR DELETE 
  USING (auth.uid() = user_id);</code></pre>
          </section>

          <section>
            <h2>Step 4: Run Development Server (< 1 min)</h2>
            <pre><code>npm run dev</code></pre>
            
            <p>Open <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> in your browser.</p>

            <div class="success-box">
              <h3>✓ You're all set!</h3>
              <p>The application should now be running. You can:</p>
              <ul>
                <li>Create an account at /login</li>
                <li>Access the builder at /dashboard</li>
                <li>View the landing page at /</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>Next Steps</h2>
            <div class="cards-grid">
              <div class="card">
                <h3>🎨 Build Your First Page</h3>
                <p>Log in and start dragging blocks onto the canvas. Customize colors, add content, and see your page come to life!</p>
                <NuxtLink to="/dashboard" class="btn btn-primary">Go to Dashboard</NuxtLink>
              </div>

              <div class="card">
                <h3>📚 Read Full Documentation</h3>
                <p>Learn about all 12 blocks, color customization, auto-save, AI generation, and more advanced features.</p>
                <NuxtLink to="/documentation" class="btn btn-outline">View Documentation</NuxtLink>
              </div>

              <div class="card">
                <h3>🧪 Testing Guide</h3>
                <p>Learn how to test the platform, verify all features work, and ensure accessibility compliance.</p>
                <NuxtLink to="/testing" class="btn btn-outline">Testing Guide</NuxtLink>
              </div>
            </div>
          </section>

          <section>
            <h2>Troubleshooting</h2>
            
            <div class="faq-item">
              <h3>Port 3000 already in use?</h3>
              <p>Change the port with: <code>PORT=3001 npm run dev</code></p>
            </div>

            <div class="faq-item">
              <h3>Database connection errors?</h3>
              <p>Double-check your Supabase URL and keys in `.env`. Make sure they're from the same project.</p>
            </div>

            <div class="faq-item">
              <h3>Module not found errors?</h3>
              <p>Delete `node_modules` and run <code>npm install</code> again.</p>
            </div>

            <div class="faq-item">
              <h3>Still having issues?</h3>
              <p><NuxtLink to="/contact">Contact us</NuxtLink> or <a href="https://github.com/jjephson/sitegenerator/issues" target="_blank">open an issue on GitHub</a>.</p>
            </div>
          </section>

          <section>
            <h2>Optional: Additional Services</h2>
            
            <h3>Stripe (for payments)</h3>
            <p>To enable the billing page:</p>
            <ol>
              <li>Create account at <a href="https://stripe.com" target="_blank">stripe.com</a></li>
              <li>Get API keys from Dashboard → Developers</li>
              <li>Add to `.env` file</li>
              <li>Configure webhook for subscription events</li>
            </ol>

            <h3>AI Content Generation</h3>
            <p>To enable AI features:</p>
            <ol>
              <li>Get API key from your AI provider</li>
              <li>Add `AI_API_KEY` to `.env`</li>
              <li>AI buttons will appear in edit modals</li>
            </ol>

            <h3>GitHub Deployment</h3>
            <p>To enable GitHub Pages deployment:</p>
            <ol>
              <li>Create GitHub OAuth App</li>
              <li>Add Client ID and Secret to `.env`</li>
              <li>Configure callback URL to your domain</li>
            </ol>
          </section>

          <div class="cta-box">
            <h3>Ready to Build?</h3>
            <p>You're all set up! Start creating beautiful, accessible websites now.</p>
            <NuxtLink to="/login" class="btn btn-primary">Start Building →</NuxtLink>
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
  title: 'Quick Start Guide - OnePage AI Builder',
  meta: [
    { name: 'description', content: 'Get OnePage AI Builder running in 5 minutes. Step-by-step setup guide for local development.' }
  ]
})
</script>

<style scoped>
@import './docs-styles.css';

.lead {
  font-size: 1.25rem;
  color: #4b5563;
  margin-bottom: 2rem;
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
  background-color: #f3f4f6;
  color: #111827;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
  font-size: 0.875rem;
}

pre code {
  background-color: transparent;
  color: #f3f4f6;
  padding: 0;
}

.info-box, .success-box {
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin: 1.5rem 0;
}

.info-box {
  background-color: #eff6ff;
  border-left: 4px solid #3b82f6;
}

.success-box {
  background-color: #f0fdf4;
  border-left: 4px solid #10b981;
}

.info-box h3, .success-box h3 {
  margin-top: 0;
  font-size: 1.125rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.card {
  background-color: #f9fafb;
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
}

.card h3 {
  margin-top: 0;
  font-size: 1.25rem;
}

.card p {
  margin-bottom: 1.5rem;
}

.faq-item {
  background-color: #f9fafb;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  border-left: 3px solid #4338ca;
}

.faq-item h3 {
  margin-top: 0;
  font-size: 1.125rem;
  color: #4338ca;
}

.faq-item p {
  margin-bottom: 0;
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


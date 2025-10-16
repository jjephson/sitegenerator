# OnePage AI Builder

A no-code builder that lets users design one-page Vue.js apps with drag-and-drop, AI-generated content, and export/deploy via GitHub Pages.

## Features

- 🎨 **Drag & Drop Builder**: Intuitive interface to build beautiful one-page websites
- 🤖 **AI Content Generation**: Powered by ai.yo.help API for intelligent content suggestions
- 📦 **Export to ZIP**: Download your project as a standalone website
- 🚀 **GitHub Pages Deploy**: One-click deployment to GitHub Pages
- 💾 **Project Management**: Save and load multiple projects
- 👁️ **Live Preview**: See your changes in real-time
- 🔐 **Authentication**: Secure user accounts with Supabase
- 💳 **Stripe Integration**: Subscription-based pricing plans
- ✨ **Pre-built Blocks**: Hero, Features, CTA, Pricing, Testimonials, Contact, Footer

## Tech Stack

- **Framework**: Nuxt 3
- **State Management**: Pinia
- **Authentication**: Supabase
- **Payments**: Stripe
- **AI**: ai.yo.help API
- **Deployment**: GitHub Pages API
- **Styling**: Plain CSS (no frameworks)

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Supabase Configuration
SUPABASE_URL=your_supabase_url_here
SUPABASE_KEY=your_supabase_service_key_here
SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# AI API Configuration (ai.yo.help)
AI_API_KEY=your_ai_api_key_here
AI_API_ENDPOINT=https://ai.yo.help/api/v1/generate

# GitHub OAuth Configuration
GITHUB_CLIENT_ID=your_github_oauth_client_id
GITHUB_CLIENT_SECRET=your_github_oauth_client_secret
```

### 3. Supabase Setup

Create the following table in your Supabase project:

```sql
-- Create projects table
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

-- Create policy for users to access their own projects
CREATE POLICY "Users can access their own projects" ON projects
  FOR ALL USING (auth.uid() = user_id);
```

### 4. Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Project Structure

```
├── app/
│   ├── assets/
│   │   └── css/
│   │       └── main.css          # Global styles
│   ├── components/
│   │   ├── blocks/               # Block components
│   │   └── ui/                   # UI components
│   │       ├── BlockRenderer.vue
│   │       └── EditModal.vue
│   ├── pages/
│   │   ├── index.vue             # Landing page
│   │   ├── login.vue             # Authentication
│   │   ├── dashboard.vue         # Main builder
│   │   └── billing.vue           # Subscription management
│   ├── store/
│   │   └── builder.js            # Pinia store for builder state
│   └── app.vue                   # Root component
├── composables/
│   └── useSupabase.js            # Supabase composable
├── middleware/
│   └── auth.js                   # Authentication middleware
├── server/
│   ├── api/
│   │   ├── ai.post.js            # AI generation endpoint
│   │   ├── export.post.js        # ZIP export endpoint
│   │   ├── github-deploy.post.js # GitHub deployment
│   │   ├── stripe-webhook.post.js# Stripe webhooks
│   │   └── create-checkout-session.post.js
│   └── middleware/
├── generator/
│   └── templates/                # Export templates
├── nuxt.config.ts                # Nuxt configuration
└── package.json
```

## Usage

### Building a Page

1. **Login/Register**: Create an account or sign in
2. **Add Blocks**: Drag blocks from the sidebar or click to add them to the canvas
3. **Edit Content**: Click the edit button on any block to customize its content
4. **Use AI**: Click the AI button (✨) next to text fields to generate content
5. **Preview**: See your changes in real-time in the preview pane
6. **Save**: Click "Save" to store your project in the cloud
7. **Export**: Download as ZIP or deploy to GitHub Pages

### Available Blocks

- **Hero**: Eye-catching header with title, subtitle, and CTA button
- **Features**: Grid layout to showcase product features
- **Call to Action**: Conversion-focused section
- **Pricing**: Pricing table with multiple plans
- **Testimonials**: Customer testimonials and reviews
- **Contact**: Contact form for user inquiries
- **Footer**: Page footer with links and copyright

## Deployment

### Option 1: Vercel

```bash
npm run build
```

Deploy the `.output` directory to Vercel.

### Option 2: Netlify

```bash
npm run build
```

Deploy the `.output` directory to Netlify.

### Option 3: Static Hosting

```bash
npm run generate
```

Deploy the `.output/public` directory to any static hosting service.

## Environment Setup

### Supabase
1. Create a project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key from Settings > API
3. Run the SQL commands from step 3 above

### Stripe
1. Create an account at [stripe.com](https://stripe.com)
2. Get your API keys from Developers > API keys
3. Set up a webhook endpoint pointing to `/api/stripe-webhook`

### AI API (ai.yo.help)
1. Sign up for an API key at ai.yo.help
2. Add it to your environment variables

### GitHub OAuth (Optional)
1. Create a GitHub OAuth app in your GitHub settings
2. Set the callback URL to your app's URL
3. Add the client ID and secret to environment variables

## Testing

See [TESTING.md](./TESTING.md) for testing instructions.

## Contributing

Contributions are welcome! Please read the contributing guidelines before submitting PRs.

## License

MIT License - see LICENSE file for details.

## Support

For support, email support@onepagebuilder.com or open an issue on GitHub.

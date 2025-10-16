# Quick Start Guide

Get up and running with OnePage AI Builder in 5 minutes!

## 1. Install Dependencies (1 min)

```bash
npm install
```

## 2. Set Up Environment Variables (2 min)

Create a `.env` file in the root directory:

```env
# Minimal setup for local development
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-service-key
SUPABASE_ANON_KEY=your-anon-key

# Optional: Leave blank for mock/placeholder responses
STRIPE_SECRET_KEY=
STRIPE_PUBLISHABLE_KEY=
AI_API_KEY=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

**Don't have Supabase yet?** Get free credentials in 2 minutes:
1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Create a new project
4. Go to Settings > API to get your keys

## 3. Set Up Database (1 min)

In your Supabase project, go to SQL Editor and run:

```sql
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  data JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can access their own projects" ON projects
  FOR ALL USING (auth.uid() = user_id);
```

## 4. Start Development Server (1 min)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser!

## What You Can Do Now

### Without Additional Setup:
- ✅ Create an account and log in
- ✅ Build pages with drag-and-drop
- ✅ Edit all block types
- ✅ Save and load projects
- ✅ Export to ZIP
- ✅ See live preview

### With Additional Setup:
- 🤖 **AI Content Generation**: Requires AI API key
- 💳 **Stripe Payments**: Requires Stripe keys
- 🚀 **GitHub Deploy**: Requires GitHub OAuth

## First Steps

1. **Create an Account**
   - Go to `/login`
   - Click "Need an account? Sign Up"
   - Enter email and password
   - Sign up!

2. **Build Your First Page**
   - You'll be redirected to the dashboard
   - Click on "Hero Section" in the sidebar
   - Click the edit button (✏️) to customize
   - Add more blocks!

3. **Preview Your Work**
   - Watch the right panel update in real-time
   - See exactly how your page will look

4. **Save Your Project**
   - Click the "💾 Save" button
   - Your project is stored in Supabase

5. **Export Your Page**
   - Click "📦 Export ZIP"
   - Extract the ZIP file
   - Run `npm install` then `npm run dev` in the extracted folder
   - Your standalone website is ready!

## Troubleshooting

### "Cannot connect to Supabase"
- Check your `SUPABASE_URL` and `SUPABASE_ANON_KEY`
- Make sure Supabase project is active
- Verify you ran the database setup SQL

### "Build errors" or "Module not found"
- Run `npm install` again
- Clear `.nuxt` folder: `rm -rf .nuxt`
- Restart dev server

### "Login not working"
- Check Supabase email settings
- Verify auth is enabled in Supabase
- Check browser console for errors

### "Preview not updating"
- Try refreshing the page
- Check browser console for errors
- Verify blocks are being added to store

## Next Steps

1. **Configure Stripe** (optional)
   - Get keys from [stripe.com](https://stripe.com)
   - Add to `.env`
   - Enable payment features

2. **Add AI Generation** (optional)
   - Get API key from ai.yo.help
   - Add `AI_API_KEY` to `.env`
   - Use ✨ AI buttons in edit modal

3. **Enable GitHub Deploy** (optional)
   - Create GitHub OAuth app
   - Add credentials to `.env`
   - Deploy with one click!

4. **Customize Styling**
   - Edit `app/assets/css/main.css`
   - Modify color variables
   - Add your branding

5. **Deploy to Production**
   - See [DEPLOYMENT.md](./DEPLOYMENT.md)
   - Deploy to Vercel, Netlify, or Railway
   - Set up environment variables

## Resources

- [Full Documentation](./README.md)
- [Deployment Guide](./DEPLOYMENT.md)
- [Testing Guide](./TESTING.md)
- [Nuxt 3 Docs](https://nuxt.com)
- [Supabase Docs](https://supabase.com/docs)

## Support

Need help?
- Check the [README](./README.md) for detailed instructions
- Review [TESTING.md](./TESTING.md) for common issues
- Open an issue on GitHub
- Join our Discord community

Happy building! 🚀


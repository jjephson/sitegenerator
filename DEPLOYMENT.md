# Deployment Guide

This guide covers deploying the OnePage AI Builder to various platforms.

## Prerequisites

- Node.js 20.19+ installed
- All environment variables configured
- Database tables created in Supabase
- Stripe webhook configured

## Environment Variables

Ensure all required environment variables are set in your hosting platform:

```env
SUPABASE_URL=
SUPABASE_KEY=
SUPABASE_ANON_KEY=
STRIPE_SECRET_KEY=
STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=
AI_API_KEY=
AI_API_ENDPOINT=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

## Deployment Options

### 1. Vercel (Recommended)

Vercel provides the best experience for Nuxt 3 applications.

#### Via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

#### Via Git Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure environment variables
6. Deploy!

**Build Settings:**
- Framework Preset: Nuxt.js
- Build Command: `npm run build`
- Output Directory: `.output`

### 2. Netlify

Netlify offers excellent static site hosting with serverless functions.

#### Via CLI

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=.output/public
```

#### Via Git Integration

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.output/public`
6. Add environment variables
7. Deploy!

### 3. DigitalOcean App Platform

```bash
# Build the application
npm run build
```

1. Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
2. Create a new app from GitHub
3. Configure:
   - Build Command: `npm run build`
   - Run Command: `node .output/server/index.mjs`
4. Add environment variables
5. Deploy!

### 4. Render

```bash
# Build
npm run build
```

1. Go to [render.com](https://render.com)
2. Create a new Web Service
3. Connect your GitHub repository
4. Configure:
   - Build Command: `npm run build`
   - Start Command: `node .output/server/index.mjs`
5. Add environment variables
6. Deploy!

### 5. Railway

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Deploy
railway up
```

Or use the web interface:
1. Go to [railway.app](https://railway.app)
2. New Project > Deploy from GitHub
3. Select your repository
4. Add environment variables
5. Deploy!

### 6. AWS (EC2 + PM2)

```bash
# On your server
git clone <your-repo>
cd onepage-ai-builder
npm install
npm run build

# Install PM2
npm install -g pm2

# Start with PM2
pm2 start .output/server/index.mjs --name onepage-builder

# Save PM2 configuration
pm2 save
pm2 startup
```

### 7. Docker

Create a `Dockerfile`:

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

ENV HOST=0.0.0.0
ENV PORT=3000

CMD ["node", ".output/server/index.mjs"]
```

Build and run:

```bash
# Build
docker build -t onepage-builder .

# Run
docker run -p 3000:3000 --env-file .env onepage-builder
```

## Post-Deployment Steps

### 1. Configure Stripe Webhook

After deployment, update your Stripe webhook URL:

1. Go to Stripe Dashboard > Developers > Webhooks
2. Add endpoint: `https://your-domain.com/api/stripe-webhook`
3. Select events to listen to:
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
4. Copy the webhook signing secret
5. Update `STRIPE_WEBHOOK_SECRET` in your environment

### 2. Update CORS Settings

If using a custom domain, update Supabase CORS settings:

1. Go to Supabase Dashboard > Settings > API
2. Add your domain to allowed origins

### 3. Configure GitHub OAuth (Optional)

1. Update GitHub OAuth app callback URL to your production domain
2. Update environment variables with production OAuth credentials

### 4. Test the Deployment

- [ ] User registration works
- [ ] User login works
- [ ] Projects can be created and saved
- [ ] AI generation works (if API key configured)
- [ ] Export to ZIP works
- [ ] GitHub deploy works (if OAuth configured)
- [ ] Stripe checkout works
- [ ] Webhook handling works

## Troubleshooting

### Build Fails

**Issue**: Build fails with module errors
**Solution**: Ensure all dependencies are installed and Node version is 20.19+

### Environment Variables Not Loading

**Issue**: App doesn't connect to Supabase/Stripe
**Solution**: Double-check all environment variables are set correctly in your hosting platform

### API Routes Return 404

**Issue**: Server API routes not working
**Solution**: Ensure your hosting platform supports server-side rendering and API routes

### Database Connection Fails

**Issue**: Cannot connect to Supabase
**Solution**: 
- Check Supabase URL and keys
- Verify firewall/network settings
- Check Supabase service status

### Stripe Webhook Not Working

**Issue**: Payments complete but database not updated
**Solution**:
- Verify webhook URL is correct
- Check webhook signing secret
- Review webhook logs in Stripe dashboard

## Performance Optimization

### 1. Enable Caching

Configure your hosting platform to cache static assets.

### 2. Use CDN

For static assets, consider using a CDN like Cloudflare.

### 3. Database Connection Pooling

For high-traffic applications, enable connection pooling in Supabase.

### 4. Monitor Performance

- Set up monitoring with services like Sentry or LogRocket
- Monitor API response times
- Track user engagement metrics

## Security Checklist

- [ ] All API keys are stored as environment variables (not in code)
- [ ] Supabase Row Level Security is enabled
- [ ] HTTPS is enabled on your domain
- [ ] Stripe webhook signature verification is enabled
- [ ] CORS is properly configured
- [ ] Rate limiting is configured (if applicable)

## Scaling

As your application grows:

1. **Database**: Upgrade Supabase plan for more connections
2. **Serverless Functions**: Most platforms auto-scale
3. **Caching**: Implement Redis for session storage
4. **CDN**: Use CDN for static assets and images
5. **Load Balancing**: Deploy to multiple regions

## Backup Strategy

1. **Database**: Supabase provides automatic backups
2. **User Data**: Implement regular exports
3. **Code**: Keep Git repository up to date
4. **Environment**: Document all environment variables

## Support

If you encounter issues during deployment:

1. Check the platform-specific documentation
2. Review application logs
3. Test locally with production environment variables
4. Contact platform support or open an issue on GitHub


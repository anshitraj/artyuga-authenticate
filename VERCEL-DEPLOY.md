# Deploying to Vercel

This guide will help you deploy the Artyuga Authenticate (Marketplace) app to Vercel.

## Prerequisites

- ✅ Code pushed to GitHub (already done!)
- A Vercel account (sign up at https://vercel.com if needed)

## Step-by-Step Deployment

### 1. Go to Vercel Dashboard

1. Visit [https://vercel.com](https://vercel.com)
2. Sign in or create an account
3. Click **"Add New..."** → **"Project"**

### 2. Import Your GitHub Repository

1. Click **"Import Git Repository"**
2. Find and select **`anshitraj/artyuga-authenticate`**
3. Click **"Import"**

### 3. Configure Project Settings

Vercel will auto-detect Next.js settings. Verify:

- **Framework Preset**: Next.js
- **Root Directory**: `./` (or leave default)
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

### 4. Deploy

1. Click **"Deploy"** button
2. Wait for the build to complete (usually 1-3 minutes)
3. Once deployed, you'll get a URL like: `https://artyuga-authenticate-xxx.vercel.app`

### 5. Custom Domain (Optional)

1. Go to **Settings** → **Domains**
2. Add your custom domain (e.g., `marketplace.artyuga.app`)
3. Follow DNS configuration instructions

## Post-Deployment

### Verify Deployment

1. Visit your deployment URL
2. Test the homepage (shops list)
3. Test shop pages
4. Test artwork detail pages
5. Test verification pages

## Environment Variables

This app doesn't require any environment variables. All data is mock data stored in the codebase.

## Troubleshooting

### Build Fails

- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version (should be 18+)

### Images Not Loading

- Check that remote image patterns in `next.config.js` are correct
- Verify image URLs are accessible

### Module Resolution Errors

- Clear `.next` cache (Vercel does this automatically)
- Check `next.config.js` is correct
- Verify `postcss.config.js` uses CommonJS syntax (not ES modules)

## Next Steps

After successful deployment:

1. ✅ Test the deployed app
2. ✅ Share the URL with your team
3. ✅ Set up custom domain (optional)
4. ✅ Configure automatic deployments (already enabled by default)

## Automatic Deployments

Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every push to other branches or pull requests

No manual deployment needed! 🎉

## Integration with Artyuga Verifier

This marketplace app can be integrated with the Artyuga Verifier app:
- Verification links from this app can point to the verifier app
- QR codes can link to verification pages on the verifier


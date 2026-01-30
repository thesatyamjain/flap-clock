# Deploying Flap Clock to Cloudflare Pages

This guide will walk you through deploying your Next.js Flap Clock app to Cloudflare Pages.

## Prerequisites

- GitHub account with your code pushed to a repository
- Cloudflare account (free tier works perfectly)
- Your project uses Next.js 15 with App Router ✅

## Method 1: Deploy via Cloudflare Dashboard (Recommended)

### Step 1: Push Your Code to GitHub

First, make sure your code is on GitHub:

```bash
cd "e:\Project Flap Clock\flap-clock"
git init
git add .
git commit -m "Initial commit: Flap Clock"
git branch -M main
git remote add origin git@github.com:thesatyamjain/flap-clock.git
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages**
3. Click **Create Application** → **Pages** → **Connect to Git**
4. Authorize Cloudflare to access your GitHub account
5. Select your repository: `thesatyamjain/flap-clock`

### Step 3: Configure Build Settings

Use these exact settings:

| Setting | Value |
|---------|-------|
| **Production branch** | `main` |
| **Framework preset** | `Next.js` |
| **Build command** | `npm run build` |
| **Build output directory** | `.next` |
| **Root directory** | `/` |
| **Node version** | `18` or higher |

### Step 4: Environment Variables (Optional)

No environment variables needed for this project! ✨

### Step 5: Deploy

1. Click **Save and Deploy**
2. Wait 2-3 minutes for the build to complete
3. Your site will be live at: `https://flap-clock.pages.dev`

### Step 6: Custom Domain (Optional)

1. In your Cloudflare Pages project, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain (e.g., `flapclock.com`)
4. Follow DNS configuration instructions

---

## Method 2: Deploy via Wrangler CLI

### Step 1: Install Wrangler

```bash
npm install -g wrangler
```

### Step 2: Login to Cloudflare

```bash
wrangler login
```

### Step 3: Deploy

```bash
cd "e:\Project Flap Clock\flap-clock"
npx wrangler pages deploy .next
```

---

## Troubleshooting

### Build Fails

**Issue**: Build fails with "Module not found"

**Solution**: Make sure all dependencies are in `package.json`:
```bash
npm install --save-exact
```

### Static Export Issues

**Issue**: Cloudflare Pages requires static export

**Solution**: This project uses Next.js App Router which is compatible with Cloudflare Pages using `@cloudflare/next-on-pages`. However, for this simple project, we can use static export.

Add to `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

Then rebuild:
```bash
npm run build
```

The output will be in the `out` directory. Update Cloudflare build settings:
- **Build output directory**: `out`

### Deployment URL

Your app will be available at:
- `https://flap-clock-xxx.pages.dev` (auto-generated)
- Or your custom domain

---

## Performance Optimizations for Cloudflare

### Enable Cache

Cloudflare automatically caches static assets. Your flap clock will load instantly worldwide! 🌍

### Minification

Cloudflare Pages automatically minifies:
- ✅ HTML
- ✅ CSS
- ✅ JavaScript

### HTTP/3 & Brotli

Automatically enabled for faster loading.

---

## Post-Deployment Checklist

- [ ] Test on mobile devices
- [ ] Verify all three modes work (Clock, Stopwatch, Timer)
- [ ] Test 12/24 hour toggle
- [ ] Check responsive design
- [ ] Verify date display
- [ ] Test stopwatch start/stop/reset
- [ ] Test timer presets and countdown
- [ ] Check localStorage persistence (12/24hr preference)

---

## Continuous Deployment

Once connected to GitHub, every push to `main` branch will automatically deploy! 🚀

```bash
git add .
git commit -m "Update: Added new feature"
git push origin main
```

Cloudflare will:
1. Detect the push
2. Build your project
3. Deploy automatically
4. Show deployment status in dashboard

---

## Cost

**FREE!** ✨

Cloudflare Pages free tier includes:
- Unlimited requests
- Unlimited bandwidth
- 500 builds per month
- Free SSL certificate
- Global CDN
- DDoS protection

---

## Next Steps

1. **Analytics**: Enable Cloudflare Web Analytics for visitor insights
2. **Performance**: Check Core Web Vitals in Cloudflare dashboard
3. **SEO**: Add meta tags in `app/layout.tsx` (already done! ✅)
4. **PWA**: Consider making it installable as a Progressive Web App

---

**Your Flap Clock will be live in minutes! 🎉**

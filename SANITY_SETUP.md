# Sanity CMS Setup Guide

This guide will help you set up Sanity CMS for your blog.

## Quick Start

### 1. Create a Sanity Project

You have two options:

**Option A: Using the Sanity CLI (Recommended)**
```bash
npx sanity init
```

Follow the prompts:
- Create new project or use existing? → Create new project
- Project name? → Good Robot Co. (or whatever you prefer)
- Dataset name? → production
- Output path? → Press Enter (files already exist, this is fine)

**Option B: Using the Sanity Dashboard**
1. Go to https://www.sanity.io/manage
2. Click "Create New Project"
3. Name it "Good Robot Co." (or whatever you prefer)
4. Create a dataset called "production"

### 2. Get Your Project Credentials

After creating your project, you'll need two values:

1. **Project ID**: Found in your Sanity dashboard or in the output from `npx sanity init`
2. **Dataset**: Usually "production"

### 3. Configure Environment Variables

Create a `.env.local` file in the root of your project:

```bash
cp .env.local.example .env.local
```

Then edit `.env.local` and add your credentials:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token-here
```

**Note:** You'll need the API token later for webhooks. For now, the first two variables are enough to get started.

### 4. Configure Sanity CORS

Your Next.js app needs permission to query Sanity's API:

1. Go to https://www.sanity.io/manage
2. Select your project
3. Go to Settings → API
4. Under "CORS Origins", click "Add CORS Origin"
5. Add these origins:
   - `http://localhost:3000` (for local development)
   - `https://goodrobotco.com` (for production)
   - `https://*.vercel.app` (for Vercel preview deployments)

### 5. Run Sanity Studio Locally

You can access Sanity Studio in two ways:

**Option A: Embedded Studio (in your Next.js app)**
```bash
npm run dev
```
Then visit: http://localhost:3000/studio

**Option B: Standalone Studio**
```bash
npx sanity dev
```
This will start the studio at http://localhost:3333

### 6. Create Your First Blog Post

1. Open Sanity Studio (using either method above)
2. Click "Blog Post" in the sidebar
3. Click "Create new document"
4. Fill in:
   - Title
   - Slug (auto-generated, but you can customize)
   - Excerpt (short preview)
   - Content (the main blog post body)
   - Featured Image (optional)
   - Author (defaults to "Ben Poon")
   - Published At (defaults to now)
   - SEO metadata (optional but recommended)
5. Click "Publish"

### 7. Test Locally

```bash
# Start the dev server
npm run dev

# Visit your blog
open http://localhost:3000/blog
```

You should see your blog post!

### 8. Test the Build

```bash
# Build the static site
npm run build

# This will:
# - Fetch all blog posts from Sanity
# - Generate static HTML for each post
# - Output to /out directory
```

---

## Production Deployment

### 1. Add Secrets to Vercel

Your Sanity credentials need to be added to Vercel:

1. Go to your Vercel project dashboard
2. Go to Settings → Environment Variables
3. Add these variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` → your project ID
   - `NEXT_PUBLIC_SANITY_DATASET` → production

**Note:** These same values should be added to GitHub Secrets for CI/CD:
1. Go to your GitHub repo → Settings → Secrets and variables → Actions
2. Add `SANITY_PROJECT_ID` (same value as NEXT_PUBLIC_SANITY_PROJECT_ID)
3. Add `SANITY_DATASET` as a variable (not a secret) set to "production"

### 2. Deploy to Vercel

```bash
git add .
git commit -m "Add Sanity CMS integration"
git push
```

Vercel will automatically deploy your site.

### 3. Set Up Automatic Rebuilds (Webhook)

When you publish a blog post in Sanity, you want your site to rebuild automatically.

**Step 1: Create a Deploy Hook in Vercel**
1. Go to your Vercel project → Settings → Git
2. Scroll to "Deploy Hooks"
3. Click "Create Hook"
4. Name: "Sanity Content Update"
5. Branch: main
6. Copy the webhook URL

**Step 2: Add Webhook to Sanity**
1. Go to https://www.sanity.io/manage
2. Select your project
3. Go to Settings → API → Webhooks
4. Click "Create webhook"
5. Fill in:
   - Name: "Vercel Deploy"
   - URL: [paste the webhook URL from Vercel]
   - Dataset: production
   - Trigger on: Create, Update, Delete
   - Filter: `_type == "blogPost"`
   - HTTP method: POST
6. Save

**Step 3: Test the Webhook**
1. Publish or update a blog post in Sanity
2. Check your Vercel dashboard - you should see a new deployment triggered
3. Wait 2-5 minutes for the rebuild
4. Visit your site - the new/updated post should appear!

---

## Testing

### Run All Tests

```bash
# Run smoke tests (requires dev server running)
npm run dev &
npm run test:smoke
npm run test:sanity

# Run build validation
npm run build
npm run test:build

# Or run everything at once
npm run test:all
```

### CI/CD

The GitHub Actions workflow (`.github/workflows/smoke-tests.yml`) will automatically:
1. Run smoke tests on every push/PR
2. Run Sanity integration tests
3. Validate the build output
4. Ensure all blog posts are generated correctly

---

## Troubleshooting

### "Missing NEXT_PUBLIC_SANITY_PROJECT_ID"

Make sure you:
1. Created a `.env.local` file (not `.env.local.example`)
2. Added your project ID to the file
3. Restarted the dev server after creating the file

### "CORS error" when querying Sanity

Make sure you added your domain to CORS origins in the Sanity dashboard (see step 4 above).

### Blog listing shows "No blog posts yet"

1. Check that you published (not just saved) your blog post in Sanity
2. Check the browser console for errors
3. Verify your environment variables are set correctly
4. Try restarting the dev server

### Build fails with Sanity errors

1. Make sure SANITY environment variables are set in Vercel
2. Check that your dataset name matches (usually "production")
3. Verify your project ID is correct

---

## Next Steps

### Add More Content Types (Later)

To add services, testimonials, or other content:
1. Create new schema files in `/sanity/schemaTypes/`
2. Add them to `/sanity/schemaTypes/index.ts`
3. Create corresponding pages in `/app/`
4. Update queries in `/lib/sanity.client.ts`

### Customize the Studio

Edit `/sanity/sanity.config.ts` to:
- Change the studio title
- Add custom plugins
- Customize the theme
- Add custom document actions

### Optimize Images

Images are already optimized through Sanity's CDN. The `urlFor()` helper in `/lib/sanity.image.ts` handles:
- Automatic format conversion (WebP/AVIF)
- Responsive sizing
- Lazy loading (via Next.js Image component)

---

## Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Next.js + Sanity Guide](https://www.sanity.io/guides/nextjs-app-router-live-preview)
- [Portable Text React](https://github.com/portabletext/react-portabletext)

---

## Cost

You're on the **free tier** which includes:
- 10,000 documents (plenty for a blog)
- 5GB asset storage
- 10GB CDN bandwidth/month
- Unlimited API requests (reads)

You'll likely stay on the free tier indefinitely for a business blog.

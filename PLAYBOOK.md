# Sanity CMS Integration Playbook
## Productized Service: Marketing Website + CMS

This playbook documents the complete process for delivering a marketing website with Sanity CMS to clients.

---

## Service Overview

**What clients get:**
- Custom Next.js marketing website (static, fast, secure)
- Sanity CMS for blog posts and content management
- Hosted studio at `https://[their-project].sanity.studio`
- Automatic deployments when they publish content
- Training and documentation

**Tech stack:**
- Next.js 14 (App Router, Static Export)
- Sanity CMS (hosted studio, free tier)
- Vercel (hosting, automatic deployments)
- No backend servers to maintain

---

## Phase 1: Discovery & Setup

### 1.1 Client Kickoff

**Questions to ask:**
- [ ] What content will they manage? (blog posts, services, testimonials, team members?)
- [ ] How often will they publish? (daily, weekly, monthly)
- [ ] Who will be editing content? (1 person, team of 3, multiple departments?)
- [ ] Do they have existing content to migrate?
- [ ] What's their technical comfort level? (impacts training needs)

**Deliverables:**
- Content type list (e.g., "blog posts, case studies, team bios")
- Site structure diagram
- Timeline and milestones

### 1.2 Project Setup

**Create project directory:**
```bash
# Clone your starter template
git clone [your-starter-repo] client-name
cd client-name

# Initialize new Git repo
rm -rf .git
git init
git add .
git commit -m "Initial commit from Good Robot Co. template"
```

**Create Sanity project:**
```bash
npx sanity init

# When prompted:
# - Create new project: Yes
# - Project name: [Client Name]
# - Dataset: production
# - Output path: [Press Enter, files already exist]
```

**Save credentials:**
```bash
# .env.local
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz
NEXT_PUBLIC_SANITY_DATASET=production

# Also save to password manager for client handoff
```

**Set up Git remote:**
```bash
# Create GitHub repo (private)
gh repo create good-robot-co/client-name --private

# Push
git remote add origin git@github.com:good-robot-co/client-name.git
git push -u origin main
```

---

## Phase 2: Development

### 2.1 Design Implementation

**Build static pages first (no CMS yet):**
- [ ] Homepage
- [ ] About page
- [ ] Services/Products page
- [ ] Contact page
- [ ] Blog listing page (static placeholder)

**Client checkpoint:**
- Share preview deployment
- Get design approval
- Confirm content structure

### 2.2 Sanity Schema Development

**For each content type, create schema file:**

Example: `/sanity/schemaTypes/blogPost.ts`

**Common content types:**
- `blogPost.ts` - Blog articles
- `service.ts` - Service offerings
- `testimonial.ts` - Customer testimonials
- `teamMember.ts` - Team bios
- `caseStudy.ts` - Project showcases

**Schema checklist for each type:**
- [ ] Title field (required)
- [ ] Slug field (auto-generated)
- [ ] Excerpt/summary (for listings)
- [ ] Main content (Portable Text)
- [ ] Featured image (with alt text)
- [ ] Published date
- [ ] SEO fields (meta description, OG image)
- [ ] Author field (if applicable)

**Update exports:**
```typescript
// sanity/schemaTypes/index.ts
import blogPost from './blogPost'
import service from './service'

export const schema = {
  types: [blogPost, service],
}
```

**Update studio structure:**
```typescript
// sanity/structure.ts
export const structure: StructureResolver = (S) =>
  S.list()
    .title('[Client Name]')
    .items([
      S.documentTypeListItem('blogPost').title('Blog Posts'),
      S.documentTypeListItem('service').title('Services'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['blogPost', 'service'].includes(item.getId()!),
      ),
    ])
```

**Test locally:**
```bash
# Terminal 1: Next.js dev server
npm run dev

# Terminal 2: Sanity Studio
npx sanity dev

# Visit http://localhost:3333
# Create test content in each content type
# Verify it appears on http://localhost:3000
```

### 2.3 Query Functions

**Create query functions in `/lib/sanity.client.ts`:**

```typescript
// Example: Get all services
export async function getAllServices() {
  return sanityClient.fetch(`
    *[_type == "service"] | order(order asc) {
      _id,
      title,
      "slug": slug.current,
      description,
      icon,
      featuredImage
    }
  `)
}
```

**Pattern for each content type:**
- `getAll[Type]()` - List all items
- `get[Type]BySlug(slug)` - Single item detail
- Add to TypeScript interfaces

### 2.4 Frontend Integration

**For each content type, create:**
1. **Listing page** - `/app/[type]/page.tsx`
   - Fetch all items
   - Display as cards/grid
   - Link to detail pages

2. **Detail page** - `/app/[type]/[slug]/page.tsx`
   - Fetch single item
   - Render with RichText component
   - Generate static params
   - Generate metadata for SEO

3. **Homepage integration** (if needed)
   - Fetch recent items
   - Display highlights/featured content

**Testing checklist:**
- [ ] All content types display correctly
- [ ] Images load from Sanity CDN
- [ ] Links work
- [ ] Responsive design
- [ ] SEO metadata populated
- [ ] Build succeeds: `npm run build`

---

## Phase 3: Deployment

### 3.1 Vercel Setup

**Create Vercel project:**
```bash
# Install Vercel CLI if needed
npm i -g vercel

# Link project
vercel link

# Add environment variables
vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID
vercel env add NEXT_PUBLIC_SANITY_DATASET
```

**Or via Vercel dashboard:**
1. Import GitHub repository
2. Framework: Next.js
3. Add environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`

**Deploy:**
```bash
git push origin main
# Vercel auto-deploys
```

**Verify deployment:**
- [ ] Site loads at production URL
- [ ] All pages accessible
- [ ] Images load
- [ ] No console errors

### 3.2 Sanity Studio Deployment

**Deploy hosted studio:**
```bash
npx sanity deploy
```

**When prompted:**
- Studio hostname: `[client-name]` (becomes client-name.sanity.studio)
- Confirm deployment

**Save studio URL:**
- Production: `https://[client-name].sanity.studio`
- Add to project documentation

**Configure CORS:**
1. Go to https://www.sanity.io/manage
2. Select project
3. Settings → API → CORS Origins
4. Add origins:
   - `http://localhost:3000` (for your development)
   - `https://[client-domain].com` (production)
   - `https://[vercel-preview].vercel.app` (preview deployments)
5. Allow credentials: Yes

### 3.3 Webhook Configuration

**Get Vercel deploy hook:**
1. Vercel dashboard → Settings → Git
2. Deploy Hooks → Create Hook
3. Name: "Sanity Content Update"
4. Branch: main
5. Copy webhook URL

**Add webhook to Sanity:**
1. Sanity dashboard → Project Settings → API → Webhooks
2. Create webhook:
   - Name: "Vercel Deploy"
   - URL: [Vercel deploy hook URL]
   - Dataset: production
   - Trigger on: Create, Update, Delete
   - Filter: `_type in ["blogPost", "service"]` (adjust for your content types)
   - HTTP method: POST
3. Save

**Test webhook:**
1. Edit content in Sanity Studio
2. Click "Publish"
3. Check Vercel dashboard for new deployment (should start within 30 seconds)
4. Wait 2-5 minutes for build
5. Verify content appears on live site

---

## Phase 4: Client Handoff

### 4.1 Create Client User Account

**Add client as admin:**
1. Sanity dashboard → Project → Team
2. Invite member:
   - Email: [client email]
   - Role: Administrator
3. They'll receive invitation email

**Set up their account:**
- Help them create password
- Enable 2FA if they're comfortable
- Test login at studio URL

### 4.2 Documentation

**Create client-specific documentation:**

Create `/CLIENT_GUIDE.md`:

```markdown
# Content Management Guide
## [Client Name] Website

## Accessing Your Studio

**Studio URL:** https://[client-name].sanity.studio

**Login:**
- Email: [their email]
- Password: [they set this]

Bookmark this URL - it's where you'll manage all your content.

## How to Add a Blog Post

1. Go to https://[client-name].sanity.studio
2. Click "Blog Posts" in the sidebar
3. Click "+ Create" button
4. Fill in:
   - **Title** - Your blog post headline
   - **Slug** - Auto-generated URL (you can customize)
   - **Excerpt** - 2-3 sentence preview (shows on blog listing)
   - **Featured Image** - Main image (click to upload)
   - **Content** - Your main article text
   - **Author** - Your name (pre-filled)
   - **Published Date** - When this goes live
   - **SEO** - Meta description for Google
5. Click "Publish" (not just Save)

**Important:** Content goes live 2-5 minutes after you publish (automatic rebuild).

## Common Tasks

### Edit an Existing Post
1. Click "Blog Posts"
2. Find your post in the list
3. Click to open
4. Make changes
5. Click "Publish"

### Delete a Post
1. Open the post
2. Click the "..." menu (top right)
3. Select "Delete"
4. Confirm

### Upload Images
- Click the image field
- Drag & drop or click to browse
- Always add "Alternative text" (helps with accessibility & SEO)

## Getting Help

**Questions?**
- Email: ben@goodrobotco.com
- Response time: Within 24 hours

**Emergency (site down)?**
- Text: [your phone]
```

**Record training video:**
- Screen recording: 5-10 minutes
- Walk through: login, create post, publish, verify live
- Upload to Loom/YouTube (unlisted)
- Add link to CLIENT_GUIDE.md

### 4.3 Training Session

**Schedule 30-minute video call:**

**Agenda:**
1. Tour of Sanity Studio (5 min)
2. Create test blog post together (10 min)
3. Edit and republish (5 min)
4. Q&A (10 min)

**Have them do it:**
- Don't just show them - have them screenshare and do it
- Common first-time issues: forgetting to publish, not waiting for build

**Success criteria:**
- [ ] They can log in
- [ ] They can create and publish content
- [ ] They understand the 2-5 minute delay
- [ ] They know how to contact you for help

### 4.4 Handoff Checklist

**Before closing project:**
- [ ] All content types working
- [ ] Webhook tested and confirmed
- [ ] Client trained and confident
- [ ] Documentation delivered
- [ ] Their admin account set up
- [ ] Final invoice sent
- [ ] GitHub repo transferred (or kept in your org with their access)
- [ ] Domain configured and DNS pointing correctly
- [ ] SSL certificate working

**Client receives:**
- [ ] Studio URL and login
- [ ] CLIENT_GUIDE.md
- [ ] Training video link
- [ ] Your contact info for support
- [ ] Vercel dashboard access (optional)

---

## Phase 5: Ongoing Maintenance

### 5.1 Monthly Retainer Services (Optional)

**What you offer:**
- [ ] Content migration (X posts/month)
- [ ] Schema updates (add new content types)
- [ ] Design tweaks
- [ ] Analytics review
- [ ] SEO optimization
- [ ] Priority support

**Pricing tiers:**
- Basic: $200/mo - Email support, minor updates
- Standard: $500/mo - + content migration, schema changes
- Premium: $1000/mo - + design updates, analytics

### 5.2 Common Client Requests

**"Can we add a new section to the homepage?"**
- Estimate: 2-4 hours
- Create new Sanity schema
- Add query function
- Update homepage component
- Test and deploy

**"Can we add a new content type (e.g., team members)?"**
- Estimate: 3-6 hours
- Create schema
- Create listing and detail pages
- Update queries
- Client training on new content type

**"The site is slow"**
- Check: Image sizes (are they optimized?)
- Check: Build time (Vercel dashboard)
- Check: Sanity queries (are they efficient?)

### 5.3 Emergency Procedures

**Site is down:**
1. Check Vercel status (status.vercel.com)
2. Check latest deployment in Vercel dashboard
3. Check build logs for errors
4. Rollback to previous deployment if needed

**Content not updating:**
1. Check webhook fired (Sanity dashboard → Webhooks → Recent Deliveries)
2. Check Vercel deployment triggered
3. Verify build completed successfully
4. Check CORS settings

**Can't log into studio:**
1. Verify studio URL is correct
2. Check Sanity status (status.sanity.io)
3. Reset password if needed
4. Check if account was removed from project

---

## Pricing Guide

### Initial Project Pricing

**Base website (no CMS):**
- 5-page marketing site
- Custom design
- Responsive
- Contact forms
- **Price: $3,000 - $5,000**

**+ Sanity CMS Integration:**
- Blog post management
- 1-2 additional content types
- Hosted studio setup
- Client training
- Documentation
- **Add: $1,500 - $2,500**

**Total package: $4,500 - $7,500**

### Add-on Services

**Additional content types:** $500 each
- Service listings
- Team member bios
- Case studies
- Testimonials
- Product catalog

**Content migration:** $50/post
- Import from WordPress, Medium, etc.
- Clean formatting
- Image optimization
- SEO metadata

**Advanced features:**
- Content scheduling: $1,000
- Multi-language support: $2,000
- Advanced permissions: $500
- Custom workflows: $1,000

### Monthly Retainers

**Maintenance only:** $200/mo
- Bug fixes
- Security updates
- Email support

**Maintenance + Growth:** $500/mo
- Everything in Maintenance
- 2 hours of updates/month
- Content migration (5 posts/month)
- Priority support

**Full Service:** $1,000/mo
- Everything in Growth
- 5 hours of updates/month
- Unlimited content migration
- Monthly analytics review
- SEO optimization

---

## Quality Checklist

### Pre-Launch

**Technical:**
- [ ] All pages load successfully
- [ ] Images optimized and loading
- [ ] Mobile responsive
- [ ] Forms work and send email
- [ ] 404 page styled
- [ ] Favicon and meta tags
- [ ] SSL certificate active
- [ ] Analytics installed

**Content:**
- [ ] All placeholder text replaced
- [ ] Real content in Sanity
- [ ] Images have alt text
- [ ] SEO metadata complete
- [ ] Contact info correct
- [ ] Links all work

**CMS:**
- [ ] All content types tested
- [ ] Webhook working
- [ ] Client can log in
- [ ] Studio is branded correctly
- [ ] CORS configured
- [ ] Preview URLs work

**Documentation:**
- [ ] CLIENT_GUIDE.md written
- [ ] Training video recorded
- [ ] Support contact clear
- [ ] Handoff checklist completed

### Post-Launch (1 week)

- [ ] Check analytics (is traffic flowing?)
- [ ] Check for errors (Vercel logs)
- [ ] Client check-in (any questions?)
- [ ] Content updates working?

---

## Templates & Resources

### File Structure

```
project/
├── app/
│   ├── blog/
│   │   ├── page.tsx          # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx      # Blog post detail
│   ├── services/
│   │   └── page.tsx          # Services listing
│   └── ...
├── components/
│   ├── RichText.tsx          # Portable Text renderer
│   ├── BlogCard.tsx          # Reusable blog card
│   └── ...
├── lib/
│   ├── sanity.client.ts      # All Sanity queries
│   └── sanity.image.ts       # Image URL helper
├── sanity/
│   ├── env.ts                # Environment config
│   ├── schemaTypes/
│   │   ├── blogPost.ts
│   │   ├── service.ts
│   │   └── index.ts
│   └── structure.ts          # Studio sidebar
├── sanity.config.ts          # Studio configuration
├── sanity.cli.ts             # CLI configuration
├── CLIENT_GUIDE.md           # Client documentation
└── PLAYBOOK.md               # This file
```

### Quick Commands

```bash
# Development
npm run dev                    # Start Next.js dev server (port 3000)
npx sanity dev                 # Start Studio dev server (port 3333)

# Testing
npm run build                  # Test static build
npm run test:all              # Run all tests

# Deployment
git push origin main          # Deploy site (auto via Vercel)
npx sanity deploy             # Deploy studio

# Studio management
npx sanity manage             # Open project dashboard
npx sanity dataset export     # Backup content
npx sanity dataset import     # Restore content
```

---

## Growth & Scaling

### Build Your Template

As you do more projects:
- [ ] Create starter template repo
- [ ] Include common schemas (blog, services, testimonials)
- [ ] Pre-built components library
- [ ] Standard design system
- [ ] Automated setup scripts

**Goal:** Reduce project time from 20 hours to 10 hours.

### Productize Further

**Packages:**
- Bronze: Website only ($3,000)
- Silver: Website + Blog CMS ($5,000)
- Gold: Website + Multi-type CMS ($7,500)
- Platinum: Everything + Design System ($10,000)

**Add-ons:**
- SEO optimization: $500
- Analytics setup: $300
- Email marketing integration: $500
- Social media automation: $750

### Referral System

- 10% commission for referrals
- Free month of maintenance for referring clients
- Case study testimonials = 20% discount on next retainer

---

## Notes & Lessons Learned

### What Works

- **Clear pricing upfront** - No surprises
- **Video training > written docs** - Clients prefer watching
- **Set expectations on deploy time** - "2-5 minutes is normal"
- **Test webhook before handoff** - Avoid day-1 support calls

### Common Mistakes

- **Forgetting CORS setup** - Site works, studio doesn't
- **Not testing mobile** - Always check responsive
- **Overly complex schemas** - Start simple, add later
- **No backup plan** - Always export content before major changes

### Time Savers

- **Reuse schemas** - Blog post schema is 90% the same
- **Component library** - Build once, reuse everywhere
- **Standard training video** - Record once, customize client names
- **Automated setup script** - Clone template, replace variables

---

## Support & Community

**Your Resources:**
- Template repo: [github.com/good-robot-co/cms-template]
- Internal wiki: [notion/playbooks]
- Client portal: [goodrobotco.com/portal]

**External Resources:**
- Sanity docs: https://www.sanity.io/docs
- Next.js docs: https://nextjs.org/docs
- Vercel docs: https://vercel.com/docs

---

## Revision History

- **v1.0** - 2026-01-11 - Initial playbook based on Good Robot Co. implementation

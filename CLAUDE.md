# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # Development server at localhost:3000
npm run build   # Production build (static export)
npm run lint    # ESLint
```

## Architecture

This is a static marketing site for Good Robot Co., a technology consulting business. Built with Next.js 14 App Router and Tailwind CSS, configured for static export (no server required).

**Pages** (`/app`):
- Homepage (`page.tsx`) - Hero, pain points, philosophy, services, CTA
- AI for Business guide (`ai-for-business/page.tsx`) - AI use cases and guidance
- Blog listing (`blog/page.tsx`)

**Shared Components** (`/components`):
- `Nav.tsx` - Client component with mobile menu, frosted glass effect, scroll-aware shadow
- `Footer.tsx` - Dark footer with contact info
- `CTA.tsx` - Reusable call-to-action with Calendly link
- `HeroSimple.tsx` - Clean hero for interior pages
- `constants.ts` - Base64 headshot image

**Design System** (`tailwind.config.ts`):
- Custom colors: cream, charcoal, coral, sage, mustard, lavender, sky
- Fonts: Fraunces (display/headings) + DM Sans (body)
- Custom float animations

## Git Workflow

- Never rebase commits that have been pushed to remote — only rebase local, unpushed commits
- When reconciling divergent branches, prefer rebase for unpushed local work, merge otherwise

## Key Details

- Static export: `next.config.js` sets `output: 'export'`
- No backend/API routes - all content is in page files
- Contact: ben@goodrobotco.com
- Deploys to Vercel

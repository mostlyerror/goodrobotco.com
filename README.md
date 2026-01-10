# Good Robot Co.

Technology consulting website built with Next.js 14 and Tailwind CSS.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Testing

This project includes smoke tests to verify critical pages are accessible.

**Run smoke tests locally:**
```bash
npm run test:smoke
```

**Important:** The dev server must be running (`npm run dev`) before running smoke tests.

**Adding new pages:** When you add a new `page.tsx` to `/app`, remember to add the route to `tests/config.js` to include it in smoke tests.

## Deploy to Vercel

1. Push this repo to GitHub
2. Import to Vercel at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js and deploys

## Project Structure

```
/app
  layout.tsx        # Shared Nav + Footer
  page.tsx          # Homepage
  /ai-for-business
    page.tsx        # AI guide page
  /blog
    page.tsx        # Blog listing
/components
  Nav.tsx           # Navigation with frosted glass effect
  Footer.tsx        # Site footer
  CTA.tsx           # Reusable call-to-action section
  HeroSimple.tsx    # Clean hero for interior pages
  constants.ts      # Shared constants (headshot image)
```

## Customization

- Colors defined in `tailwind.config.ts`
- Fonts: Fraunces (display) + DM Sans (body)
- Update Calendly link in CTA component
- Update email in Footer and CTA components

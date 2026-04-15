# Vercel Deploy Guide

The landing page is a Vite React app located at:

```txt
landing/landing-app
```

## Recommended Vercel Setup

Import the GitHub repository into Vercel and configure:

- **Framework Preset:** Vite
- **Root Directory:** `landing/landing-app`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install` or `npm ci`

## Environment Variables

The app can capture leads through Supabase.

Required for Supabase mode:

```txt
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

Optional fallback:

```txt
VITE_CONTACT_EMAIL=
```

If Supabase is not configured and `VITE_CONTACT_EMAIL` is present, the form opens a prefilled email instead.

## Supabase Table

Migration:

```txt
landing/landing-app/supabase/migrations/20260415041553_create_contact_submissions.sql
```

Table:

```txt
contact_submissions
```

Public inserts are enabled through RLS. Public reads are not enabled.

## Local Commands

```bash
cd landing/landing-app
npm install
npm run dev
npm run build
npm run lint
npm run typecheck
```

## Deployment Principle

The landing is the door. The sample artifact is the proof. The paid pilot is the validation.


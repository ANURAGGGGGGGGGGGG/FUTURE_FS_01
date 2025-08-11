# Anurag Mahanta — Portfolio (Next.js)

A modern, responsive personal portfolio built with Next.js (App Router) and Tailwind CSS. It showcases sections like Hero, About, Skills, Projects, and a Contact form that emails submissions via Nodemailer.

## Features
- Next.js App Router with React
- Tailwind CSS styling (dark mode supported)
- Projects grid with local images from /public
- Contact form powered by Nodemailer (Gmail App Password)

## Tech Stack
- Next.js
- React
- Tailwind CSS
- Nodemailer (server-side email)

## Getting Started
1. Install dependencies:
```bash
npm install
```
2. Create an .env file in the project root:
```env
EMAIL_USER=your@gmail.com
EMAIL_PASS=your-16-char-google-app-password
```
- EMAIL_PASS must be a Gmail App Password (no spaces). In Google Account > Security > 2‑Step Verification > App Passwords, generate one for “Mail”.
3. Run the dev server:
```bash
npm run dev
```
Open http://localhost:3000

## Build & Run in Production
```bash
npm run build
npm start
```

## Environment Variables (required)
- EMAIL_USER: Gmail address used to send/receive contact emails
- EMAIL_PASS: 16‑character Gmail App Password (no spaces)

For deployment (Vercel/Netlify/Render/etc.), set the same variables in the platform dashboard and redeploy.

## Relevant Files
- API Route: app/api/contact/route.js (handles POST and sends mail)
- Contact Form: app/components/Contact.js (submits to /api/contact)
- Projects: app/components/Projects.js (cards + image paths)
- Global Layout/CSS: app/layout.js, app/globals.css
- Public assets: /public (project thumbnails, profile, etc.)

Tip: When adding project images, place them in /public and reference by exact filename in Projects.js. Avoid spaces in filenames, or update the path accordingly.

## Troubleshooting
- Form shows an error: ensure EMAIL_USER/EMAIL_PASS are set correctly and server restarted after editing .env.
- Email sent but UI shows error: check the browser console and network tab; the API must return 200 and JSON.
- Gmail blocked sign-in: make sure you’re using a Gmail App Password and 2‑Step Verification is enabled.

## Scripts
- dev: next dev
- build: next build
- start: next start
- lint: next lint

> Note: .env files are ignored by git. Never commit secrets.

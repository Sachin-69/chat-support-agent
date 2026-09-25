# Sachin Hebbar — Portfolio

Modern, Gen-Z style portfolio built with **Next.js 14 + Tailwind CSS + Framer Motion**, ready to deploy on **Vercel**.

## Edit your content

Everything lives in one file:

```
lib/data.js
```

Update your name, tagline, projects, publications, certifications, skills, and
contact info there. Search for `TODO:` to find the spots that still need your
real values:

- `profile.email` — your real email
- `profile.linkedin` — your real LinkedIn URL
- **Wallets E-Commerce** project — description, stack, repo, live link
- **Inventory Management** project — description, stack, repo, live link
- **Runiverse** — add repo / demo-video link if you have one
- Publication `link` — add the IEEE Xplore / DOI URL if available

### Add a resume download
Drop `resume.pdf` into the `public/` folder. The `resumeUrl` in `lib/data.js`
already points to `/resume.pdf`.

### Add mobile-app demos later
Each project supports a `live` link — put a Loom/YouTube demo or an APK/store
link there and a "Live" button appears automatically.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

**Option A — Dashboard (easiest)**
1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new and import that repo.
3. Framework preset auto-detects **Next.js**. Click **Deploy**.

**Option B — CLI**
```bash
npm i -g vercel
vercel        # preview
vercel --prod # production
```

No environment variables required.

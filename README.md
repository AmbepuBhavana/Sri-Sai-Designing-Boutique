# Sri Sai Designing Boutique

Premium lead-generation website (React + TypeScript + Tailwind). No ecommerce, no payments.

## Run

```bash
npm install
npm run dev
```

Optional enquiry API:

```bash
npm run server
```

Open http://localhost:5173

## Deploy to Vercel

The project includes `vercel.json` for direct loading of the `/privacy` and `/terms` routes.
Set `VITE_SITE_URL` to the production URL when configuring Vercel. The enquiry form uses WhatsApp
as its production fallback unless `VITE_API_URL` points to a separately deployed API.

## Replace media

Drop originals into `public/assets/`:

- `hero/storefront.jpg`
- `about/artisan.jpg`
- `gallery/*.jpg`
- `logo` — replace `src/assets/logo.svg` and `public/favicon.svg`

## Environment

Copy `.env.example` to `.env` when you have a live domain and API URL.

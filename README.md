# Nexus Co Ltd — Virtual Data Room

A secure, blue-and-white Virtual Data Room (VDR) for startup fundraising, built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 — you'll be redirected to `/login`.

**Demo credentials** (defined in `lib/config.ts`):
- Username: `investor`
- Password: `nexus2026`

Change these (and move them to environment variables / a real auth provider) before deploying.

## Project structure

- `lib/config.ts` — company name + demo credentials + auth cookie name
- `lib/data.ts` — the 6 data-room categories and their Google Drive embed links
- `middleware.ts` — protects everything under `/dashboard` by checking the `vdr_auth` cookie
- `app/actions/auth.ts` — server actions for login/logout, sets/clears the cookie
- `app/login/page.tsx` — login screen
- `app/dashboard/layout.tsx` — header + sidebar shell, applies document-protection rules
- `app/dashboard/page.tsx` — the `00_Data_Room_Index` roadmap of all categories/files
- `app/dashboard/[folderId]/[itemId]/page.tsx` — loads a single document into the viewer
- `components/DocViewer.tsx` — full-height responsive iframe for Google Drive `/preview` links

## Adding documents

Each item in `lib/data.ts` needs a Google Drive **preview** URL, e.g.:

```
https://drive.google.com/file/d/<FILE_ID>/preview
```

Two items (`01_Financial_Model` and `01_Analytics_Report`) are left with an empty `url` — paste the embed link for your Excel files there. Until you do, the viewer shows a "no document linked" placeholder instead of an empty iframe.

> Note: the Drive files must be shared as "Anyone with the link can view" or they won't render inside the iframe for your investors.

## Security notes

This app uses a single shared password behind an `httpOnly` cookie, plus a right-click/text-selection deterrent in the dashboard. That's enough to keep casual visitors out, but it is **not** enterprise DRM — a technical user can still open dev tools, view the Drive file directly, or download it if Drive permissions allow. For real fundraising due diligence at scale, consider a dedicated VDR provider (DocSend, Datasite, etc.) or adding per-investor accounts, watermarking, and download-blocking at the Drive/Workspace level.

# Launch night

The starter for Session 1 of the guest lecture **CI/CD in the age of AI agents** (AAU CPH, October 2026).

A one-page ticket shop. No tests, no workflows, nothing to set up: just a site you can put live.

## Session 1: launch it with continuous delivery (15 min)

Goal: a push to `main` puts the site live.

1. Click **Use this template** > **Create a new repository**. Make it public, under your own account.
2. Go to [vercel.com](https://vercel.com), sign up with GitHub (Hobby is free) and **Add New > Project**. Import your
   new repository and click **Deploy**. No settings to change.
3. Open your repository on GitHub and press `.` to open the editor in your browser. In `src/content.ts`, put your own
   name and event. Commit to `main`.
4. Watch Vercel build and deploy it. Open the URL. That's continuous delivery.

No Node on your laptop? Everything above works in the browser. Want to work locally:

```sh
npm install
npm run dev
```

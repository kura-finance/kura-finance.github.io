# 08 — Environment & Secrets

> **CONFIDENTIAL — Kura Finance LLC Data Room**

## Config surface (this repository)

| Variable | Required | Default | Purpose |
|----------|----------|---------|---------|
| `NUXT_PUBLIC_SITE_URL` | No | `https://kura-finance.com` | Canonical URLs, sitemap, Open Graph |

See `.env.example`. Copy to `.env` for local overrides. **Never commit** `.env*`.

## What is intentionally absent

| Secret class | Where it lives instead |
|--------------|------------------------|
| Stripe secret / webhook | backendserver |
| Privy app secret | WebClients / backend |
| Plaid / Bridge / Dinari API keys | backendserver |
| Cloudflare API token | CI / CF dashboard (ops) |
| Deploy credentials | GitHub Actions secrets / CF Git integration |

## Hardcoded public constants (not secrets)

Defined in `src/utils/site.ts` and related utils:

| Constant | Value / role |
|----------|----------------|
| `WEB_APP_URL` | `https://app.kura-finance.com` |
| `APP_STORE.ios` / `.android` | Store listing URLs |

## Hygiene checklist

1. No production tokens in git history for this repo’s active branch  
2. CSP `connect-src` limited to self + Cloudflare Insights domains  
3. Rotate CF deploy tokens out-of-band if compromised

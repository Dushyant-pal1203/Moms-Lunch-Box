# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### Taste of Mom's Hand (`artifacts/taste-of-mom`)
- **Type**: react-vite (frontend-only, no backend required)
- **Preview Path**: `/`
- **Theme**: Warm cream, forest green (#2d5a3d), gold (#c49a1a)
- **Fonts**: Playfair Display (serif headings), Lato (body)
- **Purpose**: Home-made lunch ordering website, WhatsApp-based orders to +91 93100 04022
- **Pages**:
  - `/` — Landing page with hero, features, menu preview, testimonials, CTA
  - `/menu` — Full menu with 12 items across 4 categories (Thali, Rice, Roti, Special), filterable by category
- **Key features**:
  - Every "Order" button opens WhatsApp with a pre-filled message including the item name and price
  - Logo image from `attached_assets/Home_Made_Lunch_1776665384234.png` (copied to `public/logo.png`)
  - Weekly subscription option (5 days, ₹350)
  - Sample menu items created by agent (user to update prices/descriptions as needed)

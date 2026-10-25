# Studio Omni

> _“We shape the invisible. Through rigorous, design-first systems.”_

Studio Omni is a premium, editorially driven multidisciplinary creative studio connecting Identity Systems, Digital Experiences, and Editorial & Campaigns. Built with an architectural, tactile, and restrained design system on modern React, TypeScript, Three.js, GSAP, and Express.

---

## 1. Brand System & Creative Principles

Studio Omni’s visual identity is defined by oversized condensed grotesk typography, expressive editorial serif statements, constructivist geometric artwork, generous negative space, and an unbleached paper-like substrate.

### Primary Brand Palette

- **Archive Paper (`#F1EDE3`)**: Main page substrate, editorial surfaces, negative space.
- **Graphite Ink (`#242522`)**: Structural contrast, typography, geometric artwork, navigation.
- **Oxide Vermilion (`#B6503B`)**: Selective emphasis, active indicators, interactive states.

_Strict Creative Constraints: No gradients, no glassmorphism, no generic pill buttons, and no arbitrary accent colors._

### Typographic Hierarchy

- **Display**: Condensed Grotesk (`Antonio`, fallback `Impact`, `Arial Narrow`) for commanding uppercase headlines.
- **Editorial**: High-contrast Serif (`Newsreader`, fallback `Georgia`) for expressive italic statements.
- **Reading & Utility**: Architectural Sans (`Plus Jakarta Sans`, fallback system sans) for interface controls, metadata, and long-form body copy.
- **System Monospace**: Technical Grotesk (`JetBrains Mono`, fallback `Consolas`, `Monaco`) for system coordinates, article metadata, and code structures.

---

## 2. Monorepo Architecture

The project is structured as an npm workspaces monorepo:

```text
studio-omni/
├── apps/
│   ├── web/                     # React 19 + TypeScript + Vite frontend
│   │   ├── public/              # Static assets, favicon.svg
│   │   ├── src/
│   │   │   ├── app/             # App shell, Router (code-split), Providers
│   │   │   ├── pages/           # Route views: Home, Work, About, Services, Journal, Contact, NotFound
│   │   │   ├── components/      # UI primitives, Layout (Header, Footer, Nav), Feedback, Contact, Journal
│   │   │   ├── animations/      # GSAP motion conventions and ScrollTrigger configuration
│   │   │   ├── hooks/           # useReducedMotion and responsive state hooks
│   │   │   ├── lib/             # Route constants, API client
│   │   │   ├── content/         # Typed content models: projects, articles, services, principles, process
│   │   │   ├── styles/          # Tokens, reset, typography, layout, motion
│   │   │   └── three/           # Three.js / React Three Fiber signature hero scene & SVG fallback
│   │   └── vite.config.ts       # Optimized Vite build with manual chunking & Vitest setup
│   │
│   └── api/                     # Node.js + Express + TypeScript backend
│       ├── src/
│       │   ├── app.ts           # Express application setup, security & middleware
│       │   ├── server.ts        # Server entry with graceful shutdown handling
│       │   ├── config/          # Zod-validated environment & CORS configuration
│       │   ├── routes/          # Central API router (/api/health, /api/contact)
│       │   ├── controllers/     # Request handlers & error formatters
│       │   ├── services/        # Business logic, email provider adapters (Mock, Resend)
│       │   └── middleware/      # Rate limiter, 404 & Centralized error handler
│       └── tsconfig.json
│
├── packages/
│   └── shared/                  # Shared TypeScript contract library
│       ├── src/
│       │   ├── schemas/         # Shared Zod validation schemas (ContactPayloadSchema)
│       │   └── types/           # Shared TypeScript interfaces & types
│       └── tsconfig.build.json
│
├── tests/
│   └── e2e/                     # Playwright browser end-to-end test suite
├── .env.example                 # Validated environment configuration template
├── eslint.config.js             # Modern ESLint flat configuration
├── prettier.config.js           # Consistent formatting rules
└── package.json                 # Monorepo workspace orchestration
```

---

## 3. Implemented Routes & Systems

| Route            | View                | Description                                                                                                                                                    |
| :--------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`              | `HomePage`          | Signature Three.js constructivist scene, selected portfolio previews, studio philosophy, capabilities, scroll-linked process progression, and journal preview. |
| `/work`          | `WorkPage`          | Complete portfolio index with dynamic discipline filtering (`Identity Systems`, `Digital Experiences`, `Editorial & Campaigns`).                               |
| `/work/:slug`    | `WorkDetailPage`    | In-depth editorial case study with architectural challenges, strategy, system specifications, gallery plates, and related works.                               |
| `/about`         | `AboutPage`         | Studio ethos, working methodology, point-of-view thesis, and foundational principles.                                                                          |
| `/services`      | `ServicesPage`      | Comprehensive discipline catalog, tripartite intersection architecture, four-stage engagement framework, and accessible FAQ disclosures.                       |
| `/journal`       | `JournalPage`       | Critical discourse publication index, topic spectrum filter, featured essay composition, and article archive.                                                  |
| `/journal/:slug` | `JournalDetailPage` | Typed article block renderer (headings, prose, blockquotes, figures, lists, callouts) with strict draft protection.                                            |
| `/contact`       | `ContactPage`       | Inquiry submission form with client & server Zod validation, sliding-window rate limiting, honeypot anti-spam, and studio protocol guide.                      |
| `*`              | `NotFoundPage`      | Architectural 404 recovery screen with navigation routes.                                                                                                      |

---

## 4. Security & Abuse Protections

- **Server-Side Zod Validation**: Authoritative input normalization on `POST /api/contact` guarding field lengths, format, and supported disciplines.
- **Rate Limiting**: Sliding window limiter (5 submissions per 15 minutes per IP) returning HTTP 429 with `Retry-After`.
- **Honeypot Trap**: Invisible field that silently neutralizes automated bots without alerting attackers.
- **Request Size Quota**: 64kb payload cap on incoming JSON bodies.
- **Safe Output Sanitization**: HTML escaping of user inputs prior to email dispatch.
- **Reply-To Integrity**: Strictly utilizes the validated visitor email address as `replyTo`.
- **Information Leak Prevention**: No database connection strings, API keys, or stack traces exposed to client responses.

---

## 5. Prerequisites & Local Setup

- **Node.js**: `v20.0.0+`
- **npm**: `v10.0.0+`

### Installation

```bash
# 1. Clone repository and install dependencies
npm install

# 2. Configure environment
cp .env.example .env
```

### Running Locally

```bash
# Concurrently launch web frontend (5173) and Express API (4000)
npm run dev

# Or launch independently:
npm run dev:web   # Vite dev server on http://localhost:5173
npm run dev:api   # Express API server on http://localhost:4000
```

---

## 6. Email Delivery Configuration

In development and automated testing, the backend defaults to `EMAIL_PROVIDER=mock`, simulating delivery and recording payloads in memory without requiring external credentials.

To enable live email delivery via Resend in production:

```bash
EMAIL_PROVIDER=resend
RESEND_API_KEY=re_your_actual_api_key
STUDIO_EMAIL_RECIPIENT=inquiries@yourdomain.com
EMAIL_SENDER=Studio Omni <inquiries@yourdomain.com>
```

---

## 7. Verification & Production Build

```bash
# Run unit & integration test suites (Vitest across all workspaces)
npm run test

# Run browser end-to-end tests (Playwright)
npm run test:e2e

# Run TypeScript typecheck across all workspaces
npm run typecheck

# Run ESLint across monorepo
npm run lint

# Check Prettier formatting
npm run format

# Compile production bundles
npm run build
```

---

## 8. Performance & Accessibility Architecture

- **Route-level Code Splitting**: All pages are dynamically imported via `React.lazy()` with an architectural `PageLoadingFallback`. Initial JS chunk is reduced to ~15 kB.
- **Manual Vendor Chunking**: Three.js (`vendor-three`), GSAP (`vendor-gsap`), and React core (`vendor-react`) are isolated into dedicated cacheable bundles.
- **Three.js Viewport Optimization**: Canvas frameloop switches to `never` via `IntersectionObserver` when scrolled out of view, minimizing GPU utilization.
- **Fallback Compatibility**: Gracefully renders high-fidelity SVG constructivist artwork when WebGL is unavailable or when reduced motion is preferred.
- **Accessibility Standards**: Aligned with WCAG 2.2 AA (visible focus outlines, skip-to-content links, ARIA tablists, screen-reader alert banners, and semantic landmark tags).

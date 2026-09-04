# Forklift Company Website Template

A responsive industrial equipment company website built with Nuxt, Vue, TypeScript, and Tailwind CSS.

The project uses the fictional **Northline Equipment Co.** brand and demonstrates a complete marketing website for an equipment company offering sales, rentals, service, and parts.

## Highlights

- Fully responsive layouts across mobile, tablet, desktop, and large displays
- Four complete visual themes using a shared semantic design system
- Equipment catalog and category presentation
- Rental and service request interfaces
- Dedicated parts, service, and company pages
- Reusable navigation, cards, forms, headers, and footers
- Playwright-based screenshot testing across routes, themes, and viewport sizes
- GitHub Actions artifact-based production deployment

## Themes

The website includes four switchable themes:

- Dark Blue
- Dark Yellow
- Mixed Yellow
- Coastal Light

Themes are implemented through semantic CSS variables so components remain independent of individual color palettes.

## Pages

- Home
- Equipment
- Rentals
- Service
- Parts
- About

## Tech Stack

- Nuxt 4
- Vue 3
- TypeScript
- Tailwind CSS 4
- Playwright
- pnpm
- GitHub Actions

## Local Development

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

The application will normally be available at:

```text
http://localhost:3000
```

## Production Build

Build the application:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## Visual Testing

Playwright is used to capture the website across multiple routes, themes, and viewport sizes for responsive and visual review.

The screenshot test suite is located at:

```text
tests/playwright/screenshots.spec.ts
```

Run it with:

```bash
pnpm exec playwright test tests/playwright/screenshots.spec.ts
```

Generated screenshots and Playwright output are intentionally excluded from source control.

## Deployment

Production builds are created by GitHub Actions rather than directly on the application server.

The deployment workflow:

1. Installs dependencies with pnpm
2. Builds the Nuxt application
3. Packages the generated `.output` directory
4. Uploads the release artifact over SSH
5. Extracts it into a versioned release directory
6. Updates the active release symlink
7. Restarts the Nuxt systemd service
8. Performs an HTTP health check

This keeps deployments reproducible while avoiding application builds directly on the production server.

## Purpose

This repository is a portfolio and demonstration project focused on traditional business website development, responsive design, reusable theming, browser automation, and production-oriented deployment practices.

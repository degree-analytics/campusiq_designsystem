# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CampusIQ is a React component library with 50+ UI components built on Radix UI primitives, Tailwind CSS v4, and Class Variance Authority (CVA). It includes a comprehensive Storybook documentation site with AI-powered story generation via Story UI.

## Essential Commands

```bash
# Development
pnpm install          # Install dependencies
pnpm dev              # Start Vite dev server
pnpm storybook        # Start Storybook on port 6006

# Build
pnpm build            # Build production bundle
pnpm build-storybook  # Build static Storybook

# Quality
pnpm lint             # Run ESLint

# Story UI (AI story generation)
pnpm story-ui                # Start Story UI MCP server on port 4004
pnpm storybook-with-ui       # Run both Storybook and Story UI concurrently
```

## Architecture

### Component Structure

Components live in `src/components/` with co-located stories:
- `src/components/ui/` - Primitive UI components (shadcn/ui style)
- `src/components/{component-name}/` - Complex components with their `.stories.tsx`

Each component follows the CVA pattern for variants:
```tsx
const buttonVariants = cva("base-classes", {
  variants: {
    variant: { default: "...", destructive: "..." },
    size: { default: "...", sm: "...", lg: "..." }
  },
  defaultVariants: { variant: "default", size: "default" }
})
```

### Styling System

**Tailwind CSS v4** with `@theme inline` in `src/index.css`:
- CSS custom properties define the color system (not JS config)
- `@custom-variant dark (&:is(.dark *))` enables dark mode
- Import path alias: `@/` maps to `src/`

**Semantic Color Tokens:**
- `--primary`: #5e4890 (CampusIQ purple)
- `--destructive`, `--success`, `--warning`, `--informational` with `-weak` variants for backgrounds

### Utility Function

`src/lib/utils.ts` exports `cn()` - combines `clsx` and `tailwind-merge` for conditional class merging.

### Storybook Configuration

- `.storybook/main.ts` - Story paths, addons, Vite/Tailwind integration
- `.storybook/preview.tsx` - Global CSS import, theme decorator with toolbar toggle
- Dark mode: Uses `globalTypes.theme` toolbar control, applies `.dark` class to body

### Packaged Component Library

`packages/ui/` contains a distributable build of all components:
```bash
cd packages/ui
npm run build           # Build with tsup (ESM + CJS)
npm run version:patch   # Bump version
npm pack                # Create .tgz for distribution
```

Consumers import: `import { Button } from '@campusiq/ui'` and `@import '@campusiq/ui/styles.css'`

## Deployment (Railway)

The project deploys Storybook in **live mode** with Story UI for AI-powered story generation:

- `Dockerfile` - Node 20, installs pnpm, runs `start-live.sh`
- `railway.json` - Uses Dockerfile builder, healthcheck on `/story-ui/providers`
- `start-live.sh` - Runs Storybook dev server (port 6006) + Story UI MCP server (Railway PORT)

Story UI proxies Storybook through its MCP server, enabling the AI panel in production.

## Story UI Integration

Story UI adds an AI panel to Storybook for generating component stories:
- Panel lives in `src/stories/StoryUI/` (must be committed, not gitignored)
- Generated stories go to `src/stories/generated/`
- Mappings stored in `src/stories/.story-mappings.json`

To update Story UI panel files: `npx story-ui update`

## Key Dependencies

- **Radix UI** - Accessible primitives (@radix-ui/react-*)
- **CVA** - Variant management (class-variance-authority)
- **Vaul** - Drawer component
- **cmdk** - Command palette
- **Embla Carousel** - Carousel with autoplay
- **react-day-picker** - Calendar/date picker
- **react-hook-form + Zod** - Form validation
- **Recharts** - Charts

## Figma Alignment

Components match the CampusIQ Figma design file (FileKey: `D0uIkeRBoEsW9VCZyJMp4B`). Color tokens and spacing are sourced from Figma variables.

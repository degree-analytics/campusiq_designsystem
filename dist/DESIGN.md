# CampusIQ Design System

This file defines the CampusIQ visual identity for AI-generated digital tools. When building any HTML interface, dashboard, tracker, or report, follow these rules and use `~/.claude/campusiq-ui.css` for component styles.

## How to Use

1. Link the CSS file in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="campusiq-ui.css">
   ```
   Claude: copy `~/.claude/campusiq-ui.css` into the project directory and link it.

2. Use `.ciq-` prefixed classes for all components (cards, buttons, tables, badges, etc.)
3. Use `var(--ciq-*)` tokens for any custom styling that goes beyond the provided classes
4. Never hardcode hex color values — always reference tokens

## Colors

CampusIQ uses purple as its primary brand color and teal as its accent.

**Primary purple** — `var(--ciq-primary)` (#4D339A). Use for primary buttons, active states, headers, and links. Hover state: `var(--ciq-primary-hover)`. Active/pressed: `var(--ciq-primary-active)`. Subtle background tint: `var(--ciq-primary-subtle)`. Muted/disabled: `var(--ciq-primary-muted)`. White text on primary: `var(--ciq-primary-foreground)`.

**Status colors** — each has a base color, a foreground (text on the color), and a weak variant (light background tint):
- **Destructive** `var(--ciq-destructive)` (#D4421E) — errors, destructive actions, high severity. Burnt orange, not red.
- **Success** `var(--ciq-success)` (#008579) — completed states, favorable changes, low severity. Teal.
- **Warning** `var(--ciq-warning)` (#D48C08) — caution states, medium severity. Marigold.
- **Informational** `var(--ciq-informational)` (#0369A1) — info notices, neutral highlights. Blue.

Each status color has a `-weak` variant for container backgrounds (e.g., `var(--ciq-destructive-weak)` for an error banner background).

**Surface colors:**
- `var(--ciq-background)` (#ffffff) — page background
- `var(--ciq-foreground)` (#27272a) — primary text
- `var(--ciq-card)` / `var(--ciq-card-foreground)` — card surfaces
- `var(--ciq-muted)` / `var(--ciq-muted-foreground)` — secondary text, borders
- `var(--ciq-border)` (#e4e4e7) — borders and dividers
- `var(--ciq-ring)` (#8259BF) — focus rings

## Typography

**Onest** — display font. Use for all headings (h1–h4), button labels, tab labels, badge text, and any UI element that needs weight or emphasis. Weights: 400–800.

**Inter** — body font. Use for paragraph text, table cells, input values, captions, and labels. Weights: 300–700.

Load via the CSS file's built-in Google Fonts import. Fallback: `system-ui, sans-serif`.

Type scale (defined in campusiq-ui.css):
- `.ciq-h1` — 28px/1.2 Onest 700, letter-spacing -0.02em
- `.ciq-h2` — 22px/1.25 Onest 700, letter-spacing -0.01em
- `.ciq-h3` — 18px/1.3 Onest 600
- `.ciq-h4` — 15px/1.35 Onest 600
- `.ciq-body` — 14px/1.5 Inter 400
- `.ciq-caption` — 12px/1.4 Inter 400, muted foreground
- `.ciq-label` — 12px/1 Onest 600, uppercase, letter-spacing 0.04em

## Layout & Spacing

- Page max-width: 1400px, centered with `margin: 0 auto`
- Page padding: 24px horizontal on mobile, 40px on desktop
- Card grid: `auto-fill, minmax(360px, 1fr)` with 20px gap
- Section spacing: 36px between major sections
- Component internal padding: 16–20px

Use `.ciq-page` for the page wrapper, `.ciq-header` for the branded purple gradient header, `.ciq-container` for the max-width content area.

## Components

The CSS file provides classes for these component categories. Use the `.ciq-` prefixed classes — do not invent your own styling for these patterns.

**Page Layout** — `.ciq-page`, `.ciq-header`, `.ciq-container`. Every tool starts with this shell.

**Cards** — `.ciq-card`, `.ciq-card-header`, `.ciq-card-body`, `.ciq-card-footer`. Use for individual items in a collection (schools, users, tickets). Grid them with `.ciq-card-grid`.

**Badges & Status** — `.ciq-badge`, with variants `.ciq-badge-success`, `.ciq-badge-destructive`, `.ciq-badge-warning`, `.ciq-badge-informational`, `.ciq-badge-outline`. Use for stage indicators, categories, severity levels.

**Data Tables** — `.ciq-table`, `.ciq-th`, `.ciq-td`, `.ciq-tr`. Use for structured row data. Add `.ciq-tr-hover` for interactive rows.

**Form Controls** — `.ciq-input`, `.ciq-select`, `.ciq-checkbox`. Buttons: `.ciq-btn-primary`, `.ciq-btn-secondary`, `.ciq-btn-ghost`. Search: `.ciq-input` with search icon.

**Typography** — `.ciq-h1` through `.ciq-h4`, `.ciq-body`, `.ciq-caption`, `.ciq-label`, `.ciq-truncate`.

Categories not yet in the CSS file (coming in Phase 2–3): Filters & Tabs, Progress & Steppers, Stat Cards, Alerts, Navigation, Modals, Data Visualization. For these, use the tokens above and your best judgment — but prefer simplicity.

## Data Visualization

CampusIQ has five dataviz palette types. Use the right one for the data shape:

**Categorical** (`--ciq-chart-1` through `--ciq-chart-5`) — for comparing different categories. Use in bar charts, pie charts, and legends. Always apply colors in order (chart-1 first, chart-2 second, etc.) for consistency across tools.

**Sequential** (`--ciq-seq-zero` through `--ciq-seq-8`) — for showing intensity or magnitude. Lighter = less, darker = more. Nine stops of purple. Use for heatmaps, density maps, and graduated indicators.

**Diverging** (`--ciq-util-1` through `--ciq-util-7`) — for showing above/below a midpoint. Teal = under, gray = neutral, purple = over. Use for utilization, deviation from target, and comparison to baseline.

**Severity** (`--ciq-severity-high`, `--ciq-severity-medium`, `--ciq-severity-low` with `-bg` and `-fg` variants) — for risk levels and alert states. Maps to destructive/warning/success.

**Change indicators** (`--ciq-change-favorable`, `--ciq-change-unfavorable`) — for trend arrows and delta displays.

When using a JavaScript charting library (Chart.js, Recharts, etc.), pass these token values as the color configuration. For CSS-only visualizations (progress bars, severity badges), use the `.ciq-bar`, `.ciq-legend`, and `.ciq-severity-badge` classes.

## Do's and Don'ts

**DO:**
- Link campusiq-ui.css in the HTML `<head>` before any custom styles
- Use `.ciq-` component classes for all standard UI patterns
- Reference `var(--ciq-*)` tokens for any custom styling
- Use Onest for headlines and UI labels, Inter for body text
- Apply chart colors in order (chart-1, chart-2, chart-3...) for series consistency
- Use the weak variant of status colors for container backgrounds

**DON'T:**
- Hardcode hex color values — always use tokens
- Use red (#ff0000 or similar) for non-error states — CampusIQ destructive is burnt orange
- Mix font families beyond Onest + Inter
- Invent new color values outside the token system
- Override `.ciq-` component classes with inline styles unless absolutely necessary
- Use `!important` on token overrides

## Supported Outputs

**HTML tools** — full support. Use campusiq-ui.css for component classes and tokens. This is the primary use case.

**React applications** — use the `campusiq_designsystem` npm package directly. Do NOT use campusiq-ui.css in React apps.

**All other formats** (PDF, email, mobile, Figma, etc.) — use the color values and font names from this guide for brand consistency. Component patterns (cards, badges, buttons) are not available as pre-built styles for these formats. Do not invent component styles — ask the user what visual treatment they want.

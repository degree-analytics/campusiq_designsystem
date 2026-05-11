# Data Visualization Color System Integration

Integrate the CampusIQ data visualization color guide into the design system. Adds dataviz-specific tokens (severity, sequential, diverging, categorical, change indicators) and unifies existing status/chart tokens with the new palette. Includes dark mode for all tokens and Figma variable updates.

## Decisions

- Severity tokens unify with existing status tokens (destructive/warning/success shift to severity hex values)
- Informational aligns to cat-1 (#0369A1)
- Categorical palette replaces existing chart-* token values
- Severity fills and categorical colors stay the same in dark mode (sufficient contrast on dark backgrounds)
- Sequential dark mode: full remap with inverted lightness (option B — moderate brightness)
- Diverging dark mode: full remap, midpoint #52525B
- Severity badge bg/text gets dark mode variants
- Approach A: all-at-once token update in a single PR

## Existing Token Updates — Light Mode

### Status Colors (unified with severity)

| Token | Old Value | New Value |
|---|---|---|
| `--destructive` | #be123c | #D4421E |
| `--destructive-foreground` | #fef2f2 | #ffffff |
| `--destructive-weak` | #fff1f2 | #FDEAE4 |
| `--warning` | #d97706 | #D48C08 |
| `--warning-weak` | #fffbeb | #FEF3D6 |
| `--success` | #047857 | #009689 |
| `--success-foreground` | #ffffff | #ffffff |
| `--success-weak` | #ecfdf5 | #E0F5F3 |
| `--informational` | #0284c7 | #0369A1 |
| `--informational-weak` | #f0f9ff | #EFF6FF |

### Chart Colors (replaced by categorical)

| Token | Old Value (OKLCH) | New Value (hex) |
|---|---|---|
| `--chart-1` | oklch(0.646 0.222 41.116) | #0369A1 |
| `--chart-2` | oklch(0.6 0.118 184.704) | #D4421E |
| `--chart-3` | oklch(0.398 0.07 227.392) | #009689 |
| `--chart-4` | oklch(0.828 0.189 84.429) | #D48C08 |
| `--chart-5` | oklch(0.769 0.188 70.08) | #6B52B5 |

## Existing Token Updates — Dark Mode

### Status Colors

| Token | Old Value | New Value |
|---|---|---|
| `--destructive` | #f43f5e | #D4421E |
| `--destructive-foreground` | #fef2f2 | #ffffff |
| `--destructive-weak` | #4c0519 | #431407 |
| `--warning` | #fbbf24 | #D48C08 |
| `--warning-foreground` | #451a03 | #ffffff |
| `--warning-weak` | #451a03 | #422006 |
| `--success` | #34d399 | #009689 |
| `--success-foreground` | #022c22 | #ffffff |
| `--success-weak` | #022c22 | #042F2E |
| `--informational` | #38bdf8 | #0369A1 |
| `--informational-foreground` | #0c4a6e | #ffffff |
| `--informational-weak` | #0c4a6e | #0C2D48 |

### Chart Colors (same as light — sufficient contrast on dark backgrounds)

| Token | New Value |
|---|---|
| `--chart-1` | #0369A1 |
| `--chart-2` | #D4421E |
| `--chart-3` | #009689 |
| `--chart-4` | #D48C08 |
| `--chart-5` | #6B52B5 |

## New Dataviz Tokens — Light Mode

### Severity (alias status tokens)

```css
--severity-high: var(--destructive);
--severity-high-bg: var(--destructive-weak);
--severity-high-fg: #ffffff;
--severity-medium: var(--warning);
--severity-medium-bg: var(--warning-weak);
--severity-medium-text: #946200;
--severity-medium-fg: #ffffff;
--severity-low: var(--success);
--severity-low-bg: var(--success-weak);
--severity-low-fg: #ffffff;
```

### Sequential (purple, 9 stops)

```css
--seq-zero: #F3F0F9;
--seq-1: #E4DBEF;
--seq-2: #C4ADE0;
--seq-3: #A896D6;
--seq-4: #8259BF;
--seq-5: #6B52B5;
--seq-6: #4D339A;
--seq-7: #3E2980;
--seq-8: #2A1B5C;
```

### Diverging (teal↔purple, 7 stops)

```css
--util-1: #009689;   /* severely underused */
--util-2: #4DB8B0;   /* underused */
--util-3: #99D6D2;   /* slightly under */
--util-4: #D9D9D9;   /* healthy midpoint */
--util-5: #A896D6;   /* slightly over */
--util-6: #4D339A;   /* overused */
--util-7: #2A1B5C;   /* severely overused */
```

### Change Indicators (aliases)

```css
--change-favorable: var(--success);
--change-unfavorable: var(--destructive);
```

### Accent

```css
--accent-data: var(--primary);
```

## New Dataviz Tokens — Dark Mode

### Severity

Since severity tokens alias status tokens, most dark values resolve automatically:
- `--severity-high: var(--destructive)` → #D4421E (from dark --destructive)
- `--severity-high-bg: var(--destructive-weak)` → #431407 (from dark --destructive-weak)
- `--severity-medium-bg: var(--warning-weak)` → #422006 (from dark --warning-weak)
- `--severity-low-bg: var(--success-weak)` → #042F2E (from dark --success-weak)

Only one explicit dark override needed:

```css
--severity-medium-text: #FBBF24;
```

Light mode uses #946200 (dark text on pale bg). Dark mode needs #FBBF24 (bright text on deep bg). This token doesn't alias any status token.

### Sequential (full remap — option B)

```css
--seq-zero: #2A1B5C;
--seq-1: #3E2980;
--seq-2: #4D339A;
--seq-3: #6B52B5;
--seq-4: #8259BF;
--seq-5: #A896D6;
--seq-6: #B9A3E0;
--seq-7: #C4ADE0;
--seq-8: #DDD3EE;
```

### Diverging (full remap — midpoint #52525B)

```css
--util-1: #2DD4BF;   /* severely underused — bright teal */
--util-2: #14B8A6;   /* underused */
--util-3: #0D7C73;   /* slightly under */
--util-4: #52525B;   /* healthy midpoint */
--util-5: #6B52B5;   /* slightly over */
--util-6: #A896D6;   /* overused */
--util-7: #C4ADE0;   /* severely overused */
```

### Change + Accent

Follow their aliased tokens automatically:
- `--change-favorable: var(--success)` → #009689 in both modes
- `--change-unfavorable: var(--destructive)` → #D4421E in both modes
- `--accent-data: var(--primary)` → #4D339A (light), #A683D0 (dark) — follows existing primary dark mode treatment

## Tailwind @theme inline Mappings

Add to the `@theme inline` block so new tokens are usable as Tailwind utility classes:

```css
/* Severity */
--color-severity-high: var(--severity-high);
--color-severity-high-bg: var(--severity-high-bg);
--color-severity-high-fg: var(--severity-high-fg);
--color-severity-medium: var(--severity-medium);
--color-severity-medium-bg: var(--severity-medium-bg);
--color-severity-medium-text: var(--severity-medium-text);
--color-severity-medium-fg: var(--severity-medium-fg);
--color-severity-low: var(--severity-low);
--color-severity-low-bg: var(--severity-low-bg);
--color-severity-low-fg: var(--severity-low-fg);

/* Sequential */
--color-seq-zero: var(--seq-zero);
--color-seq-1: var(--seq-1);
--color-seq-2: var(--seq-2);
--color-seq-3: var(--seq-3);
--color-seq-4: var(--seq-4);
--color-seq-5: var(--seq-5);
--color-seq-6: var(--seq-6);
--color-seq-7: var(--seq-7);
--color-seq-8: var(--seq-8);

/* Diverging */
--color-util-1: var(--util-1);
--color-util-2: var(--util-2);
--color-util-3: var(--util-3);
--color-util-4: var(--util-4);
--color-util-5: var(--util-5);
--color-util-6: var(--util-6);
--color-util-7: var(--util-7);

/* Change + Accent */
--color-change-favorable: var(--change-favorable);
--color-change-unfavorable: var(--change-unfavorable);
--color-accent-data: var(--accent-data);
```

## Figma Variable Updates

Target file: `D0uIkeRBoEsW9VCZyJMp4B`

### Update Existing Variables

Update these existing color variables to their new hex values (both light and dark modes):

- destructive → #D4421E (light), #D4421E (dark)
- destructive-weak → #FDEAE4 (light), #431407 (dark)
- warning → #D48C08 (light), #D48C08 (dark)
- warning-weak → #FEF3D6 (light), #422006 (dark)
- success → #009689 (light), #009689 (dark)
- success-weak → #E0F5F3 (light), #042F2E (dark)
- informational → #0369A1 (light), #0369A1 (dark)
- informational-weak → #EFF6FF (light), #0C2D48 (dark)
- chart-1 through chart-5 → new categorical hex values (same light/dark)

### Create New Variable Collections

**Severity** collection with Light/Dark modes:
- severity-high, severity-high-bg, severity-high-fg
- severity-medium, severity-medium-bg, severity-medium-text, severity-medium-fg
- severity-low, severity-low-bg, severity-low-fg

**Sequential** collection with Light/Dark modes:
- seq-zero through seq-8 (9 variables, each with light and dark values)

**Diverging** collection with Light/Dark modes:
- util-1 through util-7 (7 variables, each with light and dark values)

**Change + Accent** collection with Light/Dark modes:
- change-favorable, change-unfavorable, accent-data

## Files Changed

1. `src/index.css` — all token definitions in `:root` (light) and `.dark` blocks, plus `@theme inline` mappings
2. `packages/ui/src/styles.css` — mirror of the same tokens for the distributable package
3. Figma file `D0uIkeRBoEsW9VCZyJMp4B` — variable updates and new collections

No component files change. All components reference CSS custom properties.

## Rules (from the dataviz guide, preserved in implementation)

1. Dark purple always means "full/busy" — sequential high end and diverging overused end.
2. Marigold (#D48C08) at 2.7:1 passes for chart fills and badge fills with icon + text. For text on white, use #946200 on #FEF3D6.
3. Purple sequential for "how much." Teal↔purple diverging for "too low or too high."
4. Context disambiguates shared colors — badge with icon = severity, chart with legend = categorical.
5. Never rely on color alone — always pair with text labels, icons, or value labels.
6. Diverging midpoint recedes but stays visible on both light (#D9D9D9) and dark (#52525B) backgrounds.
7. Single-metric bars use accent-data (#4D339A). Categorical palette is for multi-series within a single chart.
8. Change arrows share severity values: favorable = success, unfavorable = destructive. Color carries judgment, arrow carries direction.
9. Validate with Chrome DevTools vision deficiency emulation (deuteranopia first).

## Verification

- Storybook visual regression: run `pnpm storybook` and review all components using destructive, warning, success, informational, and chart colors
- Dark mode toggle in Storybook toolbar to verify both modes
- Build `packages/ui` and verify exported styles include all new tokens
- Chrome DevTools → Rendering → Emulate vision deficiencies for colorblind validation

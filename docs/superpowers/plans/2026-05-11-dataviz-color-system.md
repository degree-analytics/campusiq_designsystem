# Data Visualization Color System Integration — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate the CampusIQ dataviz color guide into the design system — update existing status/chart tokens, add new dataviz tokens (severity, sequential, diverging, change, accent), wire Tailwind mappings, and update Figma variables.

**Architecture:** All changes flow through CSS custom properties in two files (`src/index.css` and `packages/ui/src/styles.css`). New dataviz tokens are added to `:root` and `.dark` blocks. Tailwind utility classes are enabled via `--color-*` mappings in the `@theme inline` block. Figma variables are updated via figma-console MCP.

**Tech Stack:** CSS custom properties, Tailwind CSS v4 (`@theme inline`), Figma variables (figma-console MCP)

**Spec:** `docs/superpowers/specs/2026-05-11-dataviz-color-system-design.md`

---

### Task 1: Update existing status token values in src/index.css (light mode)

**Files:**
- Modify: `src/index.css:113-131` (`:root` block — destructive, success, informational, warning)

- [ ] **Step 1: Update destructive tokens**

In `src/index.css`, replace the destructive block inside `:root`:

```css
/* Destructive - Burnt orange (unified with severity-high) */
--destructive: #D4421E;
--destructive-foreground: #ffffff;
--destructive-weak: #FDEAE4;
```

- [ ] **Step 2: Update success tokens**

Replace the success block inside `:root`:

```css
/* Success - Teal (unified with severity-low) */
--success: #008579;
--success-foreground: #ffffff;
--success-weak: #E0F5F3;
```

- [ ] **Step 3: Update informational tokens**

Replace the informational block inside `:root`:

```css
/* Informational - Blue (unified with cat-1) */
--informational: #0369A1;
--informational-foreground: #ffffff;
--informational-weak: #EFF6FF;
```

- [ ] **Step 4: Update warning tokens**

Replace the warning block inside `:root`:

```css
/* Warning - Marigold (unified with severity-medium) */
--warning: #D48C08;
--warning-foreground: #ffffff;
--warning-weak: #FEF3D6;
```

- [ ] **Step 5: Update chart tokens**

Replace the chart colors block inside `:root`:

```css
/* Chart colors — categorical palette */
--chart-1: #0369A1;
--chart-2: #D4421E;
--chart-3: #008579;
--chart-4: #D48C08;
--chart-5: #6B52B5;
```

- [ ] **Step 6: Verify light mode renders**

Run: `pnpm build`
Expected: Build succeeds with no errors.

- [ ] **Step 7: Commit**

```bash
git add src/index.css
git commit -m "feat: update status and chart tokens to dataviz palette (light mode)"
```

---

### Task 2: Update existing status token values in src/index.css (dark mode)

**Files:**
- Modify: `src/index.css:196-269` (`.dark` block)

- [ ] **Step 1: Update dark destructive tokens**

In `src/index.css`, replace the destructive block inside `.dark`:

```css
/* Destructive */
--destructive: #D4421E;
--destructive-foreground: #ffffff;
--destructive-weak: #431407;
```

- [ ] **Step 2: Update dark success tokens**

```css
/* Success */
--success: #008579;
--success-foreground: #ffffff;
--success-weak: #042F2E;
```

- [ ] **Step 3: Update dark informational tokens**

```css
/* Informational */
--informational: #0369A1;
--informational-foreground: #ffffff;
--informational-weak: #0C2D48;
```

- [ ] **Step 4: Update dark warning tokens**

```css
/* Warning */
--warning: #D48C08;
--warning-foreground: #ffffff;
--warning-weak: #422006;
```

- [ ] **Step 5: Update dark chart tokens**

```css
/* Chart colors for dark mode — same as light */
--chart-1: #0369A1;
--chart-2: #D4421E;
--chart-3: #008579;
--chart-4: #D48C08;
--chart-5: #6B52B5;
```

- [ ] **Step 6: Verify build**

Run: `pnpm build`
Expected: Build succeeds.

- [ ] **Step 7: Commit**

```bash
git add src/index.css
git commit -m "feat: update status and chart tokens to dataviz palette (dark mode)"
```

---

### Task 3: Add new dataviz tokens to src/index.css (light mode)

**Files:**
- Modify: `src/index.css` — add new blocks inside `:root`, after the existing sidebar tokens

- [ ] **Step 1: Add severity tokens**

Add after the sidebar block inside `:root`:

```css
/* Severity — alias status tokens for dataviz context */
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

- [ ] **Step 2: Add sequential tokens**

```css
/* Sequential — purple, darker = more */
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

- [ ] **Step 3: Add diverging tokens**

```css
/* Diverging — teal (underused) ↔ purple (overused) */
--util-1: #008579;
--util-2: #4DB8B0;
--util-3: #99D6D2;
--util-4: #D9D9D9;
--util-5: #A896D6;
--util-6: #4D339A;
--util-7: #2A1B5C;
```

- [ ] **Step 4: Add change and accent tokens**

```css
/* Change indicators */
--change-favorable: var(--success);
--change-unfavorable: var(--destructive);

/* Data accent — single-metric bars */
--accent-data: var(--primary);
```

- [ ] **Step 5: Verify build**

Run: `pnpm build`
Expected: Build succeeds.

- [ ] **Step 6: Commit**

```bash
git add src/index.css
git commit -m "feat: add dataviz tokens — severity, sequential, diverging, change, accent (light)"
```

---

### Task 4: Add new dataviz tokens to src/index.css (dark mode)

**Files:**
- Modify: `src/index.css` — add new blocks inside `.dark`, after the existing sidebar tokens

- [ ] **Step 1: Add dark severity override**

Add after the sidebar block inside `.dark`:

```css
/* Severity — only medium-text needs explicit dark override */
--severity-medium-text: #FBBF24;
```

- [ ] **Step 2: Add dark sequential tokens**

```css
/* Sequential — full remap, lightness inverted */
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

- [ ] **Step 3: Add dark diverging tokens**

```css
/* Diverging — full remap, extremes brighten, midpoint recedes */
--util-1: #2DD4BF;
--util-2: #14B8A6;
--util-3: #0D7C73;
--util-4: #52525B;
--util-5: #6B52B5;
--util-6: #A896D6;
--util-7: #C4ADE0;
```

- [ ] **Step 4: Verify build**

Run: `pnpm build`
Expected: Build succeeds.

- [ ] **Step 5: Commit**

```bash
git add src/index.css
git commit -m "feat: add dataviz dark mode tokens — sequential remap, diverging remap"
```

---

### Task 5: Add Tailwind @theme inline mappings

**Files:**
- Modify: `src/index.css:12-67` (`@theme inline` block)

- [ ] **Step 1: Add severity mappings**

Add after the existing `--color-chart-5` line inside `@theme inline`:

```css
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
```

- [ ] **Step 2: Add sequential mappings**

```css
--color-seq-zero: var(--seq-zero);
--color-seq-1: var(--seq-1);
--color-seq-2: var(--seq-2);
--color-seq-3: var(--seq-3);
--color-seq-4: var(--seq-4);
--color-seq-5: var(--seq-5);
--color-seq-6: var(--seq-6);
--color-seq-7: var(--seq-7);
--color-seq-8: var(--seq-8);
```

- [ ] **Step 3: Add diverging mappings**

```css
--color-util-1: var(--util-1);
--color-util-2: var(--util-2);
--color-util-3: var(--util-3);
--color-util-4: var(--util-4);
--color-util-5: var(--util-5);
--color-util-6: var(--util-6);
--color-util-7: var(--util-7);
```

- [ ] **Step 4: Add change and accent mappings**

```css
--color-change-favorable: var(--change-favorable);
--color-change-unfavorable: var(--change-unfavorable);
--color-accent-data: var(--accent-data);
```

- [ ] **Step 5: Verify Tailwind utility generation**

Run: `pnpm build`
Expected: Build succeeds. The new classes (`bg-severity-high`, `text-seq-6`, `bg-util-4`, etc.) are now available.

- [ ] **Step 6: Commit**

```bash
git add src/index.css
git commit -m "feat: add Tailwind @theme inline mappings for dataviz tokens"
```

---

### Task 6: Mirror all changes to packages/ui/src/styles.css

**Files:**
- Modify: `packages/ui/src/styles.css` — apply identical changes from Tasks 1–5

This file is a standalone copy of the design system styles for the distributable package. Every change made to `src/index.css` in Tasks 1–5 must be mirrored here exactly.

- [ ] **Step 1: Update light mode status tokens**

In `packages/ui/src/styles.css`, update the `:root` block. Replace the destructive, success, informational, and warning blocks with the same values from Task 1:

```css
/* Destructive - Burnt orange (unified with severity-high) */
--destructive: #D4421E;
--destructive-foreground: #ffffff;
--destructive-weak: #FDEAE4;

/* Success - Teal (unified with severity-low) */
--success: #008579;
--success-foreground: #ffffff;
--success-weak: #E0F5F3;

/* Informational - Blue (unified with cat-1) */
--informational: #0369A1;
--informational-foreground: #ffffff;
--informational-weak: #EFF6FF;

/* Warning - Marigold (unified with severity-medium) */
--warning: #D48C08;
--warning-foreground: #ffffff;
--warning-weak: #FEF3D6;
```

- [ ] **Step 2: Update light mode chart tokens**

```css
/* Chart colors — categorical palette */
--chart-1: #0369A1;
--chart-2: #D4421E;
--chart-3: #008579;
--chart-4: #D48C08;
--chart-5: #6B52B5;
```

- [ ] **Step 3: Add light mode dataviz tokens**

Add after the sidebar block inside `:root`:

```css
/* Severity — alias status tokens for dataviz context */
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

/* Sequential — purple, darker = more */
--seq-zero: #F3F0F9;
--seq-1: #E4DBEF;
--seq-2: #C4ADE0;
--seq-3: #A896D6;
--seq-4: #8259BF;
--seq-5: #6B52B5;
--seq-6: #4D339A;
--seq-7: #3E2980;
--seq-8: #2A1B5C;

/* Diverging — teal (underused) ↔ purple (overused) */
--util-1: #008579;
--util-2: #4DB8B0;
--util-3: #99D6D2;
--util-4: #D9D9D9;
--util-5: #A896D6;
--util-6: #4D339A;
--util-7: #2A1B5C;

/* Change indicators */
--change-favorable: var(--success);
--change-unfavorable: var(--destructive);

/* Data accent — single-metric bars */
--accent-data: var(--primary);
```

- [ ] **Step 4: Update dark mode status tokens**

In the `.dark` block, replace destructive, success, informational, and warning with the same values from Task 2:

```css
/* Destructive */
--destructive: #D4421E;
--destructive-foreground: #ffffff;
--destructive-weak: #431407;

/* Success */
--success: #008579;
--success-foreground: #ffffff;
--success-weak: #042F2E;

/* Informational */
--informational: #0369A1;
--informational-foreground: #ffffff;
--informational-weak: #0C2D48;

/* Warning */
--warning: #D48C08;
--warning-foreground: #ffffff;
--warning-weak: #422006;
```

- [ ] **Step 5: Update dark mode chart tokens**

```css
/* Chart colors for dark mode — same as light */
--chart-1: #0369A1;
--chart-2: #D4421E;
--chart-3: #008579;
--chart-4: #D48C08;
--chart-5: #6B52B5;
```

- [ ] **Step 6: Add dark mode dataviz tokens**

Add after the sidebar block inside `.dark`:

```css
/* Severity — only medium-text needs explicit dark override */
--severity-medium-text: #FBBF24;

/* Sequential — full remap, lightness inverted */
--seq-zero: #2A1B5C;
--seq-1: #3E2980;
--seq-2: #4D339A;
--seq-3: #6B52B5;
--seq-4: #8259BF;
--seq-5: #A896D6;
--seq-6: #B9A3E0;
--seq-7: #C4ADE0;
--seq-8: #DDD3EE;

/* Diverging — full remap, extremes brighten, midpoint recedes */
--util-1: #2DD4BF;
--util-2: #14B8A6;
--util-3: #0D7C73;
--util-4: #52525B;
--util-5: #6B52B5;
--util-6: #A896D6;
--util-7: #C4ADE0;
```

- [ ] **Step 7: Add @theme inline mappings**

Add after the existing `--color-chart-5` line inside `@theme inline`:

```css
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
--color-seq-zero: var(--seq-zero);
--color-seq-1: var(--seq-1);
--color-seq-2: var(--seq-2);
--color-seq-3: var(--seq-3);
--color-seq-4: var(--seq-4);
--color-seq-5: var(--seq-5);
--color-seq-6: var(--seq-6);
--color-seq-7: var(--seq-7);
--color-seq-8: var(--seq-8);
--color-util-1: var(--util-1);
--color-util-2: var(--util-2);
--color-util-3: var(--util-3);
--color-util-4: var(--util-4);
--color-util-5: var(--util-5);
--color-util-6: var(--util-6);
--color-util-7: var(--util-7);
--color-change-favorable: var(--change-favorable);
--color-change-unfavorable: var(--change-unfavorable);
--color-accent-data: var(--accent-data);
```

- [ ] **Step 8: Verify package build**

Run: `cd packages/ui && npm run build`
Expected: Build succeeds. Check that `dist/styles.css` contains the new tokens.

- [ ] **Step 9: Commit**

```bash
git add packages/ui/src/styles.css
git commit -m "feat: mirror dataviz token changes to packages/ui distributable styles"
```

---

### Task 7: Visual verification in Storybook

**Files:** None modified — verification only.

- [ ] **Step 1: Start Storybook**

Run: `pnpm storybook`
Expected: Storybook starts on port 6006.

- [ ] **Step 2: Verify status color changes (light mode)**

Open `http://localhost:6006`. Check these components visually — they should now use the new palette (burnt orange destructive, teal success, marigold warning, deeper blue informational):

- Button → destructive variant
- Alert → destructive, success, warning, informational variants
- Badge → destructive variant
- Toast/Sonner → if stories exist

- [ ] **Step 3: Verify dark mode**

Use the Storybook toolbar theme toggle to switch to dark mode. Verify the same components render correctly with the dark mode values.

- [ ] **Step 4: Verify chart colors**

Check any chart stories (Recharts-based) — they should pick up the new categorical palette via `--chart-*` tokens.

- [ ] **Step 5: Commit verification note**

No code to commit. If any visual issues are found, fix them and commit the fix.

---

### Task 8: Update Figma variables — existing tokens

**Files:** Figma file `D0uIkeRBoEsW9VCZyJMp4B` (via figma-console MCP)

- [ ] **Step 1: Connect to Figma file**

Use `figma_get_variables` to list existing variable collections and find the color variable IDs for destructive, success, warning, informational, and chart-1 through chart-5.

- [ ] **Step 2: Update status variable values (light mode)**

Use `figma_batch_update_variables` to update:
- destructive → #D4421E
- destructive-weak → #FDEAE4
- warning → #D48C08
- warning-weak → #FEF3D6
- success → #008579
- success-weak → #E0F5F3
- informational → #0369A1
- informational-weak → #EFF6FF

- [ ] **Step 3: Update status variable values (dark mode)**

Update the dark mode values for the same variables:
- destructive → #D4421E
- destructive-weak → #431407
- warning → #D48C08
- warning-weak → #422006
- success → #008579
- success-weak → #042F2E
- informational → #0369A1
- informational-weak → #0C2D48

- [ ] **Step 4: Update chart variable values**

Update chart-1 through chart-5 to the new categorical hex values (same for light and dark):
- chart-1 → #0369A1
- chart-2 → #D4421E
- chart-3 → #008579
- chart-4 → #D48C08
- chart-5 → #6B52B5

- [ ] **Step 5: Take screenshot to verify**

Use `figma_take_screenshot` to capture the updated variables and verify visually.

---

### Task 9: Create new Figma variable collections — dataviz tokens

**Files:** Figma file `D0uIkeRBoEsW9VCZyJMp4B` (via figma-console MCP)

- [ ] **Step 1: Create Severity collection**

Use `figma_create_variable_collection` to create a "Severity" collection with Light and Dark modes. Then use `figma_batch_create_variables` to add:

| Variable | Light | Dark |
|---|---|---|
| severity-high | #D4421E | #D4421E |
| severity-high-bg | #FDEAE4 | #431407 |
| severity-high-fg | #ffffff | #ffffff |
| severity-medium | #D48C08 | #D48C08 |
| severity-medium-bg | #FEF3D6 | #422006 |
| severity-medium-text | #946200 | #FBBF24 |
| severity-medium-fg | #ffffff | #ffffff |
| severity-low | #008579 | #008579 |
| severity-low-bg | #E0F5F3 | #042F2E |
| severity-low-fg | #ffffff | #ffffff |

- [ ] **Step 2: Create Sequential collection**

Create "Sequential" collection with Light and Dark modes:

| Variable | Light | Dark |
|---|---|---|
| seq-zero | #F3F0F9 | #2A1B5C |
| seq-1 | #E4DBEF | #3E2980 |
| seq-2 | #C4ADE0 | #4D339A |
| seq-3 | #A896D6 | #6B52B5 |
| seq-4 | #8259BF | #8259BF |
| seq-5 | #6B52B5 | #A896D6 |
| seq-6 | #4D339A | #B9A3E0 |
| seq-7 | #3E2980 | #C4ADE0 |
| seq-8 | #2A1B5C | #DDD3EE |

- [ ] **Step 3: Create Diverging collection**

Create "Diverging" collection with Light and Dark modes:

| Variable | Light | Dark |
|---|---|---|
| util-1 | #008579 | #2DD4BF |
| util-2 | #4DB8B0 | #14B8A6 |
| util-3 | #99D6D2 | #0D7C73 |
| util-4 | #D9D9D9 | #52525B |
| util-5 | #A896D6 | #6B52B5 |
| util-6 | #4D339A | #A896D6 |
| util-7 | #2A1B5C | #C4ADE0 |

- [ ] **Step 4: Create Change + Accent collection**

Create "Change & Accent" collection with Light and Dark modes:

| Variable | Light | Dark |
|---|---|---|
| change-favorable | #008579 | #008579 |
| change-unfavorable | #D4421E | #D4421E |
| accent-data | #4D339A | #A683D0 |

- [ ] **Step 5: Take screenshot to verify all collections**

Use `figma_take_screenshot` to capture the new variable collections and verify visually.

---

### Task 10: Final verification and package build

**Files:** None modified — verification only.

- [ ] **Step 1: Run lint**

Run: `pnpm lint`
Expected: No errors.

- [ ] **Step 2: Build main project**

Run: `pnpm build`
Expected: Build succeeds.

- [ ] **Step 3: Build distributable package**

Run: `cd packages/ui && npm run build`
Expected: Build succeeds.

- [ ] **Step 4: Verify dist/styles.css contains new tokens**

Run: `grep 'seq-zero\|util-1\|severity-high\|change-favorable\|accent-data' packages/ui/dist/styles.css`
Expected: All new token names appear in the output.

- [ ] **Step 5: Colorblind validation**

Open Storybook in Chrome. Go to DevTools → Rendering → Emulate vision deficiencies → Deuteranopia. Verify:
- Sequential scale still reads as a gradient (lightness carries the encoding)
- Diverging scale teal and purple ends remain distinguishable
- Severity badges are readable with icon + text redundancy

- [ ] **Step 6: Commit any fixes**

If any issues were found and fixed during verification, commit them.

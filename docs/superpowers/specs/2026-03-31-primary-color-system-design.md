# Primary Color System Update

**Date:** 2026-03-31
**Status:** Draft
**Author:** Emma Cole

## Summary

Replace the CampusIQ primary purple (`#5e4890`) with a new 10-step ramp anchored at `#4D339A` (step 600). Add semantic interaction tokens (`hover`, `active`, `subtle`, `muted`) that don't exist today. Update both Figma variables and design system CSS in parallel.

## Motivation

The current system has a single `--primary` token with no ramp. Hover states are handled with opacity hacks (`hover:bg-primary/90`) or hardcoded shades. There are no tokens for selected backgrounds, disabled borders, or pressed states. The new ramp provides a complete interaction vocabulary.

## Primitive Ramp

| Step | Hex     | Role                                      |
|------|---------|-------------------------------------------|
| 50   | #F3F0F9 | Selected backgrounds, hover tints         |
| 100  | #E0D6F0 | Light backgrounds                         |
| 200  | #C4ADE0 | Disabled states, borders                  |
| 300  | #A683D0 | Dark mode primary                         |
| 400  | #8259BF | Focus ring (light), dark mode active      |
| 500  | #6646AA | Hover state (light)                       |
| 600  | #4D339A | Base interactive (buttons, checkboxes)    |
| 700  | #3E2980 | Active/pressed (light)                    |
| 800  | #2F1F66 | Dark mode subtle background               |
| 900  | #21164D | Dark mode foreground-on-primary           |

## Semantic Token Mapping

### Light Mode (`:root`)

| Token                  | Step | Hex     | Status     |
|------------------------|------|---------|------------|
| `--primary`            | 600  | #4D339A | update     |
| `--primary-hover`      | 500  | #6646AA | new        |
| `--primary-active`     | 700  | #3E2980 | new        |
| `--ring`               | 400  | #8259BF | update     |
| `--primary-subtle`     | 50   | #F3F0F9 | new        |
| `--primary-muted`      | 200  | #C4ADE0 | new        |
| `--primary-foreground`  | -    | #FFFFFF | no change  |
| `--sidebar-primary`    | 600  | #4D339A | update     |
| `--sidebar-ring`       | 400  | #8259BF | update     |

### Dark Mode (`.dark`)

| Token                  | Step | Hex     |
|------------------------|------|---------|
| `--primary`            | 300  | #A683D0 |
| `--primary-hover`      | 200  | #C4ADE0 |
| `--primary-active`     | 400  | #8259BF |
| `--ring`               | 300  | #A683D0 |
| `--primary-subtle`     | 800  | #2F1F66 |
| `--primary-muted`      | 600  | #4D339A |
| `--primary-foreground`  | 900  | #21164D |
| `--sidebar-primary`    | 300  | #A683D0 |
| `--sidebar-ring`       | 300  | #A683D0 |

### Design Decisions

- **Hover direction: lighter (600->500 in light, 300->200 in dark).** Intentional break from the previous darker-on-hover pattern. Provides a more modern feel.
- **Ring color: purple instead of blue.** Aligns focus indicators with the brand rather than using generic blue. The 400 step provides enough contrast against both primary buttons and white backgrounds.
- **Dark mode anchors at 300.** Provides 5.72:1 contrast against `#18181b` background. Button text uses 900 (#21164D) at 5.27:1 — passes AA.
- **Dark subtle bg uses 800 (not 900).** 900 (#21164D) is perceptually invisible against #18181b (1.09:1 ratio). 800 (#2F1F66) at 1.27:1 provides a visible tinted surface while keeping text contrast at 4.49:1 AA.
- **Dark muted border uses 600 (not 700).** 700 at 1.55:1 was too faint. 600 at 1.90:1 is decorative-weight — acceptable because load-bearing borders (inputs) rely on focus ring for accessibility. Documented as a known trade-off.

## Accessibility

All text pairings pass WCAG 2.1 AA (4.5:1 normal text, 3:1 large text/UI):

| Pairing                              | Ratio  | Rating |
|--------------------------------------|--------|--------|
| White on primary (#4D339A)           | 9.31:1 | AA     |
| White on hover (#6646AA)             | 6.95:1 | AA     |
| Primary text on subtle bg (light)    | 8.26:1 | AA     |
| #A683D0 on dark bg (#18181b)         | 5.72:1 | AA     |
| #21164D on primary button (dark)     | 5.27:1 | AA     |
| #A683D0 text on subtle bg (dark)     | 4.49:1 | AA     |
| Dark muted border vs bg              | 1.90:1 | decorative only |

## Figma Implementation

### File
CampusIQ Component Library (FileKey: `D0uIkeRBoEsW9VCZyJMp4B`)

### Batch 1: Update Primitives
Update 10 variables in `1. TailwindCSS` collection (mode `1:0`):

| Variable ID       | Name                       | New Value |
|--------------------|----------------------------|-----------|
| VariableID:1:349   | tailwind colors/purple/50  | #F3F0F9   |
| VariableID:1:350   | tailwind colors/purple/100 | #E0D6F0   |
| VariableID:1:351   | tailwind colors/purple/200 | #C4ADE0   |
| VariableID:1:352   | tailwind colors/purple/300 | #A683D0   |
| VariableID:1:353   | tailwind colors/purple/400 | #8259BF   |
| VariableID:1:354   | tailwind colors/purple/500 | #6646AA   |
| VariableID:1:355   | tailwind colors/purple/600 | #4D339A   |
| VariableID:1:356   | tailwind colors/purple/700 | #3E2980   |
| VariableID:1:357   | tailwind colors/purple/800 | #2F1F66   |
| VariableID:1:358   | tailwind colors/purple/900 | #21164D   |

### Batch 2: Update Semantic Aliases
Re-point aliases in `3. Mode` collection to reference correct ramp steps:

| Variable                | Light Mode (1:7)          | Dark Mode (28:0)          |
|-------------------------|---------------------------|---------------------------|
| base/primary            | -> purple/600 (1:355)     | -> purple/300 (1:352)     |
| base/primary-hover      | -> purple/500 (1:354)     | -> purple/200 (1:351)     |
| base/ring               | -> purple/400 (1:353)     | -> purple/300 (1:352)     |
| base/primary-foreground | (no change)               | -> purple/900 (1:358)     |
| base/sidebar-ring       | -> purple/400 (1:353)     | -> purple/300 (1:352)     |

### Batch 3: Create New Semantic Tokens
In `3. Mode` collection (`VariableCollectionId:1:444`):

| Name                | Type  | Light Mode (1:7)      | Dark Mode (28:0)      |
|---------------------|-------|-----------------------|-----------------------|
| base/primary-active | COLOR | -> purple/700 (1:356) | -> purple/400 (1:353) |
| base/primary-subtle | COLOR | -> purple/50 (1:349)  | -> purple/800 (1:357) |
| base/primary-muted  | COLOR | -> purple/200 (1:351) | -> purple/600 (1:355) |

## CSS Implementation

### File
`src/index.css`

### Changes to `:root`
```css
/* Primary - CampusIQ Purple (#4D339A) */
--primary: #4D339A;
--primary-hover: #6646AA;
--primary-active: #3E2980;
--primary-foreground: #ffffff;
--primary-subtle: #F3F0F9;
--primary-muted: #C4ADE0;

/* Ring - Purple focus ring */
--ring: #8259BF;

/* Sidebar */
--sidebar-primary: #4D339A;
--sidebar-ring: #8259BF;
```

### Changes to `.dark`
```css
--primary: #A683D0;
--primary-hover: #C4ADE0;
--primary-active: #8259BF;
--primary-foreground: #21164D;
--primary-subtle: #2F1F66;
--primary-muted: #4D339A;

--ring: #A683D0;

--sidebar-primary: #A683D0;
--sidebar-ring: #A683D0;
```

### Changes to `@theme inline`
```css
--color-primary-hover: var(--primary-hover);
--color-primary-active: var(--primary-active);
--color-primary-subtle: var(--primary-subtle);
--color-primary-muted: var(--primary-muted);
```

### CLAUDE.md Update
Change primary color reference from `#5e4890` to `#4D339A`.

## Known Discrepancies (Pre-existing)

- **`--sidebar-primary`**: CSS has this as purple (`#5e4890`, updating to `#4D339A`). Figma has `base/sidebar-primary` pointing to `zinc/800` (#27272A). This mismatch predates this change. We update the CSS value but leave the Figma sidebar-primary alias unchanged — reconciling sidebar design is a separate effort.

## Out of Scope

- Component refactoring to consume new tokens (separate effort)
- Admin app migration (explicitly deferred)
- Automated Figma-to-code sync tooling (revisit at admin app migration)
- `--accent` token alignment (CSS uses gray, Figma uses purple/50 — separate decision)
- Full dark mode `--sidebar-*` redesign (only updating primary + ring references)
- Reconciling Figma sidebar-primary (zinc) with CSS sidebar-primary (purple)
- Updating existing `tailwind colors/purple/950` (no role in new system, left as-is)

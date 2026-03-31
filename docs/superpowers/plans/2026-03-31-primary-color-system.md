# Primary Color System Update — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace CampusIQ's primary purple (#5e4890) with a new 10-step ramp anchored at #4D339A, adding semantic interaction tokens, across both Figma variables and design system CSS.

**Architecture:** Parallel update — Figma variables via MCP batch tools, CSS via direct file edits. No sync tooling. Figma primitives cascade to semantic tokens via aliases. CSS uses flat hex values with Tailwind `@theme inline` registration.

**Tech Stack:** Figma Console MCP (Desktop Bridge), Tailwind CSS v4, CSS custom properties

**Spec:** `docs/superpowers/specs/2026-03-31-primary-color-system-design.md`

---

### Task 1: Update Figma Primitive Ramp

**Context:** The `1. TailwindCSS` collection has `tailwind colors/purple/50` through `purple/900` with old hex values. Overwriting these cascades to all semantic tokens that alias them (though some aliases need re-pointing in Task 2).

**Requires:** Figma Desktop Bridge plugin running in CampusIQ Component Library file (FileKey: `D0uIkeRBoEsW9VCZyJMp4B`).

- [ ] **Step 1: Verify Figma connection**

Run the MCP tool `figma_list_open_files` and confirm the active file is `D0uIkeRBoEsW9VCZyJMp4B`. If not, ask the user to open it and run the Desktop Bridge plugin.

- [ ] **Step 2: Batch update the 10 purple primitives**

Use `figma_batch_update_variables` with these updates (all in mode `1:0` of the TailwindCSS collection):

```json
{
  "updates": [
    { "variableId": "VariableID:1:349", "modeId": "1:0", "value": "#F3F0F9" },
    { "variableId": "VariableID:1:350", "modeId": "1:0", "value": "#E0D6F0" },
    { "variableId": "VariableID:1:351", "modeId": "1:0", "value": "#C4ADE0" },
    { "variableId": "VariableID:1:352", "modeId": "1:0", "value": "#A683D0" },
    { "variableId": "VariableID:1:353", "modeId": "1:0", "value": "#8259BF" },
    { "variableId": "VariableID:1:354", "modeId": "1:0", "value": "#6646AA" },
    { "variableId": "VariableID:1:355", "modeId": "1:0", "value": "#4D339A" },
    { "variableId": "VariableID:1:356", "modeId": "1:0", "value": "#3E2980" },
    { "variableId": "VariableID:1:357", "modeId": "1:0", "value": "#2F1F66" },
    { "variableId": "VariableID:1:358", "modeId": "1:0", "value": "#21164D" }
  ]
}
```

- [ ] **Step 3: Verify primitives updated**

Use `figma_get_variables` with `format: "filtered"`, `collection: "TailwindCSS"`, `namePattern: "purple"`, `resolveAliases: true` and confirm all 10 values match the new hex codes.

---

### Task 2: Update Figma Semantic Aliases

**Context:** The `3. Mode` collection has semantic tokens that alias into the TailwindCSS primitives. Some currently point to the wrong ramp step (e.g., `base/primary` → purple/700, needs → purple/600). The primitives were already updated in Task 1, so we're re-pointing which step each semantic token references.

**Note:** The MCP `figma_batch_update_variables` tool sets raw values when given hex strings. To set alias references, we need to use `figma_execute` with the Plugin API. The alternative is setting raw hex values directly (losing the alias relationship). Since maintaining aliases is important for the design system, use `figma_execute`.

- [ ] **Step 1: Re-point base/primary aliases**

Use `figma_execute` to run this plugin code:

```javascript
// Re-point base/primary: Light → purple/600, Dark → purple/300
const primary = figma.variables.getVariableById("VariableID:1:461");
const purple600 = figma.variables.getVariableById("VariableID:1:355");
const purple300 = figma.variables.getVariableById("VariableID:1:352");
primary.setValueForMode("1:7", { type: "VARIABLE_ALIAS", id: purple600.id });
primary.setValueForMode("28:0", { type: "VARIABLE_ALIAS", id: purple300.id });
console.log("✅ base/primary updated");
```

- [ ] **Step 2: Re-point base/primary-hover aliases**

```javascript
// Re-point base/primary-hover: Light → purple/500, Dark → purple/200
const primaryHover = figma.variables.getVariableById("VariableID:18829:47949");
const purple500 = figma.variables.getVariableById("VariableID:1:354");
const purple200 = figma.variables.getVariableById("VariableID:1:351");
primaryHover.setValueForMode("1:7", { type: "VARIABLE_ALIAS", id: purple500.id });
primaryHover.setValueForMode("28:0", { type: "VARIABLE_ALIAS", id: purple200.id });
console.log("✅ base/primary-hover updated");
```

- [ ] **Step 3: Re-point base/ring aliases**

```javascript
// Re-point base/ring: Light → purple/400, Dark → purple/300
const ring = figma.variables.getVariableById("VariableID:1:463");
const purple400 = figma.variables.getVariableById("VariableID:1:353");
const purple300 = figma.variables.getVariableById("VariableID:1:352");
ring.setValueForMode("1:7", { type: "VARIABLE_ALIAS", id: purple400.id });
ring.setValueForMode("28:0", { type: "VARIABLE_ALIAS", id: purple300.id });
console.log("✅ base/ring updated");
```

- [ ] **Step 4: Re-point base/primary-foreground dark mode**

```javascript
// Re-point base/primary-foreground Dark → purple/900 (Light stays white)
const primaryFg = figma.variables.getVariableById("VariableID:1:462");
const purple900 = figma.variables.getVariableById("VariableID:1:358");
primaryFg.setValueForMode("28:0", { type: "VARIABLE_ALIAS", id: purple900.id });
console.log("✅ base/primary-foreground dark updated");
```

- [ ] **Step 5: Re-point base/sidebar-ring aliases**

```javascript
// Re-point base/sidebar-ring: Light → purple/400, Dark → purple/300
const sidebarRing = figma.variables.getVariableById("VariableID:5140:17722");
const purple400 = figma.variables.getVariableById("VariableID:1:353");
const purple300 = figma.variables.getVariableById("VariableID:1:352");
sidebarRing.setValueForMode("1:7", { type: "VARIABLE_ALIAS", id: purple400.id });
sidebarRing.setValueForMode("28:0", { type: "VARIABLE_ALIAS", id: purple300.id });
console.log("✅ base/sidebar-ring updated");
```

- [ ] **Step 6: Verify all semantic aliases**

Use `figma_get_variables` with `format: "filtered"`, `namePattern: "primary|ring"`, `resolveAliases: true` and confirm:
- `base/primary` Light = #4D339A, Dark = #A683D0
- `base/primary-hover` Light = #6646AA, Dark = #C4ADE0
- `base/ring` Light = #8259BF, Dark = #A683D0
- `base/primary-foreground` Light = #FFFFFF, Dark = #21164D
- `base/sidebar-ring` Light = #8259BF, Dark = #A683D0

---

### Task 3: Create New Figma Semantic Tokens

**Context:** Three new semantic tokens need to be created in the `3. Mode` collection. These don't exist yet. We create them with alias references to the TailwindCSS primitives.

- [ ] **Step 1: Create base/primary-active**

Use `figma_execute`:

```javascript
const collection = figma.variables.getVariableCollectionById("VariableCollectionId:1:444");
const purple700 = figma.variables.getVariableById("VariableID:1:356");
const purple400 = figma.variables.getVariableById("VariableID:1:353");

const primaryActive = figma.variables.createVariable("base/primary-active", collection, "COLOR");
primaryActive.description = "Pressed/active state for primary interactive elements";
primaryActive.setValueForMode("1:7", { type: "VARIABLE_ALIAS", id: purple700.id });
primaryActive.setValueForMode("28:0", { type: "VARIABLE_ALIAS", id: purple400.id });
console.log("✅ base/primary-active created:", primaryActive.id);
```

- [ ] **Step 2: Create base/primary-subtle**

```javascript
const collection = figma.variables.getVariableCollectionById("VariableCollectionId:1:444");
const purple50 = figma.variables.getVariableById("VariableID:1:349");
const purple800 = figma.variables.getVariableById("VariableID:1:357");

const primarySubtle = figma.variables.createVariable("base/primary-subtle", collection, "COLOR");
primarySubtle.description = "Tinted background for selected/highlighted surfaces";
primarySubtle.setValueForMode("1:7", { type: "VARIABLE_ALIAS", id: purple50.id });
primarySubtle.setValueForMode("28:0", { type: "VARIABLE_ALIAS", id: purple800.id });
console.log("✅ base/primary-subtle created:", primarySubtle.id);
```

- [ ] **Step 3: Create base/primary-muted**

```javascript
const collection = figma.variables.getVariableCollectionById("VariableCollectionId:1:444");
const purple200 = figma.variables.getVariableById("VariableID:1:351");
const purple600 = figma.variables.getVariableById("VariableID:1:355");

const primaryMuted = figma.variables.createVariable("base/primary-muted", collection, "COLOR");
primaryMuted.description = "Low-emphasis borders and disabled states";
primaryMuted.setValueForMode("1:7", { type: "VARIABLE_ALIAS", id: purple200.id });
primaryMuted.setValueForMode("28:0", { type: "VARIABLE_ALIAS", id: purple600.id });
console.log("✅ base/primary-muted created:", primaryMuted.id);
```

- [ ] **Step 4: Verify new tokens exist**

Use `figma_get_variables` with `format: "filtered"`, `namePattern: "primary-active|primary-subtle|primary-muted"`, `resolveAliases: true` and confirm all three tokens exist with correct Light and Dark values.

---

### Task 4: Update CSS Light Mode Tokens

**File:** Modify `src/index.css:74-151` (`:root` block)

- [ ] **Step 1: Update primary and add new semantic tokens in `:root`**

Replace the existing primary block (lines 89-91):

```css
  /* Primary - Figma: #5e4890 (CampusIQ Purple) */
  --primary: #5e4890;
  --primary-foreground: #ffffff;
```

With:

```css
  /* Primary - CampusIQ Purple ramp anchored at #4D339A */
  --primary: #4D339A;
  --primary-hover: #6646AA;
  --primary-active: #3E2980;
  --primary-foreground: #ffffff;
  --primary-subtle: #F3F0F9;
  --primary-muted: #C4ADE0;
```

- [ ] **Step 2: Update ring color in `:root`**

Replace (lines 129-130):

```css
  /* Ring - Figma: #2563eb (focus blue) */
  --ring: #2563eb;
```

With:

```css
  /* Ring - Purple focus ring (#8259BF) */
  --ring: #8259BF;
```

- [ ] **Step 3: Update sidebar tokens in `:root`**

Replace (lines 143-150):

```css
  /* Sidebar - Uses primary purple */
  --sidebar: #faf9fc;
  --sidebar-foreground: #27272a;
  --sidebar-primary: #5e4890;
  --sidebar-primary-foreground: #ffffff;
  --sidebar-accent: #f4f4f5;
  --sidebar-accent-foreground: #27272a;
  --sidebar-border: #e4e4e7;
  --sidebar-ring: #2563eb;
```

With:

```css
  /* Sidebar - Uses primary purple */
  --sidebar: #faf9fc;
  --sidebar-foreground: #27272a;
  --sidebar-primary: #4D339A;
  --sidebar-primary-foreground: #ffffff;
  --sidebar-accent: #f4f4f5;
  --sidebar-accent-foreground: #27272a;
  --sidebar-border: #e4e4e7;
  --sidebar-ring: #8259BF;
```

- [ ] **Step 4: Verify `:root` changes**

Open the file and confirm:
- `--primary` is `#4D339A`
- `--primary-hover` is `#6646AA`
- `--primary-active` is `#3E2980`
- `--primary-subtle` is `#F3F0F9`
- `--primary-muted` is `#C4ADE0`
- `--ring` is `#8259BF`
- `--sidebar-primary` is `#4D339A`
- `--sidebar-ring` is `#8259BF`

---

### Task 5: Update CSS Dark Mode Tokens

**File:** Modify `src/index.css:154-229` (`.dark` block)

- [ ] **Step 1: Update primary and add new semantic tokens in `.dark`**

Replace the existing dark primary block (lines 167-169):

```css
  /* Primary - Lighter purple for dark mode */
  --primary: #a78bfa;
  --primary-foreground: #1e1b4b;
```

With:

```css
  /* Primary - Purple 300 for dark mode */
  --primary: #A683D0;
  --primary-hover: #C4ADE0;
  --primary-active: #8259BF;
  --primary-foreground: #21164D;
  --primary-subtle: #2F1F66;
  --primary-muted: #4D339A;
```

- [ ] **Step 2: Update ring color in `.dark`**

Replace (lines 208-209):

```css
  /* Ring */
  --ring: #60a5fa;
```

With:

```css
  /* Ring */
  --ring: #A683D0;
```

- [ ] **Step 3: Update sidebar tokens in `.dark`**

Replace (lines 221-228):

```css
  /* Sidebar */
  --sidebar: #27272a;
  --sidebar-foreground: #fafafa;
  --sidebar-primary: #a78bfa;
  --sidebar-primary-foreground: #1e1b4b;
  --sidebar-accent: #3f3f46;
  --sidebar-accent-foreground: #fafafa;
  --sidebar-border: rgba(255, 255, 255, 0.1);
  --sidebar-ring: #60a5fa;
```

With:

```css
  /* Sidebar */
  --sidebar: #27272a;
  --sidebar-foreground: #fafafa;
  --sidebar-primary: #A683D0;
  --sidebar-primary-foreground: #21164D;
  --sidebar-accent: #3f3f46;
  --sidebar-accent-foreground: #fafafa;
  --sidebar-border: rgba(255, 255, 255, 0.1);
  --sidebar-ring: #A683D0;
```

- [ ] **Step 4: Verify `.dark` changes**

Open the file and confirm:
- `--primary` is `#A683D0`
- `--primary-hover` is `#C4ADE0`
- `--primary-active` is `#8259BF`
- `--primary-foreground` is `#21164D`
- `--primary-subtle` is `#2F1F66`
- `--primary-muted` is `#4D339A`
- `--ring` is `#A683D0`
- `--sidebar-primary` is `#A683D0`
- `--sidebar-ring` is `#A683D0`

---

### Task 6: Register New Tokens in Tailwind Theme

**File:** Modify `src/index.css:12-63` (`@theme inline` block)

- [ ] **Step 1: Add new color registrations**

After the existing `--color-primary-foreground` line (line 28), add:

```css
  --color-primary-hover: var(--primary-hover);
  --color-primary-active: var(--primary-active);
  --color-primary-subtle: var(--primary-subtle);
  --color-primary-muted: var(--primary-muted);
```

This enables Tailwind utility classes like `bg-primary-subtle`, `text-primary-muted`, `border-primary-muted`, `hover:bg-primary-hover`, etc.

- [ ] **Step 2: Verify registration**

Open the file and confirm the four new `--color-*` entries appear in the `@theme inline` block between `--color-primary-foreground` and `--color-secondary`.

---

### Task 7: Update Documentation

**File:** Modify `CLAUDE.md`

- [ ] **Step 1: Update primary color reference**

Find the line:

```
- Primary: #5e4890 (CampusIQ purple)
```

Replace with:

```
- Primary: #4D339A (CampusIQ purple)
```

Also find:

```
- `--primary`: #5e4890 (CampusIQ purple)
```

Replace with:

```
- `--primary`: #4D339A (CampusIQ purple)
```

- [ ] **Step 2: Update comment in index.css header**

Find the comment block near line 68:

```css
 * - Primary: #5e4890 (purple)
```

Replace with:

```css
 * - Primary: #4D339A (purple)
```

---

### Task 8: Visual Verification

- [ ] **Step 1: Start Storybook**

```bash
cd /Users/emmacole/source/campusiq_designsystem && pnpm storybook
```

Expected: Storybook starts on port 6006.

- [ ] **Step 2: Check light mode components**

Open `http://localhost:6006` in the browser. Navigate to Button, Checkbox, and Toggle stories. Verify:
- Primary buttons show #4D339A purple (darker/more saturated than before)
- Focus rings are purple (not blue)
- No visual regressions in component rendering

- [ ] **Step 3: Check dark mode**

Toggle the theme to dark mode using the Storybook toolbar. Verify:
- Primary buttons show #A683D0 purple
- Focus rings are purple
- Buttons are readable against the dark background

- [ ] **Step 4: Run lint**

```bash
cd /Users/emmacole/source/campusiq_designsystem && pnpm lint
```

Expected: No new lint errors from CSS changes.

---

### Task 9: Commit

- [ ] **Step 1: Stage changes**

```bash
cd /Users/emmacole/source/campusiq_designsystem
git add src/index.css CLAUDE.md docs/superpowers/
```

- [ ] **Step 2: Commit**

```bash
git commit -m "feat: update primary color system to #4D339A with full ramp and semantic tokens

- Replace #5e4890 primary with 10-step purple ramp anchored at #4D339A (600)
- Add semantic tokens: primary-hover, primary-active, primary-subtle, primary-muted
- Update ring color from blue to purple (#8259BF)
- Add dark mode support with ramp-based token mapping
- Register new tokens in Tailwind @theme inline for utility class generation
- Update Figma variables via MCP (primitives + semantic aliases + new tokens)
- All text pairings pass WCAG 2.1 AA contrast requirements"
```

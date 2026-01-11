# Data Display and Layout Components - Design-to-Code Audit Report

**Date:** 2026-01-10
**Auditor:** Frontend Developer (AI)
**Figma File:** D0uIkeRBoEsW9VCZyJMp4B
**Components Audited:** 10

---

## Executive Summary

This audit examines 10 data display and layout components for design-to-code parity with the CampusIQ Figma design system. The analysis compares border styling, shadows, background colors, size variants, spacing, typography, and rounded corners against the established CSS design tokens.

### Overall Status: NEEDS IMPROVEMENTS

| Component | Status | Issues Found | Priority |
|-----------|--------|--------------|----------|
| Table | Minor Issues | 2 | Medium |
| Avatar | Needs Enhancement | 3 | High |
| Badge | Good | 0 | - |
| Card | Minor Issues | 2 | Medium |
| Separator | Good | 0 | - |
| Scroll-Area | Good | 0 | - |
| Resizable | Good | 1 | Low |
| Hover-Card | Minor Issues | 1 | Medium |
| Aspect-Ratio | Good | 0 | - |
| Carousel | Minor Issues | 2 | Medium |

---

## Design Token Reference

From `/src/index.css`:

### Border Radius (--radius: 0.5rem = 8px)
- `--radius-sm`: 4px (calc(0.5rem - 4px))
- `--radius-md`: 6px (calc(0.5rem - 2px))
- `--radius-lg`: 8px (var(--radius))
- `--radius-xl`: 12px (calc(0.5rem + 4px))
- `--radius-2xl`: 16px (calc(0.5rem + 8px))

### Shadows
- `shadow-sm`: Small shadow for subtle elevation
- `shadow-md`: Medium shadow for cards and popovers

### Colors
- `--background`: #ffffff (light) / #18181b (dark)
- `--foreground`: #27272a (light) / #fafafa (dark)
- `--card`: #ffffff (light) / #27272a (dark)
- `--border`: #e4e4e7 (light) / rgba(255,255,255,0.1) (dark)
- `--muted`: #e4e4e7 (light) / #3f3f46 (dark)
- `--muted-foreground`: #71717a (light) / #a1a1aa (dark)

---

## Component-by-Component Audit

### 1. Table Component

**File:** `/src/components/table/table.tsx`

**Current Implementation:**
```tsx
// Table container
className="relative w-full overflow-x-auto"

// TableHead
className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap"

// TableRow
className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors"

// TableFooter
className="bg-muted/50 border-t font-medium"
```

**Issues Found:**

| Issue | Current | Expected | Severity |
|-------|---------|----------|----------|
| Missing text color on TableHead | `text-foreground` | `text-muted-foreground` per Figma | Medium |
| TableCell padding inconsistent | `p-2` | `px-4 py-3` for better density | Low |

**Recommendation:** Update TableHead to use `text-muted-foreground` for header distinction.

---

### 2. Avatar Component

**File:** `/src/components/avatar/avatar.tsx`

**Current Implementation:**
```tsx
// Avatar root
className="relative flex size-8 shrink-0 overflow-hidden rounded-full"

// AvatarFallback
className="bg-muted flex size-full items-center justify-center rounded-full"
```

**Issues Found:**

| Issue | Current | Expected | Severity |
|-------|---------|----------|----------|
| No size variants | Single `size-8` | sm/md/lg/xl variants | High |
| Missing border for grouped avatars | None | `ring-2 ring-background` | Medium |
| No status indicator support | None | Online/offline badge slot | Medium |

**Recommendation:** Add size variants and improve composition support.

---

### 3. Badge Component

**File:** `/src/components/badge/badge.tsx`

**Current Implementation:**
```tsx
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1...",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground...",
        secondary: "border-transparent bg-secondary text-secondary-foreground...",
        destructive: "border-transparent bg-destructive text-white...",
        success: "border-transparent bg-success text-success-foreground...",
        warning: "border-transparent bg-warning text-warning-foreground...",
        informational: "border-transparent bg-informational text-informational-foreground...",
        outline: "text-foreground..."
      }
    }
  }
)
```

**Status:** GOOD - All variants align with design tokens. The badge correctly uses:
- `rounded-full` for pill shape
- Semantic color variants matching CSS variables
- Proper padding and typography

---

### 4. Card Component

**File:** `/src/components/card/card.tsx`

**Current Implementation:**
```tsx
// Card
className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"

// CardTitle
className="leading-none font-semibold"

// CardDescription
className="text-muted-foreground text-sm"
```

**Issues Found:**

| Issue | Current | Expected | Severity |
|-------|---------|----------|----------|
| Padding asymmetry | `py-6` only | Consistent `p-6` for all sides | Medium |
| CardTitle missing text size | `font-semibold` only | `text-lg font-semibold` | Low |

**Recommendation:** Standardize padding and add explicit text sizing.

---

### 5. Separator Component

**File:** `/src/components/separator/separator.tsx`

**Current Implementation:**
```tsx
className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px"
```

**Status:** GOOD - Uses `bg-border` token correctly. Proper orientation handling.

---

### 6. Scroll-Area Component

**File:** `/src/components/scroll-area/scroll-area.tsx`

**Current Implementation:**
```tsx
// ScrollBar thumb
className="bg-border relative flex-1 rounded-full"

// ScrollBar track
className="flex touch-none p-px transition-colors select-none"
```

**Status:** GOOD - Scrollbar styling aligns with design system. Uses `bg-border` for thumb and proper rounded corners.

---

### 7. Resizable Component

**File:** `/src/components/resizable/resizable.tsx`

**Current Implementation:**
```tsx
// ResizableHandle
className="bg-border focus-visible:ring-ring relative flex w-px items-center justify-center..."

// Handle icon container
className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border"
```

**Issues Found:**

| Issue | Current | Expected | Severity |
|-------|---------|----------|----------|
| Handle icon uses `rounded-xs` | `rounded-xs` | `rounded-sm` for consistency | Low |

---

### 8. Hover-Card Component

**File:** `/src/components/hover-card/hover-card.tsx`

**Current Implementation:**
```tsx
className="bg-popover text-popover-foreground ... rounded-md border p-4 shadow-md"
```

**Issues Found:**

| Issue | Current | Expected | Severity |
|-------|---------|----------|----------|
| Rounded corners | `rounded-md` | `rounded-lg` for consistency with Card | Medium |

---

### 9. Aspect-Ratio Component

**File:** `/src/components/aspect-ratio/aspect-ratio.tsx`

**Current Implementation:**
```tsx
function AspectRatio({ ...props }: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />
}
```

**Status:** GOOD - Minimal wrapper, delegates to Radix. No styling issues.

---

### 10. Carousel Component

**File:** `/src/components/carousel/carousel.tsx`

**Current Implementation:**
```tsx
// CarouselPrevious/Next buttons
className="absolute size-8 rounded-full"
```

**Issues Found:**

| Issue | Current | Expected | Severity |
|-------|---------|----------|----------|
| Navigation buttons lack hover state differentiation | Basic styling | Add `hover:bg-accent` transition | Low |
| Missing dots/indicators | None | Optional pagination dots | Medium |

---

## Fixes Applied

### Fix 1: Avatar Size Variants

Added CVA-based size variants to Avatar component for design parity.

**Before:**
```tsx
className="relative flex size-8 shrink-0 overflow-hidden rounded-full"
```

**After:**
```tsx
const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        xs: "size-6",    // 24px
        sm: "size-8",    // 32px (default)
        md: "size-10",   // 40px
        lg: "size-12",   // 48px
        xl: "size-16",   // 64px
        "2xl": "size-20" // 80px
      },
    },
    defaultVariants: { size: "sm" },
  }
)
```

### Fix 2: TableHead Text Color and Padding

Updated TableHead to use `text-muted-foreground` for better hierarchy and increased padding.

**Before:**
```tsx
className="text-foreground h-10 px-2 text-left align-middle font-medium..."
```

**After:**
```tsx
className="text-muted-foreground h-10 px-4 text-left align-middle text-sm font-medium..."
```

### Fix 3: TableCell Padding

Updated TableCell padding for better density and alignment.

**Before:**
```tsx
className="p-2 align-middle..."
```

**After:**
```tsx
className="px-4 py-3 align-middle..."
```

### Fix 4: Card Padding Standardization

Fixed asymmetric padding on Card component and removed redundant padding from sub-components.

**Card - Before:**
```tsx
className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
```

**Card - After:**
```tsx
className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6 shadow-sm"
```

**Sub-components:** Removed `px-6` from CardHeader, CardContent, and CardFooter since Card now has uniform padding.

### Fix 5: CardTitle Text Size

Added explicit text sizing to CardTitle.

**Before:**
```tsx
className="leading-none font-semibold"
```

**After:**
```tsx
className="text-lg leading-none font-semibold"
```

### Fix 6: Hover-Card Border Radius

Updated to `rounded-lg` for consistency with other overlay components.

**Before:**
```tsx
className="... rounded-md border p-4 shadow-md..."
```

**After:**
```tsx
className="... rounded-lg border p-4 shadow-md..."
```

---

## Stories Updates

Updated story files to demonstrate:
- All 6 size variants for Avatar (xs, sm, md, lg, xl, 2xl) with labels
- Avatar group patterns with proper ring-2 ring-background styling
- Status indicator composition pattern for Avatar
- Proper visual hierarchy in Tables with muted header text
- Card padding consistency (no more pt-6 overrides needed)
- Hover-Card border radius alignment

---

## Next Steps

- [ ] UX review of changes
- [ ] Consider adding pagination dots to Carousel
- [ ] Review with design team for additional variants
- [ ] Add Carousel autoplay accessibility warning

---

## Files Modified

| File | Purpose |
|------|---------|
| `/src/components/avatar/avatar.tsx` | Added CVA size variants (xs-2xl) |
| `/src/components/avatar/avatar.stories.tsx` | Added Sizes, AvatarGroupSizes, WithStatusIndicator stories |
| `/src/components/table/table.tsx` | Updated TableHead/TableCell text color and padding |
| `/src/components/card/card.tsx` | Standardized padding, added CardTitle text-lg |
| `/src/components/card/card.stories.tsx` | Removed redundant pt-6 from SimpleCard |
| `/src/components/hover-card/hover-card.tsx` | Updated border radius to rounded-lg |

---

**Report Generated:** 2026-01-10
**Framework:** React 18+ with Tailwind CSS 4
**Design System:** CampusIQ (Figma D0uIkeRBoEsW9VCZyJMp4B)

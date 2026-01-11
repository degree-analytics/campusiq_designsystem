# CampusIQ Component Library

A production-ready React component library built with React 19, TypeScript 5.9, and Tailwind CSS v4. Features 50+ components with comprehensive Storybook documentation, full Figma design system alignment, and semantic color variants.

## Tech Stack

- **React** 19.2.0
- **TypeScript** 5.9.3
- **Vite** 7.2.4
- **Tailwind CSS** 4.1.18 (CSS-based configuration with `@theme inline`)
- **Storybook** 10.1.11 with dark mode toggle
- **Radix UI** primitives for accessibility
- **Class Variance Authority (CVA)** for variant management

## Features

- **50+ Components** - Complete UI component library with New York style variants
- **Figma Design System Alignment** - 100% parity with CampusIQ Figma design file
- **Semantic Color System** - Success, warning, destructive, and informational variants
- **Dark Mode Support** - Full light/dark mode with Storybook toolbar toggle
- **Interactive Stories** - All stateful components have functional interactive demos
- **Accessibility First** - WCAG 2.1 AA compliant with Radix UI primitives
- **Modern CSS** - Tailwind CSS v4 with CSS custom properties

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

```bash
# Clone the repository
git clone https://github.com/southleft/campusiq.git
cd campusiq

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev

# Start Storybook
pnpm storybook
```

### Build

```bash
# Build for production
pnpm build

# Build Storybook static site
pnpm build-storybook
```

## Components

The library includes 50+ components organized by category:

### Form Components
| Component | Features |
|-----------|----------|
| Button | 9 variants (default, secondary, destructive, success, warning, informational, outline, ghost, link) |
| Checkbox | Interactive with indeterminate state |
| Input | With icons, validation states |
| Input OTP | One-time password input |
| Label | Accessible form labels |
| Radio Group | Single selection groups |
| Select | Searchable dropdown selection |
| Slider | Range input with real-time value display |
| Switch | Toggle switches with settings panel demos |
| Textarea | Multi-line text input |
| Toggle | Pressable toggle buttons |
| Toggle Group | Single and multi-select toggle groups |
| Calendar | Date selection with react-day-picker |
| Form | react-hook-form integration with Zod validation |

### Feedback & Overlay Components
| Component | Features |
|-----------|----------|
| Alert | 5 semantic variants (default, destructive, success, warning, informational) |
| Alert Dialog | Confirmation dialogs with async support |
| Dialog | Modal dialogs with form validation examples |
| Drawer | Bottom sheet with snap points (Vaul) |
| Sheet | Side panels (top, right, bottom, left) |
| Toast/Sonner | Notifications with semantic styling |
| Progress | Semantic variants with animated demos |
| Skeleton | Loading states with reduced-motion support |
| Tooltip | Positioned tooltips with arrow |
| Popover | Floating content panels |
| Hover Card | Preview cards on hover |

### Navigation Components
| Component | Features |
|-----------|----------|
| Accordion | Expandable content sections |
| AccordionTreeItem | Hierarchical tree navigation |
| Breadcrumb | Navigation path display |
| Collapsible | Expand/collapse content |
| Combobox | Searchable select with Command |
| Command | Command palette (cmdk) |
| Context Menu | Right-click menus |
| Dropdown Menu | Click-triggered menus |
| Menubar | Application menu bars |
| Navigation Menu | Site navigation with mega menus |
| Pagination | Interactive page navigation |
| Tabs | Tabbed content panels |
| Sidebar | Collapsible app sidebars |

### Data Display & Layout Components
| Component | Features |
|-----------|----------|
| Aspect Ratio | Responsive aspect ratio containers |
| Avatar | User avatars with fallbacks |
| Badge | 7 variants including semantic colors |
| Card | Flexible card layouts with click states |
| Carousel | Embla carousel with autoplay, loop, pagination |
| Data Table | Sortable, filterable tables with TanStack Table |
| Date Picker | Calendar popover for date selection |
| Resizable | Resizable panel layouts |
| Scroll Area | Custom scrollbar styling |
| Separator | Visual dividers |
| Table | Sortable, responsive data tables |

## Design System

### Color Tokens

The project uses a comprehensive semantic color system:

```css
/* Light Mode - CampusIQ Brand Colors */
:root {
  /* Core */
  --primary: #5e4890;        /* CampusIQ Purple */
  --secondary: #f4f4f5;
  --background: #ffffff;
  --foreground: #27272a;

  /* Semantic Colors */
  --destructive: #be123c;    /* Rose - errors, danger */
  --success: #047857;        /* Emerald - completion, approval */
  --warning: #d97706;        /* Amber - caution */
  --informational: #0284c7;  /* Sky - neutral info */

  /* Weak variants for backgrounds */
  --destructive-weak: #fff1f2;
  --success-weak: #ecfdf5;
  --warning-weak: #fffbeb;
  --informational-weak: #f0f9ff;

  /* Overlay for modals */
  --overlay: rgba(0, 0, 0, 0.5);
}
```

### Dark Mode

Full dark mode support with lighter color variants:

```css
.dark {
  --primary: #a78bfa;        /* Lighter purple */
  --background: #18181b;
  --foreground: #fafafa;

  --destructive: #f43f5e;
  --success: #34d399;
  --warning: #fbbf24;
  --informational: #38bdf8;

  --overlay: rgba(0, 0, 0, 0.6);
}
```

## Storybook

### Dark Mode Toggle

Storybook includes a theme toggle in the toolbar (paintbrush icon) to switch between light and dark modes.

### Interactive Stories

All stateful components include interactive stories with proper state management:

- **Form inputs**: Real-time value display, controlled state demos
- **Overlays**: Open/close functionality, async operations
- **Navigation**: Expand/collapse, page changes
- **Data display**: Sorting, filtering, selection

### Running Storybook

```bash
pnpm storybook
```

Visit http://localhost:6006 to view the component library.

## Project Structure

```
campusiq/
├── src/
│   ├── components/
│   │   ├── accordion/
│   │   │   ├── accordion.tsx
│   │   │   └── accordion.stories.tsx
│   │   ├── accordion-tree-item/
│   │   ├── alert/
│   │   ├── button/
│   │   └── ... (50+ component folders)
│   ├── hooks/
│   │   ├── use-mobile.ts
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts
│   └── index.css          # Design tokens & Tailwind config
├── .storybook/
│   ├── main.ts
│   ├── preview.tsx        # Dark mode decorator
│   └── manager.ts         # CampusIQ branding
├── docs/                   # Audit reports
└── package.json
```

## Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start Vite development server |
| `pnpm build` | Build for production |
| `pnpm storybook` | Start Storybook on port 6006 |
| `pnpm build-storybook` | Build Storybook static site |
| `pnpm lint` | Run ESLint |

## Figma Integration

This component library is aligned with the CampusIQ Figma design file:
- **FileKey**: `D0uIkeRBoEsW9VCZyJMp4B`
- All components match Figma specifications for spacing, colors, and typography
- Design tokens sourced directly from Figma variables

## Deployment

### Railway

```bash
# Build Storybook
pnpm build-storybook

# Deploy to Railway
railway up
```

## Recent Updates

### January 2026
- Added semantic color variants (success, warning, informational) to Alert, Badge, Button, Progress
- Added 4 new components: AccordionTreeItem, Combobox, DatePicker, DataTable
- Made all component stories interactive with proper state management
- Added dark mode toggle to Storybook toolbar
- Aligned all overlay components with `bg-overlay` design token
- Added comprehensive Figma design system audit
- Fixed AccordionTreeItem functionality and styling

## License

MIT

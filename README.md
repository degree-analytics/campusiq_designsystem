# CampusIQ

A modern ShadCN/UI component library built with React 19, TypeScript 5.9, and Tailwind CSS v4, featuring comprehensive Storybook documentation.

## Tech Stack

- **React** 19.2.3
- **TypeScript** 5.9.3
- **Vite** 7.0.5
- **Tailwind CSS** 4.1.11 (CSS-based configuration)
- **ShadCN/UI** - 46 components (New York style)
- **Storybook** 10.1.11

## Features

- Complete ShadCN/UI component library with 46 components
- Modern oklch color space for design tokens
- Light and dark mode support
- Comprehensive Storybook documentation with stories for all components
- Tailwind CSS v4 with `@theme` directive configuration
- Radix UI primitives for accessibility

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

The library includes 46 ShadCN/UI components organized by category:

### Form Components
- Button, Input, Textarea, Select, Checkbox, Radio Group
- Switch, Slider, Toggle, Toggle Group
- Form, Label, Calendar, Date Picker

### Feedback Components
- Alert, Alert Dialog, Dialog, Toast, Sonner
- Progress, Skeleton, Tooltip

### Navigation Components
- Breadcrumb, Command, Context Menu, Dropdown Menu
- Menubar, Navigation Menu, Pagination
- Tabs, Sidebar

### Layout & Data Components
- Accordion, Aspect Ratio, Avatar, Badge, Card
- Carousel, Collapsible, Drawer, Hover Card
- Popover, Resizable, Scroll Area, Separator
- Sheet, Table

## Design Tokens

The project uses oklch color space for design tokens:

```css
:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --secondary: oklch(0.97 0 0);
  --muted: oklch(0.97 0 0);
  --accent: oklch(0.97 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  /* ... */
}
```

## Project Structure

```
campusiq/
├── src/
│   ├── components/
│   │   ├── accordion/
│   │   ├── alert/
│   │   ├── button/
│   │   │   ├── button.tsx
│   │   │   └── button.stories.tsx
│   │   └── ... (46 component folders)
│   ├── hooks/
│   ├── lib/
│   └── index.css
├── .storybook/
│   ├── main.ts
│   └── preview.ts
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

## License

MIT

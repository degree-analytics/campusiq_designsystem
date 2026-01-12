# @campusiq/ui

CampusIQ UI Component Library - A collection of React components built with Radix UI primitives and Tailwind CSS v4.

## Quick Start

### Building the Package

```bash
cd packages/ui

# Install dependencies (from monorepo root)
npm install

# Build the package
npm run build
```

### Versioning

```bash
# Patch version (0.1.0 → 0.1.1)
npm run version:patch

# Minor version (0.1.0 → 0.2.0)
npm run version:minor

# Major version (0.1.0 → 1.0.0)
npm run version:major
```

## Installation in Your Application

### Option 1: Local File Reference

In your consuming application's `package.json`:

```json
{
  "dependencies": {
    "@campusiq/ui": "file:../path/to/packages/ui"
  }
}
```

### Option 2: Git Repository

```json
{
  "dependencies": {
    "@campusiq/ui": "git+https://github.com/your-org/campusiq.git#main"
  }
}
```

### Option 3: npm Pack (Recommended for Distribution)

```bash
# In packages/ui
npm pack

# This creates campusiq-ui-0.1.0.tgz
# Share this file with your team
```

Then install from the tarball:

```bash
npm install ./path/to/campusiq-ui-0.1.0.tgz
```

## Usage

### 1. Set Up Your CSS

In your application's main CSS file:

```css
@import 'tailwindcss';
@import '@campusiq/ui/styles.css';
```

### 2. Import Components

```tsx
import { Button, Card, Input, Dialog } from '@campusiq/ui';

function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter text..." />
      <Button>Submit</Button>
    </Card>
  );
}
```

### 3. Import Individual Components (Tree-Shaking)

For smaller bundle sizes, import only what you need:

```tsx
import { Button } from '@campusiq/ui';
import { Card, CardHeader, CardContent } from '@campusiq/ui';
```

## Peer Dependencies

The following must be installed in your consuming application:

```json
{
  "react": "^18.0.0 || ^19.0.0",
  "react-dom": "^18.0.0 || ^19.0.0",
  "tailwindcss": "^4.0.0"
}
```

### Optional Peer Dependencies

Some components require additional dependencies:

| Component | Required Package |
|-----------|-----------------|
| `Form` | `react-hook-form`, `@hookform/resolvers`, `zod` |
| `Chart` | `recharts` |
| `Carousel` | `embla-carousel-react` |
| `Calendar` | `react-day-picker`, `date-fns` |

## Available Components

### Layout
- `Card`, `CardHeader`, `CardContent`, `CardFooter`
- `Separator`
- `AspectRatio`
- `ScrollArea`
- `Resizable`

### Forms
- `Button`
- `Input`
- `Textarea`
- `Checkbox`
- `RadioGroup`
- `Select`
- `Switch`
- `Slider`
- `Form` (requires react-hook-form)
- `Label`
- `InputOTP`

### Feedback
- `Alert`
- `AlertDialog`
- `Dialog`
- `Sheet`
- `Drawer`
- `Tooltip`
- `Popover`
- `HoverCard`
- `Progress`
- `Skeleton`
- `Sonner` (toast notifications)

### Navigation
- `Tabs`
- `Accordion`
- `Collapsible`
- `NavigationMenu`
- `Menubar`
- `DropdownMenu`
- `ContextMenu`
- `Command`
- `Breadcrumb`
- `Pagination`
- `Sidebar`

### Data Display
- `Table`
- `Avatar`
- `Badge`
- `Calendar`
- `Carousel`
- `Chart`

### Utilities
- `cn()` - Class name merge utility
- `useIsMobile()` - Mobile breakpoint hook

## Customizing the Theme

The styles use CSS custom properties. Override them in your CSS:

```css
:root {
  --primary: #your-brand-color;
  --primary-foreground: #ffffff;
  /* ... other variables */
}
```

See `src/styles.css` for all available CSS variables.

## Development

### File Structure

```
packages/ui/
├── src/
│   ├── components/     # UI components
│   ├── hooks/          # React hooks
│   ├── index.ts        # Main exports
│   ├── preset.ts       # Theme configuration
│   ├── styles.css      # CSS variables
│   └── utils.ts        # Utility functions
├── dist/               # Built output (generated)
├── package.json
├── tsconfig.json
└── tsup.config.ts
```

### Build Output

After running `npm run build`:

- `dist/index.js` - ESM bundle (~182KB)
- `dist/index.cjs` - CommonJS bundle (~198KB)
- `dist/preset.js` - Theme preset (ESM)
- `dist/preset.cjs` - Theme preset (CJS)
- `dist/styles.css` - CSS variables and theme

Note: TypeScript declarations are not included to keep the build simple. The components work with JavaScript and TypeScript projects.

## License

MIT

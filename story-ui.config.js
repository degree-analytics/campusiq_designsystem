export default {
  // Component Library Configuration
  importPath: '@/components',
  componentsPath: './src/components',
  componentPrefix: '',
  importStyle: 'individual',

  // Framework Configuration
  componentFramework: 'react',
  storybookFramework: '@storybook/react-vite',

  // Explicit Component Declarations (REQUIRED for proper story generation)
  components: [
    {
      name: 'Alert',
      importPath: '@/components/alert/alert',
      props: ['variant', 'className', 'children'],
      description: 'Displays a callout for user attention with semantic variants',
      category: 'feedback',
      examples: [
        '<Alert variant="success"><AlertTitle>Success</AlertTitle><AlertDescription>Your changes have been saved.</AlertDescription></Alert>',
        '<Alert variant="warning"><AlertTitle>Warning</AlertTitle><AlertDescription>Please review before continuing.</AlertDescription></Alert>',
        '<Alert variant="destructive"><AlertTitle>Error</AlertTitle><AlertDescription>Something went wrong.</AlertDescription></Alert>',
        '<Alert variant="informational"><AlertTitle>Info</AlertTitle><AlertDescription>Here is some information.</AlertDescription></Alert>',
      ],
    },
    {
      name: 'AlertTitle',
      importPath: '@/components/alert/alert',
      props: ['className', 'children'],
      description: 'Title text for Alert component',
      category: 'feedback',
    },
    {
      name: 'AlertDescription',
      importPath: '@/components/alert/alert',
      props: ['className', 'children'],
      description: 'Description text for Alert component',
      category: 'feedback',
    },
    {
      name: 'Button',
      importPath: '@/components/button/button',
      props: ['variant', 'size', 'disabled', 'asChild', 'className', 'children'],
      description: 'Interactive button with multiple variants and sizes',
      category: 'form',
      examples: [
        '<Button variant="default">Primary</Button>',
        '<Button variant="secondary">Secondary</Button>',
        '<Button variant="destructive">Delete</Button>',
        '<Button variant="outline">Outline</Button>',
        '<Button variant="ghost">Ghost</Button>',
        '<Button size="sm">Small</Button>',
        '<Button size="lg">Large</Button>',
      ],
    },
    {
      name: 'Card',
      importPath: '@/components/card/card',
      props: ['className', 'children'],
      description: 'Container for grouped content with header, content, and footer sections',
      category: 'layout',
      slots: ['CardHeader', 'CardTitle', 'CardDescription', 'CardAction', 'CardContent', 'CardFooter'],
    },
    {
      name: 'CardHeader',
      importPath: '@/components/card/card',
      props: ['className', 'children'],
      category: 'layout',
    },
    {
      name: 'CardTitle',
      importPath: '@/components/card/card',
      props: ['className', 'children'],
      category: 'layout',
    },
    {
      name: 'CardDescription',
      importPath: '@/components/card/card',
      props: ['className', 'children'],
      category: 'layout',
    },
    {
      name: 'CardContent',
      importPath: '@/components/card/card',
      props: ['className', 'children'],
      category: 'layout',
    },
    {
      name: 'CardFooter',
      importPath: '@/components/card/card',
      props: ['className', 'children'],
      category: 'layout',
    },
    {
      name: 'Badge',
      importPath: '@/components/badge/badge',
      props: ['variant', 'className', 'children'],
      description: 'Small status indicator or label',
      category: 'feedback',
      examples: [
        '<Badge variant="default">Default</Badge>',
        '<Badge variant="secondary">Secondary</Badge>',
        '<Badge variant="destructive">Error</Badge>',
        '<Badge variant="outline">Outline</Badge>',
      ],
    },
    {
      name: 'Input',
      importPath: '@/components/input/input',
      props: ['type', 'placeholder', 'disabled', 'className'],
      description: 'Text input field',
      category: 'form',
    },
    {
      name: 'Label',
      importPath: '@/components/label/label',
      props: ['htmlFor', 'className', 'children'],
      description: 'Label for form elements',
      category: 'form',
    },
    {
      name: 'Checkbox',
      importPath: '@/components/checkbox/checkbox',
      props: ['checked', 'onCheckedChange', 'disabled', 'className'],
      description: 'Checkbox input for boolean selections',
      category: 'form',
    },
    {
      name: 'Switch',
      importPath: '@/components/switch/switch',
      props: ['checked', 'onCheckedChange', 'disabled', 'className'],
      description: 'Toggle switch for on/off states',
      category: 'form',
    },
    {
      name: 'Select',
      importPath: '@/components/select/select',
      props: ['value', 'onValueChange', 'disabled'],
      description: 'Dropdown selection component',
      category: 'form',
      slots: ['SelectTrigger', 'SelectValue', 'SelectContent', 'SelectItem', 'SelectGroup'],
    },
    {
      name: 'Dialog',
      importPath: '@/components/dialog/dialog',
      props: ['open', 'onOpenChange'],
      description: 'Modal dialog for focused interactions',
      category: 'other',
      slots: ['DialogTrigger', 'DialogContent', 'DialogHeader', 'DialogTitle', 'DialogDescription', 'DialogFooter', 'DialogClose'],
    },
    {
      name: 'Tabs',
      importPath: '@/components/tabs/tabs',
      props: ['value', 'onValueChange', 'defaultValue'],
      description: 'Tabbed content navigation',
      category: 'navigation',
      slots: ['TabsList', 'TabsTrigger', 'TabsContent'],
    },
    {
      name: 'Progress',
      importPath: '@/components/progress/progress',
      props: ['value', 'className'],
      description: 'Progress bar indicator',
      category: 'feedback',
    },
    {
      name: 'Separator',
      importPath: '@/components/separator/separator',
      props: ['orientation', 'className'],
      description: 'Visual divider between content',
      category: 'layout',
    },
    {
      name: 'Avatar',
      importPath: '@/components/avatar/avatar',
      props: ['className'],
      description: 'User profile image with fallback',
      category: 'content',
      slots: ['AvatarImage', 'AvatarFallback'],
    },
    {
      name: 'Tooltip',
      importPath: '@/components/tooltip/tooltip',
      description: 'Hover tooltip for additional information',
      category: 'feedback',
      slots: ['TooltipProvider', 'TooltipTrigger', 'TooltipContent'],
    },
  ],

  // Story Generation Configuration
  generatedStoriesPath: './src/stories/generated',
  storyPrefix: 'Generated/',
  defaultAuthor: 'Story UI AI',

  // LLM Provider Configuration
  llmProvider: 'claude',

  // Layout Rules for Tailwind CSS
  layoutRules: {
    multiColumnWrapper: 'div',
    columnComponent: 'div',
    containerComponent: 'div',
    layoutExamples: {
      twoColumn: `<div className="grid grid-cols-2 gap-4">
  <div>Column 1 content</div>
  <div>Column 2 content</div>
</div>`,
      threeColumn: `<div className="grid grid-cols-3 gap-4">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>`,
      flexRow: `<div className="flex items-center gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>`,
      stack: `<div className="flex flex-col gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>`,
    },
    prohibitedElements: ['style', 'inline-style'],
  },

  // Import Examples for AI
  importExamples: [
    "import { Button } from '@/components/button/button';",
    "import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/card/card';",
    "import { Input } from '@/components/input/input';",
    "import { Label } from '@/components/label/label';",
    "import { Badge } from '@/components/badge/badge';",
    "import { Alert, AlertTitle, AlertDescription } from '@/components/alert/alert';",
    "import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/dialog/dialog';",
    "import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/select/select';",
    "import { Checkbox } from '@/components/checkbox/checkbox';",
    "import { Switch } from '@/components/switch/switch';",
  ],

  // Design System Guidelines
  designSystemGuidelines: {
    name: 'CampusIQ Design System',
    preferredComponents: {
      buttons: 'Button',
      cards: 'Card',
      inputs: 'Input',
      selects: 'Select',
      modals: 'Dialog',
      alerts: 'Alert',
      badges: 'Badge',
      forms: 'Form with react-hook-form',
    },
    colorTokens: {
      prefix: '',
      categories: [
        'primary',
        'secondary',
        'destructive',
        'success',
        'warning',
        'informational',
        'muted',
        'accent',
      ],
    },
    prohibitedPatterns: {
      cssFrameworks: ['bootstrap', 'bulma', 'foundation'],
      classNamePatterns: ['!important'],
      inlineStyles: ['style={{'],
    },
    enforcementRules: {
      requireDesignTokens: true,
      prohibitArbitraryValues: false,
      enforceComponentLibrary: true,
    },
    additionalNotes: 'CampusIQ uses Tailwind CSS v4 with custom CSS properties. Use semantic color variants (success, warning, destructive, informational) where appropriate.',
  },

  // Sample Story Template
  sampleStory: `import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@/components/button/button';

const meta = {
  title: 'Generated/Example',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click me',
    variant: 'default',
  },
};`,

  // Storybook MCP Integration (optional)
  storybookMcpUrl: 'http://localhost:6006',
  storybookMcpTimeout: 5000,

  // Metadata
  _storyUIVersion: '4.9.0',
  _lastUpdated: new Date().toISOString(),
};

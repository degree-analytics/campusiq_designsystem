import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from './select'
import { Label } from '@/components/label/label'

const meta: Meta<typeof Select> = {
  title: 'Components/Form/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Select

The Select component provides a dropdown menu for selecting a single option from a list. It offers a compact way to present multiple choices without cluttering the interface.

Within CampusIQ, selects are used for choosing building floors, time ranges, data categories, user roles, and any scenario requiring selection from a predefined list of options.

### When to Use

- When users need to select one option from a list of 4+ items
- When screen space is limited and a dropdown is more appropriate
- When the options are predefined and don't require user input
- When organizing options into logical groups adds clarity

### When NOT to Use

- When there are only 2-3 options (use RadioGroup for visibility)
- When users should be able to select multiple options (use Checkbox group)
- When users need to enter custom values (use Combobox or Input)
- When displaying a hierarchical navigation (use Menu components)

### Composition

The Select is composed of multiple parts:
- **Select**: Root component managing state
- **SelectTrigger**: The clickable button that opens the dropdown
- **SelectValue**: Displays the selected value or placeholder
- **SelectContent**: The dropdown container
- **SelectItem**: Individual selectable options
- **SelectGroup**: Groups related items together
- **SelectLabel**: Labels for groups within the dropdown
- **SelectSeparator**: Visual divider between groups

### States

- **Default**: Closed, showing placeholder or selected value
- **Open**: Dropdown visible with options
- **Focused**: Keyboard focus on trigger or items
- **Disabled**: Non-interactive, visually muted
- **Invalid**: Error state with red border

### Sizes

- **default**: Standard size for forms (h-9)
- **sm**: Compact size for dense layouts (h-8)

### Accessibility

- **Keyboard navigation**: Arrow keys to navigate, Enter to select, Escape to close
- **Screen readers**: Announces label, selected value, and option count
- **Focus management**: Focus trapped within dropdown when open
- **Labeling**: Always associate with a Label for context
- **Typeahead**: Type characters to jump to matching options
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const WithPlaceholder: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Choose an option..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const WithDefaultValue: Story = {
  render: () => (
    <Select defaultValue="banana">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectContent>
    </Select>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use defaultValue to set an initial selection.',
      },
    },
  },
}

export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const SmallSize: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]" size="sm">
        <SelectValue placeholder="Small select" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
      </SelectContent>
    </Select>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use the sm size for compact layouts and dense interfaces.',
      },
    },
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="fruit">Favorite fruit</Label>
      <Select>
        <SelectTrigger id="fruit" className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Always pair Select with a Label for accessibility.',
      },
    },
  },
}

export const WithGroups: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
          <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
          <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
          <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Europe</SelectLabel>
          <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
          <SelectItem value="cet">Central European Time (CET)</SelectItem>
          <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Asia</SelectLabel>
          <SelectItem value="ist">India Standard Time (IST)</SelectItem>
          <SelectItem value="cst-asia">China Standard Time (CST)</SelectItem>
          <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use SelectGroup and SelectLabel to organize related options.',
      },
    },
  },
}

export const WithDisabledItems: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana" disabled>
          Banana (Out of stock)
        </SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes" disabled>
          Grapes (Out of stock)
        </SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectContent>
    </Select>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Individual items can be disabled while keeping the select functional.',
      },
    },
  },
}

export const Invalid: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]" aria-invalid>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
      </SelectContent>
    </Select>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Invalid state is indicated with aria-invalid for form validation.',
      },
    },
  },
}

export const Scrollable: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select a country" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ar">Argentina</SelectItem>
        <SelectItem value="au">Australia</SelectItem>
        <SelectItem value="br">Brazil</SelectItem>
        <SelectItem value="ca">Canada</SelectItem>
        <SelectItem value="cn">China</SelectItem>
        <SelectItem value="fr">France</SelectItem>
        <SelectItem value="de">Germany</SelectItem>
        <SelectItem value="in">India</SelectItem>
        <SelectItem value="it">Italy</SelectItem>
        <SelectItem value="jp">Japan</SelectItem>
        <SelectItem value="mx">Mexico</SelectItem>
        <SelectItem value="nl">Netherlands</SelectItem>
        <SelectItem value="nz">New Zealand</SelectItem>
        <SelectItem value="ru">Russia</SelectItem>
        <SelectItem value="es">Spain</SelectItem>
        <SelectItem value="uk">United Kingdom</SelectItem>
        <SelectItem value="us">United States</SelectItem>
      </SelectContent>
    </Select>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Long lists automatically become scrollable within the dropdown.',
      },
    },
  },
}

export const AllStates: Story = {
  render: () => (
    <div className="grid gap-4">
      <div className="grid gap-1.5">
        <Label>Default</Label>
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-1.5">
        <Label>With Value</Label>
        <Select defaultValue="1">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-1.5">
        <Label>Small Size</Label>
        <Select>
          <SelectTrigger className="w-[200px]" size="sm">
            <SelectValue placeholder="Select option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-1.5">
        <Label className="opacity-50">Disabled</Label>
        <Select disabled>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-1.5">
        <Label>Invalid</Label>
        <Select>
          <SelectTrigger className="w-[200px]" aria-invalid>
            <SelectValue placeholder="Select option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All select states for visual QA: default, with value, small size, disabled, and invalid.',
      },
    },
  },
}

/**
 * Interactive select with controlled state.
 */
export const Interactive: Story = {
  render: function InteractiveSelect() {
    const [value, setValue] = React.useState('')

    const fruits: Record<string, string> = {
      apple: 'Apple',
      banana: 'Banana',
      blueberry: 'Blueberry',
      grapes: 'Grapes',
      pineapple: 'Pineapple',
    }

    return (
      <div className="space-y-4">
        <div className="grid w-full max-w-sm gap-1.5">
          <Label htmlFor="interactive-select">Favorite Fruit</Label>
          <Select value={value} onValueChange={setValue}>
            <SelectTrigger id="interactive-select" className="w-[200px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <p className="text-sm text-muted-foreground">
          Selected: {value ? fruits[value] : 'none'}
        </p>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive select with controlled state. Select an option to see the state update.',
      },
    },
  },
}

/**
 * Interactive timezone selector demonstrating real-world usage with groups.
 */
export const InteractiveTimezone: Story = {
  render: function InteractiveTimezoneSelect() {
    const [timezone, setTimezone] = React.useState('')

    const timezoneLabels: Record<string, string> = {
      est: 'Eastern Standard Time (EST)',
      cst: 'Central Standard Time (CST)',
      mst: 'Mountain Standard Time (MST)',
      pst: 'Pacific Standard Time (PST)',
      gmt: 'Greenwich Mean Time (GMT)',
      cet: 'Central European Time (CET)',
      eet: 'Eastern European Time (EET)',
      ist: 'India Standard Time (IST)',
      'cst-asia': 'China Standard Time (CST)',
      jst: 'Japan Standard Time (JST)',
    }

    return (
      <div className="space-y-4">
        <div className="grid w-full max-w-sm gap-1.5">
          <Label htmlFor="timezone-select">Timezone</Label>
          <Select value={timezone} onValueChange={setTimezone}>
            <SelectTrigger id="timezone-select" className="w-[280px]">
              <SelectValue placeholder="Select your timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>North America</SelectLabel>
                <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Europe</SelectLabel>
                <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                <SelectItem value="cet">Central European Time (CET)</SelectItem>
                <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Asia</SelectLabel>
                <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                <SelectItem value="cst-asia">China Standard Time (CST)</SelectItem>
                <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <p className="text-sm text-muted-foreground">
          Selected timezone: {timezone ? timezoneLabels[timezone] : 'none'}
        </p>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive timezone selector showing real-world usage with groups and controlled state.',
      },
    },
  },
}

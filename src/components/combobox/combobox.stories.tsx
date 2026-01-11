import type { Meta, StoryObj } from '@storybook/react-vite'
import * as React from 'react'
import { Combobox, type ComboboxOption } from './combobox'
import { Label } from '@/components/label/label'

const meta: Meta<typeof Combobox> = {
  title: 'Components/Form/Combobox',
  component: Combobox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Combobox

The Combobox component combines a searchable input with a dropdown list, allowing users to filter and select from a list of options. It is built on top of the Command and Popover components.

Within CampusIQ, comboboxes are ideal for selecting from long lists such as buildings, rooms, users, courses, or any dataset where filtering improves discoverability.

### When to Use

- When users need to select from a large list (10+ items)
- When users benefit from searching/filtering options
- When option labels may be long or similar
- When you need typeahead/autocomplete behavior

### When NOT to Use

- For small lists (2-5 items) where all options should be visible (use RadioGroup or Select)
- When users need to select multiple options (use MultiSelect or Checkbox group)
- When creating new values is required (use an Input with suggestions)
- When the list is very short and searchability adds no value (use Select)

### Composition

The Combobox is a single component that internally composes:
- **Popover**: For the dropdown container and positioning
- **Command**: For the searchable list functionality
- **Button**: For the trigger element

### States

- **Default**: Closed, showing placeholder or selected value
- **Open**: Dropdown visible with search input focused
- **Searching**: Filtering options based on input
- **Empty**: No options match the search query
- **Disabled**: Non-interactive, visually muted
- **Selected**: Shows the selected option label in the trigger

### Accessibility

- **Keyboard navigation**: Arrow keys to navigate options, Enter to select, Escape to close
- **Screen readers**: Announces as a combobox with listbox, includes selected state
- **Focus management**: Focus moves to search input when opened
- **Typeahead**: Search input filters options as you type
- **ARIA attributes**: Uses role="combobox" and aria-expanded for proper semantics
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Combobox>

const fruits: ComboboxOption[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'blueberry', label: 'Blueberry' },
  { value: 'grapes', label: 'Grapes' },
  { value: 'pineapple', label: 'Pineapple' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'watermelon', label: 'Watermelon' },
]

const frameworks: ComboboxOption[] = [
  { value: 'next', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
  { value: 'gatsby', label: 'Gatsby' },
]

const buildings: ComboboxOption[] = [
  { value: 'engineering', label: 'Engineering Building' },
  { value: 'library', label: 'Main Library' },
  { value: 'science', label: 'Science Center' },
  { value: 'student-center', label: 'Student Center' },
  { value: 'arts', label: 'Arts & Humanities Building' },
  { value: 'business', label: 'Business School' },
  { value: 'medical', label: 'Medical Sciences Building' },
  { value: 'athletics', label: 'Athletics Complex' },
  { value: 'residence-a', label: 'Residence Hall A' },
  { value: 'residence-b', label: 'Residence Hall B' },
  { value: 'admin', label: 'Administration Building' },
  { value: 'parking-north', label: 'North Parking Structure' },
]

function ControlledCombobox({
  options,
  ...props
}: React.ComponentProps<typeof Combobox>) {
  const [value, setValue] = React.useState('')
  return (
    <Combobox
      options={options}
      value={value}
      onValueChange={setValue}
      {...props}
    />
  )
}

export const Default: Story = {
  render: () => <ControlledCombobox options={frameworks} />,
}

export const WithPlaceholder: Story = {
  render: () => (
    <ControlledCombobox
      options={frameworks}
      placeholder="Select a framework..."
      searchPlaceholder="Search frameworks..."
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Customize the placeholder text for the trigger and search input.',
      },
    },
  },
}

export const WithDefaultValue: Story = {
  render: () => {
    const [value, setValue] = React.useState('next')
    return (
      <Combobox
        options={frameworks}
        value={value}
        onValueChange={setValue}
        placeholder="Select a framework..."
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Set an initial value by passing a value prop.',
      },
    },
  },
}

export const Disabled: Story = {
  render: () => (
    <Combobox
      options={frameworks}
      placeholder="Select a framework..."
      disabled
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'The disabled state prevents interaction with the combobox.',
      },
    },
  },
}

export const WithDisabledOptions: Story = {
  render: () => {
    const optionsWithDisabled: ComboboxOption[] = [
      { value: 'next', label: 'Next.js' },
      { value: 'sveltekit', label: 'SvelteKit', disabled: true },
      { value: 'nuxt', label: 'Nuxt.js' },
      { value: 'remix', label: 'Remix', disabled: true },
      { value: 'astro', label: 'Astro' },
    ]
    return (
      <ControlledCombobox
        options={optionsWithDisabled}
        placeholder="Select a framework..."
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Individual options can be disabled while keeping the combobox functional.',
      },
    },
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="building">Building</Label>
      <ControlledCombobox
        options={buildings}
        placeholder="Select a building..."
        searchPlaceholder="Search buildings..."
        popoverWidth="w-[280px]"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pair the Combobox with a Label for better accessibility and context.',
      },
    },
  },
}

export const LongList: Story = {
  render: () => (
    <ControlledCombobox
      options={buildings}
      placeholder="Select a building..."
      searchPlaceholder="Search buildings..."
      popoverWidth="w-[280px]"
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Combobox excels with long lists where searching helps users find options quickly.',
      },
    },
  },
}

export const CustomEmptyText: Story = {
  render: () => (
    <ControlledCombobox
      options={fruits}
      placeholder="Select a fruit..."
      searchPlaceholder="Search fruits..."
      emptyText="No fruits match your search."
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Customize the message shown when no options match the search query.',
      },
    },
  },
}

export const CustomWidth: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ControlledCombobox
        options={frameworks}
        placeholder="Narrow..."
        popoverWidth="w-[150px]"
      />
      <ControlledCombobox
        options={frameworks}
        placeholder="Default width..."
        popoverWidth="w-[200px]"
      />
      <ControlledCombobox
        options={frameworks}
        placeholder="Wide combobox..."
        popoverWidth="w-[300px]"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Control the width of the combobox with the popoverWidth prop.',
      },
    },
  },
}

export const InForm: Story = {
  render: () => {
    const [building, setBuilding] = React.useState('')
    const [room, setRoom] = React.useState('')

    const rooms: ComboboxOption[] = building
      ? [
          { value: '101', label: `${building.charAt(0).toUpperCase() + building.slice(1)} Room 101` },
          { value: '102', label: `${building.charAt(0).toUpperCase() + building.slice(1)} Room 102` },
          { value: '201', label: `${building.charAt(0).toUpperCase() + building.slice(1)} Room 201` },
          { value: '202', label: `${building.charAt(0).toUpperCase() + building.slice(1)} Room 202` },
        ]
      : []

    return (
      <div className="grid w-full max-w-sm gap-4">
        <div className="grid gap-1.5">
          <Label htmlFor="building">Building</Label>
          <Combobox
            options={buildings}
            value={building}
            onValueChange={(val) => {
              setBuilding(val)
              setRoom('')
            }}
            placeholder="Select a building..."
            searchPlaceholder="Search buildings..."
            popoverWidth="w-[280px]"
          />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="room">Room</Label>
          <Combobox
            options={rooms}
            value={room}
            onValueChange={setRoom}
            placeholder="Select a room..."
            searchPlaceholder="Search rooms..."
            disabled={!building}
            popoverWidth="w-[280px]"
          />
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Comboboxes can be used in forms with dependent selections, where one selection affects the options available in another.',
      },
    },
  },
}

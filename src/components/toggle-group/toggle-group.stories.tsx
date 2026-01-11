import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { ToggleGroup, ToggleGroupItem } from './toggle-group'

const meta: Meta = {
  title: 'Components/Form/ToggleGroup',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## ToggleGroup

The ToggleGroup component provides a set of toggle buttons that can work in single-select or multi-select modes. It is commonly used in toolbars for mutually exclusive or combinable options.

Within CampusIQ, toggle groups are used for view mode selectors, text alignment controls, data visualization options, and toolbar controls where grouping related options improves usability.

### When to Use

- When grouping related toggle options together
- When selecting alignment, view modes, or formatting options
- When only one option from a group should be active (single mode)
- When multiple options can be active simultaneously (multiple mode)

### When NOT to Use

- When options are unrelated (use separate Toggles)
- When selecting from a dropdown list (use Select)
- When the choice persists beyond the current session (use RadioGroup with form)
- When the toggle should look like a standard form control

### Selection Modes

- **single**: Only one item can be selected at a time (like RadioGroup)
- **multiple**: Multiple items can be selected simultaneously (like Checkboxes)

### Variants

- **default**: Subtle background on pressed state
- **outline**: Bordered style with shared borders between items

### Sizes

- **sm**: Small for compact toolbars (h-8)
- **default**: Standard size (h-9)
- **lg**: Large for prominent actions (h-10)

### States

- **Unselected**: Default state for all items
- **Selected**: Active item(s) with visual indicator
- **Hover**: Subtle background on hover
- **Focused**: Visible focus ring
- **Disabled**: Non-interactive item(s)

### Content Guidelines

- Use icons for common actions (align, view mode)
- Add text when icon meaning isn't immediately clear
- Keep groups to 2-5 items for usability
- Use aria-label for icon-only items

### Accessibility

- **Keyboard**: Arrow keys navigate, Space/Enter selects, Tab moves focus
- **Screen readers**: Announce group role, selected state, and position
- **aria-label**: Required for icon-only items
- **Focus management**: Focus moves through group with arrow keys
- **Group semantics**: Uses radiogroup/checkbox group semantics appropriately
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="Align left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="21" y1="6" x2="3" y2="6" />
          <line x1="15" y1="12" x2="3" y2="12" />
          <line x1="17" y1="18" x2="3" y2="18" />
        </svg>
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="21" y1="6" x2="3" y2="6" />
          <line x1="18" y1="12" x2="6" y2="12" />
          <line x1="21" y1="18" x2="3" y2="18" />
        </svg>
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="21" y1="6" x2="3" y2="6" />
          <line x1="21" y1="12" x2="9" y2="12" />
          <line x1="21" y1="18" x2="7" y2="18" />
        </svg>
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Single selection mode - only one item can be active at a time.',
      },
    },
  },
}

export const Multiple: Story = {
  render: () => (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
          <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
        </svg>
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="19" y1="4" x2="10" y2="4" />
          <line x1="14" y1="20" x2="5" y2="20" />
          <line x1="15" y1="4" x2="9" y2="20" />
        </svg>
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 4v6a6 6 0 0 0 12 0V4" />
          <line x1="4" y1="20" x2="20" y2="20" />
        </svg>
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple selection mode - multiple items can be active simultaneously.',
      },
    },
  },
}

export const Outline: Story = {
  render: () => (
    <ToggleGroup type="single" variant="outline" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="Align left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="21" y1="6" x2="3" y2="6" />
          <line x1="15" y1="12" x2="3" y2="12" />
          <line x1="17" y1="18" x2="3" y2="18" />
        </svg>
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="21" y1="6" x2="3" y2="6" />
          <line x1="18" y1="12" x2="6" y2="12" />
          <line x1="21" y1="18" x2="3" y2="18" />
        </svg>
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="21" y1="6" x2="3" y2="6" />
          <line x1="21" y1="12" x2="9" y2="12" />
          <line x1="21" y1="18" x2="7" y2="18" />
        </svg>
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Outline variant with bordered styling.',
      },
    },
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-4">
      <ToggleGroup type="single" size="sm" defaultValue="a">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
        <ToggleGroupItem value="c">C</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" size="default" defaultValue="a">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
        <ToggleGroupItem value="c">C</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" size="lg" defaultValue="a">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
        <ToggleGroupItem value="c">C</ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Available toggle group sizes for different contexts.',
      },
    },
  },
}

export const WithText: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="list">
      <ToggleGroupItem value="grid" className="gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
        Grid
      </ToggleGroupItem>
      <ToggleGroupItem value="list" className="gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="8" y1="6" x2="21" y2="6" />
          <line x1="8" y1="12" x2="21" y2="12" />
          <line x1="8" y1="18" x2="21" y2="18" />
          <line x1="3" y1="6" x2="3.01" y2="6" />
          <line x1="3" y1="12" x2="3.01" y2="12" />
          <line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
        List
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toggle group items can include both icons and text labels.',
      },
    },
  },
}

export const Disabled: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="a">
      <ToggleGroupItem value="a">A</ToggleGroupItem>
      <ToggleGroupItem value="b" disabled>
        B
      </ToggleGroupItem>
      <ToggleGroupItem value="c">C</ToggleGroupItem>
    </ToggleGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Individual items can be disabled while keeping others interactive.',
      },
    },
  },
}

export const ViewModeSelector: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">View:</span>
      <ToggleGroup type="single" variant="outline" defaultValue="table">
        <ToggleGroupItem value="table" aria-label="Table view">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="3" y1="15" x2="21" y2="15" />
            <line x1="9" y1="3" x2="9" y2="21" />
          </svg>
        </ToggleGroupItem>
        <ToggleGroupItem value="cards" aria-label="Cards view">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
        </ToggleGroupItem>
        <ToggleGroupItem value="kanban" aria-label="Kanban view">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="4" y="4" width="6" height="16" rx="1" />
            <rect x="14" y="4" width="6" height="10" rx="1" />
          </svg>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Common pattern for view mode selection in data interfaces.',
      },
    },
  },
}

/**
 * Interactive single-select toggle group with controlled state.
 */
export const InteractiveSingle: Story = {
  render: function InteractiveSingleToggleGroup() {
    const [value, setValue] = React.useState('center')

    return (
      <div className="space-y-4">
        <ToggleGroup type="single" value={value} onValueChange={(v) => v && setValue(v)}>
          <ToggleGroupItem value="left" aria-label="Align left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="21" y1="6" x2="3" y2="6" />
              <line x1="15" y1="12" x2="3" y2="12" />
              <line x1="17" y1="18" x2="3" y2="18" />
            </svg>
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="21" y1="6" x2="3" y2="6" />
              <line x1="18" y1="12" x2="6" y2="12" />
              <line x1="21" y1="18" x2="3" y2="18" />
            </svg>
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="21" y1="6" x2="3" y2="6" />
              <line x1="21" y1="12" x2="9" y2="12" />
              <line x1="21" y1="18" x2="7" y2="18" />
            </svg>
          </ToggleGroupItem>
        </ToggleGroup>
        <p className="text-sm text-muted-foreground">
          Alignment: {value}
        </p>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive single-select toggle group with controlled state. Only one option can be selected.',
      },
    },
  },
}

/**
 * Interactive multi-select toggle group with controlled state.
 */
export const InteractiveMultiple: Story = {
  render: function InteractiveMultipleToggleGroup() {
    const [values, setValues] = React.useState<string[]>(['bold'])

    return (
      <div className="space-y-4">
        <ToggleGroup type="multiple" value={values} onValueChange={setValues}>
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
              <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
            </svg>
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="4" x2="10" y2="4" />
              <line x1="14" y1="20" x2="5" y2="20" />
              <line x1="15" y1="4" x2="9" y2="20" />
            </svg>
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 4v6a6 6 0 0 0 12 0V4" />
              <line x1="4" y1="20" x2="20" y2="20" />
            </svg>
          </ToggleGroupItem>
        </ToggleGroup>
        <p className="text-sm text-muted-foreground">
          Active: {values.length > 0 ? values.join(', ') : 'none'}
        </p>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive multi-select toggle group with controlled state. Multiple options can be selected.',
      },
    },
  },
}

/**
 * Interactive view mode selector demonstrating real-world usage.
 */
export const InteractiveViewMode: Story = {
  render: function InteractiveViewMode() {
    const [view, setView] = React.useState('table')

    const viewLabels: Record<string, string> = {
      table: 'Table View',
      cards: 'Card View',
      kanban: 'Kanban View',
    }

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">View:</span>
          <ToggleGroup
            type="single"
            variant="outline"
            value={view}
            onValueChange={(v) => v && setView(v)}
          >
            <ToggleGroupItem value="table" aria-label="Table view">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="3" y1="15" x2="21" y2="15" />
                <line x1="9" y1="3" x2="9" y2="21" />
              </svg>
            </ToggleGroupItem>
            <ToggleGroupItem value="cards" aria-label="Cards view">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </ToggleGroupItem>
            <ToggleGroupItem value="kanban" aria-label="Kanban view">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="4" width="6" height="16" rx="1" />
                <rect x="14" y="4" width="6" height="10" rx="1" />
              </svg>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <p className="text-sm text-muted-foreground">
          Current view: {viewLabels[view]}
        </p>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive view mode selector showing real-world usage with controlled state.',
      },
    },
  },
}

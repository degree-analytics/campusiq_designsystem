import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Toggle } from './toggle'

const meta: Meta = {
  title: 'Components/Form/Toggle',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Toggle

The Toggle component provides a two-state button that can be either on or off. Unlike Switch, it is styled as a button and is commonly used in toolbars for formatting options.

Within CampusIQ, toggles are used for text formatting controls, view mode options, filter toggles in toolbars, and any button-style binary state control.

### When to Use

- When toggling formatting options (bold, italic, underline)
- When switching between view modes in a toolbar
- When the toggle should look like a button
- When grouping multiple toggles together (see ToggleGroup)

### When NOT to Use

- When toggling settings that take effect immediately (use Switch)
- When the toggle is part of a form with submission (use Checkbox)
- When selecting from multiple options (use RadioGroup or Select)
- When the state should persist across sessions without user action

### Variants

- **default**: Subtle background on pressed state
- **outline**: Bordered style with background on pressed state

### Sizes

- **sm**: Small toggle for compact toolbars (h-8)
- **default**: Standard size (h-9)
- **lg**: Large toggle for prominent actions (h-10)

### States

- **Unpressed**: Default state, no selection
- **Pressed**: Active state with visual indicator
- **Hover**: Subtle background on hover
- **Focused**: Visible focus ring
- **Disabled**: Non-interactive, visually muted

### Content Guidelines

- Use icons for common actions (bold, italic, align)
- Add text labels when icon meaning isn't clear
- Keep toggle groups logically organized
- Use aria-label for icon-only toggles

### Accessibility

- **Keyboard**: Space or Enter to toggle, Tab to navigate
- **Screen readers**: Announce label and pressed state
- **aria-label**: Required for icon-only toggles
- **Focus indicator**: Visible focus ring
- **State announcement**: Pressed state is announced
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Toggle aria-label="Toggle bold">
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
    </Toggle>
  ),
}

export const WithText: Story = {
  render: () => (
    <Toggle aria-label="Toggle italic">
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
      Italic
    </Toggle>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toggles can include both an icon and text label.',
      },
    },
  },
}

export const Outline: Story = {
  render: () => (
    <Toggle variant="outline" aria-label="Toggle underline">
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
    </Toggle>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Outline variant for bordered toggle styling.',
      },
    },
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Toggle size="sm" aria-label="Toggle small">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
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
      </Toggle>
      <Toggle size="default" aria-label="Toggle default">
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
      </Toggle>
      <Toggle size="lg" aria-label="Toggle large">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
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
      </Toggle>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Available toggle sizes for different contexts.',
      },
    },
  },
}

export const Pressed: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Toggle defaultPressed aria-label="Toggle bold pressed">
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
      </Toggle>
      <Toggle aria-label="Toggle italic unpressed">
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
      </Toggle>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toggles showing pressed and unpressed states.',
      },
    },
  },
}

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Toggle disabled aria-label="Toggle disabled">
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
      </Toggle>
      <Toggle variant="outline" disabled aria-label="Toggle outline disabled">
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
      </Toggle>
    </div>
  ),
}

export const TextFormattingToolbar: Story = {
  render: () => (
    <div className="flex items-center gap-1 rounded-lg border p-1">
      <Toggle defaultPressed aria-label="Toggle bold">
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
      </Toggle>
      <Toggle aria-label="Toggle italic">
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
      </Toggle>
      <Toggle aria-label="Toggle underline">
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
      </Toggle>
      <Toggle aria-label="Toggle strikethrough">
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
          <path d="M16 4H9a3 3 0 0 0-2.83 4" />
          <path d="M14 12a4 4 0 0 1 0 8H6" />
          <line x1="4" y1="12" x2="20" y2="12" />
        </svg>
      </Toggle>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Common text formatting toolbar pattern using individual toggles.',
      },
    },
  },
}

/**
 * Interactive toggle with controlled state demonstrating proper usage.
 */
export const Interactive: Story = {
  render: function InteractiveToggle() {
    const [pressed, setPressed] = React.useState(false)

    return (
      <div className="space-y-4">
        <Toggle
          pressed={pressed}
          onPressedChange={setPressed}
          aria-label="Toggle bold"
        >
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
          Bold
        </Toggle>
        <p className="text-sm text-muted-foreground">
          Bold is {pressed ? 'on' : 'off'}
        </p>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive toggle with controlled state. Click to see the pressed state update.',
      },
    },
  },
}

/**
 * Interactive text formatting toolbar with controlled state for multiple toggles.
 */
export const InteractiveToolbar: Story = {
  render: function InteractiveToolbar() {
    const [formatting, setFormatting] = React.useState({
      bold: true,
      italic: false,
      underline: false,
      strikethrough: false,
    })

    const toggleFormat = (key: keyof typeof formatting) => {
      setFormatting((prev) => ({ ...prev, [key]: !prev[key] }))
    }

    const activeFormats = Object.entries(formatting)
      .filter(([, v]) => v)
      .map(([k]) => k)

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-1 rounded-lg border p-1">
          <Toggle
            pressed={formatting.bold}
            onPressedChange={() => toggleFormat('bold')}
            aria-label="Toggle bold"
          >
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
          </Toggle>
          <Toggle
            pressed={formatting.italic}
            onPressedChange={() => toggleFormat('italic')}
            aria-label="Toggle italic"
          >
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
          </Toggle>
          <Toggle
            pressed={formatting.underline}
            onPressedChange={() => toggleFormat('underline')}
            aria-label="Toggle underline"
          >
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
          </Toggle>
          <Toggle
            pressed={formatting.strikethrough}
            onPressedChange={() => toggleFormat('strikethrough')}
            aria-label="Toggle strikethrough"
          >
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
              <path d="M16 4H9a3 3 0 0 0-2.83 4" />
              <path d="M14 12a4 4 0 0 1 0 8H6" />
              <line x1="4" y1="12" x2="20" y2="12" />
            </svg>
          </Toggle>
        </div>
        <p className="text-sm text-muted-foreground">
          Active: {activeFormats.length > 0 ? activeFormats.join(', ') : 'none'}
        </p>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive text formatting toolbar with multiple controlled toggles showing real-time state.',
      },
    },
  },
}

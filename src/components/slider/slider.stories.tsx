import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Slider } from './slider'
import { Label } from '@/components/label/label'

const meta: Meta<typeof Slider> = {
  title: 'Components/Form/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Slider

The Slider component provides a control for selecting a value or range from a continuous or discrete set of values. It offers visual feedback through a draggable thumb and track.

Within CampusIQ, sliders are used for adjusting thresholds, setting capacity percentages, controlling time ranges, adjusting filter parameters, and any scenario requiring numeric value selection within a range.

### When to Use

- When selecting a value from a continuous range
- When selecting a range of values (min/max)
- When the relative position matters more than the exact value
- When adjusting settings like volume, brightness, or percentages

### When NOT to Use

- When an exact value is critical (use Input with type="number")
- When the range has discrete, labeled options (use RadioGroup or Select)
- When the value range is very large or imprecise
- When the interaction requires fine-grained control

### Configuration

- **min/max**: Define the value range boundaries
- **step**: Control increment granularity (default: 1)
- **defaultValue**: Array of initial value(s)
- **orientation**: horizontal (default) or vertical

### Modes

- **Single value**: One thumb for selecting a single value
- **Range**: Two thumbs for selecting a value range (min-max)

### States

- **Default**: Interactive with thumb at current position
- **Hover**: Thumb enlarges on hover
- **Focused**: Visible focus ring around thumb
- **Dragging**: Active drag state with visual feedback
- **Disabled**: Non-interactive, visually muted

### Content Guidelines

- Always display the current value near the slider
- Consider showing min/max labels for context
- Use appropriate step values for the use case
- Pair with labels that describe what the slider controls

### Accessibility

- **Keyboard navigation**: Arrow keys adjust value, Home/End jump to min/max
- **Screen readers**: Announce current value, min, max, and step
- **Labeling**: Associate with a Label for context
- **Focus indicator**: Visible focus ring on thumb
- **Touch targets**: Ensure thumb is large enough for touch interaction
        `,
      },
    },
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disables the slider and prevents interaction',
    },
    min: {
      control: 'number',
      description: 'Minimum value of the range',
    },
    max: {
      control: 'number',
      description: 'Maximum value of the range',
    },
    step: {
      control: 'number',
      description: 'Step increment for value changes',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the slider',
    },
  },
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: 'w-[60%]',
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-4">
      <div className="flex items-center justify-between">
        <Label htmlFor="volume">Volume</Label>
        <span className="text-muted-foreground text-sm">50%</span>
      </div>
      <Slider id="volume" defaultValue={[50]} max={100} step={1} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Always display the current value and use a Label for accessibility.',
      },
    },
  },
}

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
    max: 100,
    step: 1,
    className: 'w-[60%]',
  },
  parameters: {
    docs: {
      description: {
        story: 'Range mode with two thumbs for selecting a min-max range.',
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    disabled: true,
    className: 'w-[60%]',
  },
}

export const CustomRange: Story = {
  args: {
    defaultValue: [25],
    min: 0,
    max: 50,
    step: 5,
    className: 'w-[60%]',
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom range with defined min, max, and step values.',
      },
    },
  },
}

export const SmallSteps: Story = {
  args: {
    defaultValue: [0.5],
    min: 0,
    max: 1,
    step: 0.1,
    className: 'w-[60%]',
  },
  parameters: {
    docs: {
      description: {
        story: 'Fine-grained control with small step increments.',
      },
    },
  },
}

export const Vertical: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    orientation: 'vertical',
    className: 'h-[200px]',
  },
  parameters: {
    docs: {
      description: {
        story: 'Vertical orientation for specific layout requirements.',
      },
    },
  },
}

export const VerticalRange: Story = {
  args: {
    defaultValue: [25, 75],
    max: 100,
    step: 1,
    orientation: 'vertical',
    className: 'h-[200px]',
  },
}

export const MultipleSliders: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-6">
      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="brightness">Brightness</Label>
          <span className="text-muted-foreground text-sm">75%</span>
        </div>
        <Slider id="brightness" defaultValue={[75]} max={100} step={1} />
      </div>
      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="contrast">Contrast</Label>
          <span className="text-muted-foreground text-sm">50%</span>
        </div>
        <Slider id="contrast" defaultValue={[50]} max={100} step={1} />
      </div>
      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="saturation">Saturation</Label>
          <span className="text-muted-foreground text-sm">100%</span>
        </div>
        <Slider id="saturation" defaultValue={[100]} max={100} step={1} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple sliders in a settings panel layout.',
      },
    },
  },
}

export const PriceRange: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-4">
      <div className="flex items-center justify-between">
        <Label>Price Range</Label>
        <span className="text-muted-foreground text-sm">$200 - $800</span>
      </div>
      <Slider defaultValue={[200, 800]} min={0} max={1000} step={50} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Range slider for filtering by price or other numeric ranges.',
      },
    },
  },
}

/**
 * Interactive slider with controlled state that updates in real-time.
 */
export const Interactive: Story = {
  render: function InteractiveSlider() {
    const [value, setValue] = React.useState([50])

    return (
      <div className="grid w-full max-w-sm gap-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="interactive-slider">Volume</Label>
          <span className="w-12 text-right text-sm font-medium">{value[0]}%</span>
        </div>
        <Slider
          id="interactive-slider"
          value={value}
          onValueChange={setValue}
          max={100}
          step={1}
        />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive slider with controlled state. Drag to see the value update in real-time.',
      },
    },
  },
}

/**
 * Interactive range slider with controlled state for min/max selection.
 */
export const InteractiveRange: Story = {
  render: function InteractiveRangeSlider() {
    const [range, setRange] = React.useState([200, 800])

    return (
      <div className="grid w-full max-w-sm gap-4">
        <div className="flex items-center justify-between">
          <Label>Price Range</Label>
          <span className="text-sm font-medium">
            ${range[0]} - ${range[1]}
          </span>
        </div>
        <Slider
          value={range}
          onValueChange={setRange}
          min={0}
          max={1000}
          step={50}
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>$0</span>
          <span>$1000</span>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive range slider with two thumbs for min/max selection. Both values update in real-time.',
      },
    },
  },
}

/**
 * Interactive slider panel with multiple controlled sliders.
 */
export const InteractivePanel: Story = {
  render: function InteractiveSliderPanel() {
    const [brightness, setBrightness] = React.useState([75])
    const [contrast, setContrast] = React.useState([50])
    const [saturation, setSaturation] = React.useState([100])

    return (
      <div className="grid w-full max-w-sm gap-6">
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="interactive-brightness">Brightness</Label>
            <span className="w-12 text-right text-sm font-medium">{brightness[0]}%</span>
          </div>
          <Slider
            id="interactive-brightness"
            value={brightness}
            onValueChange={setBrightness}
            max={100}
            step={1}
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="interactive-contrast">Contrast</Label>
            <span className="w-12 text-right text-sm font-medium">{contrast[0]}%</span>
          </div>
          <Slider
            id="interactive-contrast"
            value={contrast}
            onValueChange={setContrast}
            max={100}
            step={1}
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="interactive-saturation">Saturation</Label>
            <span className="w-12 text-right text-sm font-medium">{saturation[0]}%</span>
          </div>
          <Slider
            id="interactive-saturation"
            value={saturation}
            onValueChange={setSaturation}
            max={100}
            step={1}
          />
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive slider panel demonstrating real-world usage with multiple controlled sliders.',
      },
    },
  },
}

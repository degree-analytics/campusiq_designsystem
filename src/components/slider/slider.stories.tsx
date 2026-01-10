import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './slider'
import { Label } from '@/components/label/label'

const meta: Meta<typeof Slider> = {
  title: 'Components/Form/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    min: {
      control: 'number',
    },
    max: {
      control: 'number',
    },
    step: {
      control: 'number',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
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
}

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
    max: 100,
    step: 1,
    className: 'w-[60%]',
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
}

export const SmallSteps: Story = {
  args: {
    defaultValue: [0.5],
    min: 0,
    max: 1,
    step: 0.1,
    className: 'w-[60%]',
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
}

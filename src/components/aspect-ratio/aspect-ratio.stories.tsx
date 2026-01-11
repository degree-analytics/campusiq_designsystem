import type { Meta, StoryObj } from '@storybook/react'
import { AspectRatio } from './aspect-ratio'

const meta: Meta<typeof AspectRatio> = {
  title: 'Components/Layout/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Aspect Ratio

Displays content within a desired ratio. Built on Radix UI Aspect Ratio primitive.

### When to Use
- Displaying images that need to maintain consistent proportions
- Video embeds and media players
- Card thumbnails in grid layouts
- Hero images and banners
- Any content that requires a fixed aspect ratio regardless of container width

### When NOT to Use
- When content should flow naturally without constraints
- For text-heavy content that needs flexible height
- When the aspect ratio would cause significant content cropping

### Accessibility
- Purely presentational component
- Ensure contained images have proper alt text
- Videos should include captions and transcripts
- Consider providing alternative text descriptions for visual content

### Common Ratios
- 16:9 - Standard widescreen video
- 4:3 - Traditional TV/photo format
- 1:1 - Square format (social media)
- 21:9 - Ultra-wide cinematic
- 3:4 - Portrait orientation
        `,
      },
    },
  },
  argTypes: {
    ratio: {
      control: 'number',
      description: 'The desired aspect ratio (width/height)',
    },
  },
}

export default meta
type Story = StoryObj<typeof AspectRatio>

export const Default: Story = {
  render: () => (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="h-full w-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
}

export const Square: Story = {
  render: () => (
    <div className="w-[300px]">
      <AspectRatio ratio={1} className="bg-muted">
        <img
          src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
          alt="Photo by Luca Bravo"
          className="h-full w-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
}

export const Portrait: Story = {
  render: () => (
    <div className="w-[250px]">
      <AspectRatio ratio={3 / 4} className="bg-muted">
        <img
          src="https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=300&dpr=2&q=80"
          alt="Portrait photo"
          className="h-full w-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
}

export const UltraWide: Story = {
  render: () => (
    <div className="w-[600px]">
      <AspectRatio ratio={21 / 9} className="bg-muted">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&dpr=2&q=80"
          alt="Landscape by David Marcu"
          className="h-full w-full rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
}

export const WithPlaceholder: Story = {
  render: () => (
    <div className="w-[400px]">
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-md">
        <div className="flex h-full w-full items-center justify-center">
          <span className="text-muted-foreground text-sm">16:9 Aspect Ratio</span>
        </div>
      </AspectRatio>
    </div>
  ),
}

export const VideoEmbed: Story = {
  render: () => (
    <div className="w-[560px]">
      <AspectRatio ratio={16 / 9}>
        <div className="flex h-full w-full items-center justify-center rounded-md bg-black text-white">
          <span>Video Player Placeholder</span>
        </div>
      </AspectRatio>
    </div>
  ),
}

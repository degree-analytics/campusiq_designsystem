import type { Meta, StoryObj } from '@storybook/react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './carousel'
import { Card, CardContent } from '@/components/card/card'

const meta: Meta<typeof Carousel> = {
  title: 'Components/Data Display/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Carousel

A slideshow component for cycling through elements. Built on Embla Carousel for smooth, touch-enabled navigation.

### When to Use
- Image galleries and photo sliders
- Product showcases with multiple images
- Testimonial sliders
- Featured content highlights
- Step-by-step tutorials or onboarding flows
- News or article previews

### When NOT to Use
- For critical content that users must see (content may be missed)
- When all items should be visible at once (use Grid instead)
- For very few items (2 or less)
- On pages with heavy performance requirements

### Accessibility
- Provides keyboard navigation with arrow keys
- Previous/Next buttons are properly labeled
- Consider auto-play carefully (can be disorienting)
- Ensure sufficient color contrast for navigation controls
- Include visible pagination indicators when possible
- Respect reduced motion preferences

### Features
- Touch and swipe support on mobile devices
- Multiple items per view with responsive breakpoints
- Horizontal and vertical orientations
- Loop and non-loop modes
- Configurable alignment and spacing
        `,
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the carousel',
    },
  },
}

export default meta
type Story = StoryObj<typeof Carousel>

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-xs px-12">
      <Carousel>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}

export const WithImages: Story = {
  render: () => {
    const images = [
      'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop',
    ]

    return (
      <div className="w-full max-w-lg px-12">
        <Carousel>
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="aspect-video w-full rounded-lg object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    )
  },
}

export const MultipleItems: Story = {
  render: () => (
    <div className="w-full max-w-4xl px-12">
      <Carousel
        opts={{
          align: 'start',
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 pl-2 md:basis-1/3 md:pl-4"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="w-full max-w-xs py-12">
      <Carousel orientation="vertical" className="h-[400px]">
        <CarouselContent className="-mt-4 h-[400px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/3 pt-4">
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}

export const ProductCards: Story = {
  render: () => {
    const products = [
      { name: 'Product A', price: '$99', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop' },
      { name: 'Product B', price: '$149', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop' },
      { name: 'Product C', price: '$79', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop' },
      { name: 'Product D', price: '$199', image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=300&h=300&fit=crop' },
      { name: 'Product E', price: '$129', image: 'https://images.unsplash.com/photo-1491553895911-0055uj6?w=300&h=300&fit=crop' },
    ]

    return (
      <div className="w-full max-w-3xl px-12">
        <Carousel opts={{ align: 'start' }}>
          <CarouselContent className="-ml-4">
            {products.map((product, index) => (
              <CarouselItem key={index} className="basis-1/2 pl-4 md:basis-1/3">
                <Card>
                  <CardContent className="p-4">
                    <div className="aspect-square overflow-hidden rounded-md bg-muted">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="mt-3">
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {product.price}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    )
  },
}

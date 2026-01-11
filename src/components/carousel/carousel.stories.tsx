import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from './carousel'
import { Card, CardContent } from '@/components/card/card'
import { cn } from '@/lib/utils'

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

export const WithLoop: Story = {
  render: () => (
    <div className="w-full max-w-xs px-12">
      <Carousel opts={{ loop: true }}>
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
      <p className="mt-4 text-center text-sm text-muted-foreground">
        Loop enabled - navigation wraps around
      </p>
    </div>
  ),
}

export const WithPaginationDots: Story = {
  render: function Render() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
      if (!api) return

      setCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap())

      api.on('select', () => {
        setCurrent(api.selectedScrollSnap())
      })
    }, [api])

    return (
      <div className="w-full max-w-xs">
        <Carousel setApi={setApi} className="w-full">
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
        </Carousel>
        <div className="flex justify-center gap-2 py-4">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={cn(
                'h-2 w-2 rounded-full transition-colors',
                index === current ? 'bg-primary' : 'bg-muted-foreground/30'
              )}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground">
          Slide {current + 1} of {count}
        </p>
      </div>
    )
  },
}

export const WithAutoplay: Story = {
  render: function Render() {
    const plugin = React.useRef(
      Autoplay({ delay: 3000, stopOnInteraction: true })
    )

    return (
      <div className="w-full max-w-xs px-12">
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
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
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Auto-advances every 3 seconds. Hover to pause.
        </p>
      </div>
    )
  },
}

export const ThumbnailNavigation: Story = {
  render: function Render() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)

    const images = [
      'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=800&h=600&fit=crop',
    ]

    React.useEffect(() => {
      if (!api) return

      setCurrent(api.selectedScrollSnap())

      api.on('select', () => {
        setCurrent(api.selectedScrollSnap())
      })
    }, [api])

    return (
      <div className="w-full max-w-lg">
        <Carousel setApi={setApi} className="w-full">
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
        </Carousel>
        <div className="flex justify-center gap-2 py-4">
          {images.map((src, index) => (
            <button
              key={index}
              className={cn(
                'h-16 w-20 overflow-hidden rounded-md border-2 transition-colors',
                index === current ? 'border-primary' : 'border-transparent'
              )}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <img
                src={src}
                alt={`Thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    )
  },
}

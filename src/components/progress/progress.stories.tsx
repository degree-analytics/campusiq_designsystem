import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Progress } from './progress'

const meta: Meta<typeof Progress> = {
  title: 'Components/Feedback/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'The progress value from 0 to 100',
    },
  },
}

export default meta
type Story = StoryObj<typeof Progress>

export const Default: Story = {
  args: {
    value: 60,
  },
  render: (args) => <Progress {...args} className="w-[400px]" />,
}

export const Empty: Story = {
  args: {
    value: 0,
  },
  render: (args) => (
    <div className="w-[400px] space-y-2">
      <Progress {...args} />
      <p className="text-sm text-muted-foreground text-center">0% complete</p>
    </div>
  ),
}

export const Partial: Story = {
  args: {
    value: 50,
  },
  render: (args) => (
    <div className="w-[400px] space-y-2">
      <Progress {...args} />
      <p className="text-sm text-muted-foreground text-center">50% complete</p>
    </div>
  ),
}

export const Complete: Story = {
  args: {
    value: 100,
  },
  render: (args) => (
    <div className="w-[400px] space-y-2">
      <Progress {...args} />
      <p className="text-sm text-muted-foreground text-center">100% complete</p>
    </div>
  ),
}

export const AllValues: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>0%</span>
        </div>
        <Progress value={0} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>25%</span>
        </div>
        <Progress value={25} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>50%</span>
        </div>
        <Progress value={50} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>75%</span>
        </div>
        <Progress value={75} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>100%</span>
        </div>
        <Progress value={100} />
      </div>
    </div>
  ),
}

export const WithLabel: Story = {
  args: {
    value: 66,
  },
  render: (args) => (
    <div className="w-[400px] space-y-2">
      <div className="flex justify-between text-sm">
        <span>Uploading file...</span>
        <span>{args.value}%</span>
      </div>
      <Progress {...args} />
    </div>
  ),
}

export const Animated: Story = {
  render: function AnimatedProgress() {
    const [progress, setProgress] = React.useState(0)

    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0
          }
          return prev + 10
        })
      }, 500)

      return () => clearInterval(timer)
    }, [])

    return (
      <div className="w-[400px] space-y-2">
        <div className="flex justify-between text-sm">
          <span>Loading...</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} />
      </div>
    )
  },
}

export const CustomColors: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <div className="space-y-2">
        <span className="text-sm">Default</span>
        <Progress value={60} />
      </div>
      <div className="space-y-2">
        <span className="text-sm">Success (Green)</span>
        <Progress
          value={80}
          className="[&>div]:bg-green-500"
        />
      </div>
      <div className="space-y-2">
        <span className="text-sm">Warning (Yellow)</span>
        <Progress
          value={45}
          className="[&>div]:bg-yellow-500"
        />
      </div>
      <div className="space-y-2">
        <span className="text-sm">Error (Red)</span>
        <Progress
          value={25}
          className="[&>div]:bg-red-500"
        />
      </div>
      <div className="space-y-2">
        <span className="text-sm">Gradient</span>
        <Progress
          value={70}
          className="[&>div]:bg-gradient-to-r [&>div]:from-blue-500 [&>div]:to-purple-500"
        />
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <div className="space-y-2">
        <span className="text-sm">Small (h-1)</span>
        <Progress value={60} className="h-1" />
      </div>
      <div className="space-y-2">
        <span className="text-sm">Default (h-2)</span>
        <Progress value={60} />
      </div>
      <div className="space-y-2">
        <span className="text-sm">Medium (h-3)</span>
        <Progress value={60} className="h-3" />
      </div>
      <div className="space-y-2">
        <span className="text-sm">Large (h-4)</span>
        <Progress value={60} className="h-4" />
      </div>
    </div>
  ),
}

export const FileUpload: Story = {
  render: function FileUploadProgress() {
    const [progress, setProgress] = React.useState(0)
    const [status, setStatus] = React.useState<'idle' | 'uploading' | 'complete'>('idle')

    const startUpload = () => {
      setProgress(0)
      setStatus('uploading')

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setStatus('complete')
            return 100
          }
          return prev + Math.random() * 15
        })
      }, 300)
    }

    return (
      <div className="w-[400px] space-y-4">
        <div className="rounded-lg border p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-muted">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">document.pdf</p>
              <p className="text-xs text-muted-foreground">2.4 MB</p>
            </div>
            {status === 'complete' && (
              <span className="text-sm text-green-600">Complete</span>
            )}
          </div>
          {status === 'uploading' && (
            <div className="mt-3 space-y-1">
              <Progress value={Math.min(progress, 100)} />
              <p className="text-xs text-muted-foreground">
                {Math.min(Math.round(progress), 100)}% uploaded
              </p>
            </div>
          )}
        </div>
        <button
          onClick={startUpload}
          disabled={status === 'uploading'}
          className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
        >
          {status === 'idle' ? 'Start Upload' : status === 'uploading' ? 'Uploading...' : 'Upload Again'}
        </button>
      </div>
    )
  },
}

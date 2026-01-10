import { cn } from '@/lib/utils'

function App() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className={cn('text-4xl font-bold text-foreground')}>
          CampusIQ Component Library
        </h1>
        <p className="text-muted-foreground">
          React + TypeScript + Tailwind CSS v4
        </p>
      </div>
    </div>
  )
}

export default App

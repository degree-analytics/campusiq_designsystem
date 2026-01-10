import type { Meta, StoryObj } from '@storybook/react'
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
} from 'recharts'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from './chart'

const meta: Meta = {
  title: 'Components/Data Display/Chart',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj

const barChartData = [
  { month: 'Jan', revenue: 4000, expenses: 2400 },
  { month: 'Feb', revenue: 3000, expenses: 1398 },
  { month: 'Mar', revenue: 2000, expenses: 9800 },
  { month: 'Apr', revenue: 2780, expenses: 3908 },
  { month: 'May', revenue: 1890, expenses: 4800 },
  { month: 'Jun', revenue: 2390, expenses: 3800 },
]

const barChartConfig: ChartConfig = {
  revenue: {
    label: 'Revenue',
    color: 'hsl(var(--chart-1))',
  },
  expenses: {
    label: 'Expenses',
    color: 'hsl(var(--chart-2))',
  },
}

export const BarChartExample: Story = {
  render: () => (
    <ChartContainer config={barChartConfig} className="h-[300px] w-[500px]">
      <BarChart data={barChartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
        <Bar dataKey="expenses" fill="var(--color-expenses)" radius={4} />
      </BarChart>
    </ChartContainer>
  ),
}

const lineChartData = [
  { month: 'Jan', users: 400, sessions: 240 },
  { month: 'Feb', users: 300, sessions: 139 },
  { month: 'Mar', users: 200, sessions: 980 },
  { month: 'Apr', users: 278, sessions: 390 },
  { month: 'May', users: 189, sessions: 480 },
  { month: 'Jun', users: 239, sessions: 380 },
  { month: 'Jul', users: 349, sessions: 430 },
]

const lineChartConfig: ChartConfig = {
  users: {
    label: 'Users',
    color: 'hsl(var(--chart-1))',
  },
  sessions: {
    label: 'Sessions',
    color: 'hsl(var(--chart-2))',
  },
}

export const LineChartExample: Story = {
  render: () => (
    <ChartContainer config={lineChartConfig} className="h-[300px] w-[500px]">
      <LineChart data={lineChartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Line
          type="monotone"
          dataKey="users"
          stroke="var(--color-users)"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="sessions"
          stroke="var(--color-sessions)"
          strokeWidth={2}
        />
      </LineChart>
    </ChartContainer>
  ),
}

const pieChartData = [
  { name: 'Chrome', value: 400, fill: 'hsl(var(--chart-1))' },
  { name: 'Firefox', value: 300, fill: 'hsl(var(--chart-2))' },
  { name: 'Safari', value: 200, fill: 'hsl(var(--chart-3))' },
  { name: 'Edge', value: 100, fill: 'hsl(var(--chart-4))' },
]

const pieChartConfig: ChartConfig = {
  Chrome: {
    label: 'Chrome',
    color: 'hsl(var(--chart-1))',
  },
  Firefox: {
    label: 'Firefox',
    color: 'hsl(var(--chart-2))',
  },
  Safari: {
    label: 'Safari',
    color: 'hsl(var(--chart-3))',
  },
  Edge: {
    label: 'Edge',
    color: 'hsl(var(--chart-4))',
  },
}

export const PieChartExample: Story = {
  render: () => (
    <ChartContainer config={pieChartConfig} className="h-[300px] w-[400px]">
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
        <ChartLegend content={<ChartLegendContent nameKey="name" />} />
        <Pie
          data={pieChartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
        >
          {pieChartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
      </PieChart>
    </ChartContainer>
  ),
}

const singleBarData = [
  { name: 'Mon', value: 120 },
  { name: 'Tue', value: 200 },
  { name: 'Wed', value: 150 },
  { name: 'Thu', value: 180 },
  { name: 'Fri', value: 250 },
  { name: 'Sat', value: 90 },
  { name: 'Sun', value: 70 },
]

const singleBarConfig: ChartConfig = {
  value: {
    label: 'Visitors',
    color: 'hsl(var(--chart-1))',
  },
}

export const SimpleBarChart: Story = {
  render: () => (
    <ChartContainer config={singleBarConfig} className="h-[250px] w-[400px]">
      <BarChart data={singleBarData}>
        <XAxis dataKey="name" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="value" fill="var(--color-value)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartContainer>
  ),
}

const areaLineData = [
  { month: 'Jan', value: 100 },
  { month: 'Feb', value: 120 },
  { month: 'Mar', value: 115 },
  { month: 'Apr', value: 134 },
  { month: 'May', value: 168 },
  { month: 'Jun', value: 190 },
]

const areaLineConfig: ChartConfig = {
  value: {
    label: 'Growth',
    color: 'hsl(var(--chart-1))',
  },
}

export const SimpleLineChart: Story = {
  render: () => (
    <ChartContainer config={areaLineConfig} className="h-[250px] w-[400px]">
      <LineChart data={areaLineData}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Line
          type="monotone"
          dataKey="value"
          stroke="var(--color-value)"
          strokeWidth={2}
          dot={{ fill: 'var(--color-value)' }}
        />
      </LineChart>
    </ChartContainer>
  ),
}

const donutData = [
  { name: 'Desktop', value: 60, fill: 'hsl(var(--chart-1))' },
  { name: 'Mobile', value: 30, fill: 'hsl(var(--chart-2))' },
  { name: 'Tablet', value: 10, fill: 'hsl(var(--chart-3))' },
]

const donutConfig: ChartConfig = {
  Desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))',
  },
  Mobile: {
    label: 'Mobile',
    color: 'hsl(var(--chart-2))',
  },
  Tablet: {
    label: 'Tablet',
    color: 'hsl(var(--chart-3))',
  },
}

export const DonutChart: Story = {
  render: () => (
    <ChartContainer config={donutConfig} className="h-[300px] w-[350px]">
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
        <ChartLegend content={<ChartLegendContent nameKey="name" />} />
        <Pie
          data={donutData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={90}
        >
          {donutData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
      </PieChart>
    </ChartContainer>
  ),
}

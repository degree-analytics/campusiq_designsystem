import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from './table'
import { ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react'

const meta: Meta<typeof Table> = {
  title: 'Components/Data Display/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Table

A responsive table component for displaying tabular data with consistent styling and accessibility features.

### When to Use
- Displaying structured data in rows and columns
- Comparing multiple items across attributes
- Financial data, invoices, and reports
- User lists and admin dashboards
- Data grids with sorting and filtering

### When NOT to Use
- For simple key-value pairs (use Description List)
- When data has only one column (use List)
- For complex interactive grids (consider DataGrid libraries)
- When layout needs to be more flexible

### Accessibility
- Uses semantic HTML table elements
- Proper header cell associations
- Support for table captions
- Keyboard navigable cells
- Screen reader compatible structure
- Consider row selection states for interactive tables

### Composition
- **Table**: The wrapper component
- **TableHeader**: Contains header rows
- **TableBody**: Contains data rows
- **TableFooter**: Contains footer/summary rows
- **TableRow**: Individual table row
- **TableHead**: Header cell (th)
- **TableCell**: Data cell (td)
- **TableCaption**: Accessible table description
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Table>

const invoices = [
  { invoice: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
  { invoice: 'INV002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
  { invoice: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: '$350.00' },
  { invoice: 'INV004', status: 'Paid', method: 'Credit Card', amount: '$450.00' },
  { invoice: 'INV005', status: 'Paid', method: 'PayPal', amount: '$550.00' },
  { invoice: 'INV006', status: 'Pending', method: 'Bank Transfer', amount: '$200.00' },
  { invoice: 'INV007', status: 'Unpaid', method: 'Credit Card', amount: '$300.00' },
]

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell className="text-right">{invoice.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}

export const Simple: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>Editor</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob Johnson</TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>Viewer</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

export const WithStatusBadges: Story = {
  render: () => {
    const getStatusColor = (status: string) => {
      switch (status) {
        case 'Paid':
          return 'bg-green-100 text-green-800'
        case 'Pending':
          return 'bg-yellow-100 text-yellow-800'
        case 'Unpaid':
          return 'bg-red-100 text-red-800'
        default:
          return 'bg-gray-100 text-gray-800'
      }
    }

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>
                <span
                  className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(invoice.status)}`}
                >
                  {invoice.status}
                </span>
              </TableCell>
              <TableCell>{invoice.method}</TableCell>
              <TableCell className="text-right">{invoice.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  },
}

export const WithActions: Story = {
  render: () => {
    const users = [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer' },
    ]

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <button className="rounded px-2 py-1 text-sm hover:bg-muted">
                    Edit
                  </button>
                  <button className="rounded px-2 py-1 text-sm text-red-600 hover:bg-red-50">
                    Delete
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  },
}

export const ProductTable: Story = {
  render: () => {
    const products = [
      { id: 'PROD001', name: 'Laptop Pro', category: 'Electronics', price: '$1,299', stock: 45 },
      { id: 'PROD002', name: 'Wireless Mouse', category: 'Accessories', price: '$29', stock: 230 },
      { id: 'PROD003', name: 'USB-C Hub', category: 'Accessories', price: '$79', stock: 89 },
      { id: 'PROD004', name: 'Monitor 27"', category: 'Electronics', price: '$399', stock: 12 },
      { id: 'PROD005', name: 'Keyboard', category: 'Accessories', price: '$149', stock: 67 },
    ]

    return (
      <Table>
        <TableCaption>Current inventory as of today.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Stock</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-mono text-sm">{product.id}</TableCell>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell className="text-right">{product.price}</TableCell>
              <TableCell className="text-right">
                <span
                  className={
                    product.stock < 20
                      ? 'text-red-600 font-medium'
                      : product.stock < 50
                        ? 'text-yellow-600'
                        : ''
                  }
                >
                  {product.stock}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total Items</TableCell>
            <TableCell className="text-right">443</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  },
}

export const SelectableRows: Story = {
  render: () => {
    const users = [
      { id: 1, name: 'John Doe', email: 'john@example.com', selected: false },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', selected: true },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com', selected: false },
    ]

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">
              <input type="checkbox" className="rounded" />
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} data-state={user.selected ? 'selected' : undefined}>
              <TableCell>
                <input type="checkbox" checked={user.selected} readOnly className="rounded" />
              </TableCell>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  },
}

export const SortableTable: Story = {
  render: function Render() {
    const [sortKey, setSortKey] = React.useState<string | null>(null)
    const [sortOrder, setSortOrder] = React.useState<'asc' | 'desc'>('asc')

    const data = [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', joined: '2024-01-15' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', joined: '2024-02-20' },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer', joined: '2024-03-10' },
      { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', joined: '2024-01-05' },
      { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Admin', joined: '2024-04-01' },
    ]

    const sortedData = React.useMemo(() => {
      if (!sortKey) return data
      return [...data].sort((a, b) => {
        const aValue = a[sortKey as keyof typeof a]
        const bValue = b[sortKey as keyof typeof b]
        const comparison = String(aValue).localeCompare(String(bValue))
        return sortOrder === 'asc' ? comparison : -comparison
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortKey, sortOrder])

    const handleSort = (key: string) => {
      if (sortKey === key) {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
      } else {
        setSortKey(key)
        setSortOrder('asc')
      }
    }

    const SortIcon = ({ columnKey }: { columnKey: string }) => {
      if (sortKey !== columnKey) {
        return <ChevronsUpDown className="ml-1 h-4 w-4 text-muted-foreground/50" />
      }
      return sortOrder === 'asc' ? (
        <ChevronUp className="ml-1 h-4 w-4" />
      ) : (
        <ChevronDown className="ml-1 h-4 w-4" />
      )
    }

    return (
      <Table>
        <TableCaption>Click column headers to sort</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>
              <button
                className="flex items-center hover:text-foreground"
                onClick={() => handleSort('name')}
              >
                Name
                <SortIcon columnKey="name" />
              </button>
            </TableHead>
            <TableHead>
              <button
                className="flex items-center hover:text-foreground"
                onClick={() => handleSort('email')}
              >
                Email
                <SortIcon columnKey="email" />
              </button>
            </TableHead>
            <TableHead>
              <button
                className="flex items-center hover:text-foreground"
                onClick={() => handleSort('role')}
              >
                Role
                <SortIcon columnKey="role" />
              </button>
            </TableHead>
            <TableHead className="text-right">
              <button
                className="flex items-center justify-end hover:text-foreground ml-auto"
                onClick={() => handleSort('joined')}
              >
                Joined
                <SortIcon columnKey="joined" />
              </button>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="font-medium">{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell className="text-right">{row.joined}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  },
}

export const ResponsiveTable: Story = {
  render: () => (
    <div className="w-full overflow-auto">
      <Table className="min-w-[600px]">
        <TableCaption>Scroll horizontally on smaller screens</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Stock</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            { id: 'PROD001', name: 'Laptop Pro', category: 'Electronics', status: 'In Stock', price: '$1,299', stock: 45 },
            { id: 'PROD002', name: 'Wireless Mouse', category: 'Accessories', status: 'Low Stock', price: '$29', stock: 12 },
            { id: 'PROD003', name: 'USB-C Hub', category: 'Accessories', status: 'In Stock', price: '$79', stock: 89 },
            { id: 'PROD004', name: 'Monitor 27"', category: 'Electronics', status: 'Out of Stock', price: '$399', stock: 0 },
          ].map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-mono text-sm">{product.id}</TableCell>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>
                <span
                  className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                    product.status === 'In Stock'
                      ? 'bg-green-100 text-green-800'
                      : product.status === 'Low Stock'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                  }`}
                >
                  {product.status}
                </span>
              </TableCell>
              <TableCell className="text-right">{product.price}</TableCell>
              <TableCell className="text-right">{product.stock}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
}

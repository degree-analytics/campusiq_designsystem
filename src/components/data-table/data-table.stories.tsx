import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { DataTable, type DataTableColumn } from "./data-table"
import { Badge } from "@/components/badge"

const meta: Meta<typeof DataTable> = {
  title: "Components/Data Display/DataTable",
  component: DataTable,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
## DataTable

An enhanced table component with sorting, filtering, pagination, and row selection capabilities.

### When to Use
- Displaying large datasets that need pagination
- Data that users need to sort or filter
- Tables requiring row selection for bulk actions
- Admin dashboards and data management interfaces
- Reports with sortable columns

### When NOT to Use
- Simple static tables (use basic Table component)
- Small datasets that do not need pagination
- When custom table layouts are required
- For non-tabular data display

### Features
- **Column Sorting**: Click headers to sort ascending/descending
- **Pagination**: Navigate through large datasets with page controls
- **Row Selection**: Optional checkbox selection with select-all
- **Column Visibility**: Hide/show columns as needed
- **Keyboard Navigation**: Full keyboard support for accessibility
- **Responsive**: Works across all screen sizes

### Accessibility
- Semantic table structure with proper ARIA attributes
- Keyboard navigation between rows (Arrow keys)
- Space/Enter to select rows
- Screen reader announcements for sort state
- Focus indicators for keyboard users

### Column Definition
\`\`\`tsx
const columns: DataTableColumn<User>[] = [
  {
    id: "name",
    header: "Name",
    accessorKey: "name",
    sortable: true,
  },
  {
    id: "email",
    header: "Email",
    accessorFn: (row) => row.email.toLowerCase(),
  },
  {
    id: "status",
    header: "Status",
    accessorKey: "status",
    cell: (value) => <Badge>{value}</Badge>,
  },
]
\`\`\`
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof DataTable>

// Sample data types
interface User {
  id: number
  name: string
  email: string
  role: string
  status: "active" | "inactive" | "pending"
  joinDate: string
}

interface Invoice {
  id: string
  customer: string
  status: "paid" | "pending" | "overdue"
  amount: number
  date: string
}

// Sample data
const users: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "active", joinDate: "2024-01-15" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor", status: "active", joinDate: "2024-02-20" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Viewer", status: "inactive", joinDate: "2024-03-10" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Editor", status: "pending", joinDate: "2024-03-15" },
  { id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "Admin", status: "active", joinDate: "2024-04-01" },
  { id: 6, name: "Diana Lee", email: "diana@example.com", role: "Viewer", status: "active", joinDate: "2024-04-10" },
  { id: 7, name: "Edward Kim", email: "edward@example.com", role: "Editor", status: "inactive", joinDate: "2024-04-15" },
  { id: 8, name: "Fiona Chen", email: "fiona@example.com", role: "Viewer", status: "active", joinDate: "2024-05-01" },
  { id: 9, name: "George Wang", email: "george@example.com", role: "Admin", status: "pending", joinDate: "2024-05-10" },
  { id: 10, name: "Hannah Park", email: "hannah@example.com", role: "Editor", status: "active", joinDate: "2024-05-15" },
  { id: 11, name: "Ivan Rodriguez", email: "ivan@example.com", role: "Viewer", status: "active", joinDate: "2024-06-01" },
  { id: 12, name: "Julia Martinez", email: "julia@example.com", role: "Editor", status: "inactive", joinDate: "2024-06-10" },
]

const invoices: Invoice[] = [
  { id: "INV001", customer: "Acme Corp", status: "paid", amount: 1250.00, date: "2024-06-01" },
  { id: "INV002", customer: "Globex Inc", status: "pending", amount: 3420.50, date: "2024-06-05" },
  { id: "INV003", customer: "Initech", status: "overdue", amount: 890.00, date: "2024-05-15" },
  { id: "INV004", customer: "Umbrella Corp", status: "paid", amount: 4500.00, date: "2024-06-10" },
  { id: "INV005", customer: "Stark Industries", status: "pending", amount: 12000.00, date: "2024-06-12" },
  { id: "INV006", customer: "Wayne Enterprises", status: "paid", amount: 7890.25, date: "2024-06-08" },
  { id: "INV007", customer: "Oscorp", status: "overdue", amount: 2340.00, date: "2024-05-20" },
  { id: "INV008", customer: "LexCorp", status: "pending", amount: 5670.00, date: "2024-06-14" },
]

// Column definitions
const userColumns: DataTableColumn<User>[] = [
  {
    id: "name",
    header: "Name",
    accessorKey: "name",
    sortable: true,
    cellClassName: "font-medium",
  },
  {
    id: "email",
    header: "Email",
    accessorKey: "email",
    sortable: true,
  },
  {
    id: "role",
    header: "Role",
    accessorKey: "role",
    sortable: true,
  },
  {
    id: "status",
    header: "Status",
    accessorKey: "status",
    sortable: true,
    cell: (value) => {
      const status = value as User["status"]
      const variant = status === "active" ? "success" : status === "pending" ? "warning" : "secondary"
      return <Badge variant={variant}>{status}</Badge>
    },
  },
  {
    id: "joinDate",
    header: "Join Date",
    accessorKey: "joinDate",
    sortable: true,
    align: "right",
  },
]

const invoiceColumns: DataTableColumn<Invoice>[] = [
  {
    id: "id",
    header: "Invoice",
    accessorKey: "id",
    sortable: true,
    cellClassName: "font-mono text-sm",
  },
  {
    id: "customer",
    header: "Customer",
    accessorKey: "customer",
    sortable: true,
    cellClassName: "font-medium",
  },
  {
    id: "status",
    header: "Status",
    accessorKey: "status",
    sortable: true,
    cell: (value) => {
      const status = value as Invoice["status"]
      const variant = status === "paid" ? "success" : status === "pending" ? "warning" : "destructive"
      return <Badge variant={variant}>{status}</Badge>
    },
  },
  {
    id: "amount",
    header: "Amount",
    accessorKey: "amount",
    sortable: true,
    align: "right",
    cell: (value) => {
      const amount = value as number
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
    },
  },
  {
    id: "date",
    header: "Date",
    accessorKey: "date",
    sortable: true,
    align: "right",
  },
]

export const Default: Story = {
  render: () => (
    <DataTable
      data={users}
      columns={userColumns}
      caption="User management table"
    />
  ),
}

export const WithSelection: Story = {
  render: () => {
    const [selectedRows, setSelectedRows] = React.useState<Set<string | number>>(new Set())

    return (
      <div className="space-y-4">
        <DataTable
          data={users}
          columns={userColumns}
          selectable
          selectedRows={selectedRows}
          onSelectionChange={setSelectedRows}
          caption="Selectable user table"
        />
        {selectedRows.size > 0 && (
          <div className="rounded-md bg-muted p-4">
            <p className="text-sm">
              Selected IDs: {Array.from(selectedRows).join(", ")}
            </p>
          </div>
        )}
      </div>
    )
  },
}

export const NoPagination: Story = {
  render: () => (
    <DataTable
      data={users.slice(0, 5)}
      columns={userColumns}
      paginated={false}
      caption="Small dataset without pagination"
    />
  ),
}

export const CustomPageSize: Story = {
  render: () => (
    <DataTable
      data={users}
      columns={userColumns}
      pageSize={5}
      pageSizeOptions={[5, 10, 15]}
      caption="Table with custom page sizes"
    />
  ),
}

export const InvoiceTable: Story = {
  render: () => (
    <DataTable
      data={invoices}
      columns={invoiceColumns}
      selectable
      pageSize={5}
      caption="Invoice management table"
    />
  ),
}

export const WithColumnVisibility: Story = {
  render: () => {
    const columnsWithHideable: DataTableColumn<User>[] = userColumns.map((col) => ({
      ...col,
      hideable: col.id !== "name", // All columns except name can be hidden
    }))

    return (
      <DataTable
        data={users}
        columns={columnsWithHideable}
        showColumnVisibility
        caption="Table with hideable columns"
      />
    )
  },
}

export const Loading: Story = {
  render: () => (
    <DataTable
      data={[]}
      columns={userColumns}
      loading
      caption="Loading state example"
    />
  ),
}

export const Empty: Story = {
  render: () => (
    <DataTable
      data={[]}
      columns={userColumns}
      emptyMessage="No users found. Try adjusting your filters."
      caption="Empty state example"
    />
  ),
}

export const LargeDataset: Story = {
  render: () => {
    // Generate a larger dataset
    const largeData: User[] = Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: ["Admin", "Editor", "Viewer"][i % 3],
      status: (["active", "inactive", "pending"] as const)[i % 3],
      joinDate: `2024-${String((i % 12) + 1).padStart(2, "0")}-${String((i % 28) + 1).padStart(2, "0")}`,
    }))

    return (
      <DataTable
        data={largeData}
        columns={userColumns}
        selectable
        pageSize={20}
        pageSizeOptions={[20, 50, 100]}
        caption="Large dataset with 100 users"
      />
    )
  },
}

export const CustomCellRenderers: Story = {
  render: () => {
    interface Product {
      id: number
      name: string
      price: number
      stock: number
      category: string
    }

    const products: Product[] = [
      { id: 1, name: "Laptop Pro", price: 1299, stock: 45, category: "Electronics" },
      { id: 2, name: "Wireless Mouse", price: 29, stock: 230, category: "Accessories" },
      { id: 3, name: "USB-C Hub", price: 79, stock: 89, category: "Accessories" },
      { id: 4, name: "Monitor 27\"", price: 399, stock: 12, category: "Electronics" },
      { id: 5, name: "Mechanical Keyboard", price: 149, stock: 67, category: "Accessories" },
      { id: 6, name: "Webcam HD", price: 89, stock: 0, category: "Electronics" },
    ]

    const productColumns: DataTableColumn<Product>[] = [
      {
        id: "name",
        header: "Product",
        accessorKey: "name",
        sortable: true,
        cellClassName: "font-medium",
      },
      {
        id: "category",
        header: "Category",
        accessorKey: "category",
        sortable: true,
      },
      {
        id: "price",
        header: "Price",
        accessorKey: "price",
        sortable: true,
        align: "right",
        cell: (value) => {
          const price = value as number
          return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price)
        },
      },
      {
        id: "stock",
        header: "Stock",
        accessorKey: "stock",
        sortable: true,
        align: "right",
        cell: (value) => {
          const stock = value as number
          const color =
            stock === 0
              ? "text-red-600 font-medium"
              : stock < 20
                ? "text-yellow-600 font-medium"
                : stock < 50
                  ? "text-yellow-600"
                  : ""
          return (
            <span className={color}>
              {stock === 0 ? "Out of stock" : stock}
            </span>
          )
        },
      },
    ]

    return (
      <DataTable
        data={products}
        columns={productColumns}
        paginated={false}
        caption="Product inventory with custom cell renderers"
      />
    )
  },
}

export const AccessorFunctionExample: Story = {
  render: () => {
    interface Employee {
      id: number
      firstName: string
      lastName: string
      department: { name: string; code: string }
      salary: number
    }

    const employees: Employee[] = [
      { id: 1, firstName: "John", lastName: "Doe", department: { name: "Engineering", code: "ENG" }, salary: 95000 },
      { id: 2, firstName: "Jane", lastName: "Smith", department: { name: "Marketing", code: "MKT" }, salary: 75000 },
      { id: 3, firstName: "Bob", lastName: "Johnson", department: { name: "Engineering", code: "ENG" }, salary: 85000 },
      { id: 4, firstName: "Alice", lastName: "Brown", department: { name: "Sales", code: "SLS" }, salary: 70000 },
      { id: 5, firstName: "Charlie", lastName: "Wilson", department: { name: "HR", code: "HR" }, salary: 65000 },
    ]

    const employeeColumns: DataTableColumn<Employee>[] = [
      {
        id: "fullName",
        header: "Full Name",
        accessorFn: (row) => `${row.firstName} ${row.lastName}`,
        sortable: true,
        cellClassName: "font-medium",
      },
      {
        id: "department",
        header: "Department",
        accessorFn: (row) => row.department.name,
        sortable: true,
        cell: (value, row) => (
          <span>
            {value as string}{" "}
            <span className="text-muted-foreground text-xs">({row.department.code})</span>
          </span>
        ),
      },
      {
        id: "salary",
        header: "Salary",
        accessorKey: "salary",
        sortable: true,
        align: "right",
        cell: (value) => {
          const salary = value as number
          return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
          }).format(salary)
        },
      },
    ]

    return (
      <DataTable
        data={employees}
        columns={employeeColumns}
        paginated={false}
        caption="Employee table with accessor functions"
      />
    )
  },
}

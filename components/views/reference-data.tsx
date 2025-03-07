import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DataTable } from '@/components/ui/data-table'
import { Card, CardContent } from '@/components/ui/card'
import { Search, Filter, Download } from 'lucide-react'

export interface ReferenceDataItem {
  id: string
  isin: string
  name: string
  type: string
  status: string
  lastUpdated: string
}

export default function ReferenceDataView() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  
  // Example data - would be fetched from API
  const data: ReferenceDataItem[] = [
    {
      id: '1',
      isin: 'US0378331005',
      name: 'Example Instrument 1',
      type: 'Equity',
      status: 'Active',
      lastUpdated: '2025-03-07'
    },
    // More items would be added here
  ]

  const columns = [
    { accessorKey: 'isin', header: 'ISIN' },
    { accessorKey: 'name', header: 'Name' },
    { accessorKey: 'type', header: 'Type' },
    { accessorKey: 'status', header: 'Status' },
    { accessorKey: 'lastUpdated', header: 'Last Updated' }
  ]

  const filteredData = data.filter(item => {
    const matchesSearch = Object.values(item).some(
      value => value.toLowerCase().includes(searchQuery.toLowerCase())
    )
    const matchesFilters = selectedFilters.length === 0 || 
      selectedFilters.includes(item.type)
    return matchesSearch && matchesFilters
  })

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Reference Data</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <Input
            placeholder="Search instruments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <DataTable
            columns={columns}
            data={filteredData}
            initialState={{
              sorting: [{ id: 'lastUpdated', desc: true }],
              pagination: { pageSize: 10 }
            }}
          />
        </CardContent>
      </Card>
    </div>
  )
}
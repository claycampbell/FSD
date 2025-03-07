"use client"

import { useState } from "react"
import { Database, Calendar, FilterX, Download, ExternalLink, Search, FileText, RefreshCw, Eye, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function DataStorage() {
  const [activeTab, setActiveTab] = useState("browse")
  const [searchQuery, setSearchQuery] = useState("")

  // Sample instrument data
  const instrumentData = [
    {
      id: "ISIN00000001",
      name: "Euro Corporate Bond Fund",
      type: "BOND",
      mic: "XETR",
      lei: "549300O4LFMZ51SUI152",
      date: "2024-03-07",
      version: 2,
    },
    {
      id: "ISIN00000002",
      name: "US Technology Index Fund",
      type: "EQTY",
      mic: "XNAS",
      lei: "549300RODN739VTKDF03",
      date: "2024-03-07",
      version: 1,
    },
    {
      id: "ISIN00000003",
      name: "Global High Yield ETF",
      type: "EQTY",
      mic: "XAMS",
      lei: "529900T8BM49AURSDO89",
      date: "2024-03-06",
      version: 3,
    },
    {
      id: "ISIN00000004",
      name: "European Government Bond ETF",
      type: "BOND",
      mic: "XPAR",
      lei: "213800ZBMXGN8Y67BK82",
      date: "2024-03-06",
      version: 1,
    },
    {
      id: "ISIN00000005",
      name: "Emerging Markets Equity Fund",
      type: "EQTY",
      mic: "XLON",
      lei: "213800FTTWULQ3V1FT64",
      date: "2024-03-05",
      version: 2,
    },
    {
      id: "ISIN00000006",
      name: "Commodities Diversified Fund",
      type: "COMM",
      mic: "XETR",
      lei: "213800MBWEIJDM5CU106",
      date: "2024-03-05",
      version: 1,
    },
    {
      id: "ISIN00000007",
      name: "Sustainable Global Equity Fund",
      type: "EQTY",
      mic: "XAMS",
      lei: "529900ODI3047E2LL666",
      date: "2024-03-04",
      version: 1,
    },
    {
      id: "ISIN00000008",
      name: "Short Duration Credit Fund",
      type: "BOND",
      mic: "XLON",
      lei: "5493006KMX1VFTPYPW14",
      date: "2024-03-04",
      version: 2,
    },
  ]

  // Sample snapshots data
  const snapshotData = [
    { id: 1, name: "Daily Snapshot", date: "2024-03-07", type: "Complete", records: 15678, status: "Available" },
    { id: 2, name: "Daily Snapshot", date: "2024-03-06", type: "Complete", records: 15672, status: "Available" },
    { id: 3, name: "Daily Snapshot", date: "2024-03-05", type: "Complete", records: 15665, status: "Available" },
    { id: 4, name: "Weekly Snapshot", date: "2024-03-03", type: "Complete", records: 15650, status: "Available" },
    { id: 5, name: "Monthly Snapshot", date: "2024-03-01", type: "Complete", records: 15640, status: "Available" },
    { id: 6, name: "Quarterly Snapshot", date: "2024-01-01", type: "Complete", records: 15400, status: "Available" },
  ]

  const getStatusBadge = (status) => {
    switch (status) {
      case "Available":
        return <Badge className="bg-green-500">Available</Badge>
      case "Processing":
        return (
          <Badge variant="outline" className="text-amber-500 border-amber-500">
            Processing
          </Badge>
        )
      case "Failed":
        return <Badge variant="destructive">Failed</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Data Storage</h1>
          <p className="text-muted-foreground">Browse and retrieve stored reference data</p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 md:grid-cols-3">
          <TabsTrigger value="browse">Browse Data</TabsTrigger>
          <TabsTrigger value="snapshots">Data Snapshots</TabsTrigger>
          <TabsTrigger value="history">Version History</TabsTrigger>
        </TabsList>

        <TabsContent value="browse" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Browse Reference Data</CardTitle>
              <CardDescription>Search and view current reference data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search by ID, name, or other attributes..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex items-center gap-1">
                    <FilterX className="h-4 w-4" />
                    Filters
                  </Button>
                  <Button variant="outline" className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Date
                  </Button>
                  <Button variant="outline" className="flex items-center gap-1">
                    <Download className="h-4 w-4" />
                    Export
                  </Button>
                </div>
              </div>

              <div className="flex gap-4 flex-wrap">
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold">
                  Type: BOND
                  <Button variant="ghost" size="icon" className="h-3 w-3 ml-1">
                    <X className="h-3 w-3" />
                  </Button>
                </div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold">
                  Date: Last 7 days
                  <Button variant="ghost" size="icon" className="h-3 w-3 ml-1">
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              <div className="rounded-md border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>MIC</TableHead>
                      <TableHead>LEI</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Version</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {instrumentData.map((instrument) => (
                      <TableRow key={instrument.id}>
                        <TableCell className="font-medium">{instrument.id}</TableCell>
                        <TableCell>{instrument.name}</TableCell>
                        <TableCell>{instrument.type}</TableCell>
                        <TableCell>{instrument.mic}</TableCell>
                        <TableCell>{instrument.lei}</TableCell>
                        <TableCell>{instrument.date}</TableCell>
                        <TableCell>v{instrument.version}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" title="View Details">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" title="Download">
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" title="View External">
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="snapshots" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Data Snapshots</CardTitle>
              <CardDescription>Access point-in-time snapshots of reference data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="md:w-1/3">
                  <label className="text-sm font-medium">Snapshot Type</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="quarterly">Quarterly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:w-1/3">
                  <label className="text-sm font-medium">Date Range</label>
                  <Select defaultValue="30days">
                    <SelectTrigger>
                      <SelectValue placeholder="Last 30 days" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7days">Last 7 days</SelectItem>
                      <SelectItem value="30days">Last 30 days</SelectItem>
                      <SelectItem value="90days">Last 90 days</SelectItem>
                      <SelectItem value="custom">Custom range</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:w-1/3">
                  <label className="text-sm font-medium">Status</label>
                  <Select defaultValue="available">
                    <SelectTrigger>
                      <SelectValue placeholder="Available" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="available">Available</SelectItem>
                      <SelectItem value="processing">Processing</SelectItem>
                      <SelectItem value="failed">Failed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Snapshot Name</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Records</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {snapshotData.map((snapshot) => (
                      <TableRow key={snapshot.id}>
                        <TableCell className="font-medium">{snapshot.name}</TableCell>
                        <TableCell>{snapshot.date}</TableCell>
                        <TableCell>{snapshot.type}</TableCell>
                        <TableCell>{snapshot.records.toLocaleString()}</TableCell>
                        <TableCell>{getStatusBadge(snapshot.status)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" className="flex items-center gap-1">
                              <Download className="h-4 w-4" />
                              Download
                            </Button>
                            <Button variant="ghost" size="icon" title="View Details">
                              <FileText className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter>
              <div className="w-full flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  <p>Data snapshots are generated daily at 00:00 UTC</p>
                </div>
                <Button>Generate Custom Snapshot</Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Version History</CardTitle>
              <CardDescription>Track changes to reference data over time</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search by ID to view version history..." className="pl-8" />
              </div>

              <div className="border rounded-md p-4">
                <div className="flex items-center gap-2 mb-4">
                  <Database className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-medium">ISIN00000001 - Euro Corporate Bond Fund</h3>
                </div>

                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4 relative">
                    <div className="h-3 w-3 rounded-full bg-primary absolute -left-[7px] top-1"></div>
                    <div className="mb-1">
                      <span className="text-sm font-medium">Version 2</span>
                      <span className="text-xs text-muted-foreground ml-2">Current Version</span>
                      <Badge className="ml-2 bg-green-500">Active</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Modified on 2024-03-07 14:32 by Admin User</p>
                    <div className="mt-2 bg-muted rounded-md p-3">
                      <div className="text-sm">
                        <p className="font-medium">Changes:</p>
                        <ul className="list-disc list-inside mt-1 space-y-1">
                          <li className="text-green-600">
                            Updated LEI from <span className="line-through">549300O4LFMZ51SUIQQQ</span> to{" "}
                            <span className="font-medium">549300O4LFMZ51SUI152</span>
                          </li>
                          <li className="text-amber-600">
                            Updated trading status from <span className="line-through">HALT</span> to{" "}
                            <span className="font-medium">ACTV</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-2">
                      <Button variant="outline" size="sm">
                        View Complete Record
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  <div className="border-l-2 border-muted pl-4 relative">
                    <div className="h-3 w-3 rounded-full bg-muted absolute -left-[7px] top-1"></div>
                    <div className="mb-1">
                      <span className="text-sm font-medium">Version 1</span>
                      <Badge variant="outline" className="ml-2">
                        Previous
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Created on 2024-02-15 09:17 by Admin User</p>
                    <div className="mt-2 bg-muted rounded-md p-3">
                      <div className="text-sm">
                        <p className="font-medium">Initial Record Creation</p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <Button variant="outline" size="sm">
                        View Complete Record
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <Button variant="outline" className="flex items-center gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Load More Records
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <div className="text-sm text-muted-foreground">
                <p>Reference data version history is retained for 7 years</p>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


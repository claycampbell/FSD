"use client"

import { useState } from "react"
import { AlertTriangle, Search, Filter, Download, RefreshCw, CheckCircle, Eye, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"

export default function ErrorHandling() {
  const [activeTab, setActiveTab] = useState("current")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedError, setSelectedError] = useState<any>(null)
  const [isErrorDetailsOpen, setIsErrorDetailsOpen] = useState(false)

  // Sample error data
  const currentErrors = [
    {
      id: "ERR-001",
      timestamp: "2024-03-07 09:15:22",
      type: "Data Validation",
      source: "MIC Import",
      message: "Invalid MIC format detected in row 45",
      severity: "High",
      status: "Open",
      assignedTo: "System Admin",
    },
    {
      id: "ERR-002",
      timestamp: "2024-03-07 08:30:15",
      type: "API Connection",
      source: "LEI Service",
      message: "Connection timeout when fetching LEI data",
      severity: "Critical",
      status: "In Progress",
      assignedTo: "Network Team",
    },
    {
      id: "ERR-003",
      timestamp: "2024-03-06 17:45:33",
      type: "Data Processing",
      source: "RCA Management",
      message: "Failed to update RCA record due to constraint violation",
      severity: "Medium",
      status: "Open",
      assignedTo: "Unassigned",
    },
    {
      id: "ERR-004",
      timestamp: "2024-03-06 14:22:10",
      type: "System",
      source: "Distribution Service",
      message: "Insufficient disk space for distribution package generation",
      severity: "High",
      status: "In Progress",
      assignedTo: "System Admin",
    },
    {
      id: "ERR-005",
      timestamp: "2024-03-06 11:05:47",
      type: "Data Validation",
      source: "Country Import",
      message: "Duplicate country code detected in import file",
      severity: "Low",
      status: "Open",
      assignedTo: "Data Team",
    },
    {
      id: "ERR-006",
      timestamp: "2024-03-06 09:30:18",
      type: "Security",
      source: "User Authentication",
      message: "Multiple failed login attempts detected",
      severity: "Medium",
      status: "In Progress",
      assignedTo: "Security Team",
    },
    {
      id: "ERR-007",
      timestamp: "2024-03-05 16:40:22",
      type: "Data Processing",
      source: "Upload Process",
      message: "File parsing error: unexpected format in line 128",
      severity: "Medium",
      status: "Open",
      assignedTo: "Unassigned",
    },
    {
      id: "ERR-008",
      timestamp: "2024-03-05 14:15:09",
      type: "System",
      source: "Database",
      message: "Database connection pool exhausted",
      severity: "Critical",
      status: "In Progress",
      assignedTo: "Database Team",
    },
  ]

  const resolvedErrors = [
    {
      id: "ERR-009",
      timestamp: "2024-03-04 13:22:45",
      type: "Data Validation",
      source: "LEI Import",
      message: "Invalid LEI format detected in row 17",
      severity: "Medium",
      status: "Resolved",
      resolvedBy: "Data Team",
      resolvedAt: "2024-03-04 15:30:12",
      resolution: "Invalid record removed from import file and reprocessed",
    },
    {
      id: "ERR-010",
      timestamp: "2024-03-03 09:45:33",
      type: "API Connection",
      source: "MIC Service",
      message: "API authentication failure",
      severity: "High",
      status: "Resolved",
      resolvedBy: "System Admin",
      resolvedAt: "2024-03-03 11:20:05",
      resolution: "API key renewed and connection restored",
    },
    {
      id: "ERR-011",
      timestamp: "2024-03-02 14:10:27",
      type: "System",
      source: "Distribution Service",
      message: "Scheduled distribution job failed",
      severity: "High",
      status: "Resolved",
      resolvedBy: "System Admin",
      resolvedAt: "2024-03-02 16:05:18",
      resolution: "Service restarted and job rescheduled successfully",
    },
    {
      id: "ERR-012",
      timestamp: "2024-03-01 11:30:42",
      type: "Data Processing",
      source: "RCA Management",
      message: "Duplicate RCA code detected during import",
      severity: "Medium",
      status: "Resolved",
      resolvedBy: "Data Team",
      resolvedAt: "2024-03-01 13:15:30",
      resolution: "Duplicate records merged and database updated",
    },
    {
      id: "ERR-013",
      timestamp: "2024-02-29 15:20:18",
      type: "Security",
      source: "User Management",
      message: "Unauthorized access attempt detected",
      severity: "Critical",
      status: "Resolved",
      resolvedBy: "Security Team",
      resolvedAt: "2024-02-29 16:45:22",
      resolution: "IP address blocked and security audit performed",
    },
  ]

  // Sample error trends data
  const errorTrends = [
    { date: "Mar 1", count: 12 },
    { date: "Mar 2", count: 8 },
    { date: "Mar 3", count: 15 },
    { date: "Mar 4", count: 10 },
    { date: "Mar 5", count: 18 },
    { date: "Mar 6", count: 14 },
    { date: "Mar 7", count: 9 },
  ]

  // Sample error distribution by type
  const errorDistribution = [
    { type: "Data Validation", count: 25, percentage: 30 },
    { type: "API Connection", count: 18, percentage: 22 },
    { type: "System", count: 15, percentage: 18 },
    { type: "Data Processing", count: 12, percentage: 15 },
    { type: "Security", count: 8, percentage: 10 },
    { type: "Other", count: 4, percentage: 5 },
  ]

  const handleViewErrorDetails = (error: any) => {
    setSelectedError(error)
    setIsErrorDetailsOpen(true)
  }

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "Critical":
        return <Badge variant="destructive">Critical</Badge>
      case "High":
        return <Badge className="bg-orange-500">High</Badge>
      case "Medium":
        return <Badge className="bg-yellow-500">Medium</Badge>
      case "Low":
        return <Badge className="bg-blue-500">Low</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Open":
        return (
          <Badge variant="outline" className="text-red-500 border-red-500">
            Open
          </Badge>
        )
      case "In Progress":
        return (
          <Badge variant="outline" className="text-blue-500 border-blue-500">
            In Progress
          </Badge>
        )
      case "Resolved":
        return <Badge className="bg-green-500">Resolved</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Error Handling</h1>
          <p className="text-muted-foreground">Monitor and resolve system errors and exceptions</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Open Errors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">{currentErrors.length}</div>
              <AlertTriangle className="h-8 w-8 text-amber-500" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {currentErrors.filter((e) => e.severity === "Critical").length} critical issues require immediate
              attention
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Resolution Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">78%</div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
            <Progress value={78} className="h-2 mt-2" />
            <p className="text-xs text-muted-foreground mt-1">5 errors resolved in the last 24 hours</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Resolution Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">2.4h</div>
              <Clock className="h-8 w-8 text-blue-500" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">15% faster than previous month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 md:grid-cols-3">
          <TabsTrigger value="current">Current Errors</TabsTrigger>
          <TabsTrigger value="resolved">Resolved Errors</TabsTrigger>
          <TabsTrigger value="analytics">Error Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Errors</CardTitle>
              <CardDescription>View and manage active system errors and exceptions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search by ID, type, or message..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="flex items-center gap-1">
                        <Filter className="h-4 w-4" />
                        Filters
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="space-y-4">
                        <h4 className="font-medium">Filter Errors</h4>
                        <div className="space-y-2">
                          <Label htmlFor="severity">Severity</Label>
                          <Select defaultValue="all">
                            <SelectTrigger id="severity">
                              <SelectValue placeholder="Select severity" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Severities</SelectItem>
                              <SelectItem value="critical">Critical</SelectItem>
                              <SelectItem value="high">High</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="low">Low</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="status">Status</Label>
                          <Select defaultValue="all">
                            <SelectTrigger id="status">
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Statuses</SelectItem>
                              <SelectItem value="open">Open</SelectItem>
                              <SelectItem value="in-progress">In Progress</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="type">Error Type</Label>
                          <Select defaultValue="all">
                            <SelectTrigger id="type">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Types</SelectItem>
                              <SelectItem value="data-validation">Data Validation</SelectItem>
                              <SelectItem value="api-connection">API Connection</SelectItem>
                              <SelectItem value="system">System</SelectItem>
                              <SelectItem value="data-processing">Data Processing</SelectItem>
                              <SelectItem value="security">Security</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm">
                            Reset
                          </Button>
                          <Button size="sm">Apply Filters</Button>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                  <Button variant="outline" className="flex items-center gap-1">
                    <Download className="h-4 w-4" />
                    Export
                  </Button>
                  <Button variant="outline" className="flex items-center gap-1">
                    <RefreshCw className="h-4 w-4" />
                    Refresh
                  </Button>
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Source</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Severity</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Assigned To</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentErrors.map((error) => (
                      <TableRow key={error.id}>
                        <TableCell className="font-medium">{error.id}</TableCell>
                        <TableCell>{error.timestamp}</TableCell>
                        <TableCell>{error.type}</TableCell>
                        <TableCell>{error.source}</TableCell>
                        <TableCell className="max-w-[200px] truncate">{error.message}</TableCell>
                        <TableCell>{getSeverityBadge(error.severity)}</TableCell>
                        <TableCell>{getStatusBadge(error.status)}</TableCell>
                        <TableCell>{error.assignedTo}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              title="View Details"
                              onClick={() => handleViewErrorDetails(error)}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                Showing {currentErrors.length} of {currentErrors.length} errors
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" disabled>
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="resolved" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Resolved Errors</CardTitle>
              <CardDescription>View previously resolved system errors and their resolutions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search resolved errors..." className="pl-8" />
                </div>
                <div className="flex gap-2">
                  <Select defaultValue="7days">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Time period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7days">Last 7 days</SelectItem>
                      <SelectItem value="30days">Last 30 days</SelectItem>
                      <SelectItem value="90days">Last 90 days</SelectItem>
                      <SelectItem value="all">All time</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" className="flex items-center gap-1">
                    <Download className="h-4 w-4" />
                    Export
                  </Button>
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Occurred</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Source</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Severity</TableHead>
                      <TableHead>Resolved By</TableHead>
                      <TableHead>Resolved At</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {resolvedErrors.map((error) => (
                      <TableRow key={error.id}>
                        <TableCell className="font-medium">{error.id}</TableCell>
                        <TableCell>{error.timestamp}</TableCell>
                        <TableCell>{error.type}</TableCell>
                        <TableCell>{error.source}</TableCell>
                        <TableCell className="max-w-[200px] truncate">{error.message}</TableCell>
                        <TableCell>{getSeverityBadge(error.severity)}</TableCell>
                        <TableCell>{error.resolvedBy}</TableCell>
                        <TableCell>{error.resolvedAt}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              title="View Details"
                              onClick={() => handleViewErrorDetails(error)}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">Showing {resolvedErrors.length} of 45 resolved errors</div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Error Trends</CardTitle>
                <CardDescription>Daily error count over the past week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-end justify-between gap-2">
                  {errorTrends.map((day, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-12 bg-blue-500 rounded-t-md" style={{ height: `${day.count * 10}px` }}></div>
                      <div className="text-xs mt-2">{day.date}</div>
                      <div className="text-xs font-medium">{day.count}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Error Distribution by Type</CardTitle>
                <CardDescription>Breakdown of errors by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {errorDistribution.map((item, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">{item.type}</div>
                        <div className="text-sm text-muted-foreground">
                          {item.count} ({item.percentage}%)
                        </div>
                      </div>
                      <Progress value={item.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Error Hotspots</CardTitle>
                <CardDescription>System components with the highest error rates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Component</TableHead>
                        <TableHead>Error Count</TableHead>
                        <TableHead>Most Common Error</TableHead>
                        <TableHead>Trend</TableHead>
                        <TableHead>MTTR</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">LEI Service</TableCell>
                        <TableCell>24</TableCell>
                        <TableCell>API Connection Timeout</TableCell>
                        <TableCell className="text-red-500">↑ 15%</TableCell>
                        <TableCell>3.2h</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">MIC Import</TableCell>
                        <TableCell>18</TableCell>
                        <TableCell>Data Validation Error</TableCell>
                        <TableCell className="text-green-500">↓ 8%</TableCell>
                        <TableCell>1.5h</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Distribution Service</TableCell>
                        <TableCell>15</TableCell>
                        <TableCell>Disk Space Error</TableCell>
                        <TableCell className="text-amber-500">→ 0%</TableCell>
                        <TableCell>2.8h</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">User Authentication</TableCell>
                        <TableCell>12</TableCell>
                        <TableCell>Failed Login Attempts</TableCell>
                        <TableCell className="text-red-500">↑ 22%</TableCell>
                        <TableCell>1.1h</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Error Details Dialog */}
      <Dialog open={isErrorDetailsOpen} onOpenChange={setIsErrorDetailsOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Error Details</DialogTitle>
            <DialogDescription>Detailed information about error {selectedError?.id}</DialogDescription>
          </DialogHeader>

          {selectedError && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-muted-foreground text-xs">Error ID</Label>
                  <div className="font-medium">{selectedError.id}</div>
                </div>
                <div>
                  <Label className="text-muted-foreground text-xs">Timestamp</Label>
                  <div>{selectedError.timestamp}</div>
                </div>
                <div>
                  <Label className="text-muted-foreground text-xs">Type</Label>
                  <div>{selectedError.type}</div>
                </div>
                <div>
                  <Label className="text-muted-foreground text-xs">Source</Label>
                  <div>{selectedError.source}</div>
                </div>
                <div>
                  <Label className="text-muted-foreground text-xs">Severity</Label>
                  <div>{getSeverityBadge(selectedError.severity)}</div>
                </div>
                <div>
                  <Label className="text-muted-foreground text-xs">Status</Label>
                  <div>{getStatusBadge(selectedError.status)}</div>
                </div>
                {selectedError.status === "Resolved" ? (
                  <>
                    <div>
                      <Label className="text-muted-foreground text-xs">Resolved By</Label>
                      <div>{selectedError.resolvedBy}</div>
                    </div>
                    <div>
                      <Label className="text-muted-foreground text-xs">Resolved At</Label>
                      <div>{selectedError.resolvedAt}</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <Label className="text-muted-foreground text-xs">Assigned To</Label>
                      <div>{selectedError.assignedTo}</div>
                    </div>
                    <div>
                      <Label className="text-muted-foreground text-xs">Time Open</Label>
                      <div>2h 15m</div>
                    </div>
                  </>
                )}
              </div>

              <div>
                <Label className="text-muted-foreground text-xs">Error Message</Label>
                <div className="p-2 bg-muted rounded-md mt-1">{selectedError.message}</div>
              </div>

              {selectedError.status === "Resolved" && (
                <div>
                  <Label className="text-muted-foreground text-xs">Resolution</Label>
                  <div className="p-2 bg-muted rounded-md mt-1">{selectedError.resolution}</div>
                </div>
              )}

              {selectedError.status !== "Resolved" && (
                <div>
                  <Label htmlFor="resolution">Resolution Notes</Label>
                  <Textarea id="resolution" placeholder="Enter resolution steps or notes..." className="mt-1" />
                </div>
              )}

              {selectedError.status !== "Resolved" && (
                <div className="flex gap-2">
                  <Select defaultValue={selectedError.assignedTo}>
                    <SelectTrigger>
                      <SelectValue placeholder="Assign to..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="System Admin">System Admin</SelectItem>
                      <SelectItem value="Data Team">Data Team</SelectItem>
                      <SelectItem value="Network Team">Network Team</SelectItem>
                      <SelectItem value="Security Team">Security Team</SelectItem>
                      <SelectItem value="Database Team">Database Team</SelectItem>
                      <SelectItem value="Unassigned">Unassigned</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue={selectedError.status}>
                    <SelectTrigger>
                      <SelectValue placeholder="Change status..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Open">Open</SelectItem>
                      <SelectItem value="In Progress">In Progress</SelectItem>
                      <SelectItem value="Resolved">Resolved</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsErrorDetailsOpen(false)}>
              Close
            </Button>
            {selectedError?.status !== "Resolved" && <Button type="submit">Save Changes</Button>}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}


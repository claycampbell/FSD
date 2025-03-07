"use client"

import { useState } from "react"
import {
  BarChart3,
  Search,
  Filter,
  Download,
  Calendar,
  FileText,
  PieChart,
  LineChart,
  Users,
  Database,
  Share2,
  AlertTriangle,
  Upload,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

export default function Reports() {
  const [activeTab, setActiveTab] = useState("operational")
  const [searchQuery, setSearchQuery] = useState("")

  // Sample operational metrics data
  const systemUptime = 99.98
  const apiResponseTime = 245 // ms
  const databaseSize = 1.24 // GB
  const activeUsers = 42

  // Sample data processing metrics
  const dataProcessingMetrics = [
    {
      id: "upload",
      name: "Upload & Process",
      dailyAvg: 1250,
      weeklyTotal: 8750,
      trend: "up",
      trendValue: 8.5,
    },
    {
      id: "validation",
      name: "Data Validation",
      dailyAvg: 1180,
      weeklyTotal: 8260,
      trend: "up",
      trendValue: 5.2,
    },
    {
      id: "enrichment",
      name: "Data Enrichment",
      dailyAvg: 980,
      weeklyTotal: 6860,
      trend: "down",
      trendValue: 2.1,
    },
    {
      id: "distribution",
      name: "Distribution",
      dailyAvg: 45,
      weeklyTotal: 315,
      trend: "up",
      trendValue: 12.3,
    },
  ]

  // Sample data quality metrics
  const dataQualityMetrics = [
    {
      id: "mics",
      name: "MICs",
      completeness: 98.5,
      accuracy: 99.2,
      consistency: 97.8,
      timeliness: 99.5,
      overall: 98.8,
    },
    {
      id: "leis",
      name: "LEIs",
      completeness: 97.2,
      accuracy: 98.5,
      consistency: 96.9,
      timeliness: 98.2,
      overall: 97.7,
    },
    {
      id: "rcas",
      name: "RCAs",
      completeness: 99.1,
      accuracy: 99.5,
      consistency: 98.7,
      timeliness: 99.8,
      overall: 99.3,
    },
    {
      id: "countries",
      name: "Countries & Currencies",
      completeness: 100.0,
      accuracy: 99.9,
      consistency: 99.5,
      timeliness: 100.0,
      overall: 99.9,
    },
  ]

  // Sample usage statistics
  const usageStatistics = [
    {
      id: "api-calls",
      name: "API Calls",
      today: 12450,
      yesterday: 11980,
      weekAvg: 12100,
      trend: "up",
      trendValue: 3.9,
    },
    {
      id: "data-exports",
      name: "Data Exports",
      today: 87,
      yesterday: 92,
      weekAvg: 85,
      trend: "down",
      trendValue: 5.4,
    },
    {
      id: "user-logins",
      name: "User Logins",
      today: 156,
      yesterday: 142,
      weekAvg: 138,
      trend: "up",
      trendValue: 9.9,
    },
    {
      id: "search-queries",
      name: "Search Queries",
      today: 3250,
      yesterday: 3120,
      weekAvg: 3050,
      trend: "up",
      trendValue: 4.2,
    },
  ]

  // Sample scheduled reports
  const scheduledReports = [
    {
      id: "REP-001",
      name: "Weekly Data Quality Summary",
      frequency: "Weekly",
      lastRun: "2024-03-05 08:00:00",
      nextRun: "2024-03-12 08:00:00",
      recipients: 5,
      status: "Active",
    },
    {
      id: "REP-002",
      name: "Monthly System Performance",
      frequency: "Monthly",
      lastRun: "2024-02-01 08:00:00",
      nextRun: "2024-03-01 08:00:00",
      recipients: 8,
      status: "Active",
    },
    {
      id: "REP-003",
      name: "Daily Error Summary",
      frequency: "Daily",
      lastRun: "2024-03-06 18:00:00",
      nextRun: "2024-03-07 18:00:00",
      recipients: 3,
      status: "Active",
    },
    {
      id: "REP-004",
      name: "Quarterly Compliance Report",
      frequency: "Quarterly",
      lastRun: "2024-01-01 09:00:00",
      nextRun: "2024-04-01 09:00:00",
      recipients: 12,
      status: "Active",
    },
    {
      id: "REP-005",
      name: "Data Distribution Audit",
      frequency: "Weekly",
      lastRun: "2024-03-05 12:00:00",
      nextRun: "2024-03-12 12:00:00",
      recipients: 4,
      status: "Paused",
    },
  ]

  // Sample audit logs
  const auditLogs = [
    {
      id: "LOG-001",
      timestamp: "2024-03-07 14:22:15",
      user: "admin@example.com",
      action: "Export Data",
      details: "Exported MIC dataset (full)",
      ip: "192.168.1.45",
    },
    {
      id: "LOG-002",
      timestamp: "2024-03-07 13:15:30",
      user: "john.smith@example.com",
      action: "Update Record",
      details: "Updated LEI record for ACME Corp",
      ip: "192.168.1.22",
    },
    {
      id: "LOG-003",
      timestamp: "2024-03-07 11:45:12",
      user: "system",
      action: "Run Report",
      details: "Generated Daily Error Summary",
      ip: "localhost",
    },
    {
      id: "LOG-004",
      timestamp: "2024-03-07 10:30:45",
      user: "jane.doe@example.com",
      action: "Import Data",
      details: "Imported RCA updates (45 records)",
      ip: "192.168.1.87",
    },
    {
      id: "LOG-005",
      timestamp: "2024-03-07 09:15:22",
      user: "admin@example.com",
      action: "User Management",
      details: "Created new user account",
      ip: "192.168.1.45",
    },
    {
      id: "LOG-006",
      timestamp: "2024-03-07 08:45:10",
      user: "system",
      action: "Distribution",
      details: "Distributed daily data package",
      ip: "localhost",
    },
    {
      id: "LOG-007",
      timestamp: "2024-03-06 17:30:05",
      user: "john.smith@example.com",
      action: "View Record",
      details: "Viewed sensitive LEI information",
      ip: "192.168.1.22",
    },
    {
      id: "LOG-008",
      timestamp: "2024-03-06 16:20:18",
      user: "admin@example.com",
      action: "System Config",
      details: "Updated API rate limits",
      ip: "192.168.1.45",
    },
  ]

  const getTrendBadge = (trend: string, value: number) => {
    if (trend === "up") {
      return <Badge className="bg-green-500">↑ {value}%</Badge>
    } else {
      return <Badge className="bg-red-500">↓ {value}%</Badge>
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-green-500">Active</Badge>
      case "Paused":
        return (
          <Badge variant="outline" className="text-amber-500 border-amber-500">
            Paused
          </Badge>
        )
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reports & Analytics</h1>
          <p className="text-muted-foreground">Monitor system performance and generate reports</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">System Uptime</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{systemUptime}%</div>
              <div className="text-green-500 text-sm font-medium">Healthy</div>
            </div>
            <Progress value={systemUptime} className="h-2 mt-2" />
            <p className="text-xs text-muted-foreground mt-1">Last 30 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">API Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{apiResponseTime} ms</div>
              <div className="text-green-500 text-sm font-medium">Optimal</div>
            </div>
            <Progress value={75} className="h-2 mt-2" />
            <p className="text-xs text-muted-foreground mt-1">5% faster than last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Database Size</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{databaseSize} GB</div>
              <div className="text-amber-500 text-sm font-medium">Growing</div>
            </div>
            <Progress value={62} className="h-2 mt-2" />
            <p className="text-xs text-muted-foreground mt-1">8% increase this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">{activeUsers}</div>
              <div className="text-green-500 text-sm font-medium">Online</div>
            </div>
            <Progress value={42} className="h-2 mt-2" />
            <p className="text-xs text-muted-foreground mt-1">Peak today: 65 users</p>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="operational">Operational Metrics</TabsTrigger>
          <TabsTrigger value="data-quality">Data Quality</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled Reports</TabsTrigger>
          <TabsTrigger value="audit">Audit Logs</TabsTrigger>
        </TabsList>

        <TabsContent value="operational" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Data Processing Metrics</CardTitle>
                <CardDescription>Volume of data processed by system component</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Component</TableHead>
                        <TableHead>Daily Avg</TableHead>
                        <TableHead>Weekly Total</TableHead>
                        <TableHead>Trend</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {dataProcessingMetrics.map((metric) => (
                        <TableRow key={metric.id}>
                          <TableCell className="font-medium">{metric.name}</TableCell>
                          <TableCell>{metric.dailyAvg.toLocaleString()}</TableCell>
                          <TableCell>{metric.weeklyTotal.toLocaleString()}</TableCell>
                          <TableCell>{getTrendBadge(metric.trend, metric.trendValue)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Usage Statistics</CardTitle>
                <CardDescription>System usage metrics and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Metric</TableHead>
                        <TableHead>Today</TableHead>
                        <TableHead>Week Avg</TableHead>
                        <TableHead>Trend</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {usageStatistics.map((stat) => (
                        <TableRow key={stat.id}>
                          <TableCell className="font-medium">{stat.name}</TableCell>
                          <TableCell>{stat.today.toLocaleString()}</TableCell>
                          <TableCell>{stat.weekAvg.toLocaleString()}</TableCell>
                          <TableCell>{getTrendBadge(stat.trend, stat.trendValue)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>System Health Overview</CardTitle>
                <CardDescription>Current status of system components</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-4">
                    <div className="text-sm font-medium">Core Services</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Database className="h-4 w-4 text-muted-foreground" />
                          <span>Database Service</span>
                        </div>
                        <Badge className="bg-green-500">Healthy</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Share2 className="h-4 w-4 text-muted-foreground" />
                          <span>API Gateway</span>
                        </div>
                        <Badge className="bg-green-500">Healthy</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>Authentication Service</span>
                        </div>
                        <Badge className="bg-green-500">Healthy</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="text-sm font-medium">Data Services</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span>MIC Service</span>
                        </div>
                        <Badge className="bg-green-500">Healthy</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span>LEI Service</span>
                        </div>
                        <Badge className="bg-amber-500">Degraded</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span>RCA Service</span>
                        </div>
                        <Badge className="bg-green-500">Healthy</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="text-sm font-medium">Processing Services</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Upload className="h-4 w-4 text-muted-foreground" />
                          <span>Upload Service</span>
                        </div>
                        <Badge className="bg-green-500">Healthy</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                          <span>Validation Service</span>
                        </div>
                        <Badge className="bg-green-500">Healthy</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Share2 className="h-4 w-4 text-muted-foreground" />
                          <span>Distribution Service</span>
                        </div>
                        <Badge className="bg-green-500">Healthy</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="space-y-2">
                  <div className="text-sm font-medium">System Notices</div>
                  <div className="rounded-md border p-3">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                      <div>
                        <div className="font-medium">LEI Service Performance Degradation</div>
                        <div className="text-sm text-muted-foreground">
                          The LEI service is experiencing higher than normal response times. The operations team is
                          investigating. Expected resolution by 18:00 UTC.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-md border p-3">
                    <div className="flex items-start gap-2">
                      <Calendar className="h-5 w-5 text-blue-500 mt-0.5" />
                      <div>
                        <div className="font-medium">Scheduled Maintenance</div>
                        <div className="text-sm text-muted-foreground">
                          Database maintenance scheduled for March 10, 2024, from 02:00 to 04:00 UTC. Some services may
                          be unavailable during this time.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View System Status Dashboard
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="data-quality" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Data Quality Metrics</CardTitle>
              <CardDescription>Quality metrics for reference data sets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Data Set</TableHead>
                      <TableHead>Completeness</TableHead>
                      <TableHead>Accuracy</TableHead>
                      <TableHead>Consistency</TableHead>
                      <TableHead>Timeliness</TableHead>
                      <TableHead>Overall Score</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dataQualityMetrics.map((metric) => (
                      <TableRow key={metric.id}>
                        <TableCell className="font-medium">{metric.name}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={metric.completeness} className="h-2 w-16" />
                            <span>{metric.completeness}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={metric.accuracy} className="h-2 w-16" />
                            <span>{metric.accuracy}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={metric.consistency} className="h-2 w-16" />
                            <span>{metric.consistency}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={metric.timeliness} className="h-2 w-16" />
                            <span>{metric.timeliness}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress
                              value={metric.overall}
                              className={`h-2 w-16 ${
                                metric.overall >= 99
                                  ? "bg-green-500"
                                  : metric.overall >= 97
                                    ? "bg-blue-500"
                                    : "bg-amber-500"
                              }`}
                            />
                            <span className="font-medium">{metric.overall}%</span>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">Last updated: March 7, 2024, 14:30 UTC</div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex items-center gap-1">
                  <Download className="h-4 w-4" />
                  Export
                </Button>
                <Button className="flex items-center gap-1">
                  <BarChart3 className="h-4 w-4" />
                  Detailed Report
                </Button>
              </div>
            </CardFooter>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Data Quality Trends</CardTitle>
                <CardDescription>Quality score trends over time</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <LineChart className="h-16 w-16 mx-auto mb-2" />
                  <p>Line chart showing quality trends over time would appear here</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Quality Issues</CardTitle>
                <CardDescription>Recent data quality issues by category</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <PieChart className="h-16 w-16 mx-auto mb-2" />
                  <p>Pie chart showing distribution of quality issues would appear here</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Scheduled Reports</CardTitle>
              <CardDescription>Manage automated report generation and distribution</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search reports..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Button className="flex items-center gap-1">
                    <FileText className="h-4 w-4" />
                    New Report
                  </Button>
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Report ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Frequency</TableHead>
                      <TableHead>Last Run</TableHead>
                      <TableHead>Next Run</TableHead>
                      <TableHead>Recipients</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {scheduledReports.map((report) => (
                      <TableRow key={report.id}>
                        <TableCell className="font-medium">{report.id}</TableCell>
                        <TableCell>{report.name}</TableCell>
                        <TableCell>{report.frequency}</TableCell>
                        <TableCell>{report.lastRun}</TableCell>
                        <TableCell>{report.nextRun}</TableCell>
                        <TableCell>{report.recipients}</TableCell>
                        <TableCell>{getStatusBadge(report.status)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button variant="outline" size="sm">
                              Run Now
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
                Showing {scheduledReports.length} of {scheduledReports.length} reports
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

        <TabsContent value="audit" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Audit Logs</CardTitle>
              <CardDescription>System activity logs for compliance and security monitoring</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search audit logs..." className="pl-8" />
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
                        <h4 className="font-medium">Filter Logs</h4>
                        <div className="space-y-2">
                          <Label htmlFor="action">Action Type</Label>
                          <Select defaultValue="all">
                            <SelectTrigger id="action">
                              <SelectValue placeholder="Select action" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Actions</SelectItem>
                              <SelectItem value="export">Export Data</SelectItem>
                              <SelectItem value="update">Update Record</SelectItem>
                              <SelectItem value="import">Import Data</SelectItem>
                              <SelectItem value="user">User Management</SelectItem>
                              <SelectItem value="system">System Config</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="user">User</Label>
                          <Select defaultValue="all">
                            <SelectTrigger id="user">
                              <SelectValue placeholder="Select user" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Users</SelectItem>
                              <SelectItem value="admin">admin@example.com</SelectItem>
                              <SelectItem value="john">john.smith@example.com</SelectItem>
                              <SelectItem value="jane">jane.doe@example.com</SelectItem>
                              <SelectItem value="system">system</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="date">Date Range</Label>
                          <Select defaultValue="today">
                            <SelectTrigger id="date">
                              <SelectValue placeholder="Select date range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="today">Today</SelectItem>
                              <SelectItem value="yesterday">Yesterday</SelectItem>
                              <SelectItem value="week">Last 7 days</SelectItem>
                              <SelectItem value="month">Last 30 days</SelectItem>
                              <SelectItem value="custom">Custom range</SelectItem>
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
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Action</TableHead>
                      <TableHead>Details</TableHead>
                      <TableHead>IP Address</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {auditLogs.map((log) => (
                      <TableRow key={log.id}>
                        <TableCell className="font-medium">{log.id}</TableCell>
                        <TableCell>{log.timestamp}</TableCell>
                        <TableCell>{log.user}</TableCell>
                        <TableCell>{log.action}</TableCell>
                        <TableCell className="max-w-[300px] truncate">{log.details}</TableCell>
                        <TableCell>{log.ip}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">Showing {auditLogs.length} of 1,245 logs</div>
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
      </Tabs>
    </div>
  )
}


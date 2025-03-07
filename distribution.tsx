"use client"

import { useState } from "react"
import {
  Share2,
  Download,
  FileText,
  Clock,
  CheckCircle,
  AlertTriangle,
  Users,
  Globe,
  Settings,
  RefreshCw,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Distribution() {
  const [activeTab, setActiveTab] = useState("status")

  // Sample distribution status data
  const distributionStatus = [
    {
      id: 1,
      name: "Daily Full Distribution",
      type: "Full",
      target: "All NCAs",
      status: "Completed",
      time: "07:00",
      records: 15678,
      date: "2024-03-07",
    },
    {
      id: 2,
      name: "Daily Delta Distribution",
      type: "Delta",
      target: "All NCAs",
      status: "Completed",
      time: "07:15",
      records: 124,
      date: "2024-03-07",
    },
    {
      id: 3,
      name: "Invalid Records Report",
      type: "Invalid",
      target: "All NCAs",
      status: "Completed",
      time: "07:30",
      records: 23,
      date: "2024-03-07",
    },
    {
      id: 4,
      name: "Public Data Distribution",
      type: "Public",
      target: "Public API",
      status: "In Progress",
      time: "08:00",
      records: 8750,
      date: "2024-03-07",
    },
    {
      id: 5,
      name: "Weekly Full Distribution",
      type: "Full",
      target: "All NCAs",
      status: "Scheduled",
      time: "07:00",
      records: null,
      date: "2024-03-10",
    },
  ]

  // Sample NCA list
  const ncaList = [
    { id: "DE", name: "BaFin (Germany)", status: "Active", lastSync: "2024-03-07 07:15", syncStatus: "Success" },
    { id: "FR", name: "AMF (France)", status: "Active", lastSync: "2024-03-07 07:15", syncStatus: "Success" },
    { id: "IT", name: "CONSOB (Italy)", status: "Active", lastSync: "2024-03-07 07:15", syncStatus: "Success" },
    { id: "ES", name: "CNMV (Spain)", status: "Active", lastSync: "2024-03-07 07:15", syncStatus: "Warning" },
    { id: "UK", name: "FCA (United Kingdom)", status: "Active", lastSync: "2024-03-07 07:15", syncStatus: "Success" },
    { id: "NL", name: "AFM (Netherlands)", status: "Active", lastSync: "2024-03-07 07:15", syncStatus: "Success" },
    { id: "SE", name: "FI (Sweden)", status: "Active", lastSync: "2024-03-07 07:15", syncStatus: "Error" },
    {
      id: "DK",
      name: "Finanstilsynet (Denmark)",
      status: "Active",
      lastSync: "2024-03-07 07:15",
      syncStatus: "Success",
    },
  ]

  // Sample distribution history
  const distributionHistory = [
    {
      id: 101,
      name: "Daily Full Distribution",
      type: "Full",
      target: "All NCAs",
      status: "Completed",
      time: "07:00",
      records: 15678,
      date: "2024-03-06",
      downloadable: true,
    },
    {
      id: 102,
      name: "Daily Delta Distribution",
      type: "Delta",
      target: "All NCAs",
      status: "Completed",
      time: "07:15",
      records: 98,
      date: "2024-03-06",
      downloadable: true,
    },
    {
      id: 103,
      name: "Invalid Records Report",
      type: "Invalid",
      target: "All NCAs",
      status: "Completed",
      time: "07:30",
      records: 17,
      date: "2024-03-06",
      downloadable: true,
    },
    {
      id: 104,
      name: "Public Data Distribution",
      type: "Public",
      target: "Public API",
      status: "Completed",
      time: "08:00",
      records: 8740,
      date: "2024-03-06",
      downloadable: true,
    },
    {
      id: 105,
      name: "Daily Full Distribution",
      type: "Full",
      target: "All NCAs",
      status: "Completed",
      time: "07:00",
      records: 15665,
      date: "2024-03-05",
      downloadable: true,
    },
    {
      id: 106,
      name: "Daily Delta Distribution",
      type: "Delta",
      target: "All NCAs",
      status: "Completed",
      time: "07:15",
      records: 45,
      date: "2024-03-05",
      downloadable: true,
    },
    {
      id: 107,
      name: "Invalid Records Report",
      type: "Invalid",
      target: "All NCAs",
      status: "Completed",
      time: "07:30",
      records: 12,
      date: "2024-03-05",
      downloadable: true,
    },
    {
      id: 108,
      name: "Public Data Distribution",
      type: "Public",
      target: "Public API",
      status: "Completed",
      time: "08:00",
      records: 8730,
      date: "2024-03-05",
      downloadable: true,
    },
  ]

  const getStatusBadge = (status) => {
    switch (status) {
      case "Completed":
        return <Badge className="bg-green-500">Completed</Badge>
      case "In Progress":
        return (
          <Badge variant="outline" className="text-blue-500 border-blue-500">
            In Progress
          </Badge>
        )
      case "Scheduled":
        return (
          <Badge variant="outline" className="text-amber-500 border-amber-500">
            Scheduled
          </Badge>
        )
      case "Failed":
        return <Badge variant="destructive">Failed</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const getSyncStatusBadge = (status) => {
    switch (status) {
      case "Success":
        return <Badge className="bg-green-500">Success</Badge>
      case "Warning":
        return (
          <Badge variant="outline" className="text-amber-500 border-amber-500">
            Warning
          </Badge>
        )
      case "Error":
        return <Badge variant="destructive">Error</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Distribution</h1>
          <p className="text-muted-foreground">Manage and monitor reference data distribution</p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="status">Distribution Status</TabsTrigger>
          <TabsTrigger value="recipients">Recipients</TabsTrigger>
          <TabsTrigger value="history">Distribution History</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="status" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Distribution Status</CardTitle>
              <CardDescription>Status of today's scheduled and ongoing distributions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center justify-center text-center space-y-2">
                      <div className="bg-green-100 p-2 rounded-full">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="space-y-0.5">
                        <h3 className="font-medium text-lg">3</h3>
                        <p className="text-sm text-muted-foreground">Completed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center justify-center text-center space-y-2">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <RefreshCw className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="space-y-0.5">
                        <h3 className="font-medium text-lg">1</h3>
                        <p className="text-sm text-muted-foreground">In Progress</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center justify-center text-center space-y-2">
                      <div className="bg-amber-100 p-2 rounded-full">
                        <Clock className="h-6 w-6 text-amber-600" />
                      </div>
                      <div className="space-y-0.5">
                        <h3 className="font-medium text-lg">1</h3>
                        <p className="text-sm text-muted-foreground">Scheduled</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center justify-center text-center space-y-2">
                      <div className="bg-red-100 p-2 rounded-full">
                        <AlertTriangle className="h-6 w-6 text-red-600" />
                      </div>
                      <div className="space-y-0.5">
                        <h3 className="font-medium text-lg">0</h3>
                        <p className="text-sm text-muted-foreground">Failed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Distribution Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Target</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Records</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {distributionStatus.map((dist) => (
                      <TableRow key={dist.id}>
                        <TableCell className="font-medium">{dist.name}</TableCell>
                        <TableCell>{dist.type}</TableCell>
                        <TableCell>{dist.target}</TableCell>
                        <TableCell>{getStatusBadge(dist.status)}</TableCell>
                        <TableCell>
                          {dist.time} ({dist.date})
                        </TableCell>
                        <TableCell>{dist.records !== null ? dist.records.toLocaleString() : "-"}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {dist.status === "In Progress" && (
                              <Button variant="outline" size="sm" className="flex items-center gap-1">
                                <RefreshCw className="h-4 w-4" />
                                Refresh
                              </Button>
                            )}
                            {dist.status === "Completed" && (
                              <Button variant="outline" size="sm" className="flex items-center gap-1">
                                <Download className="h-4 w-4" />
                                Download
                              </Button>
                            )}
                            {dist.status === "Scheduled" && (
                              <Button variant="outline" size="sm" className="flex items-center gap-1">
                                <RefreshCw className="h-4 w-4" />
                                Run Now
                              </Button>
                            )}
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

              {distributionStatus.some((d) => d.status === "In Progress") && (
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Distribution Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Public Data Distribution</span>
                        <span>65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                      <p className="text-xs text-muted-foreground">Estimated completion time: 08:15</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">Last updated: 07:45 AM, March 7, 2024</div>
              <Button className="flex items-center gap-1">
                <RefreshCw className="h-4 w-4" />
                Refresh Status
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Manual Distribution</CardTitle>
              <CardDescription>Create and trigger manual distribution packages</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium">Distribution Type</label>
                  <Select defaultValue="full">
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full">Full Distribution</SelectItem>
                      <SelectItem value="delta">Delta Distribution</SelectItem>
                      <SelectItem value="invalid">Invalid Records</SelectItem>
                      <SelectItem value="public">Public Data</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium">Target Recipients</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Select recipients" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All NCAs</SelectItem>
                      <SelectItem value="specific">Specific NCAs</SelectItem>
                      <SelectItem value="public">Public API</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium">Data Date</label>
                  <Input type="date" defaultValue="2024-03-07" />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="include-metadata" />
                <Label htmlFor="include-metadata">Include metadata and documentation</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="notify-recipients" defaultChecked />
                <Label htmlFor="notify-recipients">Notify recipients</Label>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Preview Package</Button>
              <Button>Generate & Distribute</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="recipients" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Distribution Recipients</CardTitle>
              <CardDescription>National Competent Authorities (NCAs) and other distribution targets</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="relative flex-1">
                  <Input type="search" placeholder="Search recipients..." className="pl-8" />
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    Add Recipient
                  </Button>
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Sync</TableHead>
                      <TableHead>Sync Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {ncaList.map((nca) => (
                      <TableRow key={nca.id}>
                        <TableCell className="font-medium">{nca.id}</TableCell>
                        <TableCell>{nca.name}</TableCell>
                        <TableCell>
                          <Badge variant={nca.status === "Active" ? "default" : "outline"}>{nca.status}</Badge>
                        </TableCell>
                        <TableCell>{nca.lastSync}</TableCell>
                        <TableCell>{getSyncStatusBadge(nca.syncStatus)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" className="flex items-center gap-1">
                              <Share2 className="h-4 w-4" />
                              Sync Now
                            </Button>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <Settings className="h-4 w-4" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Manage Settings</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter>
              <div className="w-full">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="public-api">
                    <AccordionTrigger>
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4" />
                        <span>Public API Distribution</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium">API Status</label>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge className="bg-green-500">Active</Badge>
                              <span className="text-sm text-muted-foreground">
                                Last updated: 07:15 AM, March 7, 2024
                              </span>
                            </div>
                          </div>
                          <div>
                            <label className="text-sm font-medium">Public Endpoints</label>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline">4 Active Endpoints</Badge>
                              <Button variant="outline" size="sm">
                                Manage Endpoints
                              </Button>
                            </div>
                          </div>
                        </div>

                        <Separator />

                        <div className="space-y-2">
                          <label className="text-sm font-medium">Available Datasets</label>
                          <div className="grid md:grid-cols-2 gap-2">
                            <div className="flex items-center space-x-2">
                              <Switch id="mic-dataset" defaultChecked />
                              <Label htmlFor="mic-dataset">Market Identifier Codes (MICs)</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Switch id="lei-dataset" defaultChecked />
                              <Label htmlFor="lei-dataset">Legal Entity Identifiers (LEIs)</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Switch id="currency-dataset" defaultChecked />
                              <Label htmlFor="currency-dataset">Currency Reference Data</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Switch id="country-dataset" defaultChecked />
                              <Label htmlFor="country-dataset">Country Reference Data</Label>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-end">
                          <Button variant="outline">Update Public API Settings</Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Distribution History</CardTitle>
              <CardDescription>Historical record of reference data distributions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="md:w-1/4">
                  <label className="text-sm font-medium">Distribution Type</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="full">Full</SelectItem>
                      <SelectItem value="delta">Delta</SelectItem>
                      <SelectItem value="invalid">Invalid Records</SelectItem>
                      <SelectItem value="public">Public</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:w-1/4">
                  <label className="text-sm font-medium">Target</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="All Targets" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Targets</SelectItem>
                      <SelectItem value="ncas">All NCAs</SelectItem>
                      <SelectItem value="public">Public API</SelectItem>
                      <SelectItem value="specific">Specific NCAs</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:w-1/4">
                  <label className="text-sm font-medium">Status</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="All Statuses" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="failed">Failed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:w-1/4">
                  <label className="text-sm font-medium">Date Range</label>
                  <Select defaultValue="7days">
                    <SelectTrigger>
                      <SelectValue placeholder="Last 7 days" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7days">Last 7 days</SelectItem>
                      <SelectItem value="30days">Last 30 days</SelectItem>
                      <SelectItem value="90days">Last 90 days</SelectItem>
                      <SelectItem value="custom">Custom range</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Distribution Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Target</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Records</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {distributionHistory.map((dist) => (
                      <TableRow key={dist.id}>
                        <TableCell className="font-medium">{dist.name}</TableCell>
                        <TableCell>{dist.type}</TableCell>
                        <TableCell>{dist.target}</TableCell>
                        <TableCell>{getStatusBadge(dist.status)}</TableCell>
                        <TableCell>
                          {dist.time} ({dist.date})
                        </TableCell>
                        <TableCell>{dist.records.toLocaleString()}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {dist.downloadable && (
                              <Button variant="outline" size="sm" className="flex items-center gap-1">
                                <Download className="h-4 w-4" />
                                Download
                              </Button>
                            )}
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
              <div className="flex items-center justify-between w-full">
                <div className="text-sm text-muted-foreground">Showing 8 of 124 distributions</div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Distribution Settings</CardTitle>
              <CardDescription>Configure automated distribution schedules and settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Schedule Settings</h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Daily Full Distribution</label>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs text-muted-foreground">Time</label>
                          <Input type="time" defaultValue="07:00" />
                        </div>
                        <div className="flex items-center space-x-2 pt-5">
                          <Switch id="daily-full-enabled" defaultChecked />
                          <Label htmlFor="daily-full-enabled">Enabled</Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Daily Delta Distribution</label>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs text-muted-foreground">Time</label>
                          <Input type="time" defaultValue="07:15" />
                        </div>
                        <div className="flex items-center space-x-2 pt-5">
                          <Switch id="daily-delta-enabled" defaultChecked />
                          <Label htmlFor="daily-delta-enabled">Enabled</Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Invalid Records Distribution</label>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs text-muted-foreground">Time</label>
                          <Input type="time" defaultValue="07:30" />
                        </div>
                        <div className="flex items-center space-x-2 pt-5">
                          <Switch id="invalid-records-enabled" defaultChecked />
                          <Label htmlFor="invalid-records-enabled">Enabled</Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Public Data Distribution</label>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs text-muted-foreground">Time</label>
                          <Input type="time" defaultValue="08:00" />
                        </div>
                        <div className="flex items-center space-x-2 pt-5">
                          <Switch id="public-data-enabled" defaultChecked />
                          <Label htmlFor="public-data-enabled">Enabled</Label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Weekly Full Distribution</label>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs text-muted-foreground">Day</label>
                          <Select defaultValue="sunday">
                            <SelectTrigger>
                              <SelectValue placeholder="Select day" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="monday">Monday</SelectItem>
                              <SelectItem value="tuesday">Tuesday</SelectItem>
                              <SelectItem value="wednesday">Wednesday</SelectItem>
                              <SelectItem value="thursday">Thursday</SelectItem>
                              <SelectItem value="friday">Friday</SelectItem>
                              <SelectItem value="saturday">Saturday</SelectItem>
                              <SelectItem value="sunday">Sunday</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="text-xs text-muted-foreground">Time</label>
                          <Input type="time" defaultValue="07:00" />
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 pt-2">
                        <Switch id="weekly-full-enabled" defaultChecked />
                        <Label htmlFor="weekly-full-enabled">Enabled</Label>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Monthly Full Distribution</label>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs text-muted-foreground">Day</label>
                          <Input type="number" min="1" max="31" defaultValue="1" />
                        </div>
                        <div>
                          <label className="text-xs text-muted-foreground">Time</label>
                          <Input type="time" defaultValue="07:00" />
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 pt-2">
                        <Switch id="monthly-full-enabled" defaultChecked />
                        <Label htmlFor="monthly-full-enabled">Enabled</Label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-medium mb-4">Distribution Content Settings</h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Distribution Content</label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Switch id="include-mic" defaultChecked />
                          <Label htmlFor="include-mic">Include MIC data</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="include-lei" defaultChecked />
                          <Label htmlFor="include-lei">Include LEI data</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="include-country" defaultChecked />
                          <Label htmlFor="include-country">Include Country data</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="include-currency" defaultChecked />
                          <Label htmlFor="include-currency">Include Currency data</Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Format Settings</label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Switch id="include-metadata" defaultChecked />
                          <Label htmlFor="include-metadata">Include metadata</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="include-documentation" defaultChecked />
                          <Label htmlFor="include-documentation">Include documentation</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="compress-files" defaultChecked />
                          <Label htmlFor="compress-files">Compress files</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="sign-packages" defaultChecked />
                          <Label htmlFor="sign-packages">Digitally sign packages</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-medium mb-4">Notification Settings</h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Notifications</label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Switch id="notify-success" defaultChecked />
                          <Label htmlFor="notify-success">Notify on successful distribution</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="notify-failure" defaultChecked />
                          <Label htmlFor="notify-failure">Notify on distribution failure</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="notify-recipients" defaultChecked />
                          <Label htmlFor="notify-recipients">Notify recipients</Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">System Notifications</label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Switch id="log-events" defaultChecked />
                          <Label htmlFor="log-events">Log all distribution events</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="alert-failures" defaultChecked />
                          <Label htmlFor="alert-failures">Create system alerts for failures</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="monitor-downloads" defaultChecked />
                          <Label htmlFor="monitor-downloads">Monitor recipient downloads</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Reset to Defaults</Button>
              <Button>Save Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


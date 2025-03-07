"use client"

import { useState } from "react"
import { Users, Search, Filter, Download, Upload, Plus, Edit, Trash2, Eye, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export default function RCAManagement() {
  const [activeTab, setActiveTab] = useState("browse")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRCAs, setSelectedRCAs] = useState<string[]>([])
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentRCA, setCurrentRCA] = useState<any>(null)

  // Sample RCA data
  const rcaData = [
    {
      id: "RCA-001",
      name: "German Federal Financial Supervisory Authority",
      code: "DE-BAFIN",
      country: "DE",
      status: "Active",
      instrumentTypes: ["Equity", "Bond", "Derivative"],
      contactPerson: "Hans Mueller",
      email: "contact@bafin.de",
      lastUpdated: "2024-01-15",
    },
    {
      id: "RCA-002",
      name: "French Financial Markets Authority",
      code: "FR-AMF",
      country: "FR",
      status: "Active",
      instrumentTypes: ["Equity", "Bond", "Fund"],
      contactPerson: "Marie Dupont",
      email: "contact@amf-france.org",
      lastUpdated: "2024-01-15",
    },
    {
      id: "RCA-003",
      name: "UK Financial Conduct Authority",
      code: "UK-FCA",
      country: "GB",
      status: "Active",
      instrumentTypes: ["Equity", "Bond", "Derivative", "Fund"],
      contactPerson: "John Smith",
      email: "contact@fca.org.uk",
      lastUpdated: "2024-01-15",
    },
    {
      id: "RCA-004",
      name: "Italian Companies and Exchange Commission",
      code: "IT-CONSOB",
      country: "IT",
      status: "Active",
      instrumentTypes: ["Equity", "Bond"],
      contactPerson: "Marco Rossi",
      email: "contact@consob.it",
      lastUpdated: "2024-01-15",
    },
    {
      id: "RCA-005",
      name: "Spanish National Securities Market Commission",
      code: "ES-CNMV",
      country: "ES",
      status: "Active",
      instrumentTypes: ["Equity", "Bond", "Fund"],
      contactPerson: "Carlos Rodriguez",
      email: "contact@cnmv.es",
      lastUpdated: "2024-01-15",
    },
    {
      id: "RCA-006",
      name: "Dutch Authority for the Financial Markets",
      code: "NL-AFM",
      country: "NL",
      status: "Active",
      instrumentTypes: ["Equity", "Bond", "Derivative"],
      contactPerson: "Jan de Vries",
      email: "contact@afm.nl",
      lastUpdated: "2024-01-15",
    },
    {
      id: "RCA-007",
      name: "Swedish Financial Supervisory Authority",
      code: "SE-FI",
      country: "SE",
      status: "Inactive",
      instrumentTypes: ["Equity", "Bond"],
      contactPerson: "Erik Johansson",
      email: "contact@fi.se",
      lastUpdated: "2024-01-15",
    },
    {
      id: "RCA-008",
      name: "Danish Financial Supervisory Authority",
      code: "DK-FINANSTILSYNET",
      country: "DK",
      status: "Active",
      instrumentTypes: ["Equity", "Bond", "Fund"],
      contactPerson: "Lars Nielsen",
      email: "contact@finanstilsynet.dk",
      lastUpdated: "2024-01-15",
    },
  ]

  // Sample countries for filter
  const countries = [
    { code: "DE", name: "Germany" },
    { code: "FR", name: "France" },
    { code: "GB", name: "United Kingdom" },
    { code: "IT", name: "Italy" },
    { code: "ES", name: "Spain" },
    { code: "NL", name: "Netherlands" },
    { code: "SE", name: "Sweden" },
    { code: "DK", name: "Denmark" },
  ]

  // Sample instrument types for filter
  const instrumentTypes = ["Equity", "Bond", "Derivative", "Fund", "Commodity", "FX", "Money Market"]

  // Sample RCA changes history
  const rcaChangesHistory = [
    {
      id: "RCA-001",
      field: "Status",
      oldValue: "Inactive",
      newValue: "Active",
      changedBy: "System",
      changedDate: "2024-01-15",
      reason: "Annual review",
    },
    {
      id: "RCA-003",
      field: "Contact Person",
      oldValue: "James Wilson",
      newValue: "John Smith",
      changedBy: "Admin User",
      changedDate: "2024-01-10",
      reason: "Staff change",
    },
    {
      id: "RCA-005",
      field: "Email",
      oldValue: "info@cnmv.es",
      newValue: "contact@cnmv.es",
      changedBy: "Admin User",
      changedDate: "2024-01-05",
      reason: "Contact update",
    },
    {
      id: "RCA-007",
      field: "Status",
      oldValue: "Active",
      newValue: "Inactive",
      changedBy: "System",
      changedDate: "2023-12-20",
      reason: "Regulatory change",
    },
    {
      id: "RCA-002",
      field: "Instrument Types",
      oldValue: "Equity, Bond",
      newValue: "Equity, Bond, Fund",
      changedBy: "Admin User",
      changedDate: "2023-12-15",
      reason: "Scope expansion",
    },
  ]

  // Sample RCA approval requests
  const rcaApprovalRequests = [
    {
      id: "REQ-001",
      instrumentId: "ISIN12345678",
      instrumentName: "Example Corp Bond 2025",
      currentRCA: "DE-BAFIN",
      proposedRCA: "FR-AMF",
      requestedBy: "System",
      requestDate: "2024-03-07",
      status: "Pending",
      reason: "Issuer relocation",
    },
    {
      id: "REQ-002",
      instrumentId: "ISIN23456789",
      instrumentName: "Global Tech Equity",
      currentRCA: "IT-CONSOB",
      proposedRCA: "ES-CNMV",
      requestedBy: "Manual",
      requestDate: "2024-03-06",
      status: "Pending",
      reason: "Primary market change",
    },
    {
      id: "REQ-003",
      instrumentId: "ISIN34567890",
      instrumentName: "European Growth Fund",
      currentRCA: "UK-FCA",
      proposedRCA: "NL-AFM",
      requestedBy: "System",
      requestDate: "2024-03-05",
      status: "Approved",
      reason: "Brexit impact",
    },
    {
      id: "REQ-004",
      instrumentId: "ISIN45678901",
      instrumentName: "Nordic Balanced ETF",
      currentRCA: "SE-FI",
      proposedRCA: "DK-FINANSTILSYNET",
      requestedBy: "Manual",
      requestDate: "2024-03-04",
      status: "Rejected",
      reason: "Fund domicile change",
    },
    {
      id: "REQ-005",
      instrumentId: "ISIN56789012",
      instrumentName: "Sustainable Energy Bond",
      currentRCA: "FR-AMF",
      proposedRCA: "DE-BAFIN",
      requestedBy: "System",
      requestDate: "2024-03-03",
      status: "Pending",
      reason: "Issuer restructuring",
    },
  ]

  const handleSelectAllRCAs = (checked: boolean) => {
    if (checked) {
      setSelectedRCAs(rcaData.map((rca) => rca.id))
    } else {
      setSelectedRCAs([])
    }
  }

  const handleSelectRCA = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedRCAs([...selectedRCAs, id])
    } else {
      setSelectedRCAs(selectedRCAs.filter((rcaId) => rcaId !== id))
    }
  }

  const handleEditRCA = (rca: any) => {
    setCurrentRCA(rca)
    setIsEditDialogOpen(true)
  }

  const handleDeleteRCAs = () => {
    // In a real application, this would call an API to delete the selected RCAs
    console.log("Deleting RCAs:", selectedRCAs)
    setIsDeleteDialogOpen(false)
    setSelectedRCAs([])
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-green-500">Active</Badge>
      case "Inactive":
        return (
          <Badge variant="outline" className="text-amber-500 border-amber-500">
            Inactive
          </Badge>
        )
      case "Pending":
        return (
          <Badge variant="outline" className="text-blue-500 border-blue-500">
            Pending
          </Badge>
        )
      case "Approved":
        return <Badge className="bg-green-500">Approved</Badge>
      case "Rejected":
        return <Badge variant="destructive">Rejected</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reference Competent Authority (RCA) Management</h1>
          <p className="text-muted-foreground">
            Manage and monitor Reference Competent Authorities for financial instruments
          </p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 md:grid-cols-3">
          <TabsTrigger value="browse">Browse RCAs</TabsTrigger>
          <TabsTrigger value="approvals">Approval Requests</TabsTrigger>
          <TabsTrigger value="changes">Change History</TabsTrigger>
        </TabsList>

        <TabsContent value="browse" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reference Competent Authorities</CardTitle>
              <CardDescription>Browse and manage Reference Competent Authorities (RCAs)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search by name, code, or country..."
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
                        <h4 className="font-medium">Filter RCAs</h4>
                        <div className="space-y-2">
                          <Label htmlFor="status">Status</Label>
                          <Select defaultValue="all">
                            <SelectTrigger id="status">
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Statuses</SelectItem>
                              <SelectItem value="active">Active</SelectItem>
                              <SelectItem value="inactive">Inactive</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="country">Country</Label>
                          <Select defaultValue="all">
                            <SelectTrigger id="country">
                              <SelectValue placeholder="Select country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Countries</SelectItem>
                              {countries.map((country) => (
                                <SelectItem key={country.code} value={country.code}>
                                  {country.name} ({country.code})
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="instrumentType">Instrument Type</Label>
                          <Select defaultValue="all">
                            <SelectTrigger id="instrumentType">
                              <SelectValue placeholder="Select instrument type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Types</SelectItem>
                              {instrumentTypes.map((type) => (
                                <SelectItem key={type} value={type.toLowerCase()}>
                                  {type}
                                </SelectItem>
                              ))}
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
                    <Upload className="h-4 w-4" />
                    Import
                  </Button>
                  <Button className="flex items-center gap-1">
                    <Plus className="h-4 w-4" />
                    Add RCA
                  </Button>
                </div>
              </div>

              {selectedRCAs.length > 0 && (
                <div className="flex items-center justify-between bg-muted/50 p-2 rounded-md">
                  <span className="text-sm">
                    {selectedRCAs.length} {selectedRCAs.length === 1 ? "RCA" : "RCAs"} selected
                  </span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Download className="h-4 w-4" />
                      Export Selected
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      className="flex items-center gap-1"
                      onClick={() => setIsDeleteDialogOpen(true)}
                    >
                      <Trash2 className="h-4 w-4" />
                      Delete Selected
                    </Button>
                  </div>
                </div>
              )}

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">
                        <Checkbox
                          checked={selectedRCAs.length === rcaData.length && rcaData.length > 0}
                          onCheckedChange={handleSelectAllRCAs}
                          aria-label="Select all RCAs"
                        />
                      </TableHead>
                      <TableHead>Code</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Country</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Instrument Types</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rcaData.map((rca) => (
                      <TableRow key={rca.id}>
                        <TableCell>
                          <Checkbox
                            checked={selectedRCAs.includes(rca.id)}
                            onCheckedChange={(checked) => handleSelectRCA(rca.id, !!checked)}
                            aria-label={`Select ${rca.code}`}
                          />
                        </TableCell>
                        <TableCell className="font-medium">{rca.code}</TableCell>
                        <TableCell>{rca.name}</TableCell>
                        <TableCell>{rca.country}</TableCell>
                        <TableCell>{getStatusBadge(rca.status)}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {rca.instrumentTypes.map((type, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {type}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div>{rca.contactPerson}</div>
                            <div className="text-muted-foreground text-xs">{rca.email}</div>
                          </div>
                        </TableCell>
                        <TableCell>{rca.lastUpdated}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" title="View Details" onClick={() => handleEditRCA(rca)}>
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" title="Edit" onClick={() => handleEditRCA(rca)}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" title="External Link">
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
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                Showing {rcaData.length} of {rcaData.length} RCAs
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

        <TabsContent value="approvals" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>RCA Approval Requests</CardTitle>
              <CardDescription>
                Manage requests to change the Reference Competent Authority for instruments
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="md:w-1/3">
                  <label className="text-sm font-medium">Status</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="All Statuses" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:w-1/3">
                  <label className="text-sm font-medium">Request Type</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="system">System Generated</SelectItem>
                      <SelectItem value="manual">Manually Created</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:w-1/3">
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
                      <TableHead>Request ID</TableHead>
                      <TableHead>Instrument</TableHead>
                      <TableHead>Current RCA</TableHead>
                      <TableHead>Proposed RCA</TableHead>
                      <TableHead>Requested By</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rcaApprovalRequests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium">{request.id}</TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div>{request.instrumentId}</div>
                            <div className="text-muted-foreground text-xs">{request.instrumentName}</div>
                          </div>
                        </TableCell>
                        <TableCell>{request.currentRCA}</TableCell>
                        <TableCell>{request.proposedRCA}</TableCell>
                        <TableCell>{request.requestedBy}</TableCell>
                        <TableCell>{request.requestDate}</TableCell>
                        <TableCell>{getStatusBadge(request.status)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {request.status === "Pending" && (
                              <>
                                <Button variant="outline" size="sm">
                                  Review
                                </Button>
                                <Button variant="outline" size="sm">
                                  Approve
                                </Button>
                              </>
                            )}
                            {request.status !== "Pending" && (
                              <Button variant="ghost" size="icon" title="View Details">
                                <Eye className="h-4 w-4" />
                              </Button>
                            )}
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
                <div className="text-sm text-muted-foreground">
                  Showing {rcaApprovalRequests.length} of {rcaApprovalRequests.length} requests
                </div>
                <Button>Create New Request</Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="changes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>RCA Change History</CardTitle>
              <CardDescription>Track changes to Reference Competent Authorities over time</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="md:w-1/3">
                  <label className="text-sm font-medium">RCA</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="All RCAs" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All RCAs</SelectItem>
                      {rcaData.map((rca) => (
                        <SelectItem key={rca.id} value={rca.id}>
                          {rca.code} - {rca.country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:w-1/3">
                  <label className="text-sm font-medium">Field</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="All Fields" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Fields</SelectItem>
                      <SelectItem value="status">Status</SelectItem>
                      <SelectItem value="contactPerson">Contact Person</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="instrumentTypes">Instrument Types</SelectItem>
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
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>RCA ID</TableHead>
                      <TableHead>Field</TableHead>
                      <TableHead>Old Value</TableHead>
                      <TableHead>New Value</TableHead>
                      <TableHead>Changed By</TableHead>
                      <TableHead>Changed Date</TableHead>
                      <TableHead>Reason</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rcaChangesHistory.map((change, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{change.id}</TableCell>
                        <TableCell>{change.field}</TableCell>
                        <TableCell className="text-muted-foreground">{change.oldValue}</TableCell>
                        <TableCell>{change.newValue}</TableCell>
                        <TableCell>{change.changedBy}</TableCell>
                        <TableCell>{change.changedDate}</TableCell>
                        <TableCell>{change.reason}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center justify-between w-full">
                <div className="text-sm text-muted-foreground">Showing 5 of 45 changes</div>
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
      </Tabs>

      {/* Edit RCA Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Reference Competent Authority</DialogTitle>
            <DialogDescription>Update the details for RCA {currentRCA?.code}</DialogDescription>
          </DialogHeader>

          {currentRCA && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="code" className="text-right">
                  Code
                </Label>
                <Input id="code" value={currentRCA.code} className="col-span-3" disabled />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" defaultValue={currentRCA.name} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="country" className="text-right">
                  Country
                </Label>
                <Select defaultValue={currentRCA.country}>
                  <SelectTrigger id="country" className="col-span-3">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        {country.name} ({country.code})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="status" className="text-right">
                  Status
                </Label>
                <Select defaultValue={currentRCA.status}>
                  <SelectTrigger id="status" className="col-span-3">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label htmlFor="instrumentTypes" className="text-right pt-2">
                  Instrument Types
                </Label>
                <div className="col-span-3 space-y-2">
                  {instrumentTypes.map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox id={`type-${type}`} defaultChecked={currentRCA.instrumentTypes.includes(type)} />
                      <Label htmlFor={`type-${type}`}>{type}</Label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="contactPerson" className="text-right">
                  Contact Person
                </Label>
                <Input id="contactPerson" defaultValue={currentRCA.contactPerson} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input id="email" defaultValue={currentRCA.email} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="changeReason" className="text-right">
                  Reason for Change
                </Label>
                <Input id="changeReason" placeholder="Enter reason for change" className="col-span-3" />
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete {selectedRCAs.length} {selectedRCAs.length === 1 ? "RCA" : "RCAs"}? This
              action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="rounded-md bg-muted p-4 max-h-[200px] overflow-auto">
              <ul className="text-sm space-y-1">
                {selectedRCAs.map((id) => {
                  const rca = rcaData.find((r) => r.id === id)
                  return (
                    <li key={id} className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {rca?.code} - {rca?.name}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteRCAs}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}


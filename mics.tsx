"use client"

import { useState } from "react"
import {
  Building2,
  Search,
  Filter,
  Download,
  Upload,
  Plus,
  Edit,
  Trash2,
  Eye,
  ExternalLink,
  CheckCircle,
} from "lucide-react"
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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function MICs() {
  const [activeTab, setActiveTab] = useState("browse")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedMICs, setSelectedMICs] = useState<string[]>([])
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentMIC, setCurrentMIC] = useState<any>(null)

  // Sample MIC data
  const micData = [
    {
      mic: "XNYS",
      operatingMic: "XNYS",
      name: "NEW YORK STOCK EXCHANGE, INC.",
      country: "US",
      city: "NEW YORK",
      status: "Active",
      segment: "XNYS",
      segmentName: "NEW YORK STOCK EXCHANGE, INC.",
      lastUpdated: "2024-01-15",
    },
    {
      mic: "XNAS",
      operatingMic: "XNAS",
      name: "NASDAQ - ALL MARKETS",
      country: "US",
      city: "NEW YORK",
      status: "Active",
      segment: "XNAS",
      segmentName: "NASDAQ - ALL MARKETS",
      lastUpdated: "2024-01-15",
    },
    {
      mic: "XLON",
      operatingMic: "XLON",
      name: "LONDON STOCK EXCHANGE",
      country: "GB",
      city: "LONDON",
      status: "Active",
      segment: "XLON",
      segmentName: "LONDON STOCK EXCHANGE",
      lastUpdated: "2024-01-15",
    },
    {
      mic: "XPAR",
      operatingMic: "XPAR",
      name: "EURONEXT PARIS",
      country: "FR",
      city: "PARIS",
      status: "Active",
      segment: "XPAR",
      segmentName: "EURONEXT PARIS",
      lastUpdated: "2024-01-15",
    },
    {
      mic: "XFRA",
      operatingMic: "XFRA",
      name: "DEUTSCHE BOERSE AG",
      country: "DE",
      city: "FRANKFURT",
      status: "Active",
      segment: "XFRA",
      segmentName: "DEUTSCHE BOERSE AG",
      lastUpdated: "2024-01-15",
    },
    {
      mic: "XETR",
      operatingMic: "XETR",
      name: "XETRA",
      country: "DE",
      city: "FRANKFURT",
      status: "Active",
      segment: "XETR",
      segmentName: "XETRA",
      lastUpdated: "2024-01-15",
    },
    {
      mic: "XAMS",
      operatingMic: "XAMS",
      name: "EURONEXT AMSTERDAM",
      country: "NL",
      city: "AMSTERDAM",
      status: "Active",
      segment: "XAMS",
      segmentName: "EURONEXT AMSTERDAM",
      lastUpdated: "2024-01-15",
    },
    {
      mic: "XHKG",
      operatingMic: "XHKG",
      name: "HONG KONG EXCHANGES AND CLEARING LTD",
      country: "HK",
      city: "HONG KONG",
      status: "Active",
      segment: "XHKG",
      segmentName: "HONG KONG EXCHANGES AND CLEARING LTD",
      lastUpdated: "2024-01-15",
    },
    {
      mic: "XTKS",
      operatingMic: "XTKS",
      name: "TOKYO STOCK EXCHANGE",
      country: "JP",
      city: "TOKYO",
      status: "Active",
      segment: "XTKS",
      segmentName: "TOKYO STOCK EXCHANGE",
      lastUpdated: "2024-01-15",
    },
    {
      mic: "XBRU",
      operatingMic: "XBRU",
      name: "EURONEXT BRUSSELS",
      country: "BE",
      city: "BRUSSELS",
      status: "Active",
      segment: "XBRU",
      segmentName: "EURONEXT BRUSSELS",
      lastUpdated: "2024-01-15",
    },
  ]

  // Sample countries for filter
  const countries = [
    { code: "US", name: "United States" },
    { code: "GB", name: "United Kingdom" },
    { code: "FR", name: "France" },
    { code: "DE", name: "Germany" },
    { code: "NL", name: "Netherlands" },
    { code: "HK", name: "Hong Kong" },
    { code: "JP", name: "Japan" },
    { code: "BE", name: "Belgium" },
  ]

  // Sample MIC changes history
  const micChangesHistory = [
    {
      mic: "XNYS",
      field: "Status",
      oldValue: "Inactive",
      newValue: "Active",
      changedBy: "System",
      changedDate: "2024-01-15",
      reason: "Annual review",
    },
    {
      mic: "XLON",
      field: "Name",
      oldValue: "LONDON STOCK EXCHANGE PLC",
      newValue: "LONDON STOCK EXCHANGE",
      changedBy: "Admin User",
      changedDate: "2024-01-10",
      reason: "Corporate restructuring",
    },
    {
      mic: "XPAR",
      field: "Segment",
      oldValue: "XPAR1",
      newValue: "XPAR",
      changedBy: "Admin User",
      changedDate: "2024-01-05",
      reason: "Segment consolidation",
    },
    {
      mic: "XAMS",
      field: "City",
      oldValue: "AMSTERDAM ZUID",
      newValue: "AMSTERDAM",
      changedBy: "System",
      changedDate: "2023-12-20",
      reason: "Address update",
    },
    {
      mic: "XFRA",
      field: "Operating MIC",
      oldValue: "XFRA1",
      newValue: "XFRA",
      changedBy: "Admin User",
      changedDate: "2023-12-15",
      reason: "Operational change",
    },
  ]

  // Sample validation rules
  const validationRules = [
    {
      id: 1,
      field: "MIC",
      rule: "Must be 4 alphabetic characters",
      severity: "Error",
      description: "Market Identifier Code must be exactly 4 alphabetic characters (A-Z)",
    },
    {
      id: 2,
      field: "Operating MIC",
      rule: "Must be a valid MIC",
      severity: "Error",
      description: "Operating MIC must exist in the MIC database",
    },
    {
      id: 3,
      field: "Country",
      rule: "Must be a valid ISO country code",
      severity: "Error",
      description: "Country must be a valid ISO 3166-1 alpha-2 code",
    },
    {
      id: 4,
      field: "Name",
      rule: "Cannot be empty",
      severity: "Error",
      description: "Market name cannot be empty",
    },
    {
      id: 5,
      field: "City",
      rule: "Should match country",
      severity: "Warning",
      description: "City should be a valid city in the specified country",
    },
  ]

  const handleSelectAllMICs = (checked: boolean) => {
    if (checked) {
      setSelectedMICs(micData.map((mic) => mic.mic))
    } else {
      setSelectedMICs([])
    }
  }

  const handleSelectMIC = (mic: string, checked: boolean) => {
    if (checked) {
      setSelectedMICs([...selectedMICs, mic])
    } else {
      setSelectedMICs(selectedMICs.filter((m) => m !== mic))
    }
  }

  const handleEditMIC = (mic: any) => {
    setCurrentMIC(mic)
    setIsEditDialogOpen(true)
  }

  const handleDeleteMICs = () => {
    // In a real application, this would call an API to delete the selected MICs
    console.log("Deleting MICs:", selectedMICs)
    setIsDeleteDialogOpen(false)
    setSelectedMICs([])
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
      case "Deleted":
        return <Badge variant="destructive">Deleted</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Market Identifier Codes (MICs)</h1>
          <p className="text-muted-foreground">Manage and browse ISO 10383 Market Identifier Codes</p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 md:grid-cols-3">
          <TabsTrigger value="browse">Browse MICs</TabsTrigger>
          <TabsTrigger value="changes">Change History</TabsTrigger>
          <TabsTrigger value="validation">Validation Rules</TabsTrigger>
        </TabsList>

        <TabsContent value="browse" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Market Identifier Codes</CardTitle>
              <CardDescription>Browse and manage ISO 10383 Market Identifier Codes (MICs)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search by MIC, name, or country..."
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
                        <h4 className="font-medium">Filter MICs</h4>
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
                              <SelectItem value="deleted">Deleted</SelectItem>
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
                          <Label htmlFor="updated">Last Updated</Label>
                          <Select defaultValue="all">
                            <SelectTrigger id="updated">
                              <SelectValue placeholder="Select time period" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">Any Time</SelectItem>
                              <SelectItem value="7days">Last 7 Days</SelectItem>
                              <SelectItem value="30days">Last 30 Days</SelectItem>
                              <SelectItem value="90days">Last 90 Days</SelectItem>
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
                    Add MIC
                  </Button>
                </div>
              </div>

              {selectedMICs.length > 0 && (
                <div className="flex items-center justify-between bg-muted/50 p-2 rounded-md">
                  <span className="text-sm">
                    {selectedMICs.length} {selectedMICs.length === 1 ? "MIC" : "MICs"} selected
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
                          checked={selectedMICs.length === micData.length && micData.length > 0}
                          onCheckedChange={handleSelectAllMICs}
                          aria-label="Select all MICs"
                        />
                      </TableHead>
                      <TableHead>MIC</TableHead>
                      <TableHead>Operating MIC</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Country</TableHead>
                      <TableHead>City</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {micData.map((mic) => (
                      <TableRow key={mic.mic}>
                        <TableCell>
                          <Checkbox
                            checked={selectedMICs.includes(mic.mic)}
                            onCheckedChange={(checked) => handleSelectMIC(mic.mic, !!checked)}
                            aria-label={`Select ${mic.mic}`}
                          />
                        </TableCell>
                        <TableCell className="font-medium">{mic.mic}</TableCell>
                        <TableCell>{mic.operatingMic}</TableCell>
                        <TableCell>{mic.name}</TableCell>
                        <TableCell>{mic.country}</TableCell>
                        <TableCell>{mic.city}</TableCell>
                        <TableCell>{getStatusBadge(mic.status)}</TableCell>
                        <TableCell>{mic.lastUpdated}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" title="View Details" onClick={() => handleEditMIC(mic)}>
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" title="Edit" onClick={() => handleEditMIC(mic)}>
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
              <div className="text-sm text-muted-foreground">Showing {micData.length} of 1,245 MICs</div>
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

        <TabsContent value="changes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>MIC Change History</CardTitle>
              <CardDescription>Track changes to Market Identifier Codes over time</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="md:w-1/3">
                  <label className="text-sm font-medium">MIC</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="All MICs" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All MICs</SelectItem>
                      {micData.map((mic) => (
                        <SelectItem key={mic.mic} value={mic.mic}>
                          {mic.mic} - {mic.name}
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
                      <SelectItem value="name">Name</SelectItem>
                      <SelectItem value="operatingMic">Operating MIC</SelectItem>
                      <SelectItem value="country">Country</SelectItem>
                      <SelectItem value="city">City</SelectItem>
                      <SelectItem value="segment">Segment</SelectItem>
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
                      <TableHead>MIC</TableHead>
                      <TableHead>Field</TableHead>
                      <TableHead>Old Value</TableHead>
                      <TableHead>New Value</TableHead>
                      <TableHead>Changed By</TableHead>
                      <TableHead>Changed Date</TableHead>
                      <TableHead>Reason</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {micChangesHistory.map((change, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{change.mic}</TableCell>
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
                <div className="text-sm text-muted-foreground">Showing 5 of 124 changes</div>
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

        <TabsContent value="validation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>MIC Validation Rules</CardTitle>
              <CardDescription>Rules for validating Market Identifier Codes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertTitle>ISO 10383 Compliance</AlertTitle>
                <AlertDescription>
                  All MICs must comply with ISO 10383 standard for Market Identifier Codes.
                </AlertDescription>
              </Alert>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Field</TableHead>
                      <TableHead>Rule</TableHead>
                      <TableHead>Severity</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {validationRules.map((rule) => (
                      <TableRow key={rule.id}>
                        <TableCell className="font-medium">{rule.field}</TableCell>
                        <TableCell>{rule.rule}</TableCell>
                        <TableCell>
                          {rule.severity === "Error" ? (
                            <Badge variant="destructive">Error</Badge>
                          ) : (
                            <Badge variant="outline" className="text-amber-500 border-amber-500">
                              Warning
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>{rule.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-medium mb-2">Additional Information</h3>
                <p className="text-sm text-muted-foreground">
                  Market Identifier Codes (MICs) are defined in ISO 10383 and are used for identifying exchanges,
                  trading platforms, regulated or non-regulated markets, and trade reporting facilities as sources of
                  prices and related information.
                </p>
                <div className="mt-2">
                  <Button variant="outline" className="flex items-center gap-1">
                    <ExternalLink className="h-4 w-4" />
                    ISO 10383 Documentation
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Edit MIC Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Market Identifier Code</DialogTitle>
            <DialogDescription>Update the details for MIC {currentMIC?.mic}</DialogDescription>
          </DialogHeader>

          {currentMIC && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="mic" className="text-right">
                  MIC
                </Label>
                <Input id="mic" value={currentMIC.mic} className="col-span-3" disabled />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="operatingMic" className="text-right">
                  Operating MIC
                </Label>
                <Input id="operatingMic" defaultValue={currentMIC.operatingMic} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" defaultValue={currentMIC.name} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="country" className="text-right">
                  Country
                </Label>
                <Select defaultValue={currentMIC.country}>
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
                <Label htmlFor="city" className="text-right">
                  City
                </Label>
                <Input id="city" defaultValue={currentMIC.city} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="status" className="text-right">
                  Status
                </Label>
                <Select defaultValue={currentMIC.status}>
                  <SelectTrigger id="status" className="col-span-3">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                    <SelectItem value="Deleted">Deleted</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="segment" className="text-right">
                  Segment
                </Label>
                <Input id="segment" defaultValue={currentMIC.segment} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="segmentName" className="text-right">
                  Segment Name
                </Label>
                <Input id="segmentName" defaultValue={currentMIC.segmentName} className="col-span-3" />
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
              Are you sure you want to delete {selectedMICs.length} {selectedMICs.length === 1 ? "MIC" : "MICs"}? This
              action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="rounded-md bg-muted p-4 max-h-[200px] overflow-auto">
              <ul className="text-sm space-y-1">
                {selectedMICs.map((mic) => (
                  <li key={mic} className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {mic} - {micData.find((m) => m.mic === mic)?.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteMICs}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}


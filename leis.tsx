"use client"

import { useState } from "react"
import {
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
  Building,
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

export default function LEIs() {
  const [activeTab, setActiveTab] = useState("browse")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLEIs, setSelectedLEIs] = useState<string[]>([])
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentLEI, setCurrentLEI] = useState<any>(null)

  // Sample LEI data
  const leiData = [
    {
      lei: "549300RODN739VTKDF03",
      legalName: "APPLE INC.",
      entityStatus: "ACTIVE",
      country: "US",
      jurisdiction: "US",
      registrationAuthority: "SEC",
      entityCategory: "GENERAL",
      lastUpdated: "2024-01-15",
    },
    {
      lei: "549300O4LFMZ51SUI152",
      legalName: "MICROSOFT CORPORATION",
      entityStatus: "ACTIVE",
      country: "US",
      jurisdiction: "US",
      registrationAuthority: "SEC",
      entityCategory: "GENERAL",
      lastUpdated: "2024-01-15",
    },
    {
      lei: "529900T8BM49AURSDO89",
      legalName: "AMAZON.COM, INC.",
      entityStatus: "ACTIVE",
      country: "US",
      jurisdiction: "US",
      registrationAuthority: "SEC",
      entityCategory: "GENERAL",
      lastUpdated: "2024-01-15",
    },
    {
      lei: "213800ZBMXGN8Y67BK82",
      legalName: "ALPHABET INC.",
      entityStatus: "ACTIVE",
      country: "US",
      jurisdiction: "US",
      registrationAuthority: "SEC",
      entityCategory: "GENERAL",
      lastUpdated: "2024-01-15",
    },
    {
      lei: "213800FTTWULQ3V1FT64",
      legalName: "META PLATFORMS, INC.",
      entityStatus: "ACTIVE",
      country: "US",
      jurisdiction: "US",
      registrationAuthority: "SEC",
      entityCategory: "GENERAL",
      lastUpdated: "2024-01-15",
    },
    {
      lei: "213800MBWEIJDM5CU106",
      legalName: "TESLA, INC.",
      entityStatus: "ACTIVE",
      country: "US",
      jurisdiction: "US",
      registrationAuthority: "SEC",
      entityCategory: "GENERAL",
      lastUpdated: "2024-01-15",
    },
    {
      lei: "529900ODI3047E2LL666",
      legalName: "NVIDIA CORPORATION",
      entityStatus: "ACTIVE",
      country: "US",
      jurisdiction: "US",
      registrationAuthority: "SEC",
      entityCategory: "GENERAL",
      lastUpdated: "2024-01-15",
    },
    {
      lei: "5493006KMX1VFTPYPW14",
      legalName: "JPMORGAN CHASE & CO.",
      entityStatus: "ACTIVE",
      country: "US",
      jurisdiction: "US",
      registrationAuthority: "SEC",
      entityCategory: "FINANCIAL",
      lastUpdated: "2024-01-15",
    },
    {
      lei: "549300SXBVLZK11CRG67",
      legalName: "BANK OF AMERICA CORPORATION",
      entityStatus: "ACTIVE",
      country: "US",
      jurisdiction: "US",
      registrationAuthority: "SEC",
      entityCategory: "FINANCIAL",
      lastUpdated: "2024-01-15",
    },
    {
      lei: "549300HGZFVXGKZFQZ86",
      legalName: "DEUTSCHE BANK AKTIENGESELLSCHAFT",
      entityStatus: "ACTIVE",
      country: "DE",
      jurisdiction: "DE",
      registrationAuthority: "BAFIN",
      entityCategory: "FINANCIAL",
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

  // Sample LEI changes history
  const leiChangesHistory = [
    {
      lei: "549300RODN739VTKDF03",
      field: "Legal Name",
      oldValue: "APPLE INC",
      newValue: "APPLE INC.",
      changedBy: "System",
      changedDate: "2024-01-15",
      reason: "Annual review",
    },
    {
      lei: "213800FTTWULQ3V1FT64",
      field: "Legal Name",
      oldValue: "FACEBOOK, INC.",
      newValue: "META PLATFORMS, INC.",
      changedBy: "Admin User",
      changedDate: "2024-01-10",
      reason: "Corporate rebranding",
    },
    {
      lei: "529900T8BM49AURSDO89",
      field: "Entity Status",
      oldValue: "PENDING",
      newValue: "ACTIVE",
      changedBy: "Admin User",
      changedDate: "2024-01-05",
      reason: "Registration completed",
    },
    {
      lei: "213800MBWEIJDM5CU106",
      field: "Registration Authority",
      oldValue: "DELAWARE",
      newValue: "SEC",
      changedBy: "System",
      changedDate: "2023-12-20",
      reason: "Authority update",
    },
    {
      lei: "5493006KMX1VFTPYPW14",
      field: "Entity Category",
      oldValue: "GENERAL",
      newValue: "FINANCIAL",
      changedBy: "Admin User",
      changedDate: "2023-12-15",
      reason: "Category reclassification",
    },
  ]

  // Sample validation rules
  const validationRules = [
    {
      id: 1,
      field: "LEI",
      rule: "Must be 20 alphanumeric characters",
      severity: "Error",
      description: "Legal Entity Identifier must be exactly 20 alphanumeric characters",
    },
    {
      id: 2,
      field: "LEI",
      rule: "Must pass checksum validation",
      severity: "Error",
      description: "LEI must pass ISO 17442 checksum validation",
    },
    {
      id: 3,
      field: "Legal Name",
      rule: "Cannot be empty",
      severity: "Error",
      description: "Legal name of the entity cannot be empty",
    },
    {
      id: 4,
      field: "Country",
      rule: "Must be a valid ISO country code",
      severity: "Error",
      description: "Country must be a valid ISO 3166-1 alpha-2 code",
    },
    {
      id: 5,
      field: "Jurisdiction",
      rule: "Should match country in most cases",
      severity: "Warning",
      description: "Jurisdiction should typically match the country of legal registration",
    },
  ]

  const handleSelectAllLEIs = (checked: boolean) => {
    if (checked) {
      setSelectedLEIs(leiData.map((lei) => lei.lei))
    } else {
      setSelectedLEIs([])
    }
  }

  const handleSelectLEI = (lei: string, checked: boolean) => {
    if (checked) {
      setSelectedLEIs([...selectedLEIs, lei])
    } else {
      setSelectedLEIs(selectedLEIs.filter((l) => l !== lei))
    }
  }

  const handleEditLEI = (lei: any) => {
    setCurrentLEI(lei)
    setIsEditDialogOpen(true)
  }

  const handleDeleteLEIs = () => {
    // In a real application, this would call an API to delete the selected LEIs
    console.log("Deleting LEIs:", selectedLEIs)
    setIsDeleteDialogOpen(false)
    setSelectedLEIs([])
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ACTIVE":
        return <Badge className="bg-green-500">Active</Badge>
      case "PENDING":
        return (
          <Badge variant="outline" className="text-amber-500 border-amber-500">
            Pending
          </Badge>
        )
      case "LAPSED":
        return <Badge variant="destructive">Lapsed</Badge>
      case "MERGED":
        return (
          <Badge variant="outline" className="text-blue-500 border-blue-500">
            Merged
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
          <h1 className="text-3xl font-bold tracking-tight">Legal Entity Identifiers (LEIs)</h1>
          <p className="text-muted-foreground">Manage and browse ISO 17442 Legal Entity Identifiers</p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 md:grid-cols-3">
          <TabsTrigger value="browse">Browse LEIs</TabsTrigger>
          <TabsTrigger value="changes">Change History</TabsTrigger>
          <TabsTrigger value="validation">Validation Rules</TabsTrigger>
        </TabsList>

        <TabsContent value="browse" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Legal Entity Identifiers</CardTitle>
              <CardDescription>Browse and manage ISO 17442 Legal Entity Identifiers (LEIs)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search by LEI, legal name, or country..."
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
                        <h4 className="font-medium">Filter LEIs</h4>
                        <div className="space-y-2">
                          <Label htmlFor="status">Entity Status</Label>
                          <Select defaultValue="all">
                            <SelectTrigger id="status">
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Statuses</SelectItem>
                              <SelectItem value="active">Active</SelectItem>
                              <SelectItem value="pending">Pending</SelectItem>
                              <SelectItem value="lapsed">Lapsed</SelectItem>
                              <SelectItem value="merged">Merged</SelectItem>
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
                          <Label htmlFor="category">Entity Category</Label>
                          <Select defaultValue="all">
                            <SelectTrigger id="category">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Categories</SelectItem>
                              <SelectItem value="general">General</SelectItem>
                              <SelectItem value="financial">Financial</SelectItem>
                              <SelectItem value="government">Government</SelectItem>
                              <SelectItem value="fund">Fund</SelectItem>
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
                    Add LEI
                  </Button>
                </div>
              </div>

              {selectedLEIs.length > 0 && (
                <div className="flex items-center justify-between bg-muted/50 p-2 rounded-md">
                  <span className="text-sm">
                    {selectedLEIs.length} {selectedLEIs.length === 1 ? "LEI" : "LEIs"} selected
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
                          checked={selectedLEIs.length === leiData.length && leiData.length > 0}
                          onCheckedChange={handleSelectAllLEIs}
                          aria-label="Select all LEIs"
                        />
                      </TableHead>
                      <TableHead>LEI</TableHead>
                      <TableHead>Legal Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Country</TableHead>
                      <TableHead>Jurisdiction</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leiData.map((lei) => (
                      <TableRow key={lei.lei}>
                        <TableCell>
                          <Checkbox
                            checked={selectedLEIs.includes(lei.lei)}
                            onCheckedChange={(checked) => handleSelectLEI(lei.lei, !!checked)}
                            aria-label={`Select ${lei.lei}`}
                          />
                        </TableCell>
                        <TableCell className="font-medium">{lei.lei}</TableCell>
                        <TableCell>{lei.legalName}</TableCell>
                        <TableCell>{getStatusBadge(lei.entityStatus)}</TableCell>
                        <TableCell>{lei.country}</TableCell>
                        <TableCell>{lei.jurisdiction}</TableCell>
                        <TableCell>{lei.entityCategory}</TableCell>
                        <TableCell>{lei.lastUpdated}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" title="View Details" onClick={() => handleEditLEI(lei)}>
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" title="Edit" onClick={() => handleEditLEI(lei)}>
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
              <div className="text-sm text-muted-foreground">Showing {leiData.length} of 2,145 LEIs</div>
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
              <CardTitle>LEI Change History</CardTitle>
              <CardDescription>Track changes to Legal Entity Identifiers over time</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="md:w-1/3">
                  <label className="text-sm font-medium">LEI</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="All LEIs" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All LEIs</SelectItem>
                      {leiData.map((lei) => (
                        <SelectItem key={lei.lei} value={lei.lei}>
                          {lei.lei.substring(0, 8)}... - {lei.legalName}
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
                      <SelectItem value="legalName">Legal Name</SelectItem>
                      <SelectItem value="entityStatus">Entity Status</SelectItem>
                      <SelectItem value="country">Country</SelectItem>
                      <SelectItem value="jurisdiction">Jurisdiction</SelectItem>
                      <SelectItem value="registrationAuthority">Registration Authority</SelectItem>
                      <SelectItem value="entityCategory">Entity Category</SelectItem>
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
                      <TableHead>LEI</TableHead>
                      <TableHead>Field</TableHead>
                      <TableHead>Old Value</TableHead>
                      <TableHead>New Value</TableHead>
                      <TableHead>Changed By</TableHead>
                      <TableHead>Changed Date</TableHead>
                      <TableHead>Reason</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leiChangesHistory.map((change, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{change.lei.substring(0, 8)}...</TableCell>
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
                <div className="text-sm text-muted-foreground">Showing 5 of 156 changes</div>
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
              <CardTitle>LEI Validation Rules</CardTitle>
              <CardDescription>Rules for validating Legal Entity Identifiers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertTitle>ISO 17442 Compliance</AlertTitle>
                <AlertDescription>
                  All LEIs must comply with ISO 17442 standard for Legal Entity Identifiers.
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
                  Legal Entity Identifiers (LEIs) are defined in ISO 17442 and are used for identifying legal entities
                  that engage in financial transactions. The LEI is a 20-character alphanumeric code based on the ISO
                  17442 standard.
                </p>
                <div className="mt-2">
                  <Button variant="outline" className="flex items-center gap-1">
                    <ExternalLink className="h-4 w-4" />
                    ISO 17442 Documentation
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Edit LEI Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Legal Entity Identifier</DialogTitle>
            <DialogDescription>Update the details for LEI {currentLEI?.lei}</DialogDescription>
          </DialogHeader>

          {currentLEI && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="lei" className="text-right">
                  LEI
                </Label>
                <Input id="lei" value={currentLEI.lei} className="col-span-3" disabled />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="legalName" className="text-right">
                  Legal Name
                </Label>
                <Input id="legalName" defaultValue={currentLEI.legalName} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="entityStatus" className="text-right">
                  Entity Status
                </Label>
                <Select defaultValue={currentLEI.entityStatus}>
                  <SelectTrigger id="entityStatus" className="col-span-3">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ACTIVE">Active</SelectItem>
                    <SelectItem value="PENDING">Pending</SelectItem>
                    <SelectItem value="LAPSED">Lapsed</SelectItem>
                    <SelectItem value="MERGED">Merged</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="country" className="text-right">
                  Country
                </Label>
                <Select defaultValue={currentLEI.country}>
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
                <Label htmlFor="jurisdiction" className="text-right">
                  Jurisdiction
                </Label>
                <Select defaultValue={currentLEI.jurisdiction}>
                  <SelectTrigger id="jurisdiction" className="col-span-3">
                    <SelectValue placeholder="Select jurisdiction" />
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
                <Label htmlFor="registrationAuthority" className="text-right">
                  Registration Authority
                </Label>
                <Input
                  id="registrationAuthority"
                  defaultValue={currentLEI.registrationAuthority}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="entityCategory" className="text-right">
                  Entity Category
                </Label>
                <Select defaultValue={currentLEI.entityCategory}>
                  <SelectTrigger id="entityCategory" className="col-span-3">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="GENERAL">General</SelectItem>
                    <SelectItem value="FINANCIAL">Financial</SelectItem>
                    <SelectItem value="GOVERNMENT">Government</SelectItem>
                    <SelectItem value="FUND">Fund</SelectItem>
                  </SelectContent>
                </Select>
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
              Are you sure you want to delete {selectedLEIs.length} {selectedLEIs.length === 1 ? "LEI" : "LEIs"}? This
              action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="rounded-md bg-muted p-4 max-h-[200px] overflow-auto">
              <ul className="text-sm space-y-1">
                {selectedLEIs.map((lei) => (
                  <li key={lei} className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {lei.substring(0, 8)}... - {leiData.find((l) => l.lei === lei)?.legalName}
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
            <Button variant="destructive" onClick={handleDeleteLEIs}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}


"use client"

import { useState, useRef } from "react"
import { Upload, AlertTriangle, FileText, CheckCircle, Info, X, ChevronDown, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export default function UploadProcess() {
  const [activeTab, setActiveTab] = useState("upload")
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadComplete, setUploadComplete] = useState(false)
  const [validationErrors, setValidationErrors] = useState([])
  const [selectedFileType, setSelectedFileType] = useState("MIC")
  const fileInputRef = useRef(null)

  const fileTypes = [
    {
      id: "MIC",
      name: "Market Identifier Codes",
      format: "XML",
      description: "Market Identifier Codes reference data",
    },
    {
      id: "LEI",
      name: "Legal Entity Identifiers",
      format: "XML",
      description: "Legal Entity Identifiers reference data",
    },
    { id: "CURRENCY", name: "Currency", format: "XML", description: "Currency reference data" },
    { id: "INSTRUMENT", name: "Instrument", format: "XML", description: "Financial instrument reference data" },
    { id: "RCA", name: "Reference Competent Authority", format: "XML", description: "RCA reference data" },
  ]

  const recentUploads = [
    {
      id: 1,
      filename: "MIC_20240307.xml",
      fileType: "MIC",
      uploadDate: "2024-03-07 10:15",
      status: "Valid",
      records: 345,
      errors: 0,
    },
    {
      id: 2,
      filename: "LEI_20240307.xml",
      fileType: "LEI",
      uploadDate: "2024-03-07 09:45",
      status: "Valid",
      records: 1250,
      errors: 0,
    },
    {
      id: 3,
      filename: "CURRENCY_20240307.xml",
      fileType: "CURRENCY",
      uploadDate: "2024-03-07 09:30",
      status: "Warning",
      records: 178,
      errors: 3,
    },
    {
      id: 4,
      filename: "INSTRUMENT_20240307.xml",
      fileType: "INSTRUMENT",
      uploadDate: "2024-03-07 08:15",
      status: "Error",
      records: 5670,
      errors: 42,
    },
    {
      id: 5,
      filename: "RCA_20240306.xml",
      fileType: "RCA",
      uploadDate: "2024-03-06 16:45",
      status: "Valid",
      records: 87,
      errors: 0,
    },
  ]

  // Simulate file upload process
  const handleFileUpload = (e) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    setIsUploading(true)
    setUploadProgress(0)
    setUploadComplete(false)

    // Simulate upload process with progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          setUploadComplete(true)

          // Simulate validation errors for demo purposes
          if (selectedFileType === "INSTRUMENT") {
            setValidationErrors([
              { line: 42, code: "E01", message: "Invalid instrument code format" },
              { line: 78, code: "E05", message: "Missing required field: maturity date" },
              { line: 156, code: "W03", message: "Price value outside expected range", severity: "warning" },
            ])
          } else {
            setValidationErrors([])
          }

          return 100
        }
        return prev + Math.floor(Math.random() * 10) + 1
      })
    }, 300)
  }

  const triggerFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case "Valid":
        return <Badge className="bg-green-500">Valid</Badge>
      case "Warning":
        return (
          <Badge variant="outline" className="text-amber-500 border-amber-500">
            Warning
          </Badge>
        )
      case "Error":
        return <Badge variant="destructive">Error</Badge>
      default:
        return <Badge variant="outline">Processing</Badge>
    }
  }

  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Upload & Process</h1>
          <p className="text-muted-foreground">Upload and validate reference data files</p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 md:grid-cols-3">
          <TabsTrigger value="upload">Upload</TabsTrigger>
          <TabsTrigger value="history">Upload History</TabsTrigger>
          <TabsTrigger value="validation">Validation Rules</TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upload Reference Data</CardTitle>
              <CardDescription>Select file type and upload XML file for processing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">File Type</label>
                  <Select value={selectedFileType} onValueChange={setSelectedFileType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select file type" />
                    </SelectTrigger>
                    <SelectContent>
                      {fileTypes.map((type) => (
                        <SelectItem key={type.id} value={type.id}>
                          {type.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <div className="text-sm text-muted-foreground mt-2">
                    {fileTypes.find((t) => t.id === selectedFileType)?.description}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Expected Format</label>
                  <div className="rounded-md border p-3 bg-muted/40">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span>{fileTypes.find((t) => t.id === selectedFileType)?.format}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Validate your file against the schema before uploading for faster processing
                    </p>
                    <div className="mt-2">
                      <Button variant="outline" size="sm">
                        Download Schema
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg border-dashed p-8 text-center">
                <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                    <Upload className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">Drag & drop or click to upload</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Upload XML file containing {fileTypes.find((t) => t.id === selectedFileType)?.name} data
                  </p>
                  <div className="mt-4">
                    <Input
                      type="file"
                      accept=".xml"
                      className="hidden"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                    />
                    <Button onClick={triggerFileUpload} disabled={isUploading}>
                      {isUploading ? "Uploading..." : "Select File"}
                    </Button>
                  </div>
                </div>
              </div>

              {isUploading && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Uploading...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <Progress value={uploadProgress} className="h-2" />
                </div>
              )}

              {uploadComplete && validationErrors.length === 0 && (
                <Alert className="bg-green-50 border-green-200">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertTitle className="text-green-800">Upload Successful</AlertTitle>
                  <AlertDescription className="text-green-700">
                    File has been uploaded and validated successfully.
                  </AlertDescription>
                </Alert>
              )}

              {uploadComplete && validationErrors.length > 0 && (
                <Collapsible className="w-full">
                  <Alert
                    className={
                      validationErrors.some((e) => !e.severity)
                        ? "bg-red-50 border-red-200"
                        : "bg-amber-50 border-amber-200"
                    }
                  >
                    {validationErrors.some((e) => !e.severity) ? (
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                    ) : (
                      <Info className="h-4 w-4 text-amber-600" />
                    )}
                    <AlertTitle
                      className={validationErrors.some((e) => !e.severity) ? "text-red-800" : "text-amber-800"}
                    >
                      Validation {validationErrors.some((e) => !e.severity) ? "Errors" : "Warnings"}
                    </AlertTitle>
                    <AlertDescription
                      className={validationErrors.some((e) => !e.severity) ? "text-red-700" : "text-amber-700"}
                    >
                      {validationErrors.some((e) => !e.severity)
                        ? "File contains validation errors that must be fixed."
                        : "File has been processed with warnings."}
                    </AlertDescription>

                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="mt-2">
                        <span>View Details</span>
                        <ChevronDown className="h-4 w-4 ml-1" />
                      </Button>
                    </CollapsibleTrigger>
                  </Alert>

                  <CollapsibleContent className="mt-2">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Line</TableHead>
                          <TableHead>Code</TableHead>
                          <TableHead>Message</TableHead>
                          <TableHead>Severity</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {validationErrors.map((error, i) => (
                          <TableRow key={i}>
                            <TableCell>{error.line}</TableCell>
                            <TableCell>{error.code}</TableCell>
                            <TableCell>{error.message}</TableCell>
                            <TableCell>
                              {error.severity === "warning" ? (
                                <Badge variant="outline" className="text-amber-500 border-amber-500">
                                  Warning
                                </Badge>
                              ) : (
                                <Badge variant="destructive">Error</Badge>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>

                    <div className="mt-4 flex justify-end gap-2">
                      <Button variant="outline">Download Error Report</Button>
                      <Button variant="destructive">Cancel Upload</Button>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" disabled={isUploading}>
                Reset
              </Button>
              <Button disabled={isUploading || !uploadComplete}>Process File</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upload History</CardTitle>
              <CardDescription>Recent file uploads and their processing status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="md:w-1/3">
                  <label className="text-sm font-medium">File Type</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="All File Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All File Types</SelectItem>
                      {fileTypes.map((type) => (
                        <SelectItem key={type.id} value={type.id}>
                          {type.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:w-1/3">
                  <label className="text-sm font-medium">Status</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="All Statuses" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="valid">Valid</SelectItem>
                      <SelectItem value="warning">Warning</SelectItem>
                      <SelectItem value="error">Error</SelectItem>
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
                      <TableHead>Filename</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Upload Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Records</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentUploads.map((upload) => (
                      <TableRow key={upload.id}>
                        <TableCell className="font-medium">{upload.filename}</TableCell>
                        <TableCell>{upload.fileType}</TableCell>
                        <TableCell>{upload.uploadDate}</TableCell>
                        <TableCell>{getStatusBadge(upload.status)}</TableCell>
                        <TableCell>
                          {upload.records}
                          {upload.errors > 0 && (
                            <span className="ml-2 text-red-500 text-sm">
                              ({upload.errors} {upload.errors === 1 ? "error" : "errors"})
                            </span>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" title="View Details">
                              <FileText className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" title="Download">
                              <RefreshCw className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" title="Delete">
                              <X className="h-4 w-4 text-red-500" />
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
                <div className="text-sm text-muted-foreground">Showing 5 of 124 uploads</div>
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
              <CardTitle>Validation Rules</CardTitle>
              <CardDescription>Reference data validation rules and schemas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {fileTypes.map((type) => (
                  <Collapsible key={type.id} className="w-full border rounded-md p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <h3 className="text-lg font-medium">{type.name} Validation</h3>
                      </div>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent className="mt-4 space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-2">Schema Validation</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                              <span>XML Schema conformity check</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                              <span>Required elements presence validation</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                              <span>Data type and format validation</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Business Rules</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                              <span>Cross-reference integrity check</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                              <span>Regulatory compliance validation</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                              <span>Temporal consistency check</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Download Schema
                        </Button>
                        <Button variant="outline" size="sm">
                          View Validation Rules
                        </Button>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Download All Schemas</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


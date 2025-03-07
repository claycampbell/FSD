"use client"

import { useState } from "react"
import {
  Upload,
  Database,
  Share2,
  FileText,
  AlertTriangle,
  BarChart3,
  Settings,
  Search,
  Building2,
  Globe,
  Users,
  Bell,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-muted/40">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-4 py-2">
              <Database className="h-6 w-6" />
              <div className="font-semibold text-lg">Reference Data System</div>
            </div>
          </SidebarHeader>
          <SidebarSeparator />
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive tooltip="Dashboard">
                      <BarChart3 />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Upload & Process">
                      <Upload />
                      <span>Upload & Process</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Data Storage">
                      <Database />
                      <span>Data Storage</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Distribution">
                      <Share2 />
                      <span>Distribution</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Reference Data</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Market Identifier Codes">
                      <Building2 />
                      <span>MICs</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Legal Entity Identifiers">
                      <FileText />
                      <span>LEIs</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Country & Currency">
                      <Globe />
                      <span>Country & Currency</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="RCA Management">
                      <Users />
                      <span>RCA Management</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>System</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Error Handling">
                      <AlertTriangle />
                      <span>Error Handling</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Reports">
                      <BarChart3 />
                      <span>Reports</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Administration">
                      <Settings />
                      <span>Administration</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <div className="p-2">
              <div className="flex items-center gap-2 rounded-md p-2 hover:bg-muted">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Admin User</span>
                  <span className="text-xs text-muted-foreground">System Administrator</span>
                </div>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1">
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
            <SidebarTrigger />
            <div className="flex flex-1 items-center gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search reference data..."
                  className="w-full pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Notifications</span>
              </Button>
            </div>
          </header>

          <main className="p-6">
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">Overview of reference data system status and activities</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Files Processed Today</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">127</div>
                    <p className="text-xs text-muted-foreground">+5% from yesterday</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Validation Errors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">23</div>
                    <p className="text-xs text-muted-foreground">-12% from yesterday</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Pending RCA Approvals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">8</div>
                    <p className="text-xs text-muted-foreground">3 high priority</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Data Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">98.2%</div>
                    <p className="text-xs text-muted-foreground">Successful delivery rate</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Uploads</CardTitle>
                    <CardDescription>Last 5 file uploads and their status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: "MIC_20240307.xml", status: "success", time: "10:15 AM" },
                        { name: "LEI_20240307.xml", status: "success", time: "09:45 AM" },
                        { name: "CURRENCY_20240307.xml", status: "warning", time: "09:30 AM" },
                        { name: "INSTRUMENT_20240307.xml", status: "error", time: "08:15 AM" },
                        { name: "RCA_20240306.xml", status: "success", time: "Yesterday" },
                      ].map((file, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span>{file.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge
                              variant={
                                file.status === "success"
                                  ? "default"
                                  : file.status === "warning"
                                    ? "outline"
                                    : "destructive"
                              }
                            >
                              {file.status === "success" ? "Valid" : file.status === "warning" ? "Warnings" : "Errors"}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{file.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Uploads
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Processing Status</CardTitle>
                    <CardDescription>Current data processing pipeline status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Validation</span>
                          <span className="text-sm font-medium">100%</span>
                        </div>
                        <Progress value={100} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Content Processing</span>
                          <span className="text-sm font-medium">78%</span>
                        </div>
                        <Progress value={78} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Data Distribution</span>
                          <span className="text-sm font-medium">45%</span>
                        </div>
                        <Progress value={45} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Report Generation</span>
                          <span className="text-sm font-medium">12%</span>
                        </div>
                        <Progress value={12} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View Processing Details
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>RCA Approval Requests</CardTitle>
                  <CardDescription>Pending Reference Competent Authority changes requiring approval</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left font-medium p-2">ID</th>
                          <th className="text-left font-medium p-2">Instrument</th>
                          <th className="text-left font-medium p-2">Current RCA</th>
                          <th className="text-left font-medium p-2">Proposed RCA</th>
                          <th className="text-left font-medium p-2">Requested By</th>
                          <th className="text-left font-medium p-2">Status</th>
                          <th className="text-left font-medium p-2">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            id: "RCA-2024-0123",
                            instrument: "ISIN12345678",
                            current: "DE",
                            proposed: "FR",
                            requestedBy: "System",
                            status: "Pending",
                          },
                          {
                            id: "RCA-2024-0124",
                            instrument: "ISIN23456789",
                            current: "IT",
                            proposed: "ES",
                            requestedBy: "Manual",
                            status: "Pending",
                          },
                          {
                            id: "RCA-2024-0125",
                            instrument: "ISIN34567890",
                            current: "UK",
                            proposed: "NL",
                            requestedBy: "System",
                            status: "Pending",
                          },
                        ].map((request, i) => (
                          <tr key={i} className="border-b">
                            <td className="p-2">{request.id}</td>
                            <td className="p-2">{request.instrument}</td>
                            <td className="p-2">{request.current}</td>
                            <td className="p-2">{request.proposed}</td>
                            <td className="p-2">{request.requestedBy}</td>
                            <td className="p-2">
                              <Badge variant="outline">{request.status}</Badge>
                            </td>
                            <td className="p-2">
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  Review
                                </Button>
                                <Button variant="outline" size="sm">
                                  Approve
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All RCA Requests
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}


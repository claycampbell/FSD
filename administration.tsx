"use client"

import { useState } from "react"
import { Search, Filter, Download, Plus, Edit, Trash2, Eye, User, Key, UserCheck, UserX, Check } from "lucide-react"
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
import { Separator } from "@/components/ui/separator"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Administration() {
  const [activeTab, setActiveTab] = useState("users")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])
  const [isUserDialogOpen, setIsUserDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState<any>(null)

  // Sample user data
  const users = [
    {
      id: "USR-001",
      name: "John Smith",
      email: "john.smith@example.com",
      role: "Administrator",
      department: "IT",
      status: "Active",
      lastLogin: "2024-03-07 09:15:22",
      created: "2023-01-15",
    },
    {
      id: "USR-002",
      name: "Jane Doe",
      email: "jane.doe@example.com",
      role: "Data Manager",
      department: "Operations",
      status: "Active",
      lastLogin: "2024-03-06 14:30:45",
      created: "2023-02-20",
    },
    {
      id: "USR-003",
      name: "Robert Johnson",
      email: "robert.johnson@example.com",
      role: "Viewer",
      department: "Compliance",
      status: "Active",
      lastLogin: "2024-03-05 11:22:18",
      created: "2023-03-10",
    },
    {
      id: "USR-004",
      name: "Emily Wilson",
      email: "emily.wilson@example.com",
      role: "Data Manager",
      department: "Finance",
      status: "Inactive",
      lastLogin: "2024-02-15 16:45:30",
      created: "2023-04-05",
    },
    {
      id: "USR-005",
      name: "Michael Brown",
      email: "michael.brown@example.com",
      role: "Administrator",
      department: "IT",
      status: "Active",
      lastLogin: "2024-03-07 08:30:15",
      created: "2023-05-12",
    },
    {
      id: "USR-006",
      name: "Sarah Miller",
      email: "sarah.miller@example.com",
      role: "Viewer",
      department: "Research",
      status: "Active",
      lastLogin: "2024-03-04 13:20:45",
      created: "2023-06-18",
    },
    {
      id: "USR-007",
      name: "David Garcia",
      email: "david.garcia@example.com",
      role: "Data Manager",
      department: "Operations",
      status: "Pending",
      lastLogin: "Never",
      created: "2024-03-01",
    },
    {
      id: "USR-008",
      name: "Lisa Taylor",
      email: "lisa.taylor@example.com",
      role: "Viewer",
      department: "Compliance",
      status: "Locked",
      lastLogin: "2024-02-10 09:45:22",
      created: "2023-07-25",
    },
  ]

  // Sample roles data
  const roles = [
    {
      id: "ROLE-001",
      name: "Administrator",
      description: "Full system access with all permissions",
      users: 2,
      permissions: [
        "User Management",
        "Role Management",
        "System Configuration",
        "Data Management",
        "Report Generation",
        "API Access",
        "Audit Log Access",
      ],
    },
    {
      id: "ROLE-002",
      name: "Data Manager",
      description: "Can manage and modify reference data",
      users: 3,
      permissions: ["Data Management", "Report Generation", "API Access", "Limited Audit Log Access"],
    },
    {
      id: "ROLE-003",
      name: "Viewer",
      description: "Read-only access to reference data",
      users: 3,
      permissions: ["View Data", "Report Generation", "Limited API Access"],
    },
    {
      id: "ROLE-004",
      name: "API User",
      description: "System account for API integrations",
      users: 0,
      permissions: ["API Access"],
    },
  ]

  // Sample system settings
  const systemSettings = [
    {
      id: "SET-001",
      category: "Security",
      name: "Password Policy",
      value: "Complex (min 12 chars, special chars required)",
      lastUpdated: "2024-01-15",
      updatedBy: "System Admin",
    },
    {
      id: "SET-002",
      category: "Security",
      name: "Session Timeout",
      value: "30 minutes",
      lastUpdated: "2024-01-15",
      updatedBy: "System Admin",
    },
    {
      id: "SET-003",
      category: "Security",
      name: "Failed Login Attempts",
      value: "5 attempts before lockout",
      lastUpdated: "2024-01-15",
      updatedBy: "System Admin",
    },
    {
      id: "SET-004",
      category: "Data",
      name: "Default Data Retention",
      value: "7 years",
      lastUpdated: "2024-02-10",
      updatedBy: "John Smith",
    },
    {
      id: "SET-005",
      category: "Data",
      name: "Auto-Archive Threshold",
      value: "90 days",
      lastUpdated: "2024-02-10",
      updatedBy: "John Smith",
    },
    {
      id: "SET-006",
      category: "API",
      name: "Rate Limiting",
      value: "100 requests per minute",
      lastUpdated: "2024-03-01",
      updatedBy: "System Admin",
    },
    {
      id: "SET-007",
      category: "API",
      name: "API Key Expiration",
      value: "90 days",
      lastUpdated: "2024-03-01",
      updatedBy: "System Admin",
    },
    {
      id: "SET-008",
      category: "Notifications",
      name: "Email Notifications",
      value: "Enabled",
      lastUpdated: "2024-01-20",
      updatedBy: "John Smith",
    },
    {
      id: "SET-009",
      category: "Notifications",
      name: "System Alert Recipients",
      value: "admin@example.com, it@example.com",
      lastUpdated: "2024-01-20",
      updatedBy: "John Smith",
    },
  ]

  const handleSelectAllUsers = (checked: boolean) => {
    if (checked) {
      setSelectedUsers(users.map((user) => user.id))
    } else {
      setSelectedUsers([])
    }
  }

  const handleSelectUser = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedUsers([...selectedUsers, id])
    } else {
      setSelectedUsers(selectedUsers.filter((userId) => userId !== id))
    }
  }

  const handleEditUser = (user: any) => {
    setCurrentUser(user)
    setIsUserDialogOpen(true)
  }

  const handleDeleteUsers = () => {
    // In a real application, this would call an API to delete the selected users
    console.log("Deleting users:", selectedUsers)
    setIsDeleteDialogOpen(false)
    setSelectedUsers([])
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
      case "Locked":
        return <Badge variant="destructive">Locked</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Administration</h1>
          <p className="text-muted-foreground">Manage users, roles, and system settings</p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 md:grid-cols-3">
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
          <TabsTrigger value="settings">System Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Manage system users and their access</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search by name, email, or role..."
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
                        <h4 className="font-medium">Filter Users</h4>
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
                              <SelectItem value="pending">Pending</SelectItem>
                              <SelectItem value="locked">Locked</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="role">Role</Label>
                          <Select defaultValue="all">
                            <SelectTrigger id="role">
                              <SelectValue placeholder="Select role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Roles</SelectItem>
                              <SelectItem value="administrator">Administrator</SelectItem>
                              <SelectItem value="data-manager">Data Manager</SelectItem>
                              <SelectItem value="viewer">Viewer</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="department">Department</Label>
                          <Select defaultValue="all">
                            <SelectTrigger id="department">
                              <SelectValue placeholder="Select department" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Departments</SelectItem>
                              <SelectItem value="it">IT</SelectItem>
                              <SelectItem value="operations">Operations</SelectItem>
                              <SelectItem value="compliance">Compliance</SelectItem>
                              <SelectItem value="finance">Finance</SelectItem>
                              <SelectItem value="research">Research</SelectItem>
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
                  <Button
                    className="flex items-center gap-1"
                    onClick={() => {
                      setCurrentUser(null)
                      setIsUserDialogOpen(true)
                    }}
                  >
                    <Plus className="h-4 w-4" />
                    Add User
                  </Button>
                </div>
              </div>

              {selectedUsers.length > 0 && (
                <div className="flex items-center justify-between bg-muted/50 p-2 rounded-md">
                  <span className="text-sm">
                    {selectedUsers.length} {selectedUsers.length === 1 ? "user" : "users"} selected
                  </span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <UserCheck className="h-4 w-4" />
                      Activate Selected
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <UserX className="h-4 w-4" />
                      Deactivate Selected
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
                          checked={selectedUsers.length === users.length && users.length > 0}
                          onCheckedChange={handleSelectAllUsers}
                          aria-label="Select all users"
                        />
                      </TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Login</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <Checkbox
                            checked={selectedUsers.includes(user.id)}
                            onCheckedChange={(checked) => handleSelectUser(user.id, !!checked)}
                            aria-label={`Select ${user.name}`}
                          />
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={user.name} />
                              <AvatarFallback>
                                {user.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{user.name}</div>
                              <div className="text-xs text-muted-foreground">{user.email}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>{user.department}</TableCell>
                        <TableCell>{getStatusBadge(user.status)}</TableCell>
                        <TableCell>{user.lastLogin}</TableCell>
                        <TableCell>{user.created}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" title="View User" onClick={() => handleEditUser(user)}>
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" title="Edit User" onClick={() => handleEditUser(user)}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" title="Reset Password">
                              <Key className="h-4 w-4" />
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
                Showing {users.length} of {users.length} users
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

        <TabsContent value="roles" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Roles & Permissions</CardTitle>
              <CardDescription>Manage user roles and their associated permissions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-end">
                <Button className="flex items-center gap-1">
                  <Plus className="h-4 w-4" />
                  Create Role
                </Button>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Role Name</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Users</TableHead>
                      <TableHead>Permissions</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {roles.map((role) => (
                      <TableRow key={role.id}>
                        <TableCell className="font-medium">{role.name}</TableCell>
                        <TableCell>{role.description}</TableCell>
                        <TableCell>{role.users}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {role.permissions.slice(0, 2).map((permission, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {permission}
                              </Badge>
                            ))}
                            {role.permissions.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{role.permissions.length - 2} more
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button variant="outline" size="sm">
                              Clone
                            </Button>
                            {role.users === 0 && (
                              <Button variant="outline" size="sm" className="text-red-500">
                                Delete
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Permission Categories</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">User Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span>Create Users</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span>Edit Users</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span>Delete Users</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span>Reset Passwords</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Data Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span>View Data</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span>Edit Data</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span>Import Data</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span>Export Data</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">System Administration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span>System Configuration</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span>Role Management</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span>Audit Log Access</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span>API Management</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Settings</CardTitle>
              <CardDescription>Configure global system settings and parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search settings..." className="pl-8" />
                </div>
                <div className="flex gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="security">Security</SelectItem>
                      <SelectItem value="data">Data</SelectItem>
                      <SelectItem value="api">API</SelectItem>
                      <SelectItem value="notifications">Notifications</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Setting</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Last Updated</TableHead>
                      <TableHead>Updated By</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {systemSettings.map((setting) => (
                      <TableRow key={setting.id}>
                        <TableCell className="font-medium">{setting.name}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{setting.category}</Badge>
                        </TableCell>
                        <TableCell>{setting.value}</TableCell>
                        <TableCell>{setting.lastUpdated}</TableCell>
                        <TableCell>{setting.updatedBy}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Quick Settings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Security Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                          <div className="text-xs text-muted-foreground">
                            Require 2FA for all administrator accounts
                          </div>
                        </div>
                        <Switch id="two-factor" defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="ip-restriction">IP Restrictions</Label>
                          <div className="text-xs text-muted-foreground">Limit access to specific IP ranges</div>
                        </div>
                        <Switch id="ip-restriction" />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="audit-logging">Enhanced Audit Logging</Label>
                          <div className="text-xs text-muted-foreground">Log all user actions in detail</div>
                        </div>
                        <Switch id="audit-logging" defaultChecked />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">System Notifications</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="email-alerts">Email Alerts</Label>
                          <div className="text-xs text-muted-foreground">Send system alerts via email</div>
                        </div>
                        <Switch id="email-alerts" defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="maintenance-notices">Maintenance Notices</Label>
                          <div className="text-xs text-muted-foreground">Show maintenance notices to users</div>
                        </div>
                        <Switch id="maintenance-notices" defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="error-notifications">Error Notifications</Label>
                          <div className="text-xs text-muted-foreground">Send notifications for critical errors</div>
                        </div>
                        <Switch id="error-notifications" defaultChecked />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto">Save All Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {/* User Dialog */}
      <Dialog open={isUserDialogOpen} onOpenChange={setIsUserDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>{currentUser ? "Edit User" : "Add New User"}</DialogTitle>
            <DialogDescription>
              {currentUser ? `Update details for ${currentUser.name}` : "Create a new user account"}
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Full Name
              </Label>
              <Input id="name" defaultValue={currentUser?.name || ""} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input id="email" type="email" defaultValue={currentUser?.email || ""} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="role" className="text-right">
                Role
              </Label>
              <Select defaultValue={currentUser?.role || "Viewer"}>
                <SelectTrigger id="role" className="col-span-3">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Administrator">Administrator</SelectItem>
                  <SelectItem value="Data Manager">Data Manager</SelectItem>
                  <SelectItem value="Viewer">Viewer</SelectItem>
                  <SelectItem value="API User">API User</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="department" className="text-right">
                Department
              </Label>
              <Select defaultValue={currentUser?.department || "Operations"}>
                <SelectTrigger id="department" className="col-span-3">
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="IT">IT</SelectItem>
                  <SelectItem value="Operations">Operations</SelectItem>
                  <SelectItem value="Compliance">Compliance</SelectItem>
                  <SelectItem value="Finance">Finance</SelectItem>
                  <SelectItem value="Research">Research</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="status" className="text-right">
                Status
              </Label>
              <Select defaultValue={currentUser?.status || "Active"}>
                <SelectTrigger id="status" className="col-span-3">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {!currentUser && (
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="sendEmail" className="text-right">
                  Send Welcome Email
                </Label>
                <div className="col-span-3 flex items-center space-x-2">
                  <Checkbox id="sendEmail" defaultChecked />
                  <label
                    htmlFor="sendEmail"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Send welcome email with password setup instructions
                  </label>
                </div>
              </div>
            )}
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="notes" className="text-right pt-2">
                Notes
              </Label>
              <Textarea id="notes" placeholder="Additional notes about this user" className="col-span-3" />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsUserDialogOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">{currentUser ? "Save Changes" : "Create User"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete {selectedUsers.length} {selectedUsers.length === 1 ? "user" : "users"}?
              This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="rounded-md bg-muted p-4 max-h-[200px] overflow-auto">
              <ul className="text-sm space-y-1">
                {selectedUsers.map((id) => {
                  const user = users.find((u) => u.id === id)
                  return (
                    <li key={id} className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {user?.name} ({user?.email})
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
            <Button variant="destructive" onClick={handleDeleteUsers}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}


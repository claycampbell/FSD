"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Database, Upload, Share2, FileText, AlertTriangle, BarChart3, Settings, Building2, Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AppSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="w-64 bg-slate-50 border-r min-h-screen flex flex-col">
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <Database className="h-6 w-6" />
          <div className="font-semibold text-lg">Reference Data System</div>
        </div>
      </div>

      <div className="flex-1 overflow-auto py-4">
        <div className="px-3 mb-4">
          <div className="text-sm font-medium text-muted-foreground mb-2">Main</div>
          <nav className="space-y-1">
            <Link
              href="/"
              className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md ${isActive("/") ? "bg-slate-200 font-medium" : "hover:bg-slate-100"}`}
            >
              <BarChart3 className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/upload-process"
              className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md ${isActive("/upload-process") ? "bg-slate-200 font-medium" : "hover:bg-slate-100"}`}
            >
              <Upload className="h-4 w-4" />
              <span>Upload & Process</span>
            </Link>
            <Link
              href="/data-storage"
              className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md ${isActive("/data-storage") ? "bg-slate-200 font-medium" : "hover:bg-slate-100"}`}
            >
              <Database className="h-4 w-4" />
              <span>Data Storage</span>
            </Link>
            <Link
              href="/distribution"
              className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md ${isActive("/distribution") ? "bg-slate-200 font-medium" : "hover:bg-slate-100"}`}
            >
              <Share2 className="h-4 w-4" />
              <span>Distribution</span>
            </Link>
          </nav>
        </div>

        <div className="px-3 mb-4">
          <div className="text-sm font-medium text-muted-foreground mb-2">Reference Data</div>
          <nav className="space-y-1">
            <Link
              href="/mics"
              className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md ${isActive("/mics") ? "bg-slate-200 font-medium" : "hover:bg-slate-100"}`}
            >
              <Building2 className="h-4 w-4" />
              <span>MICs</span>
            </Link>
            <Link
              href="/leis"
              className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md ${isActive("/leis") ? "bg-slate-200 font-medium" : "hover:bg-slate-100"}`}
            >
              <FileText className="h-4 w-4" />
              <span>LEIs</span>
            </Link>
            <Link
              href="/rca-management"
              className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md ${isActive("/rca-management") ? "bg-slate-200 font-medium" : "hover:bg-slate-100"}`}
            >
              <Users className="h-4 w-4" />
              <span>RCA Management</span>
            </Link>
          </nav>
        </div>

        <div className="px-3">
          <div className="text-sm font-medium text-muted-foreground mb-2">System</div>
          <nav className="space-y-1">
            <Link
              href="/error-handling"
              className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md ${isActive("/error-handling") ? "bg-slate-200 font-medium" : "hover:bg-slate-100"}`}
            >
              <AlertTriangle className="h-4 w-4" />
              <span>Error Handling</span>
            </Link>
            <Link
              href="/reports"
              className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md ${isActive("/reports") ? "bg-slate-200 font-medium" : "hover:bg-slate-100"}`}
            >
              <BarChart3 className="h-4 w-4" />
              <span>Reports</span>
            </Link>
            <Link
              href="/administration"
              className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md ${isActive("/administration") ? "bg-slate-200 font-medium" : "hover:bg-slate-100"}`}
            >
              <Settings className="h-4 w-4" />
              <span>Administration</span>
            </Link>
          </nav>
        </div>
      </div>

      <div className="p-4 border-t mt-auto">
        <div className="flex items-center gap-2">
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
    </div>
  )
}


import { WEB_NAME } from "@/lib/constants"
import * as React from "react"
import { Link, useLocation } from "react-router-dom"
import {
  LayoutDashboard,
  Building2,
  IndianRupee,
  ShieldCheck,
  CircleHelp,
  History,
  PanelLeftClose,
  PanelLeftOpen,
  Users,
  UserStar,
} from "lucide-react"

import { Button } from "@/components/ui/button"

interface NavItem {
  label: string
  href: string
  icon: React.ElementType
}

const navItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Societies",
    href: "/societies",
    icon: Building2,
  },
  {
    label: "Society Admins",
    href: "/society-admins",
    icon: UserStar,
  },
  {
    label: "Support",
    href: "/support",
    icon: CircleHelp,
  },
  {
    label: "Logs",
    href: "/logs",
    icon: History,
  },
]

interface SidebarProps {
  collapsed: boolean
  setCollapsed: React.Dispatch<
    React.SetStateAction<boolean>
  >
}

export default function Sidebar({
  collapsed,
  setCollapsed,
}: SidebarProps) {
  const location = useLocation()

  return (
    <aside
      className={`fixed top-0 left-0 z-50 hidden h-screen ${collapsed ? "w-20" : "w-[280px]"} flex-col gap-6 bg-white p-6 shadow-md md:flex dark:bg-slate-900`}
    >
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute top-8 -right-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition-all duration-200 hover:border-indigo-600 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-700 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
      >
        {collapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
      </button>
      {/* Logo */}
      <div className="flex flex-col gap-1 px-4">
        <span className="text-1xl font-black tracking-tight text-indigo-600">
          {!collapsed && WEB_NAME}
        </span>

        {!collapsed && (
          <span className="text-sm text-slate-500">Super Admin Console</span>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-2">
        {navItems.map((item) => {
          const active = location.pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.label}
              to={item.href}
              className={`flex cursor-pointer items-center ${collapsed ? "justify-center" : "gap-4"} rounded-lg px-4 py-3 transition-all duration-200 ${
                active
                  ? `scale-95 bg-indigo-50 font-bold text-indigo-600 dark:bg-slate-800 dark:text-cyan-400`
                  : `text-slate-700 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-cyan-400`
              } `}
            >
              <Icon className="h-5 w-5 shrink-0" />

              {!collapsed && (
                <span className="text-base font-medium">{item.label}</span>
              )}
            </Link>
          )
        })}
      </nav>

      {/* Bottom Button */}
      <div className="mt-auto">
        {!collapsed && (
          <Button className="h-14 w-full cursor-pointer rounded-xl bg-indigo-600 hover:bg-indigo-500">
            {collapsed ? "⋯" : "Manage All"}
          </Button>
        )}
      </div>
    </aside>
  )
}

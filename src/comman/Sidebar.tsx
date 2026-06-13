import * as React from "react"
import { Link, useLocation } from "react-router-dom"
import {
  LayoutDashboard,
  Building2,
  IndianRupee,
  ShieldCheck,
  CircleHelp,
  History,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { WEB_NAME } from "@/lib/constants"

interface NavItem {
  label: string
  href: string
  icon: React.ElementType
}

const navItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Societies",
    href: "/societies",
    icon: Building2,
  },
  {
    label: "Financials",
    href: "/financials",
    icon: IndianRupee,
  },
  {
    label: "Security",
    href: "/security",
    icon: ShieldCheck,
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

const Sidebar: React.FC = () => {
  const location = useLocation()

  return (
    <aside className="fixed top-0 left-0 z-50 hidden h-screen w-[280px] flex-col gap-4 bg-[hsl(var(--surface-container-lowest))] p-6 shadow-md md:flex">
      {/* Logo */}
      <div className="flex flex-col gap-1 px-4">
        <span className="text-1xl font-black text-primary">{WEB_NAME}</span>

        <span className="text-sm text-[hsl(var(--on-surface-variant))]">
          Super Admin Console
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const active = location.pathname === item.href

          return (
            <Link
  key={item.label}
  to={item.href}
  className={`flex cursor-pointer items-center gap-4 rounded-lg px-4 py-3 transition-all duration-200 ${
    active
      ? `
        scale-95
        font-bold
        text-blue-600
        bg-blue-100
        hover:bg-blue-200
      `
      : `
        text-gray-600
        hover:bg-gray-200
        hover:text-black
      `
  }`}
>
  <Icon className="h-5 w-5 shrink-0 transition-colors" />
  <span className="text-base font-medium">
    {item.label}
  </span>
</Link>
          )
        })}
      </nav>

      {/* Bottom Action */}
      <div className="mt-auto">
        <Button className="h-14 w-full cursor-pointer rounded-xl  bg-primary font-semibold text-white transition-opacity hover:opacity-90">
          Manage All
        </Button>
      </div>
    </aside>
  )
}

export default Sidebar

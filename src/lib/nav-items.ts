import {
  LayoutDashboard,
  Building2,
  CircleHelp,
  History,
  UserStar,
} from "lucide-react"

export interface NavItem {
  label: string
  href: string
  icon: React.ElementType
}

export const navItems: NavItem[] = [
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
import React, { useState } from "react"
import {
  MoreVertical,
  Edit,
  Lock,
  Ban,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Filter,
  Star,
  UserPlus,
  ExternalLink,
  Users,
  Zap,
  UserX,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { StatusBadge } from "@/comman/StatusBadge"
import { Card, CardContent } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"

type MenuId = string | null

export default function SocietyAdminsPage() {
  const [openMenu, setOpenMenu] = useState<MenuId>(null)
  const navigate = useNavigate()

  const toggleMenu = (id: string) => setOpenMenu(openMenu === id ? null : id)

  const stats = [
    {
      title: "Total Admins",
      value: 42,
      icon: Users,
      valueClass: "text-slate-900",
    },
    {
      title: "Active Today",
      value: 38,
      icon: Zap,
      valueClass: "text-green-600",
    },
    {
      title: "Blocked Access",
      value: 4,
      icon: UserX,
      valueClass: "text-red-600",
    },
  ]

  type StatusType = "ACTIVE" | "PENDING" | "BLOCKED"

  type Admin = {
    id: string
    name: string
    code: string
    email: string
    phone: string
    society: string
    initials: string
    status: StatusType
  }

  const admins: Admin[] = [
    {
      id: "menu-1",
      name: "Rajesh Sharma",
      code: "#ADM-921",
      email: "rajesh.s@emerald.com",
      phone: "+91 98765 43210",
      society: "Emerald Heights",
      initials: "RS",
      status: "ACTIVE",
    },
    {
      id: "menu-2",
      name: "Priya Anish",
      code: "#ADM-884",
      email: "p.anish@sapphire.res",
      phone: "+91 99001 22334",
      society: "Sapphire Residency",
      initials: "PA",
      status: "BLOCKED",
    },
    {
      id: "menu-3",
      name: "Vikram Khanna",
      code: "#ADM-750",
      email: "v.khanna@oakwood.in",
      phone: "+91 88776 55443",
      society: "Oakwood Gardens",
      initials: "VK",
      status: "ACTIVE",
    },
  ]

  return (
    <div className="mx-auto max-w-7xl space-y-6 p-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Society Admins</h2>
          <p className="text-sm text-slate-500">
            Manage administrative access and permissions across all registered
            societies.
          </p>
        </div>

        <Button className="flex cursor-pointer items-center gap-2 bg-indigo-600 text-white transition-all hover:bg-indigo-700 active:scale-95">
          <UserPlus className="h-5 w-5 text-white" />
          Create New Admin
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 rounded-xl border bg-slate-50 p-4">
        <div className="flex min-w-[200px] flex-1 items-center gap-2 rounded-lg border bg-white px-3 py-2">
          <Filter className="h-5 w-5 text-slate-700" />
          <select className="w-full cursor-pointer bg-transparent text-sm outline-none">
            <option>All Societies</option>
            <option>Emerald Heights</option>
            <option>Sapphire Residency</option>
            <option>Oakwood Gardens</option>
          </select>
        </div>

        <div className="flex min-w-[150px] flex-1 items-center gap-2 rounded-lg border bg-white px-3 py-2">
          <Star className="h-5 w-5 text-slate-700" />
          <select className="w-full cursor-pointer bg-transparent text-sm outline-none">
            <option>All Status</option>
            <option>Active</option>
            <option>Blocked</option>
            <option>Pending</option>
          </select>
        </div>

        <button className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-indigo-600 transition-all hover:bg-indigo-50">
          Clear Filters
        </button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-100">
              <tr className="text-xs text-slate-500 uppercase">
                <th className="p-4">Name</th>
                <th className="p-4">Contact Info</th>
                <th className="p-4">Assigned Society</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {admins.map((a) => (
                <tr
                  key={a.id}
                  className="cursor-pointer border-t transition-all hover:bg-slate-50"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-600">
                        {a.initials}
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{a.name}</p>
                        <p className="text-xs text-slate-500">
                          Admin ID: {a.code}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="p-4">
                    <p className="text-sm text-slate-900">{a.email}</p>
                    <p className="text-xs text-slate-500">{a.phone}</p>
                  </td>

                  <td className="p-4">
                    <div onClick={() => navigate(`/societies/:id`)} className="flex cursor-pointer items-center gap-1 text-sm text-indigo-600 hover:underline">
                      {a.society}
                      <ExternalLink className="h-4 w-4 text-slate-700" />
                    </div>
                  </td>

                  <td className="p-4">
                    <StatusBadge status={a.status} />
                  </td>

                  <td className="relative p-4 text-right">
                    <button
                      onClick={() => toggleMenu(a.id)}
                      className="cursor-pointer rounded-full p-2 hover:bg-slate-100"
                    >
                      <MoreVertical className="h-5 w-5 text-slate-700" />
                    </button>

                    {openMenu === a.id && (
                      <div className="absolute right-0 z-10 mt-2 w-44 rounded-xl border bg-white shadow-lg">
                        <button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-slate-100">
                          <Edit className="h-5 w-5 text-slate-700" /> Edit
                        </button>

                        <button className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-slate-100">
                          <Lock className="h-5 w-5 text-slate-700" /> Reset
                        </button>

                        {a.status === "ACTIVE" ? (
                          <button className="flex w-full items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50">
                            <Ban className="h-5 w-5 text-slate-700" /> Block
                          </button>
                        ) : (
                          <button className="flex w-full items-center gap-2 px-3 py-2 text-sm text-green-600 hover:bg-green-50">
                            <CheckCircle className="h-5 w-5 text-slate-700" />{" "}
                            Unblock
                          </button>
                        )}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t p-4">
          <p className="text-sm text-slate-500">Showing 1 to 3 of 42 Admins</p>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="cursor-pointer">
              <ChevronLeft className="h-5 w-5 text-slate-700" />
            </Button>

            <Button className="cursor-pointer bg-indigo-600 text-white hover:bg-indigo-700">
              1
            </Button>

            <Button variant="outline" className="cursor-pointer">
              2
            </Button>

            <Button variant="outline" className="cursor-pointer">
              3
            </Button>

            <Button variant="outline" size="icon" className="cursor-pointer">
              <ChevronRight className="h-5 w-5 text-slate-700" />
            </Button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {stats.map((s, i) => {
          const Icon = s.icon

          return (
            <Card key={i} className="rounded-2xl border">
              <CardContent className="flex items-center justify-between p-5">
                <div>
                  <p className="text-xs text-slate-500 uppercase">{s.title}</p>

                  <h3 className={`text-2xl font-bold ${s.valueClass}`}>
                    {s.value}
                  </h3>
                </div>

                <Icon className="h-6 w-6 text-slate-700" />
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

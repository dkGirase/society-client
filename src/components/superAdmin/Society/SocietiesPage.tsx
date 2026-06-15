import { useEffect, useState } from "react"
import {
  Plus,
  Search,
  Filter,
  Building2,
  Eye,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Edit,
  Power,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select"
import { useNavigate } from "react-router-dom"
import AddSocietyDialog from "./AddSocietyDialog"
import { StatusBadge } from "@/comman/StatusBadge"

interface Society {
  id: number
  name: string
  city: string
  state: string
  flats: number
  owners: number
  tenants: number
  guards: number
  status: "ACTIVE" | "PENDING" | "INACTIVE"
}

const societies: Society[] = [
  {
    id: 1,
    name: "Emerald Heights",
    city: "San Francisco",
    state: "CA",
    flats: 420,
    owners: 380,
    tenants: 40,
    guards: 12,
    status: "ACTIVE",
  },
  {
    id: 2,
    name: "Blue Sky Residency",
    city: "Austin",
    state: "TX",
    flats: 150,
    owners: 145,
    tenants: 5,
    guards: 4,
    status: "PENDING",
  },
  {
    id: 3,
    name: "Harbor View Apartments",
    city: "New York",
    state: "NY",
    flats: 85,
    owners: 60,
    tenants: 25,
    guards: 2,
    status: "INACTIVE",
  },
  {
    id: 4,
    name: "The Grand Orchard",
    city: "Los Angeles",
    state: "CA",
    flats: 1200,
    owners: 1050,
    tenants: 150,
    guards: 24,
    status: "ACTIVE",
  },
]

export default function SocietiesPage() {
  const [openAddSociety, setOpenAddSociety] = useState(false)
  const [openMenu, setOpenMenu] = useState<number | null>(null)
  useEffect(() => {
    const handleClick = () => setOpenMenu(null)

    if (openMenu !== null) {
      window.addEventListener("click", handleClick)
    }

    return () => {
      window.removeEventListener("click", handleClick)
    }
  }, [openMenu])
  const navigate = useNavigate()

  return (
    <div className="space-y-6 p-6">
      {/* Header */}

      <section className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Societies</h2>

          <p className="mt-1 text-slate-500">
            Manage residential communities and their administrative data across
            the system.
          </p>
        </div>

        <Button
          className="cursor-pointer gap-2 rounded-xl bg-indigo-600 px-6 py-6 hover:bg-indigo-500 active:scale-95"
          onClick={() => setOpenAddSociety(true)}
        >
          <Plus className="h-5 w-5 text-white" />
          Add New Society
        </Button>
      </section>

      {/* Filters */}

      <Card className="rounded-xl border shadow-sm">
        <CardContent className="flex flex-wrap items-center gap-4 p-4">
          <div className="relative min-w-[220px] flex-1">
            <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-slate-700" />

            <Input placeholder="Search by name..." className="w-150 pl-10" />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
              Status
            </span>

            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>

                <SelectItem value="active">Active</SelectItem>

                <SelectItem value="pending">Pending</SelectItem>

                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button variant="outline" size="icon" className="cursor-pointer">
            <Filter className="h-5 w-5 text-slate-700" />
          </Button>
        </CardContent>
      </Card>
      {/* Data Table */}

      <Card className="overflow-hidden rounded-xl border shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b bg-slate-100">
                <th className="px-6 py-4 text-left text-xs font-bold tracking-wider text-slate-500 uppercase">
                  Society Name
                </th>

                <th className="px-4 py-4 text-left text-xs font-bold tracking-wider text-slate-500 uppercase">
                  City
                </th>

                <th className="px-4 py-4 text-left text-xs font-bold tracking-wider text-slate-500 uppercase">
                  State
                </th>

                <th className="px-4 py-4 text-center text-xs font-bold tracking-wider text-slate-500 uppercase">
                  Flats
                </th>

                <th className="px-4 py-4 text-center text-xs font-bold tracking-wider text-slate-500 uppercase">
                  Owners
                </th>

                <th className="px-4 py-4 text-center text-xs font-bold tracking-wider text-slate-500 uppercase">
                  Tenants
                </th>

                <th className="px-4 py-4 text-center text-xs font-bold tracking-wider text-slate-500 uppercase">
                  Guards
                </th>

                <th className="px-4 py-4 text-left text-xs font-bold tracking-wider text-slate-500 uppercase">
                  Status
                </th>

                <th className="px-6 py-4 text-right text-xs font-bold tracking-wider text-slate-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {societies.map((society, index) => (
                <tr
                  key={society.id}
                  className="group border-b transition-all hover:bg-slate-50"
                  onClick={() => navigate(`/societies/${society.id}`)}
                >
                  {/* Society */}

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                          index === 0
                            ? "bg-blue-100 text-blue-500"
                            : index === 1
                              ? "bg-cyan-100 text-cyan-500"
                              : index === 2
                                ? "bg-red-100 text-red-500"
                                : "bg-indigo-100 text-indigo-600"
                        }`}
                      >
                        <Building2 className="h-5 w-5 text-slate-700" />
                      </div>

                      <span className="font-semibold text-slate-900">
                        {society.name}
                      </span>
                    </div>
                  </td>

                  {/* City */}

                  <td className="px-4 py-4 text-slate-500">{society.city}</td>

                  {/* State */}

                  <td className="px-4 py-4 text-slate-500">{society.state}</td>

                  {/* Flats */}

                  <td className="px-4 py-4 text-center">
                    {society.flats.toLocaleString()}
                  </td>

                  {/* Owners */}

                  <td className="px-4 py-4 text-center">
                    {society.owners.toLocaleString()}
                  </td>

                  {/* Tenants */}

                  <td className="px-4 py-4 text-center">
                    {society.tenants.toLocaleString()}
                  </td>

                  {/* Guards */}

                  <td className="px-4 py-4 text-center">
                    {society.guards.toLocaleString()}
                  </td>

                  {/* Status */}

                  <td className="px-4 py-4">
                   <StatusBadge status={society.status} />
                  </td>

                  {/* Actions Placeholder */}

                  {/* Actions */}

                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2 opacity-0 transition-all duration-200 group-hover:opacity-100">
                      {/* View */}

                      <Button
                        variant="ghost"
                        size="icon"
                        className="cursor-pointer rounded-lg hover:bg-indigo-50 hover:text-indigo-600"
                      >
                        <Eye className="h-5 w-5 text-slate-700" />
                      </Button>

                      {/* Dropdown */}

                      <div className="relative">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="cursor-pointer rounded-lg hover:bg-slate-100"
                          onClick={() =>
                            setOpenMenu(
                              openMenu === society.id ? null : society.id
                            )
                          }
                        >
                          <MoreVertical className="h-5 w-5 text-slate-700" />
                        </Button>

                        {openMenu === society.id && (
                          <div className="absolute top-12 right-0 z-50 w-48 overflow-hidden rounded-xl border bg-white shadow-xl">
                            {/* Activate / Deactivate */}

                            <button
                              className="flex w-full cursor-pointer items-center gap-3 px-4 py-3 text-left text-sm transition-all hover:bg-slate-50"
                              onClick={() => setOpenMenu(null)}
                            >
                              <Power
                                className={`h-5 w-5 ${
                                  society.status === "ACTIVE"
                                    ? "text-red-500"
                                    : "text-green-500"
                                }`}
                              />

                              {society.status === "ACTIVE"
                                ? "Deactivate"
                                : "Activate"}
                            </button>

                            {/* Edit */}

                            <button
                              className="flex w-full cursor-pointer items-center gap-3 px-4 py-3 text-left text-sm transition-all hover:bg-slate-50"
                              onClick={() => setOpenMenu(null)}
                            >
                              <Edit className="h-5 w-5 text-slate-700" />
                              Edit Society
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}

        <div className="flex flex-col items-start justify-between gap-4 border-t bg-white px-6 py-4 md:flex-row md:items-center">
          {/* Left */}

          <span className="text-sm text-slate-500">
            Showing 1 to 4 of 28 societies
          </span>

          {/* Right */}

          <div className="flex items-center gap-2">
            {/* Previous */}

            <Button
              variant="outline"
              size="icon"
              disabled
              className="h-10 w-10 cursor-pointer rounded-lg border-slate-300 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft className="h-5 w-5 text-slate-700" />
            </Button>

            {/* Page 1 */}

            <Button className="h-10 w-10 cursor-pointer rounded-lg bg-indigo-600 p-0 font-bold text-white hover:bg-indigo-500">
              1
            </Button>

            {/* Page 2 */}

            <Button
              variant="outline"
              className="h-10 w-10 cursor-pointer rounded-lg p-0 hover:bg-slate-50"
            >
              2
            </Button>

            {/* Page 3 */}

            <Button
              variant="outline"
              className="h-10 w-10 cursor-pointer rounded-lg p-0 hover:bg-slate-50"
            >
              3
            </Button>

            {/* Dots */}

            <span className="px-2 text-slate-500">...</span>

            {/* Last */}

            <Button
              variant="outline"
              className="h-10 w-10 cursor-pointer rounded-lg p-0 hover:bg-slate-50"
            >
              7
            </Button>

            {/* Next */}

            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 cursor-pointer rounded-lg hover:bg-slate-50"
            >
              <ChevronRight className="h-5 w-5 text-slate-700" />
            </Button>
          </div>
        </div>
      </Card>
      <AddSocietyDialog
        open={openAddSociety}
        onOpenChange={setOpenAddSociety}
      />
    </div>
  )
}

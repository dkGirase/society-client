import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  UserPlus,
  Filter,
  Eye,
  Pencil,
  Ban,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { StatusBadge } from "./StatusBadge"
import AddTenantDialog from "./AddTenantDialog"

interface Tenant {
  id: string
  name: string
  ownerId: string
  avatar: string
  flat: string
  email: string
  phone: string
  status: "ACTIVE" | "INACTIVE"
  rentStart: string
  rentEnd: string
}

const tenants: Tenant[] = [
  {
    id: "1",
    name: "Julian Dasher",
    ownerId: "#OWN-8821",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    flat: "A-104",
    email: "julian.d@example.com",
    phone: "+1 (555) 012-3456",
    status: "ACTIVE",
    rentStart: "2026-01-12",
    rentEnd: "2027-01-12",
  },
  {
    id: "2",
    name: "Sarah Kinsley",
    ownerId: "#OWN-4432",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    flat: "C-402",
    email: "sarah.kinsley@webmail.com",
    phone: "+1 (555) 987-6543",
    status: "ACTIVE",
    rentStart: "2026-01-12",
    rentEnd: "2027-01-12",
  },
  {
    id: "3",
    name: "Robert Miller",
    ownerId: "#OWN-1092",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
    flat: "B-201",
    email: "miller.robert@outlook.com",
    phone: "+1 (555) 321-0987",
    status: "INACTIVE",
    rentStart: "2023-01-12",
    rentEnd: "2024-01-12",
  },
]

export default function TenantManagement() {
  const isExpired = (endDate: string) => {
    return new Date(endDate) < new Date()
  }
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const navigate = useNavigate()
  const [editDialogOpen, setEditDialogOpen] = useState(false)

  return (
    <div className="mt-4 space-y-6 px-6 pt-0 pb-6 md:-mt-6 md:px-8 md:pb-8">
      {/* Header */}
      <div className="flex items-center">
        <Button
          variant="ghost"
          onClick={() => navigate("/societies/:id")}
          className="cursor-pointer gap-2 rounded-lg px-0 text-slate-600 hover:bg-transparent hover:text-indigo-600"
        >
          <ArrowLeft className="h-5 w-5 text-slate-700" />
        </Button>
      </div>

      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Tenant Management
          </h2>
        </div>

        <Button
          onClick={() => setOpen(true)}
          className="cursor-pointer gap-2 rounded-xl bg-[#4F46E5] px-6 py-6 text-white hover:bg-[#4338CA] active:scale-95"
        >
          <UserPlus className="h-5 w-5 text-white" />
          Add New Tenant
        </Button>
      </div>

      {/* Filter Bar */}

      <div className="grid grid-cols-12 items-center gap-4">
        <div className="col-span-12 flex items-center gap-2 rounded-2xl border bg-white p-2 shadow-sm lg:col-span-4">
          <button
            onClick={() => setActiveTab("all")}
            className={`flex-1 cursor-pointer rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
              activeTab === "all"
                ? "bg-[#4F46E5] text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            All Tenants
          </button>

          <button
            onClick={() => setActiveTab("active")}
            className={`flex-1 cursor-pointer rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
              activeTab === "active"
                ? "bg-[#3B82F6] text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            Active
          </button>

          <button
            onClick={() => setActiveTab("pending")}
            className={`flex-1 cursor-pointer rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
              activeTab === "pending"
                ? "bg-[#06B6D4] text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            Pending
          </button>
        </div>
      </div>

      {/* Table Wrapper */}

      <Card className="overflow-hidden rounded-2xl border bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            {/* Table Header */}

            <thead>
              <tr className="border-b bg-slate-100 text-xs font-semibold tracking-wider text-slate-500 uppercase">
                <th className="px-6 py-4">Avatar / Name</th>
                <th className="px-6 py-4">Flat Number</th>
                <th className="px-6 py-4">Contact Details</th>
                <th className="px-6 py-4">Rent Duration</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200">
              {tenants.map((tenant) => (
                <tr
                  key={tenant.id}
                  className="group transition-colors hover:bg-slate-50"
                >
                  {/* Avatar / Name */}

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={tenant.avatar}
                        alt={tenant.name}
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-slate-100"
                      />

                      <div>
                        <p className="font-semibold text-slate-900">
                          {tenant.name}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Flat */}

                  <td className="px-6 py-4">
                    <span className="inline-flex rounded-md border border-cyan-200 bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700">
                      {tenant.flat}
                    </span>
                  </td>

                  {/* Contact */}

                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-slate-800">
                        {tenant.email}
                      </span>

                      <span className="text-sm text-slate-500">
                        {tenant.phone}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-slate-800">
                        {new Date(tenant.rentStart).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "2-digit",
                            year: "numeric",
                          }
                        )}{" "}
                        -{" "}
                        {new Date(tenant.rentEnd).toLocaleDateString("en-US", {
                          month: "short",
                          day: "2-digit",
                          year: "numeric",
                        })}
                      </span>

                      {isExpired(tenant.rentEnd) ? (
                        <span className="text-xs font-semibold text-red-600">
                          Rent Expired
                        </span>
                      ) : (
                        <span className="text-xs font-medium text-green-600">
                          Active Rent
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <StatusBadge status={tenant.status} />
                  </td>

                  {/* Actions */}

                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 opacity-0 transition-all duration-200 group-hover:opacity-100">
                      {/* View */}

                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-9 w-9 cursor-pointer rounded-lg hover:bg-slate-100"
                        onClick={() => navigate(`/tenants/:id`)}
                      >
                        <Eye className="h-5 w-5 text-slate-700" />
                      </Button>

                      {/* Edit */}

                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-9 w-9 cursor-pointer rounded-lg hover:bg-blue-50"
                        onClick={() => setEditDialogOpen(true)}
                      >
                        <Pencil className="h-5 w-5 text-slate-700" />
                      </Button>

                      {/* Active / Inactive */}

                      {tenant.status === "ACTIVE" ? (
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-9 w-9 cursor-pointer rounded-lg hover:bg-red-50"
                        >
                          <Ban className="h-5 w-5 text-slate-700" />
                        </Button>
                      ) : (
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-9 w-9 cursor-pointer rounded-lg hover:bg-green-50"
                        >
                          <CheckCircle2 className="h-5 w-5 text-slate-700" />
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}

        <div className="flex flex-col justify-between gap-4 border-t bg-white px-6 py-4 md:flex-row md:items-center">
          <p className="text-sm text-slate-500">
            Showing 1 to 10 of 42 results
          </p>

          <div className="flex flex-col items-start justify-between gap-4 border-t bg-white px-6 py-4 md:flex-row md:items-center">
            {/* Left */}

            <span className="text-sm text-slate-500">
              Showing 1 to 4 of 28 Tenants
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
        </div>
        <AddTenantDialog open={open} setOpen={setOpen} />
      </Card>
    </div>
  )
}

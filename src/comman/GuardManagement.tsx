import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  UserPlus,
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
import AddGuardDialog from "./AddGuardDialog"

interface Guard {
  id: string
  name: string
  avatar: string
  email: string
  phone: string
  getassignment: string
  shift: string
  timeing: string
  status: "ACTIVE" | "INACTIVE"
}

const guards: Guard[] = [
  {
    id: "1",
    name: "Julian Dasher",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",  
    email: "julian.d@example.com",
    phone: "+1 (555) 012-3456",
    getassignment: "Main Gate",
    shift: "Morning",
    timeing: "06:00 AM - 02:00 PM",
    status: "ACTIVE",
  },
  {
    id: "2",
    name: "Michael Ross",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    email: "michael.r@example.com",
    phone: "+1 (555) 987-6543",
    getassignment: "Parking Area",
    shift: "Evening",
    timeing: "02:00 PM - 10:00 PM",
    status: "ACTIVE",
  },
  {
    id: "3",
    name: "David Smith",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    email: "david.s@example.com",
    phone: "+1 (555) 456-7890",
    getassignment: "Club House",
    shift: "Night",
    timeing: "10:00 PM - 06:00 AM",
    status: "INACTIVE",
  },
  {
    id: "4",
    name: "Robert Johnson",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    email: "robert.j@example.com",
    phone: "+1 (555) 321-9876",
    getassignment: "Visitor Entry",
    shift: "Morning",
    timeing: "06:00 AM - 02:00 PM",
    status: "ACTIVE",
  },
]

export default function GuardManagement() {
  const [activeTab, setActiveTab] = useState("all")
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

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
            Guard Management
          </h2>
        </div>

        <Button onClick={() => setOpen(true)} className="cursor-pointer gap-2 rounded-xl bg-[#4F46E5] px-6 py-6 text-white hover:bg-[#4338CA] active:scale-95">
          <UserPlus className="h-5 w-5 text-white" />
          Add New Guard
        </Button>
         <AddGuardDialog open={open} setOpen={setOpen} />
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
            All Guards
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
                <th className="px-6 py-4">Contact Details</th>
                <th className="px-6 py-4">Gate Assignment</th>
                <th className="px-6 py-4">Timeing</th>
                <th className="px-6 py-4">Shift</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200">
              {guards.map((guard) => (
                <tr
                  key={guard.id}
                  className="group transition-colors hover:bg-slate-50"
                >
                  {/* Avatar / Name */}

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={guard.avatar}
                        alt={guard.name}
                        className="h-9  w-9 rounded-full object-cover ring-2 ring-slate-100"
                      />

                      <div>
                        <p className="font-semibold text-slate-900">
                          {guard.name}
                        </p>
                      </div>
                    </div>
                  </td>
                  {/* Contact */}

                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-slate-800">
                        {guard.email}
                      </span>

                      <span className="text-sm text-slate-500">
                        {guard.phone}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span className="inline-flex rounded-md border border-cyan-200 bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700">
                      {guard.getassignment}
                    </span>
                  </td>

                  <td className="px-6 py-4">{guard.timeing}</td>
                  <td className="px-6 py-4">{guard.shift}</td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <StatusBadge status={guard.status} />
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 opacity-0 transition-all duration-200 group-hover:opacity-100">
                      {/* View */}

                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-9 w-9 cursor-pointer rounded-lg hover:bg-slate-100"
                        onClick={() => navigate(`/guards/:id`)}
                      >
                        <Eye className="h-5 w-5 text-slate-700" />
                      </Button>

                      {/* Edit */}

                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-9 w-9 cursor-pointer rounded-lg hover:bg-blue-50"
                      >
                        <Pencil className="h-5 w-5 text-slate-700" />
                      </Button>

                      {/* Active / Inactive */}

                      {guard.status === "ACTIVE" ? (
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
      </Card>
    </div>
  )
}

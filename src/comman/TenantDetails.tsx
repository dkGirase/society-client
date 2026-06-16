import { useNavigate } from "react-router-dom"
import {
  Pencil,
  Mail,
  Phone,
  BadgeCheck,
  Cake,
  UserRoundSearch,
  ClipboardCheck,
  Building2,
  ArrowLeft,
  AlertTriangle,
  BarChart3,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import EditOwnerDialog from "./EditOwnerDialog"

const tenant = {
  id: "SP-7721-GRW",
  name: "Rajesh Malhotra",
  role: "Primary Owner • Resident",
  email: "rajesh.malhotra@email.com",
  phone: "+91 98765 43210",
  dob: "15th Oct, 1982",
  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
  status: "ACTIVE",
  emergencyName: "Priya Malhotra",
  emergencyPhone: "+91 98765 11111",
  tenant: "Ananya Sharma",
  tenantAvatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
  moveIn: "Jan 12, 2023",
  visitors: 24,
  complaints: 2,
  block: "Tower C",
  floor: "12th Floor",
  flat: "1204",
  parking: "P1-A42, P1-A43",
  ownership: "Single Owner",
  memberSince: "March 2021",

  // ✅ ADD THESE
  rentStart: "2023-01-12",
  rentEnd: "2026-01-12",
}

export default function TenantDetails() {
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="mt-4 space-y-6 px-6 pb-6 md:px-8 md:pb-8">
      {/* Top Actions */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => navigate("/owners")}
          className="gap-2 px-0 text-slate-600 hover:text-indigo-600"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>

        <Button
          onClick={() => setEditDialogOpen(true)}
          className="rounded-xl bg-[#4F46E5] px-6 py-5 text-white hover:bg-[#4338CA]"
        >
          <Pencil className="mr-2 h-5 w-5" /> Edit Details
        </Button>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* PROFILE CARD */}
        <Card className="col-span-12 rounded-3xl border-0 bg-white p-6 shadow-sm">
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
            <Avatar className="h-32 w-32 rounded-2xl border-4 border-white shadow-md">
              <AvatarImage src={tenant.image} />
              <AvatarFallback>RM</AvatarFallback>
            </Avatar>

            <div className="flex-1 space-y-4 text-center md:text-left">
              <div>
                <h1 className="text-3xl font-black text-slate-900">
                  {tenant.name}
                </h1>

                <p className="mt-1 text-sm font-semibold text-slate-500">
                  Property Owner:{" "}
                  <span className="text-slate-800">Rajesh Malhotra</span>
                </p>

                <p className="mt-2 text-lg font-semibold text-indigo-600">
                  Tenant / Occupant Details
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {[
                  { icon: Mail, val: tenant.email },
                  { icon: Phone, val: tenant.phone },
                  { icon: BadgeCheck, val: `ID: ${tenant.id}` },
                  { icon: Cake, val: tenant.dob },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon className="h-5 w-5 text-slate-400" />
                    <span className="text-sm text-slate-600">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* MAIN LEFT */}
        <div className="col-span-12 space-y-6 lg:col-span-8">
          {/* LEASE + PROPERTY DETAILS */}
          <Card className="rounded-2xl border-0 shadow-sm">
            <div className="flex items-center gap-3 border-b bg-slate-50 px-6 py-4">
              <Building2 className="h-5 w-5 text-slate-700" />
              <h3 className="text-xl font-bold">Lease & Property Details</h3>
            </div>

            <CardContent className="grid grid-cols-2 gap-6 p-6 md:grid-cols-4">
              {/* Block */}
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase">
                  Block
                </p>
                <h4 className="text-lg font-bold text-slate-900">
                  {tenant.block}
                </h4>
              </div>

              {/* Floor */}
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase">
                  Floor
                </p>
                <h4 className="text-lg font-bold text-slate-900">
                  {tenant.floor}
                </h4>
              </div>

              {/* Flat */}
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase">
                  Flat
                </p>
                <h4 className="text-lg font-bold text-slate-900">
                  {tenant.flat}
                </h4>
              </div>

              {/* Rent Start */}
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase">
                  Rent Start
                </p>
                <h4 className="text-lg font-bold text-slate-900">
                  {tenant.rentStart || "—"}
                </h4>
              </div>

              {/* Rent End */}
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase">
                  Rent End
                </p>
                <h4 className="text-lg font-bold text-slate-900">
                  {tenant.rentEnd || "—"}
                </h4>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="col-span-12 space-y-6 lg:col-span-4">
          {/* EMERGENCY CONTACT (REPLACED TENANT CARD) */}
          <Card className="rounded-2xl border-0 shadow-sm">
            <div className="flex items-center gap-2 border-b bg-slate-50 px-6 py-4">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              <h3 className="text-lg font-bold">Emergency Contact</h3>
            </div>

            <CardContent className="p-6">
              <p className="font-bold text-slate-900">{tenant.emergencyName}</p>
              <p className="text-slate-600">{tenant.emergencyPhone}</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <EditOwnerDialog open={editDialogOpen} onOpenChange={setEditDialogOpen} />
    </div>
  )
}

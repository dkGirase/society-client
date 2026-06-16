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

const owner = {
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
}

export default function OwnerDetails() {
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const navigate = useNavigate()
  return (
    <div className="mt-4 space-y-6 px-6 pt-0 pb-6 md:-mt-6 md:px-8 md:pb-8">
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => navigate("/owners")}
          className="gap-2 rounded-lg px-0 text-slate-600 hover:bg-transparent hover:text-indigo-600"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <Button
          onClick={() => setEditDialogOpen(true)}
          className="rounded-xl bg-[#4F46E5] px-6 py-5 text-white shadow-md transition-all hover:bg-[#4338CA]"
        >
          <Pencil className="mr-2 h-5 w-5" /> Edit Owner
        </Button>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Profile Card - Full Width */}
        <Card className="col-span-12 rounded-3xl border-0 bg-white p-6 shadow-sm">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            <div className="relative shrink-0">
              <Avatar className="h-32 w-32 rounded-2xl border-4 border-white shadow-md">
                <AvatarImage src={owner.image} />
                <AvatarFallback>RM</AvatarFallback>
              </Avatar>
              <span className="absolute -right-1 -bottom-1 h-6 w-6 rounded-full border-4 border-white bg-green-500"></span>
            </div>
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div>
                <h1 className="text-3xl font-black text-slate-900">
                  {owner.name}
                </h1>
                <p className="mt-2 text-lg font-semibold text-indigo-600">
                  {owner.role}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 pt-2 md:grid-cols-2">
                {[
                  { icon: Mail, val: owner.email },
                  { icon: Phone, val: owner.phone },
                  { icon: BadgeCheck, val: `ID: ${owner.id}` },
                  { icon: Cake, val: owner.dob },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center gap-3 md:justify-start"
                  >
                    <item.icon className="h-5 w-5 text-slate-400" />
                    <span className="text-sm text-slate-600">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Main Content Area (8 cols) */}
        <div className="col-span-12 space-y-6 lg:col-span-8">
          <Card className="overflow-hidden rounded-2xl border-0 shadow-sm">
            <div className="flex items-center gap-3 border-b bg-slate-50 px-6 py-4">
              <Building2 className="h-5 w-5 text-slate-700" />
              <h3 className="text-xl font-bold text-slate-900">
                Flat & Parking Details
              </h3>
            </div>
            <CardContent className="grid grid-cols-2 gap-8 p-6 md:grid-cols-4">
              {[
                { l: "Block", v: owner.block },
                { l: "Floor", v: owner.floor },
                { l: "Flat No.", v: owner.flat },
                { l: "Parking", v: owner.parking },
              ].map((item) => (
                <div key={item.l} className="space-y-1">
                  <p className="text-xs font-bold text-slate-500 uppercase">
                    {item.l}
                  </p>
                  <h4 className="text-lg font-bold">{item.v}</h4>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card className="overflow-hidden rounded-2xl border-0 shadow-sm">
              <div className="flex items-center gap-3 border-b bg-slate-50 px-6 py-4">
                <ClipboardCheck className="h-5 w-5 text-slate-700" />
                <h3 className="text-xl font-bold text-slate-900">Ownership</h3>
              </div>
              <CardContent className="space-y-4 p-6">
                <div className="flex justify-between">
                  <span className="text-slate-500">Type</span>
                  <span className="font-bold">{owner.ownership}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Member Since</span>
                  <span className="font-bold">{owner.memberSince}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Maintenance</span>
                  <Badge className="bg-green-100 text-green-700">
                    UP TO DATE
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden rounded-2xl border-0 shadow-sm">
              <div className="flex items-center justify-between border-b bg-slate-50 px-6 py-4">
                <div className="flex items-center gap-3">
                  <UserRoundSearch className="h-5 w-5" />
                  <h3 className="text-xl font-bold">Tenant</h3>
                </div>
                <Badge className="bg-blue-100 text-blue-700">ACTIVE</Badge>
              </div>
              <CardContent className="flex items-center gap-4 p-6">
                <img
                  src={owner.tenantAvatar}
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <h4 className="font-bold">{owner.tenant}</h4>
                  <p className="text-xs text-slate-500">Since {owner.moveIn}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sidebar Content (4 cols) */}
        <div className="col-span-12 space-y-6 lg:col-span-4">
          <Card className="rounded-2xl border-0 p-6 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
              <AlertTriangle className="h-5 w-5 text-amber-500" /> Emergency
              Contact
            </h3>
            <p className="font-bold text-slate-900">{owner.emergencyName}</p>
            <p className="text-slate-600">{owner.emergencyPhone}</p>
          </Card>

          <Card className="rounded-2xl border-0 bg-indigo-600 p-6 text-white shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
              <BarChart3 className="h-5 w-5" /> Activity Stats
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-2xl font-bold">{owner.visitors}</p>
                <p className="text-xs opacity-80">Total Visitors</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-2xl font-bold">{owner.complaints}</p>
                <p className="text-xs opacity-80">Complaints</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <EditOwnerDialog open={editDialogOpen} onOpenChange={setEditDialogOpen} />
    </div>
  )
}

import {
  Building2,
  MapPin,
  Share2,
  Pencil,
  Building,
  User,
  Users,
  Shield,
  ExternalLink,
  Mail,
  Phone,
  UserPlus,
  LogIn,
  TriangleAlert,
  PartyPopper,
  ArrowLeft,
} from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const visitorTrend = [
  { day: "Mon", height: "40%", visitors: 12 },
  { day: "Tue", height: "65%", visitors: 24 },
  { day: "Wed", height: "55%", visitors: 18 },
  { day: "Thu", height: "90%", visitors: 32 },
  { day: "Fri", height: "70%", visitors: 28 },
  { day: "Sat", height: "100%", visitors: 45 },
  { day: "Sun", height: "85%", visitors: 38 },
]

const societyAdmin = {
  name: "Rajesh Khanna",
  designation: "Manager Since Jan 2022",
  email: "rajesh.k@greenvalley.com",
  phone: "+91 98765 43210",
  image: "https://i.pravatar.cc/200?img=12",
}

const recentActivities = [
  {
    id: 1,
    icon: UserPlus,
    color: "blue",
    title: "New tenant moved in",
    description: "at Block B, Flat 402.",
    time: "2 hours ago",
  },
  {
    id: 2,
    icon: LogIn,
    color: "green",
    title: "Visitor entry logged:",
    description: "Delivery person for Flat 105.",
    time: "4 hours ago",
  },
  {
    id: 3,
    icon: TriangleAlert,
    color: "amber",
    title: "Maintenance Alert:",
    description: "Elevator 2 undergoing inspection.",
    time: "6 hours ago",
  },
  {
    id: 4,
    icon: PartyPopper,
    color: "purple",
    title: "Facility Booking:",
    description: "Clubhouse booked for Saturday event.",
    time: "Yesterday",
  },
]

const society = {
  name: "Green Valley Residency",
  address: "Green Valley Residency, Block C, Plot 12",
  location: "Sector 45, Gurgaon, Haryana",
  city: "Gurgaon",
  state: "Haryana",
  pincode: "122003",

  stats: {
    flats: 480,
    owners: 412,
    tenants: 68,
    guards: 24,
  },
}

export default function SocietyDetails() {
  const navigate = useNavigate()

  const handleShare = () => {
    console.log("Share Society")
  }

  const handleEditSociety = () => {
    console.log("Edit Society")
  }

  const handleChangeAdmin = () => {
    console.log("Change Admin")
  }

  const handleViewActivities = () => {
    console.log("View Activities")
  }

  const handleViewMap = () => {
    window.open("https://maps.google.com/?q=Sector+45+Gurgaon", "_blank")
  }

  const handleVisitorMenu = () => {
    console.log("Visitor Menu")
  }

  return (
  <section className="space-y-6 -mt-4 px-6 pb-6 pt-0 md:-mt-6 md:px-8 md:pb-8">
      {/* Back Button */}

      <div className="flex items-center">
        <Button
          variant="ghost"
          onClick={() => navigate("/societies")}
          className="cursor-pointer gap-2 rounded-lg px-0 text-slate-600 hover:bg-transparent hover:text-indigo-600"
        >
          <ArrowLeft className="h-5 w-5 text-slate-700" />
         
        </Button>
      </div>
      {/* Header */}

      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        {/* Left */}

        <div className="flex items-center gap-4">
          {/* Society Icon */}

          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-indigo-100">
            <Building2 className="h-8 w-8 text-slate-700" />
          </div>

          {/* Title */}

          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              {society.name}
            </h2>

            <div className="mt-1 flex items-center gap-2 text-slate-500">
              <MapPin className="h-5 w-5 text-slate-700" />

              <span>{society.location}</span>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="flex flex-wrap gap-3">
          {/* Share */}

          <Button
            variant="outline"
            className="cursor-pointer gap-2 rounded-lg px-5 py-5 hover:bg-slate-50"
          >
            <Share2 className="h-5 w-5 text-slate-700" />
            Share
          </Button>

          {/* Edit */}

          <Button className="cursor-pointer gap-2 rounded-lg bg-indigo-600 px-5 py-5 hover:bg-indigo-500">
            <Pencil className="h-5 w-5 text-white" />
            Edit Society
          </Button>
        </div>
      </div>
      {/* Bento Stats */}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Total Flats */}

        <Card className="cursor-pointer rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <CardContent className="flex flex-col gap-4 p-6">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                <Building className="h-5 w-5 text-slate-700" />
              </div>

              <span className="rounded-md bg-green-50 px-2 py-1 text-xs font-bold text-green-600">
                +2.5%
              </span>
            </div>

            <div>
              <p className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                Total Flats
              </p>

              <h3 className="mt-2 text-4xl font-black text-slate-900">
                {society.stats.flats}
              </h3>
            </div>
          </CardContent>
        </Card>

        {/* Owners */}

        <Card className="cursor-pointer rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <CardContent className="flex flex-col gap-4 p-6">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <User className="h-5 w-5 text-slate-700" />
              </div>
            </div>

            <div>
              <p className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                Owners
              </p>

              <h3 className="mt-2 text-4xl font-black text-slate-900">
                {society.stats.owners}
              </h3>
            </div>
          </CardContent>
        </Card>

        {/* Tenants */}

        <Card className="cursor-pointer rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <CardContent className="flex flex-col gap-4 p-6">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                <Users className="h-5 w-5 text-slate-700" />
              </div>
            </div>

            <div>
              <p className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                Tenants
              </p>

              <h3 className="mt-2 text-4xl font-black text-slate-900">
                {society.stats.tenants}
              </h3>
            </div>
          </CardContent>
        </Card>

        {/* Guards */}

        <Card className="cursor-pointer rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <CardContent className="flex flex-col gap-4 p-6">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <Shield className="h-5 w-5 text-slate-700" />
              </div>
            </div>

            <div>
              <p className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                Guards
              </p>

              <h3 className="mt-2 text-4xl font-black text-slate-900">
                {society.stats.guards}
              </h3>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Details Section */}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left Side */}

        <div className="space-y-6 lg:col-span-2">
          {/* Society Information */}

          <Card className="overflow-hidden rounded-2xl border shadow-sm">
            <div className="border-b px-6 py-5">
              <h3 className="text-xl font-semibold text-slate-900">
                Society Information
              </h3>
            </div>

            <CardContent className="grid grid-cols-1 gap-8 p-6 md:grid-cols-2">
              {/* Information */}

              <div className="space-y-6">
                {/* Address */}

                <div>
                  <p className="mb-1 text-sm font-medium text-slate-500">
                    Address
                  </p>

                  <p className="text-lg text-slate-900">{society.address}</p>
                </div>

                {/* City */}

                <div>
                  <p className="mb-1 text-sm font-medium text-slate-500">
                    City
                  </p>

                  <p className="text-lg text-slate-900">{society.city}</p>
                </div>

                {/* State */}

                <div>
                  <p className="mb-1 text-sm font-medium text-slate-500">
                    State
                  </p>

                  <p className="text-lg text-slate-900">{society.state}</p>
                </div>

                {/* Pincode */}

                <div>
                  <p className="mb-1 text-sm font-medium text-slate-500">
                    Pincode
                  </p>

                  <p className="text-lg text-slate-900">{society.pincode}</p>
                </div>
              </div>

              {/* Map */}

              <div>
                <div className="group relative min-h-[220px] overflow-hidden rounded-xl bg-slate-100">
                  <img
                    src="https://picsum.photos/600/400"
                    alt="Society Location"
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-all duration-300 group-hover:bg-black/0">
                    <Button
                      className="cursor-pointer gap-2 rounded-lg bg-white text-slate-900 shadow-lg hover:bg-slate-100"
                      onClick={() =>
                        window.open(
                          "https://maps.google.com/?q=Sector+45+Gurgaon",
                          "_blank"
                        )
                      }
                    >
                      <ExternalLink className="h-5 w-5 text-slate-700" />
                      View on Google Maps
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Assigned Society Admin */}

          <Card className="overflow-hidden rounded-2xl border shadow-sm">
            {/* Header */}

            <div className="flex items-center justify-between border-b px-6 py-5">
              <h3 className="text-xl font-semibold text-slate-900">
                Assigned Society Admin
              </h3>

              <Button
                variant="ghost"
                className="cursor-pointer p-0 font-semibold text-indigo-600 hover:bg-transparent hover:text-indigo-500"
              >
                Change Admin
              </Button>
            </div>

            {/* Body */}

            <CardContent className="p-6">
              <div className="flex flex-col gap-6 md:flex-row md:items-center">
                {/* Avatar */}

                <img
                  src={societyAdmin.image}
                  alt={societyAdmin.name}
                  className="h-20 w-20 rounded-full object-cover shadow-md transition-all duration-300 hover:scale-105"
                />

                {/* Details */}

                <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2">
                  {/* Name */}

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">
                      {societyAdmin.name}
                    </h4>

                    <p className="mt-1 text-slate-500">
                      {societyAdmin.designation}
                    </p>
                  </div>

                  {/* Contact */}

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-slate-700" />

                      <span className="text-slate-600">
                        {societyAdmin.email}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-slate-700" />

                      <span className="text-slate-600">
                        {societyAdmin.phone}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

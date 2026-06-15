import * as React from "react"
import { cn } from "@/lib/utils"
import {
  Building2,
  Users,
  UserSearch,
  AlertTriangle,
  PlusCircle,
  UserPlus,
  Bell,
  CheckCircle,
  UserPlus2,
  ArrowRight,
} from "lucide-react"

export default function SuperAdminDashboard() {
  return (
    <div className="p-6 md:p-8 space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-slate-900">
          Overview Dashboard
        </h1>
        <p className="text-slate-500">
          Global performance metrics for SocietyPro ecosystem.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Card 1 */}
        <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md cursor-pointer">
          <div className="flex justify-between items-center">
            <Building2 className="h-5 w-5 text-slate-700" />
            <span className="text-green-600 text-sm font-medium">
              +4.2%
            </span>
          </div>
          <p className="text-slate-500 mt-4">Total Societies</p>
          <h2 className="text-3xl font-bold text-slate-900">42</h2>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md cursor-pointer">
          <div className="flex justify-between items-center">
            <Users className="h-5 w-5 text-slate-700" />
            <span className="text-green-600 text-sm font-medium">
              +12%
            </span>
          </div>
          <p className="text-slate-500 mt-4">Total Users</p>
          <h2 className="text-3xl font-bold text-slate-900">12,450</h2>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md cursor-pointer">
          <div className="flex justify-between items-center">
            <UserSearch className="h-5 w-5 text-slate-700" />
            <span className="px-2 py-1 text-xs rounded-full bg-cyan-100 text-cyan-700">
              Live
            </span>
          </div>
          <p className="text-slate-500 mt-4">Active Visitors</p>
          <h2 className="text-3xl font-bold text-slate-900">312</h2>
        </div>

        {/* Card 4 */}
        <div className="rounded-2xl bg-red-50 border border-red-200 p-6 shadow-sm cursor-pointer">
          <div className="flex justify-between items-center">
            <AlertTriangle className="h-5 w-5 text-slate-700" />
            <span className="text-red-600 text-sm font-bold">Urgent</span>
          </div>
          <p className="text-red-700 mt-4">Active Emergencies</p>
          <h2 className="text-3xl font-bold text-red-600">2</h2>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">

          {/* Growth */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg">Platform Growth</h2>

              <div className="flex gap-2">
                <button className="px-4 py-1 text-sm border rounded-full">
                  Monthly
                </button>
                <button className="px-4 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-full">
                  Weekly
                </button>
              </div>
            </div>

            {/* Fake Chart */}
            <div className="h-56 flex items-end gap-2 mt-6">
              {[40, 60, 55, 80, 70, 95, 85].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-slate-200 hover:bg-indigo-500 transition cursor-pointer rounded-t-lg"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>

            <div className="flex justify-between mt-4 text-sm text-slate-500">
              <span>Society Onboarding Trend</span>
              <span className="text-indigo-600 font-medium cursor-pointer">
                View full report
              </span>
            </div>
          </div>

          {/* Activities */}
          <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
            <div className="flex justify-between">
              <h2 className="font-semibold text-lg">Recent Activities</h2>
              <button className="text-indigo-600 text-sm hover:underline cursor-pointer">
                See all
              </button>
            </div>

            {/* Item */}
            <div className="space-y-4">

              <div className="flex gap-3 p-3 hover:bg-slate-50 rounded-lg cursor-pointer">
                <PlusCircle className="h-5 w-5 text-slate-700" />
                <div>
                  <p className="text-sm font-medium">
                    New society added: <span className="text-indigo-600">Green Valley Estates</span>
                  </p>
                  <p className="text-xs text-slate-500">
                    Admin • 2 hours ago
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-3 hover:bg-slate-50 rounded-lg cursor-pointer">
                <CheckCircle className="h-5 w-5 text-slate-700" />
                <div>
                  <p className="text-sm font-medium">
                    Emergency resolved: Sunrise Apts
                  </p>
                  <p className="text-xs text-slate-500">
                    Security Team • 4 hours ago
                  </p>
                </div>
              </div>

              <div className="flex gap-3 p-3 hover:bg-slate-50 rounded-lg cursor-pointer">
                <UserPlus2 className="h-5 w-5 text-slate-700" />
                <div>
                  <p className="text-sm font-medium">
                    New Sub-Admin Created
                  </p>
                  <p className="text-xs text-slate-500">
                    Super Admin • Yesterday
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">

          {/* Complaint */}
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
            <h2 className="font-semibold text-lg mb-4">
              Complaint Summary
            </h2>

            <div className="relative w-40 h-40 mx-auto">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831"
                  fill="none"
                  stroke="#4F46E5"
                  strokeWidth="4"
                  strokeDasharray="78,100"
                  strokeLinecap="round"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-xl font-bold">78%</p>
                <p className="text-xs text-slate-500">Resolved</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-2xl shadow-sm space-y-3">

            <h2 className="font-semibold text-lg">
              Quick Actions
            </h2>

            {[
              { icon: PlusCircle, label: "Add Society" },
              { icon: UserPlus, label: "Create Admin" },
              { icon: AlertTriangle, label: "View Alerts" },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <button
                  key={i}
                  className="flex items-center gap-3 w-full p-3 border rounded-xl hover:bg-indigo-50 cursor-pointer transition"
                >
                  <Icon className="h-5 w-5 text-slate-700" />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </div>

          {/* Banner */}
          <div className="relative h-32 rounded-xl overflow-hidden cursor-pointer">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnhBb6KXnCNOOmrMC0rs6MTC0Kqk20Cg"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/80 to-transparent flex items-end p-4 text-white text-sm">
              Next Update: Friday 10 PM
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
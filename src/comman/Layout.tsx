import { useState } from "react"
import Sidebar from "./Sidebar"
import Header from "./Header"
import { Outlet } from "react-router-dom"

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      <div
        className={`
          transition-all
          duration-300
          ${collapsed ? "ml-20" : "ml-[280px]"}
        `}
      >
        <Header collapsed={collapsed} />

        <main className="pt-16 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
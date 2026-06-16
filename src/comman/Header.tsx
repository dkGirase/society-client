import * as React from "react"
import { Bell, Search, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Link, useLocation } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { navItems } from "@/lib/nav-items"
import { WEB_NAME } from "@/lib/constants"

interface HeaderProps {
  collapsed: boolean
}

export default function Header({ collapsed }: HeaderProps) {
  const location = useLocation()
  return (
    <header
      className={`*:sticky ${
        collapsed ? "left-20" : "left-[280px]"
      } sticky top-0 z-40 flex h-16 items-center justify-end border-b bg-white px-4 shadow-sm lg:px-6`}
    >
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="mr-auto cursor-pointer md:hidden"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="w-[280px] p-0">
          <div className="flex h-full flex-col bg-white">
            {/* Logo */}

            <div className="border-b p-6">
              <h2 className="text-xl font-black text-indigo-600">{WEB_NAME}</h2>

              <p className="text-sm text-slate-500">Super Admin Console</p>
            </div>

            {/* Navigation */}

            <nav className="flex flex-1 flex-col gap-2 p-4">
              {navItems.map((item) => {
                const Icon = item.icon
                const active = location.pathname === item.href

                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`flex items-center gap-4 rounded-lg px-4 py-3 transition-all ${
                      active
                        ? "bg-indigo-50 font-bold text-indigo-600"
                        : "text-slate-700 hover:bg-slate-100 hover:text-indigo-600"
                    }`}
                  >
                    <Icon className="h-5 w-5" />

                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </nav>

            {/* Bottom */}

            <div className="border-t p-4">
              <Button className="h-12 w-full cursor-pointer rounded-xl bg-indigo-600 hover:bg-indigo-500">
                Manage All
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <div className="flex items-center gap-6">
        {/* Icons */}

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="cursor-pointer rounded-full text-slate-700 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-cyan-400"
          >
            <Bell className="h-5 w-5" />
          </Button>
        </div>

        {/* Profile */}

        <div className="flex cursor-pointer items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-bold text-slate-900 dark:text-white">
              Admin User
            </p>

            <p className="text-sm text-slate-500">Super Admin</p>
          </div>

          <Avatar className="h-10 w-10">
            <AvatarImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzO934gA05CgIBsrxtKfrUXGJOLhj_JWG3Y3hFmd_5V2izCB9AX4cCuRIdJdm4lUhoUIWc3P7XJWZ5qIyvzgfm3GlMQFdOjge5mm_27XQOUGxnbcyaF7aN6h4eSqoHXT938X0q4vKqXQaq9FmklePBkIRmRxessV1zDHZ8QJQ5VnZAt5qowpTmxMYjTEos-DUHSRypGIVhrBwuWb-mPbq_VH-pTYo_VK2Wv0gmVT75lmiadU-gheDze1V2pqAUccFoVtQWs_EaHIw" />

            <AvatarFallback>AU</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}

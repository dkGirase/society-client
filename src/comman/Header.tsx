import * as React from "react"
import { Bell, Search, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface HeaderProps {
  collapsed: boolean
}

export default function Header({ collapsed }: HeaderProps) {
  return (
    <header
      className={`top-0 z-40 flex h-16 w-full *:sticky ${
        collapsed ? "left-20" : "left-[280px]"
      } items-center justify-end border-b border-slate-200 bg-white px-4 shadow-sm lg:px-6 dark:border-slate-800 dark:bg-slate-900`}
    >
      {/* Search */}

      {/* Right Side */}

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

import React, { useState } from "react";
import { Lock, Eye, EyeOff, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    // This single div handles the full height and centering
    <div className="flex-grow flex items-center justify-center p-6 w-full">
      <div className="relative w-full max-w-[448px] m-14 flex flex-col gap-[32px] overflow-hidden rounded-[16px] border border-[#E5E7EB] bg-[#ffffff] p-[32px] shadow-sm md:p-[48px]">
        
        {/* Accent Border */}
        <div className="absolute top-0 left-0 h-[6px] w-full bg-[#4F46E5]"></div>

        <div className="space-y-[8px] text-center">
          <h1 className="text-[32px] font-semibold text-[#111827]">Welcome Back</h1>
          <p className="text-[14px] text-[#4B5563]">Manage your community with ease and transparency.</p>
        </div>

        <form className="flex flex-col gap-[32px]" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-[4px]">
            <label className="ml-[4px] text-[12px] font-medium tracking-[0.05em] text-[#4B5563]">EMAIL OR PHONE</label>
            <div className="group relative">
              <User className="absolute top-1/2 left-[16px] h-5 w-5 -translate-y-1/2 text-[#9CA3AF]" />
              <Input 
                className="h-[48px] border-[#E5E7EB] pl-[48px] text-black focus:border-[#4F46E5] focus:ring-1 focus:ring-[#4F46E5]" 
                placeholder="e.g. resident@gmail.com" 
              />
            </div>
          </div>

          <div className="flex flex-col gap-[4px]">
            <div className="ml-[4px] flex items-center justify-between">
              <label className="text-[12px] font-medium text-[#4B5563]">PASSWORD</label>
              <Link to="/forgot-password" className="text-[12px] text-[#4F46E5] hover:underline">Forgot password?</Link>
            </div>
            <div className="group relative">
              <Lock className="absolute top-1/2 left-[16px] h-5 w-5 -translate-y-1/2 text-[#9CA3AF]" />
              <Input 
                type={showPassword ? "text" : "password"}
                className="h-[48px] border-[#E5E7EB] px-[48px] text-black focus:border-[#4F46E5] focus:ring-1 focus:ring-[#4F46E5]" 
                placeholder="••••••••" 
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="cursor-pointer absolute top-1/2 right-[16px] -translate-y-1/2 text-[#9CA3AF]">
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <Button className="h-[52px] cursor-pointer bg-[#4F46E5] text-[16px] font-semibold text-[#ffffff] hover:bg-[#4338CA]">
            Sign In <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
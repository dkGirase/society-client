import React from 'react';
import { Lock, Mail, ArrowLeft, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom"; // Use Link for navigation

export default function ForgotPassword() {
  return (
    // REMOVED 'mt-16' and 'py-12'. 
    // 'flex-grow' ensures this div fills all space between header and footer.
    <main className="flex-grow flex items-center justify-center px-6 bg-[#f9f9ff]">
      <div className="w-full max-w-[440px]">
        
        {/* Header Section */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E0E7FF] text-[#4F46E5] mb-4">
            <Lock size={32} />
          </div>
          <h1 className="text-3xl font-bold text-[#111827] mb-2">Forgot password?</h1>
          <p className="text-base text-[#4B5563]">Enter your email or phone number to receive a reset link or OTP.</p>
        </div>

        {/* Central Card */}
        <div 
          className="bg-white p-8 rounded-xl shadow-sm border border-[#E5E7EB]"
          style={{ transform: 'rotateY(-9.64deg) rotateX(0.84deg)' }}
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#4B5563] uppercase ml-1 block">
                Email or Phone Number
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#9CA3AF] group-focus-within:text-[#4F46E5] transition-colors">
                  <Mail size={18} />
                </div>
                <Input 
                  className="w-full pl-10 h-12 bg-white text-black border-[#E5E7EB] focus-visible:ring-[#4F46E5]/20 focus-visible:border-[#4F46E5]"
                  placeholder="e.g. resident@gmail.com" 
                  required 
                />
              </div>
            </div>

            <Button className="w-full h-12 cursor-pointer bg-[#4F46E5] hover:bg-[#4F46E5]/90 text-white font-semibold flex gap-2 shadow-md">
              <span>Send Reset Link</span>
              <Send size={18} />
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-[#E5E7EB] flex justify-center">
            <Link to="/" className="inline-flex items-center gap-2 cursor-pointer text-[#4F46E5] font-semibold hover:text-[#3B82F6] transition-colors">
              <ArrowLeft size={18} />
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
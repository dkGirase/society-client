import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#E5E7EB] bg-white/80 backdrop-blur-md shadow-sm">
      {/* Removed mx-auto and max-w-7xl from here to align content to the left */}
      <div className="flex w-full items-center justify-between px-6 py-4">
        
        {/* Logo/Brand - Now pinned to the left */}
        <div className="text-xl font-bold text-[#4F46E5]">
          Digital Society Platform
        </div>

      </div>
    </header>
  );
}
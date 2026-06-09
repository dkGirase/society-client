export default function Footer() {
  return (
    <footer className="w-full border-t border-[#E5E7EB] bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between space-y-4 px-6 py-8 md:flex-row md:space-y-0">
        
        {/* Brand Name */}
        <div className="text-lg font-bold text-[#4F46E5]">
          Digital Society Platform
        </div>

        {/* Copyright */}
        <div className="text-sm text-[#4B5563] text-center">
          © 2026 Digital Society Platform. All rights reserved.
        </div>

        {/* Links */}
        <div className="flex gap-8">
          <a 
            href="#" 
            className="text-sm text-[#4B5563] transition-all hover:text-[#4F46E5]"
          >
            Privacy Policy
          </a>
          <a 
            href="#" 
            className="text-sm text-[#4B5563] transition-all hover:text-[#4F46E5]"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
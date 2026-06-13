import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./pages/auth/Header";
import Footer from "./pages/auth/Footer";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import Sidebar from "./comman/Sidebar";

export function App() {
  return (
    <BrowserRouter>
      {/* 1. 'flex flex-col min-h-screen' makes the container fill the screen
         2. 'pt-[80px]' (or height of your header) prevents content overlap 
      */}
      <div className="flex flex-col min-h-screen bg-[#f9f9ff] pt-[80px]">
        {/* <Header /> */}
        
        <main className="flex-grow">
          <Routes>
            {/* <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ResetPassword />} /> */}

            <Route path="/" element={<Sidebar />} />
          </Routes>
        </main>
        
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./comman/Layout"
import Login from "./pages/auth/Login"
import ForgotPassword from "./pages/auth/ForgotPassword"
import ResetPassword from "./pages/auth/ResetPassword"
import SuperAdminDashboard from "./components/superAdmin/SuperAdminDashboard"
import SocietiesPage from "./components/superAdmin/Society/SocietiesPage"
import SocietyDetails from "./components/superAdmin/Society/SocietyDetails"
import SocietyAdminsPage from "./components/superAdmin/SocietyAdmin/SocietyAdminsPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        {/* Admin */}
        <Route path="/" element={<Layout />}>
          <Route index element={<SuperAdminDashboard />} />
          <Route path="societies" element={<SocietiesPage />} />
          <Route path="societies/:id" element={<SocietyDetails />} />
          <Route path="financials" element={<h1>Financials</h1>} />
          <Route path="society-admins" element={<SocietyAdminsPage />} />
          <Route path="support" element={<h1>Support</h1>} />
          <Route path="logs" element={<h1>Logs</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

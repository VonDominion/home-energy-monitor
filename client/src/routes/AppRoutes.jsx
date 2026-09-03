import { Routes, Route } from "react-router-dom"
import PublicLayout from "../Layouts/PublicLayout/PublicLayout"
import DashboardLayout from "../Layouts/DasboardLayout/DasboardLayout"
import { ProtectedRoute } from "../components/common/ProtectedRoute";

import Home from "../pages/Home.jsx"
import Login from "../pages/Login.jsx"
import Register from "../pages/Register.jsx"
import Appliances from "../pages/Appliances.jsx"
import Dashboard from "../pages/Dashboard.jsx"
import Profile from "../pages/Profile.jsx"
import ForgotPassword from "../pages/ForgotPassword.jsx"

function AppRoutes() {
  return (
    <>
      <Routes>

        {/* Public Routes*/}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/forgot-password" 
            element={<ForgotPassword />} 
          />
        </Route>

        {/* Protected Routes */}

        <Route path="/dashboard" element={<ProtectedRoute> <DashboardLayout /> </ProtectedRoute>}>
          <Route index element={<Dashboard />} />

          <Route
            path="appliances"
            element={<Appliances />}
          />

          <Route
            path="profile"
            element={<Profile />}
          />

        </Route>
      </Routes>
    </>

  )
}

export default AppRoutes
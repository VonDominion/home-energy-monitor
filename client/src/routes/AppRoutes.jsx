import { Routes, Route } from "react-router-dom"
import PublicLayout from "../Layouts/PublicLayout/PublicLayout"
import DashboardLayout from "../Layouts/DasboardLayout/DasboardLayout"

function AppRoutes() {
  return (
    <>
      <Routes>

        {/* Public Routes*/}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<h1>Home</h1>} /> {/* Need to be replaced by <Home /> */}
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/register" element={<h1>Register</h1>} />
        </Route>

        {/* Protected Routes */}

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<h1>Dashboard</h1>} />

          <Route
            path="appliances"
            element={<h1>Appliances</h1>}
          />

          <Route
            path="profile"
            element={<h1>Profile</h1>}
          />

        </Route>
      </Routes>
    </>

  )
}

export default AppRoutes
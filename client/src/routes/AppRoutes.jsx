import { Routes, Route } from "react-router-dom"

function AppRoutes() {
  return (
    <>
        {/* Public Routes*/}
      <Routes>
        <Route path="/" element={<h1>Home</h1>} /> {/* Need to be replaced by <Home /> */}
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/register" element={<h1>Register</h1>} />
      </Routes>

        {/* Protected Routes */}

      <Routes path="/dashboard">
        <Route index element={<h1>Dashboard</h1>} />

        <Route
          path="appliances"
          element={<h1>Appliances</h1>}
        />

        <Route
          path="profile"
          element={<h1>Profile</h1>}
        />

      </Routes>
    </>



  )
}

export default AppRoutes
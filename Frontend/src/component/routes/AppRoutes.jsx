import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Register from "../Pages/register";
import Login from "../Pages/login";
import Landing from "../Pages/landing";
import AuthChecker from "../AuthChecker";
import Home from "../Pages/home";
import PrivateRoute from "../PrivateRoute";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/Mainlayout";

const AppRoutes = ({setLoading, setAuthenticated , authenticated, loading}) => {
  return (
    <BrowserRouter>
      <AuthChecker
        setAuthenticated={setAuthenticated}
        setLoading={setLoading}
      />

      <Routes>
        {/* ⬇️ Auth Layout for Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login setAuthenticated={setAuthenticated} />}
          />
        </Route>

        {/* ⬇️ Main Layout for Private Routes */}
        <Route element={<MainLayout setAuthenticated={setAuthenticated}/>}>
          <Route
            path="/home"
            element={
              <PrivateRoute authenticated={authenticated} loading={loading}>
                <Home setAuthenticated={setAuthenticated} />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Register from "../Pages/register";
import Login from "../Pages/login";
import Landing from "../Pages/landing";
import AuthChecker from "../AuthChecker";
import Home from "../Pages/home";
import PrivateRoute from "../PrivateRoute";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/Mainlayout";
import PageNotFound from "../Pages/404page";
import Contactus from "../Pages/Contactus";
import Aboutus from "../Pages/About";

const AppRoutes = ({
  setLoading,
  setAuthenticated,
  authenticated,
  loading,
}) => {
  return (
    <BrowserRouter>
      <AuthChecker
        setAuthenticated={setAuthenticated}
        setLoading={setLoading}
      />

      <Routes>
        {/* ⬇️ Auth Layout for Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Landing setAuthenticated={setAuthenticated} setLoading={setLoading} loading={loading} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login setAuthenticated={setAuthenticated} />}
          />
        </Route>

        {/* ⬇️ Main Layout for Private Routes */}
        <Route
          element={
            <PrivateRoute authenticated={authenticated} loading={loading}>
              <MainLayout setAuthenticated={setAuthenticated} />
            </PrivateRoute>
          }
        >
          <Route
            path="/home"
            element={<Home setAuthenticated={setAuthenticated} />}
          />
          <Route path="/contact" element={<Contactus/>}/>
          <Route path="/about" element={<Aboutus/>}/>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

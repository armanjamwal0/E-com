import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Register from "./register";
import Landing from "../../landing";
import Login from "./login";
import Navbar from "./Nav/navbar";
import AuthChecker from "./AuthChecker";
import Home from "./home";
import api from "../api";
import PrivateRoute from "./PrivateRoute";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/Mainlayout";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

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
        <Route element={<MainLayout />}>
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
}

export default App;

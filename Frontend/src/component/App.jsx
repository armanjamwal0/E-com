import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Register from "./register";
import Landing from "../../landing";
import Login from "./login";
import {setAuthToken} from "../api";

function App() {
  const existing = localStorage.getItem("token");
  const [token, setToken] = useState(existing);

  const handleLogin = (t) => {
    localStorage.setItem("token", t);
    setAuthToken(t);
    setToken(t);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuthToken(null);
    setToken(null);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login"    element={<Login onLogin={handleLogin} />} />
        <Route
          path="/"
          element={
            token ? (
              <Landing onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default  App;
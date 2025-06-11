import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Register from "./register";
import Landing from "../../landing";
import Login from "./login";
import {setAuthToken} from "../api";
import Navbar from "./Nav/navbar";
import MyFooter from "./Footer/footer"
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
    <BrowserRouter> {/* Wraps your entire app. It enables routing using the browser’s URL (like /home, /about, etc.).*/}
     <div className="min-h-screen flex flex-col ">
      <Navbar/>
       <main className="flex-grow ">
      <Routes>     {/*  Holds all your <Route> definitions. Think of it like a container for multiple routes. like that -> 
      home , info , contect etc */}
        <Route path="/register" element={<Register />} />
        <Route path="/login"    element={<Login onLogin={handleLogin} />} />
        <Route
          path="/"
          element={ 
            token ? (
              <Landing onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace /> /*Used to redirect users programmatically (like after login or logout). */
            )
          }
        />
      </Routes>
      </main>
    <MyFooter/>
    </div>
    </BrowserRouter>
  );
}
export default  App;
import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import Register from "./register";
import Landing from "../../landing";
import Login from "./login";
import Navbar from "./Nav/navbar";
import MyFooter from "./Footer/footer";
import AuthChecker from "./AuthChecker";
import Home from "./home";
import api from "../api";
import PrivateRoute from "./PrivateRoute";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  async function handleLogout() {
        try {
          const res = await api.post("/logout");
          window.location.reload();
          setAuthenticated(false)
        } catch (err) {
          console.log("Logout error:", err.response?.data || err.message);
        }
  }
  return (
    <BrowserRouter>
      <AuthChecker setAuthenticated={setAuthenticated} setLoading={setLoading}/>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-32 sm:pt-28 md:pt-20 lg:pt-16">
          <Routes>
            <Route path="/" element={<Landing  />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/login"
              element={<Login setAuthenticated={setAuthenticated} />}
            />
            <Route path="/home" element={
            <PrivateRoute authenticated={authenticated}>  
              <Home  onLogout={handleLogout} />
            </PrivateRoute>
          }/>
          </Routes>
        </main>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;

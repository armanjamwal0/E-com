import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  return (
    <AppRoutes
      setLoading={setLoading}
      setAuthenticated={setAuthenticated}
      authenticated={authenticated}
      loading={loading}
    />
  );
}
export default App;

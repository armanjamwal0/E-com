import api from "./src/api";
import { useEffect, useState } from "react";

export default function Landing({ onLogout }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.get("/me")
       .then((res) => setUser(res.data))
       .catch(() => onLogout());          // token expired
  }, [onLogout]);

  if (!user) return <p>Loading…</p>;

  return (
    <div className="card">
      <h2>Welcome, {user.email}</h2>
      <button onClick={onLogout}>Log out</button>
    </div>
  );
}

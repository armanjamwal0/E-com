import React, { useEffect, useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import LogoutButton from "./logout";


function Home({ setAuthenticated }) {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/home");
        setAuth(res.data.authenticated);
        console.log(res.data);
      } catch (err) {
        console.log("error : ", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    
    <>

      <div className="p-10 text-center">
        <LogoutButton setAuthenticated={setAuthenticated} />
        <h1 className="text-3xl font-bold text-blue-600">
          Welcome to Home Page!
        </h1>
        <p className="mt-4 text-lg">You're successfully logged in. 🎉</p>
      </div>

    </>
  );
}

export default Home;

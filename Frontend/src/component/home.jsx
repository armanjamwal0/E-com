import React, { useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

function Home({onLogout}) {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    (async()=>{
      try{
        const res = await api.get('/home');
        setLoading(false);
        setAuth(res.data.authenticated)
        console.log(res.data.msg);
      }
      catch(err){
        console.log('error : ',err);
      }
    })();
  },[])

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <>
    {auth ? (
      <div className="p-10 text-center">
      <button className ='font-medium text-primary-600 hover:underline dark:text-primary-500' onClick={onLogout}>logout</button>
      <h1 className="text-3xl font-bold text-blue-600">Welcome to Home Page!</h1>
      <p className="mt-4 text-lg">You're successfully logged in. 🎉</p>
    </div>
    ) : (
      <div className="p-10 text-center">
      <h1 className="text-3xl font-bold text-blue-600">Welcome to Home Page!</h1>
      <p className="mt-4 text-lg">You're are not login 🎉</p>
    </div>
    )}
    </>
  );
}

export default Home;

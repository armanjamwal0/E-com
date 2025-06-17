import api from "./src/api";
import { useEffect, useState } from "react";
import LogoutButton from "./src/component/logout";
import { useNavigate , Link } from "react-router-dom";

function Landing() {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    (async()=>{
      try{
        const res = await api.get('/');
        console.log("User:", res.data);
        setAuth(res.data.authenticated)
        setUser(res.data)
      }
      catch(err){
        console.log('error : ', err)
      }
    })();
  },[])

  return (
        <div className="p-10 text-center">
          <h1 className="text-3xl font-bold text-green-600">Welcome!{user?.email}</h1>
          <p>Email: {user?.email}</p>
          <Link
            to="/login"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            login
          </Link>
        </div>
  );
}

export default Landing;
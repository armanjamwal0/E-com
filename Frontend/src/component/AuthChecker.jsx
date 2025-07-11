import api from "../api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthChecker({ setAuthenticated, setLoading }) {
  const Nav = useNavigate();


  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/");
        if (res.data.authenticated) {
          setAuthenticated(true);
          // Nav("/home");
        }
      } catch (err) {
        console.log("error : ", err);
        setAuthenticated(false)
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return null; // why i return null because of i don't want to render anything only work for logic
}
export default AuthChecker;

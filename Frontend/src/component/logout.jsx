import api from "../api"; // Axios instance with withCredentials: true
import { useNavigate } from "react-router-dom";

function LogoutButton({ setAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post("/logout"); // this route fetch data from backend and send back to
      // backend and then backend send to server and server delete data from server ! from browser
      console.log("User logged out");
      navigate("/");
      setAuthenticated(false);
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <button
      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
      onClick={handleLogout}
    >
      logout
    </button>
  );
}
export default LogoutButton;

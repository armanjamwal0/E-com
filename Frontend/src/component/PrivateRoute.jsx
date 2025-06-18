import { Navigate } from "react-router-dom";

function PrivateRoute({ children, authenticated, loading }) {
  if (loading) {
    return <p>Loading....</p>;
  } // here you needed loading beacuse of useeffect need to
  // check first user login alredy or not when backend are checking then show loading
  return authenticated ? children : <Navigate to={"/login"} />;
}

export default PrivateRoute;

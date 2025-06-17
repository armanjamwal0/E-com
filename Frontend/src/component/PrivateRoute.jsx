import {Navigate} from "react-router-dom";

function PrivateRoute({children, authenticated}){
    return authenticated ? children : <Navigate to={'/login'} />
}

export default PrivateRoute;
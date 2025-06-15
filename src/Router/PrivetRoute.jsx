import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
    const { users, loading } = useContext(AuthContext);
    const location = useLocation();
    if (!loading) {
        return <div className="flex justify-center items-center min-h-full">
            <span className="loading loading-spinner text-success"></span>
        </div>
    }
    if (users) {
        return children;
    }
    return <Navigate to="/sign-in" state={location.pathname} />;
};

export default PrivetRoute;
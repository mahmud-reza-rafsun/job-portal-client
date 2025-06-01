import { useContext } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (!user) {
        return <Navigate state={{ from: location?.pathname }} to="/login" />
    }
    if (loading) {
        return <p>Loading ....</p>
    }
    return children;
};

export default PrivetRoute;
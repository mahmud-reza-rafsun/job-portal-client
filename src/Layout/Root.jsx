import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";

const Root = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Root;
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="max-w-6xl mx-auto px-5 lg:px-0 py-4 lg:py-6">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;
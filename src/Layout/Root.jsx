import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="max-w-6xl mx-auto min-h-[calc(100vh-290px)] py-5 lg:py-9 px-5 lg:px-0">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;
import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigation = useNavigate();
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        {
            user && <>
                <li><NavLink to="/about">About</NavLink></li>
            </>
        }
    </>
    const handleLogOut = () => {
        logOut()
            .then(result => {
                toast.success('Log Out successfull');
                navigation('/')
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    return (
        <div className="sticky top-0 z-50 backdrop-blur-xl">
            <div className="navbar max-w-6xl mx-auto px-5 lg:px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="flex gap-3 justify-center items-center cursor-pointer">
                        <img width="50" height="50" src="https://img.icons8.com/arcade/64/find-matching-job.png" alt="find-matching-job" />
                        <h2 className="text-xl font-semibold">Job Portal</h2>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    {
                        user ?
                            <>
                                <button onClick={handleLogOut} className="btn text-white btn-error">Log Out</button>
                            </>

                            :
                            <>
                                <Link className="underline text-sm" to="register">Register</Link>
                                <Link to="login" className="btn bg-indigo-500 text-white hover:bg-indigo-600">Login</Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
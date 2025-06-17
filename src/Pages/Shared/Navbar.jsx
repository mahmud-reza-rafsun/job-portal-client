/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import toast from "react-hot-toast";
import { motion } from "motion/react"

const Navbar = () => {
    const { users, signOutUser } = useContext(AuthContext);
    const handleSignOut = () => {
        signOutUser()
            .then(result => {
                toast.success('Sign Out Successfull');
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        {
            users &&
            <>
                <li><NavLink to="/my-applications">My Applications</NavLink></li>
                <li><NavLink to="/add-job">Add A Job</NavLink></li>
                <li><NavLink to="/my-posted-job">My Posted Job</NavLink></li>
            </>
        }
    </>
    return (
        <div className="shadow-sm sticky top-0 z-50 backdrop-blur-md px-3 lg:px-0">
            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar-start w-1/3 lg:w-1/2">
                    <Link className="font-bold cursor-pointer text-xl lg:text-2xl">Job Portal</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end w-[70%] lg:w-[50%] gap-4">
                    <div className="flex items-center gap-4">
                        {
                            users ?
                                <>
                                    <button onClick={handleSignOut} className="btn btn-error text-white">Log Out</button>
                                </>
                                :
                                <>
                                    <Link className="text-sm lg:text-base" to="/register">Register</Link>
                                    <Link to="/sign-in"><motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}


                                        className="btn bg-indigo-500 border-none text-white"> Sing In</motion.button></Link>
                                </>
                        }
                    </div>
                    <div>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn border border-indigo-500 text-indigo-500 lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm absolute right-0 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {links}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
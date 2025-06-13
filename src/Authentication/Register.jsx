/* eslint-disable no-unused-vars */
import Lottie from "lottie-react";
import RegisterAnimation from "../assets/animations/register.json"
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "motion/react"

const Register = () => {
    const { createUserWithEmail, createUserWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(null);
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        createUserWithEmail(email, password)
            .then(result => {
                toast.success('Register Successfull');
                console.log(result);
            })
            .catch(error => {
                toast.error(error.message);
                console.log(error.message);
            })
    }
    const handleGoogleRegister = () => {
        createUserWithGoogle()
            .then(result => {
                toast.success('Register Successfull');
                console.log(result);
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    return (
        <div className="hero bg-base-200 min-h-[80vh]">
            <div className="hero-content flex-col gap-12 lg:gap-52 lg:flex-row-reverse">
                <div className="text-center lg:text-left w-[310px] lg:w-[450px]">
                    <Lottie animationData={RegisterAnimation} />
                </div>
                <div className="card absolute right-0 left-5 lg:relative backdrop-blur-md w-[90%] max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-2xl lg:text-3xl text-center font-semibold">Register</h1>
                        <form onSubmit={handleRegister} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name="email" className="input bg-transparent w-full" placeholder="Email" />
                            <label className="label">Password</label>
                            <div className="relative">
                                <input type={showPassword ? "text" : "password"} name="password" className="input w-full bg-transparent" placeholder="Password" />
                                <div onClick={() => setShowPassword(!showPassword)} className="btn btn-primary btn-xs absolute top-2 right-3 z-50">
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </div>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onHoverStart={() => console.log('hover started!')}
                                className="btn bg-indigo-500 border-none text-white mt-2">Register</motion.button>
                        </form>
                        <button onClick={handleGoogleRegister} className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Register with Google
                        </button>
                        <p>Already have an account? <Link className="underline" to="/sign-in">Sign In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
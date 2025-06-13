import Lottie from "lottie-react";
import SignInAnimation from '../assets/animations/signIn.json'
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignIn = () => {
    const { signInWithEmail } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(null);
    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // singInWithEmail
        signInWithEmail(email, password)
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
                <div className="text-center lg:text-left w-96 lg:w-[500px]">
                    <Lottie animationData={SignInAnimation} />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-2xl lg:text-3xl text-center font-semibold">Sign in</h1>
                        <form onSubmit={handleSignIn} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name="email" className="input w-full" placeholder="Email" />
                            <label className="label">Password</label>
                            <div className="relative">
                                <input type={showPassword ? "text" : "password"} name="password" className="input w-full" placeholder="Password" />
                                <div onClick={() => setShowPassword(!showPassword)} className="btn btn-primary btn-xs absolute top-2 right-3 z-50">
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </div>
                            </div>
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn bg-[#7178CF] text-white mt-2">Sign in</button>
                        </form>
                        <button className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Sign in with Google
                        </button>
                        <p>New to this website? <Link className="underline" to="/register">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
import Lottie from "lottie-react";
import registerAnimation from '../assets/lottie/register.json'
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        // create user
        createUser(email, password)
            .then(result => {
                toast.success('Register successfull');
            })
            .catch(error => {
                toast.error(error.message);
            })

    }
    return (
        <div className="hero bg-base-200 min-h-[80vh] rounded-md">
            <div className="hero-content flex-col gap-10 lg:gap-32 lg:flex-row-reverse">
                <div className="text-center lg:text-left w-72 lg:w-full">
                    <Lottie animationData={registerAnimation}></Lottie>
                </div>
                <div className="card bg-base-100 max-w-xl w-full lg:max-w-sm shrink-0 shadow-xl">
                    <h1 className="text-2xl font-bold text-center pt-5">Register now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                            <div onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute top-12 right-4">
                                {
                                    showPassword ? <FaEye /> : <FaEyeSlash />
                                }
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
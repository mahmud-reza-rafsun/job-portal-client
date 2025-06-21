import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import toast from "react-hot-toast";
import ForgotAnimation from '../assets/animations/forgot.json'
import Lottie from "lottie-react";

const ForgotPassword = () => {
    const {resetUserPassword} = useContext(AuthContext);
    const handleForgotPassword= (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        if(email === ""){
            return toast.error('Please provide an email')
        }
        resetUserPassword(email)
         .then(() => {
                toast.success('Send Password verification on Email')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    return (
        <div>
           <div className="hero bg-base-200 min-h-[80vh]">
                       <div className="hero-content flex-col gap-12 lg:gap-52 lg:flex-row-reverse">
                           <div className="text-center lg:text-left w-[220px] lg:w-[325px]">
                               <Lottie animationData={ForgotAnimation} />
                           </div>
                           <div className="card absolute right-0 left-5 lg:left-0 lg:relative backdrop-blur-md w-[90%] max-w-sm shrink-0 shadow-2xl">
                               <div className="card-body">
                                   <h1 className="text-2xl lg:text-3xl text-center font-semibold">Forgot Your Password</h1>
                                   <form onSubmit={handleForgotPassword} className="fieldset">
                                       <label className="label">Email</label>
                                       <input type="email" name="email" className="bg-transparent input w-full" placeholder="Email" />
                                       <button className="btn bg-indigo-500 border-none text-white mt-2">Reset</button>
                                   </form>
                               </div>
                           </div>
                       </div>
                   </div>
        </div>
    );
};

export default ForgotPassword;
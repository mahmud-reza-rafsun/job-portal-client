import Lottie from "lottie-react";
import registerAnimation from '../assets/lottie/register.json'

const Register = () => {
    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const user = { email, password }

    }
    return (
        <div className="hero bg-base-200 min-h-[80vh] rounded-md">
            <div className="hero-content flex-col gap-10 lg:gap-32 lg:flex-row-reverse">
                <div className="text-center lg:text-left w-72 lg:w-full">
                    <Lottie animationData={registerAnimation}></Lottie>
                </div>
                <div className="card bg-base-100 max-w-xl w-full lg:max-w-sm shrink-0 shadow-xl">
                    <h1 className="text-2xl font-bold text-center pt-5">Register now!</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
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
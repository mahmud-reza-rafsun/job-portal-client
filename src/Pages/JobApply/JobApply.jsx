import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();
    console.log(user);
    const handleApply = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        const data = { email, linkedIn, github, resume };
        const jobApplication = {
            job_id: id,
            applicant_email: user.email,

        }
    }
    return (
        <div className="hero bg-base-200 min-h-[75vh]">
            <div className="hero-content flex-col">
                <div className="card bg-base-100 w-full shadow-2xl">
                    <form onSubmit={handleApply} className="card-body">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">LinkedIn URL</span>
                                </label>
                                <input type="url" name="linkedIn" placeholder="LinkedIn URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Github URL</span>
                                </label>
                                <input type="url" name="github" placeholder="Github URL" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Resume URL</span>
                            </label>
                            <input type="url" name="resume" placeholder="Resume URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">Apply</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JobApply;
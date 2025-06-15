import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id } = useParams();
    const { users } = useAuth();
    const navigate = useNavigate();
    const handleJobApply = (e) => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;

        const jobApplication = {
            job_id: id,
            applicant_email: users?.email,
            linkedIn,
            github,
            resume
        }

        fetch('http://localhost:5000/job-applications', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }, body: JSON.stringify(jobApplication),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Drag me!",
                        icon: "success",
                        draggable: true
                    });
                    navigate('/my-applications');
                }
                console.log(data);
            })
    }
    return (
        <div className="hero bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleJobApply}>
                            <label className="label pt-2">LinkedIn URL</label>
                            <input type="url" className="input w-full" placeholder="LinkedIn URL" name="linkedIn" />
                            <label className="label pt-2">Github URL</label>
                            <input type="url" className="input w-full" placeholder="Github URL" name="github" />
                            <label className="label pt-2">Resume URL</label>
                            <input type="url" className="input w-full" placeholder="Resume URL" name="resume" />
                            <button className="btn w-full bg-indigo-500 text-white mt-4">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobApply;
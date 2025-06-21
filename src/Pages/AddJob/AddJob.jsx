import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const AddJob = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        const { min, max, currency, ...newJob } = initialData;
        newJob.salaryRange = { min, max, currency }
        newJob.requirements = newJob.requirements.split('\n');
        newJob.responsibilities = newJob.responsibilities.split('\n');
        console.log(newJob);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Add it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch('https://job-portal-server-de.vercel.app/jobs', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    }, body: JSON.stringify(newJob)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data) {
                            Swal.fire({
                                title: "Added!",
                                text: "Your file has been add.",
                                icon: "success"
                            });
                        }
                        navigate('/my-posted-job')
                    })

            }
        });
    }
    return (
        <div className="hero min-h-screen">
            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl shadow-indigo-200">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                        {/* company name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Company Name</span>
                            </label>
                            <input type="text" name="company" placeholder="Company Name" className="input input-bordered" required />
                        </div>

                        {/* photo url */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" name="company_logo" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        {/* title */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" name="title" placeholder="Title" className="input input-bordered" required />
                        </div>
                        {/* location */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Location</span>
                            </label>
                            <input type="text" name="location" placeholder="Job Location" className="input input-bordered" required />
                        </div>
                        {/* job type */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Type</span>
                            </label>
                            <select name="jobType" className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Pick the Job Type</option>
                                <option>Full-time</option>
                                <option>Part-time</option>
                                <option>Intern</option>
                            </select>
                        </div>
                        {/* job field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Field</span>
                            </label>
                            <select name="field" className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Pick the Job Field</option>
                                <option>Enginnering</option>
                                <option>Marketing</option>
                                <option>Finance</option>
                                <option>Teaching</option>
                            </select>
                        </div>
                    </div>
                    {/* salary range */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {/* salary  min */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Min</span>
                            </label>
                            <input type="text" name="min" placeholder="Min" className="input input-bordered" required />
                        </div>
                        {/* salary max */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Max</span>
                            </label>
                            <input type="text" name="max" placeholder="Max" className="input input-bordered" required />
                        </div>
                        {/* currency */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Currency</span>
                            </label>
                            <select name="currency" className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Pick the Currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>EU</option>
                                <option>GBP</option>
                            </select>
                        </div>
                    </div>
                    {/* dateline and status */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {/* dateline */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Dateline</span>
                            </label>
                            <input type="date" name="applicationDeadline" className="input" />
                        </div>
                        {/* status */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Status</span>
                            </label>
                            <input type="text" name="status" placeholder="Status" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* job decleartion */}
                    {/* Job requirements */}
                    <label className="form-control">
                        <div className="text-gray-500">
                            <span className="label-text">Requirements</span>
                        </div>
                        <textarea className="textarea min-h-0 textarea-bordered w-full" name="requirements" placeholder="Requirements"></textarea>
                    </label>
                    {/* Job responsibilities */}
                    <label className="form-control">
                        <div className="text-gray-500">
                            <span className="label-text">Responsibilities</span>
                        </div>
                        <textarea className="textarea min-h-0 textarea-bordered w-full" name="responsibilities" placeholder="Responsibilities"></textarea>
                    </label>
                    {/* Job description */}
                    <label className="form-control">
                        <div className="text-gray-500">
                            <span className="label-text">Description</span>
                        </div>
                        <textarea className="textarea min-h-0 textarea-bordered w-full" name="description" placeholder="Description"></textarea>
                    </label>
                    {/* hr info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
                        {/* hr name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">HR Name</span>
                            </label>
                            <input type="text" name="hr_name" placeholder="HR Name" className="input input-bordered" required />
                        </div>
                        {/* hr email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">HR Email</span>
                            </label>
                            <input type="email" name="hr_email" placeholder="HR Email" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* submit btn */}
                    <div className="form-control mt-2">
                        <button className="btn bg-indigo-500 text-white w-full">Submit</button>
                    </div>
                </form>

            </div >
        </div >
    );
};

export default AddJob;
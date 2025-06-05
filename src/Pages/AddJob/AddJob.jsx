
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AddJob = () => {
    const { user } = useAuth();
    const handleAddJob = (e) => {
        e.preventDefault();
        const jobForm = new FormData(e.target);
        const initialData = Object.fromEntries(jobForm.entries());
        const { max, min, currency, ...newJob } = initialData;
        newJob.salaryRange = { max, min, currency };
        newJob.requirements = newJob.requirements.split('\n');
        newJob.responsibilites = newJob.responsibilites.split('\n');
        // console.log(newJob);

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, Add Job!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                fetch('http://localhost:5000/jobs', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newJob),
                })
                    .then(res => res.json())
                    .then(data => {
                        swalWithBootstrapButtons.fire({
                            title: "Added!",
                            text: "Your file has been added.",
                            icon: "success"
                        });
                        console.log(data);
                    })
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });


    }
    return (
        <div className="hero bg-base-200 min-h-[80vh] rounded-md">
            <div className="hero-content flex-col">
                <div className="rounded-md bg-base-100">
                    <h1 className="text-2xl font-bold text-center pt-5">Add Job</h1>
                    <form onSubmit={handleAddJob} className="p-8 ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* title */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" name="title" placeholder="title" className="input input-bordered" required />
                            </div>
                            {/* conpany name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Conpany Name</span>
                                </label>
                                <input type="text" name="conpanyName" placeholder="conpany name" className="input input-bordered" required />
                            </div>
                            {/* conpany logo */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Conpany Logo</span>
                                </label>
                                <input type="url" name="conpanyLogo" placeholder="conpany logo" className="input input-bordered" required />
                            </div>
                            {/* location */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type="text" name="location" placeholder="location" className="input input-bordered" required />
                            </div>
                            {/* job category */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Category</span>
                                </label>
                                <select name="jobCategory" className="select select-bordered w-full max-w-xs">
                                    <option disabled>What type of Jobs</option>
                                    <option>Software Engineer</option>
                                    <option>Marketing Specialist</option>
                                    <option>Data Scientist</option>
                                    <option>DevOps Engineer</option>
                                </select>
                            </div>
                            {/* job type */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Job Type</span>
                                </label>
                                <select name="jobType" className="select select-bordered w-full max-w-xs">
                                    <option disabled>What type of Jobs</option>
                                    <option>Full-time</option>
                                    <option>Intern</option>
                                    <option>Part-time</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {/* max */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Max</span>
                                </label>
                                <input type="text" name="max" placeholder="max" className="input input-bordered" required />
                            </div>
                            {/* min */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Min</span>
                                </label>
                                <input type="text" name="min" placeholder="min" className="input input-bordered" required />
                            </div>
                            {/* currency */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Currency</span>
                                </label>
                                <select name="currency" className="select select-bordered w-full max-w-xs">
                                    <option disabled >Select Currency</option>
                                    <option>BDT</option>
                                    <option>USD</option>
                                    <option>EURO</option>
                                </select>
                            </div>
                        </div>
                        {/* job requirements */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Requirements</span>
                            </label>
                            <textarea name="requirements" className="textarea textarea-bordered" placeholder="write each responsibilites new in a line"></textarea>
                        </div>
                        {/* job responsibilites */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Responsibilites</span>
                            </label>
                            <textarea name="responsibilites" className="textarea textarea-bordered" placeholder="write each responsibilites new in a line"></textarea>
                        </div>
                        {/* job description */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Description</span>
                            </label>
                            <textarea name="description" className="textarea textarea-bordered" placeholder="job escription"></textarea>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* hr name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">HR Name</span>
                                </label>
                                <input type="text" name="hr_name" placeholder="hr name" className="input input-bordered" required />
                            </div>
                            {/* hr email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">HR Email</span>
                                </label>
                                <input defaultValue={user?.email} type="email" name="hr_email" placeholder="hr email" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success text-white">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddJob;
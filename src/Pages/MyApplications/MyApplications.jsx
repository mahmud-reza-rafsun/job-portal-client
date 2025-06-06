import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { GoTrash } from "react-icons/go";
import Swal from "sweetalert2";

const MyApplications = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);
    console.log(jobs);
    useEffect(() => {
        fetch(`http://localhost:5000/job-application?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data);
            })
    }, [user?.email])
    const handleDeleteApplication = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/job-application/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        console.log(data);
                    })
                const remainingApplication = jobs.filter((job) => job?._id !== _id);
                setJobs(remainingApplication);
            }
        });
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobs?.map((job) => <tr key={job?._id}>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={job?.company_logo}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{job?.category}</div>
                                        <div className="text-sm opacity-50">{job?.location}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {job?.title}
                                <br />
                                <span className="badge badge-ghost badge-sm bg-yellow-100">Pending</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button onClick={() => handleDeleteApplication(job?._id)} className="btn btn-error text-white btn-xs"><GoTrash /></button>
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyApplications;
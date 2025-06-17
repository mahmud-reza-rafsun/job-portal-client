import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { GoTrash } from "react-icons/go";
import Swal from "sweetalert2";

const MyApplications = () => {
    const { users } = useAuth();
    const [jobs, setJob] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/job-application?email=${users.email}`)
            .then(res => res.json())
            .then(data => setJob(data));
    }, [users.email])
    const handleDelete = (_id) => {
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
                fetch(`http://localhost:5000/job-applications/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        const remainingApplication = jobs.filter((job) => job?._id !== _id);
                        setJob(remainingApplication);
                    })
            }
        });
    }
    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {/* row 1 */}
                    {
                        <tbody>
                            {
                                jobs && jobs.length > 0 ? (
                                    jobs.map((job) => (
                                        <tr key={job?._id}>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img src={job?.company_logo} alt={job?.title} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{job?.title}</div>
                                                        <div className="text-sm opacity-50">{job?.title}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {job?.location}
                                                <br />
                                                <span className="badge badge-ghost badge-sm">{job?.jobType}</span>
                                            </td>
                                            <th>
                                                <button
                                                    onClick={() => handleDelete(job?._id)}
                                                    className="btn bg-error border-0 text-white rounded-md btn-xs"
                                                >
                                                    <GoTrash />
                                                </button>
                                            </th>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3" className="text-left bg-indigo-100 rounded-lg text-[16px] py-4">
                                            No Applications Found.
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    }
                </table>
            </div>
        </div>
    );
};

export default MyApplications;
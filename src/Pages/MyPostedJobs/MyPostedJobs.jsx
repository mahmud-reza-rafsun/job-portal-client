import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { GoTrash } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import Swal from "sweetalert2";
import ViewApplication from "../ViewApplication/ViewApplication";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const { users } = useAuth();
    useEffect(() => {
        fetch(`https://job-portal-server-de.vercel.app/jobs?email=${users?.email}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
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
                fetch(`https://job-portal-server-de.vercel.app/jobs/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        const remainingPost = jobs.filter((job) => job?._id !== _id);
                        setJobs(remainingPost);
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
                            <th>Application Deadline</th>
                            <th>Application Count</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            jobs && jobs.length > 0 ? jobs.map((job) => <tr key={job?._id}>
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
                                            <div className="font-bold">{job?.company}</div>
                                            <div className="text-sm opacity-50">{job?.location}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="font-semibold text-md">{job?.field}</span>
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{job?.jobType}</span>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-base">{job?.applicationDeadline}</span>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm font-semibold">{job?.applicationCount}</span>
                                </td>
                                <th className="flex gap-2">
                                    <Link to={`/view-applications/${job?._id}`}>
                                        <button className="btn btn-error text-white rounded-lg btn-xs">
                                            <IoSearch />
                                        </button>
                                    </Link>
                                    <button onClick={() => handleDelete(job?._id)} className="btn btn-error text-white rounded-lg btn-xs">
                                        <GoTrash />
                                    </button>
                                </th>
                            </tr>) : (
                                <tr>
                                    <td colSpan="5" className="text-left bg-indigo-100 rounded-lg text-[16px] py-4">
                                        No Posted Job Found.
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyPostedJobs;
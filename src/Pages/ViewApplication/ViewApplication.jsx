import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplication = () => {
    const jobs = useLoaderData();
    const handleStatusUpdate = (e, id) => {
        console.log(e.target.value, id);
        const data = {
            status: e.target.value,
        }
        fetch(`http://localhost:5000/job-applications/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Status update conplete",
                        icon: "success",
                        draggable: true
                    });
                }
            })
    }
    return (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Social Links</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobs && jobs.length > 0 ? jobs.map((job, idx) => <tr key={job?._id}>
                            <th>{idx + 1}</th>
                            <td>{job?.applicant_email}</td>
                            <td>
                                <Link to={'https://github.com/'} className="badge badge-ghost badge-sm">{job?.github}</Link>
                                <br />
                                <Link to={'https://www.linkedin.com/in/rafsun-dev/'} className="badge badge-ghost badge-sm">{job?.linkedIn}</Link>
                                <br />
                                <Link to={''} className="badge badge-ghost badge-sm">{job?.resume}</Link>
                            </td>
                            <td>
                                <select onChange={(e) => handleStatusUpdate(e, job?._id)} defaultValue={job?.status || "Chnage Status"} className="select select-xs">
                                    <option disabled={true}>Chnage Status</option>
                                    <option>User Review</option>
                                    <option>Set Interview</option>
                                    <option>Hired</option>
                                    <option>Rejected</option>
                                </select>
                            </td>
                        </tr>) : (
                            <tr>
                                <td colSpan="3" className="text-left bg-indigo-100 rounded-lg text-[16px] py-4">
                                    No Posted Job Found.
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ViewApplication;
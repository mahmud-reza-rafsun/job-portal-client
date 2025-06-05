import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyPostedJobs = () => {
    const [jobs, setJobs] = useState();
    const { user } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data)
                console.log(data[0]);
            })
    }, [])
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Tite</th>
                            <th>Category</th>
                            <th>Company</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs?.map((job) => <tr key={job?._id} className="bg-base-200">
                                <th>1</th>
                                <td>{job?.title}</td>
                                <td>{job?.category}</td>
                                <td>{job?.company}</td>
                                <td><button className="btn btn-sm btn-error text-white">X</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJobs;
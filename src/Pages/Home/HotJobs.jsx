import { useEffect, useState } from "react";
import JobsCard from "./JobsCard";

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data);
            })
    }, [])
    return (
        <div>
            <div className="text-center py-4 lg:py-8 mt-5 lg:mt-10">
                <h2 className='text-2xl lg:text-3xl font-semibold pb-3'>Jobs of the day</h2>
                <p>Search and connect with the right candidates faster.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    jobs.map((job) => <JobsCard key={job?._id} job={job} />)
                }
            </div>
        </div>
    );
};

export default HotJobs;
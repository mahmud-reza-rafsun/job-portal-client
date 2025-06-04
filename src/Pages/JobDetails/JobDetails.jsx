import { Link, useLoaderData } from "react-router-dom";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { PiBag } from "react-icons/pi";

const JobDetails = () => {
    const { _id, title, location, jobType, category, applicationDeadline, salaryRange, description, company, requirements, status, hr_email, hr_name, company_logo } = useLoaderData();
    return (
        <div>
            <div className="bg-base-100 shadow-md border rounded-lg p-4 max-w-4xl min-h-60 mx-auto">
                <div className="flex flex-col lg:flex-row items-start justify-between">
                    <div className="flex gap-4">
                        <img
                            src={company_logo}
                            alt="Labyrinth Logo"
                            className="w-12 h-12 rounded-md"
                        />
                        <div>
                            <h2 className="font-semibold text-gray-800">{company}</h2>
                            <div className="flex items-center text-sm text-gray-500 gap-1">
                                <FaMapMarkerAlt className="text-xs" />
                                <span>{location}</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 lg:mt-0">
                        {
                            requirements.map((type, idx) => <div key={idx} className="btn btn-sm font-normal hover:text-indigo-500 mr-3 mb-3">{type}</div>)
                        }
                    </div>
                </div>
                <div className="mt-4">
                    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                    <div className="flex items-center gap-4 text-gray-500 text-sm mt-1">
                        <div className="flex items-center gap-1">
                            <FaClock className="text-xs" />
                            <span>{category}</span>
                            <span><PiBag /></span>
                            <span>{jobType}</span>
                        </div>
                        <span className="text-xs">·</span>
                    </div>
                </div>
                <p className="mt-3 text-gray-600 text-sm">
                    {description}
                </p>
                <div className="mt-4 flex-col lg:flex-row flex items-center justify-between">
                    <div>
                        {
                            Object.entries(salaryRange).map(([key, value], idx) => (
                                <div key={idx} className="btn btn-sm mr-3 mb-3 font-normal hover:text-indigo-500">
                                    {key.charAt(0).toUpperCase() + key.slice(1)}: {key === 'currency' ? value.toUpperCase() : value}
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        <Link to={`/job-apply/${_id}`}>
                            <button className="btn bg-indigo-500 hover:bg-indigo-600 btn-sm text-white">Apply Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
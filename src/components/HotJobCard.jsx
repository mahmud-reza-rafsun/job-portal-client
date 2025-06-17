import { IoBagAdd, IoShieldCheckmarkOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

/* eslint-disable no-unused-vars */
const HotJobCard = ({ job }) => {
    // 59-4 Create job detail route and get job detail data
    const { _id, title, location, jobType, category, applicationDeadline, salaryRange, description, company, requirements, responsibilities, status, hr_email, hr_name, company_logo } = job || [];
    return (
        <div>
            <div className="p-5 border border-indigo-300 rounded-md hover:shadow-lg hover:shadow-indigo-200 duration-500">
                <div className="flex items-center gap-3">
                    <img src={company_logo} alt={title} className="w-10 h-10 rounded-full" />
                    <div>
                        <h2 className="font-semibold text-gray-800">{company}</h2>
                        <p className="text-sm text-gray-500">{location}</p>
                    </div>
                </div>

                <h3 className="text-lg font-semibold mt-4 text-gray-800">{title}</h3>
                <div className="py-1">
                    <h3 className="text-sm font-semibold">Dateline:- {applicationDeadline}</h3>
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-2 gap-3">
                    <span className="flex items-center gap-1">
                        <IoBagAdd />
                        {jobType}
                    </span>
                    <span className="flex items-center justify-center gap-1">
                        <IoShieldCheckmarkOutline />
                        {status}
                    </span>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                    {
                        requirements?.map((skills, idx) => <span key={idx} className="px-3 py-1 bg-gray-100 text-sm text-gray-700 hover:text-indigo-500 duration-200 rounded-md">{skills}</span>)
                    }
                </div>

                <div className="flex items-center justify-between mt-6">
                    <span className="text-blue-600 text-sm font-semibold">৳ {salaryRange?.min} - {salaryRange?.max}</span>
                    <Link to={`/jobs/${_id}`}>
                        <button className="btn bg-indigo-100 text-indigo-60 hover:bg-indigo-500 hover:text-white duration-500 px-4 py-2 rounded-md text-sm">See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;
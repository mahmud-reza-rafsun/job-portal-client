import { Link, useLoaderData } from "react-router-dom";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoBagAdd, IoTimeOutline } from "react-icons/io5";


const JobDetails = () => {
    const jobsData = useLoaderData();
    const { _id, title, location, jobType, applicationDeadline, salaryRange, description, company, requirements, responsibilities, status, hr_email, hr_name, company_logo } = jobsData || [];
    return (
        <div>
            <div className="p-5 border border-indigo-300 rounded-md hover:shadow-lg hover:shadow-indigo-200 duration-500">
                <div className="flex items-center gap-3">
                    <div className="border p-2 rounded-3xl border-indigo-500">
                        <img src={company_logo} alt={title} className="w-10 h-10 rounded-full" />
                    </div>
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
                    <span className="flex items-center gap-1">
                        <IoTimeOutline />
                        5 minutes ago
                    </span>
                    <span className="flex items-center gap-1">
                        <IoMdCheckmarkCircleOutline />
                        {status}
                    </span>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                    {description}
                </p>

                <div>
                    <h3 className="text-sm font-bold pt-4">Technology</h3>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {
                            requirements?.map((skills, idx) => <span key={idx} className="px-3 py-1 bg-gray-100 text-sm text-gray-700 hover:text-indigo-500 duration-200 rounded-md">{skills}</span>)
                        }
                    </div>
                </div>
                <div className="lg:flex lg:justify-between lg:items-center">
                    <div>
                        <h3 className="text-sm font-bold pt-4">Responsibilities</h3>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {
                                responsibilities?.map((skills, idx) => <span key={idx} className="px-3 py-1 bg-gray-100 text-sm text-gray-700 hover:text-indigo-500 duration-200 rounded-md">{skills}</span>)
                            }
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold py-3">HR info</h3>
                        <div className="p-3 border w-full md:w-fit lg:w-fit rounded-md border-indigo-200">
                            <h3 className="text-sm font-semibold">{hr_name}</h3>
                            <p className="text-sm text-gray-500">{hr_email}</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-5 lg:mt-3">
                    <span className="text-blue-600 text-sm lg:text-base font-semibold">৳ {salaryRange?.min} - {salaryRange?.max} <span className="text-sm font-medium">/- month</span> </span>
                    <Link to={`/job-apply/${_id}`}>
                        <button className="btn lg:btn-lg btn-sm bg-indigo-100 text-indigo-60 hover:bg-indigo-500 text-indigo-500 hover:text-white duration-500 px-4 py-2 rounded-md lg:text-sm">Apply Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};


export default JobDetails;
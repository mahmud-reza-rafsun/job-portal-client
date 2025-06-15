import { Link } from "react-router-dom";

/* eslint-disable no-unused-vars */
const HotJobCard = ({ job }) => {
    // 59-4 Create job detail route and get job detail data
    const { _id, title, location, jobType, category, applicationDeadline, salaryRange, description, company, requirements, responsibilities, status, hr_email, hr_name, company_logo } = job || [];
    return (
        <div>
            <div class="p-5 border border-indigo-300 rounded-md hover:shadow-lg hover:shadow-indigo-200 duration-500">
                <div class="flex items-center gap-3">
                    <img src={company_logo} alt={title} class="w-10 h-10 rounded-full" />
                    <div>
                        <h2 class="font-semibold text-gray-800">{company}</h2>
                        <p class="text-sm text-gray-500">{location}</p>
                    </div>
                </div>

                <h3 class="text-lg font-semibold mt-4 text-gray-800">{title}</h3>
                <div className="py-1">
                    <h3 className="text-sm font-semibold">Dateline:- {applicationDeadline}</h3>
                </div>
                <div class="flex items-center text-sm text-gray-500 mt-2 gap-3">
                    <span class="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" />
                        </svg>
                        {jobType}
                    </span>
                    <span class="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        5 minutes ago
                    </span>
                </div>
                <p class="text-sm text-gray-600 mt-4">
                    {description}
                </p>

                <div class="flex flex-wrap gap-2 mt-4">
                    {
                        requirements?.map((skills) => <span class="px-3 py-1 bg-gray-100 text-sm text-gray-700 hover:text-indigo-500 duration-200 rounded-md">{skills}</span>)
                    }
                </div>

                <div class="flex items-center justify-between mt-6">
                    <span class="text-blue-600 text-sm font-semibold">৳ {salaryRange.min} - {salaryRange.max}</span>
                    <Link to={`/jobs/${_id}`}>
                        <button class="btn bg-indigo-100 text-indigo-60 hover:bg-indigo-500 hover:text-white duration-500 px-4 py-2 rounded-md text-sm">See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;
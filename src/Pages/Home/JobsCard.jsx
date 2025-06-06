import { GoLocation } from "react-icons/go";
import { IoMdTime } from "react-icons/io";
import { PiBag } from "react-icons/pi";
import HrDetails from "./HrDetails";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobsCard = ({ job }) => {
    const { _id, title, location, jobType, category, applicationDeadline, salaryRange, description, company, requirements, status, hr_email, hr_name, company_logo } = job || [];
    return (
        <div className="border p-4 rounded-lg h-auto">
            <div className="flex gap-3 items-center">
                <div>
                    <img className="w-12 h-12 object-cover" src={company_logo} alt="" />
                </div>
                <div>
                    <h2 className="font-semibold text-base lg:text-lg">{company}</h2>
                    <p className="text-sm flex gap-2 items-center justify-center text-gray-400">
                        <span><GoLocation /></span>
                        <span>{location}</span>
                    </p>
                </div>
            </div>
            <div className="">
                <h2 className="card-title py-2">{title}</h2>
                <div className="flex gap-2 items-center">
                    <p className="text-sm flex gap-2 items-center justify-center text-gray-500">
                        <span><PiBag /></span>
                        <span>{jobType}</span>
                    </p>
                    <p className="text-sm flex gap-2 items-center justify-center text-gray-500">
                        <span><IoMdTime /></span>
                        <span>{category}</span>
                    </p>
                    <div className="text-sm flex gap-2 items-center justify-center text-gray-500">
                        <span className="text-green-500"><FaCheckCircle /></span>
                        {
                            status ? "Active" : "Not available"
                        }
                    </div>
                </div>
                <div>
                    <p className="py-2 text-sm text-gray-600">{description}</p>
                </div>
                <div>
                    <h2 className="font-semibold text-base lg:text-lg mb-3">Skills</h2>
                    {
                        requirements?.map((type, idx) => <div key={idx} className="btn btn-sm font-normal hover:text-indigo-500 mr-3 mb-3">{type}</div>)
                    }
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="font-semibold text-base lg:text-lg mb-3">Salary Structure</h2>
                        {
                            salaryRange && typeof salaryRange === 'object' && (
                                Object.entries(salaryRange).map(([key, value], idx) => (
                                    <div key={idx} className="btn btn-sm mr-3 mb-3 font-normal hover:text-indigo-500">
                                        {key.charAt(0).toUpperCase() + key.slice(1)}: {key === 'currency' ? value.toUpperCase() : value}
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
                <div className="flex justify-between items-center gap-5">
                    <Link to={`jobs/${_id}`} className="w-2/3">
                        <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">Apply Details</button>
                    </Link>

                    <button onClick={() => document.getElementById('my_modal_1').showModal()} className="btn bg-indigo-500 hover:bg-indigo-600 text-white w-1/4">HR Info</button>
                    <HrDetails hr_email={hr_email} hr_name={hr_name} />
                </div>
            </div>
        </div>
    );
};

export default JobsCard;
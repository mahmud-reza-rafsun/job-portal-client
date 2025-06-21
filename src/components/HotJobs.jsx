import { useEffect } from "react";
import { useState } from "react";
import HotJobCard from "./HotJobCard";

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('https://job-portal-server-de.vercel.app/jobs')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])
    return (
        <div>
            <div className="text-center py-5 lg:py-8">
                <h2 className="font-semibold text-2xl lg:text-3xl">Jobs of the day</h2>
                <p className="pt-3 text-gray-500">Search and connect with the right candidates faster.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
                <div className="border border-gray-200 p-3 rounded-xl flex items-center gap-3 hover:border-indigo-500 duration-300">
                    <div>
                        <img src="https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage1/management.svg" className="w-7" alt="" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-[13px]">Management</h4>
                    </div>
                </div>
                <div className="border border-gray-200 p-3 rounded-xl flex items-center gap-3 hover:border-indigo-500 duration-300">
                    <div>
                        <img src="https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage1/marketing.svg" className="w-7" alt="" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-[13px]">Marketing & Sale</h4>
                    </div>
                </div>
                <div className="border border-gray-200 p-3 rounded-xl flex items-center gap-3 hover:border-indigo-500 duration-300">
                    <div>
                        <img src="https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage1/finance.svg" className="w-7" alt="" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-[13px]">Finance</h4>
                    </div>
                </div>
                <div className="border border-gray-200 p-3 rounded-xl flex items-center gap-3 hover:border-indigo-500 duration-300">
                    <div>
                        <img src="https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage1/human.svg" className="w-7" alt="" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-[13px]">Human Resource</h4>
                    </div>
                </div>
                <div className="border border-gray-200 p-3 rounded-xl flex items-center gap-3 hover:border-indigo-500 duration-300">
                    <div>
                        <img src="https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage1/retail.svg" className="w-7" alt="" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-[13px]">Retail & Products</h4>
                    </div>
                </div>

                <div className="border border-gray-200 p-3 rounded-xl flex items-center gap-3 hover:border-indigo-500 duration-300">
                    <div>
                        <img src="https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage1/content.svg" className="w-7" alt="" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-[13px]">Content Writer</h4>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {
                    jobs?.map((job) => <HotJobCard key={job?._id} job={job} />)
                }
            </div>
        </div>
    );
};

export default HotJobs;
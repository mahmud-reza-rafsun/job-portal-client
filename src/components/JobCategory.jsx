import management from '../assets/icons/management.svg'
import content from '../assets/icons/content.svg'
import research from '../assets/icons/research.svg'
import retail from '../assets/icons/retail.svg'
import security from '../assets/icons/security.svg'

const JobCategory = () => {
    return (
        <div>
            <div className="text-center py-4 lg:py-8">
                <h2 className='text-2xl lg:text-3xl font-semibold pb-3'>Browse by category</h2>
                <p>Find the job that’s perfect for you. about 800+ new jobs everyday</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7">
                <div className='gap-4 border p-3 rounded-md'>
                    <div>
                        <img src={management} alt="" className='pb-2' />
                    </div>
                    <div>
                        <h3 className='font-semibold'>Management</h3>
                        <p className='text-sm'>965 Jobs Available</p>
                    </div>
                </div>
                <div className=' gap-4 border p-3 rounded-md'>
                    <div>
                        <img src={content} alt="" className='pb-2' />
                    </div>
                    <div>
                        <h3 className='font-semibold'>Retail & Products</h3>
                        <p className='text-sm'>563 Jobs Available</p>
                    </div>
                </div>
                <div className=' gap-4 border p-3 rounded-md'>
                    <div>
                        <img src={research} alt="" className='pb-2' />
                    </div>
                    <div>
                        <h3 className='font-semibold'>Security Analyst</h3>
                        <p className='text-sm'>254 Jobs Available</p>
                    </div>
                </div>
                <div className=' gap-4 border p-3 rounded-md'>
                    <div>
                        <img src={retail} alt="" className='pb-2' />
                    </div>
                    <div>
                        <h3 className='font-semibold'>Content Writer</h3>
                        <p className='text-sm'>142 Jobs Available</p>
                    </div>
                </div>
                <div className=' gap-4 border p-3 rounded-md'>
                    <div>
                        <img src={security} alt="" className='pb-2' />
                    </div>
                    <div>
                        <h3 className='font-semibold'>Market Research</h3>
                        <p className='text-sm'>532 Jobs Available</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCategory;
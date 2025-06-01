import Banner from "../../components/Banner";
import JobCategory from "../../components/JobCategory";
import HotJobs from "./HotJobs";

const Home = () => {
    return (
        <div>
            <Banner />
            <JobCategory />
            <HotJobs />
        </div>
    );
};

export default Home;
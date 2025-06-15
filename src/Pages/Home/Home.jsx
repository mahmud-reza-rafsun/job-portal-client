import BrowseByCategory from "../../components/BrowseByCategory";
import HotJobs from "../../components/HotJobs";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner />
            <BrowseByCategory />
            <HotJobs />
        </div>
    );
};

export default Home;
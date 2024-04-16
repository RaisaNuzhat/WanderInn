import Banner from "../components/Banner";
import Estates from "../components/Estates";
import { Helmet } from "react-helmet-async";
const Home = () => {
    return (
        <div className="flex justify-center container flex-col my-8">
            <Helmet>
                <title>
                    WanderInn|Home
                </title>
            </Helmet>
            <Banner/>
            <Estates/>
        </div>
    );
};

export default Home;
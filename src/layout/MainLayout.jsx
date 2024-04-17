import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="">
                <Navbar />
            </div>
            <div className=" mx-auto container ">
                <Outlet />
            </div>
            <div className="mb-0">
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            <div className="h-20">
             <Navbar/>
            </div>
            <div className=" mx-auto container ">
           <Outlet/>
           </div>
        </div>
    );
};

export default MainLayout;
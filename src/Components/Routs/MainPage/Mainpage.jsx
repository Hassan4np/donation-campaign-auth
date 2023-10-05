import { Outlet } from "react-router-dom";
import Navbar1 from "../Navbar1/Navbar1";

const Mainpage = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar1/>
            <Outlet/>
        </div>
    );
};

export default Mainpage;
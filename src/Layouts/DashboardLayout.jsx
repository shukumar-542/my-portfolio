import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Shared/Sidebar/Sidebar";
import { FaUser } from "react-icons/fa";

const DashboardLayout = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-4 md:col-span-2 ">
                <Sidebar />
            </div>
            {/* <h1>sidebar</h1> */}
            <div className="col-span-8 md:col-span-10 ">
                <div className="bg-[#211137] text-white z-10 h-14 flex items-center justify-end text-end gap-5 md:pr-16 sticky top-0">
                    <div>
                        <p className="  md:font-semibold">shukumar542@gmail.com </p>
                        <p>Admin </p>
                    </div>
                    <FaUser size={25} />

                </div>
                <Outlet/>
            </div>
        </div>
    );
};

export default DashboardLayout;
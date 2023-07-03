import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";

const MainLayouts = () => {
    return (
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default MainLayouts;
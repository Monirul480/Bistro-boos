import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Shared/Footer/Footer";
import NavBar from "../Pages/Home/Shared/Navbar/NavBar";

const Main = () => {
    return (
        <>
        <NavBar></NavBar>
       <Outlet></Outlet>
       <Footer></Footer>
       </>
    );
};

export default Main;
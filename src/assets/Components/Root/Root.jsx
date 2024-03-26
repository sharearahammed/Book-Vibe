import { Outlet } from "react-router-dom";
import NAvBar from "./NavBar/NAvBar";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
            <NAvBar></NAvBar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
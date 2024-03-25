import { Outlet } from "react-router-dom";
import NAvBar from "./NavBar/NAvBar";

const Root = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
            <NAvBar></NAvBar>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;
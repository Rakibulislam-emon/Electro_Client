import { Outlet } from "react-router-dom";
import Navbar from "../components/Common/Navbar";
import Welcome from "../components/miliComponents/Welcome";

export default function Main() {
    return (
        <div>
            <div className="hidden lg:block">
                <Welcome />
            </div>
            {/* nav */}
            <Navbar/>
            {/* outlet */}\
            <Outlet/>
            {/* footer */}
        </div>
    )
}

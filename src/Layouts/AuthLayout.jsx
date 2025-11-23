import { Outlet } from "react-router";
import Navber from "../components/Navber";
import Footer from "../components/Footer";

const AuthLayout = () => {
    return (
        <div>
            <header><Navber /></header>
            <main><Outlet /></main>
            <footer><Footer /></footer>
        </div>
    );
};

export default AuthLayout;
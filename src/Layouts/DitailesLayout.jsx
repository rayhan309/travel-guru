import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navber from "../components/Navber";

const DitailesLayout = () => {
    return (
        <div>
            <header>
                <Navber />
            </header>
            <main className="max-h-[calc(100vh-285px)]">
                <Outlet />
            </main>
            <footer className="mt-60">
                <Footer />
            </footer>
        </div>
    );
};

export default DitailesLayout;
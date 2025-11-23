import { Outlet } from "react-router";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navber from "../components/Navber";

const HomeLayout = () => {
  return (
    <div className="min-h-screen">
      <header>
        <Navber />
        <Banner />
      </header>
      <main className="img-1 min-h-[calc(100vh-258px)]">
        <section>
          <Outlet />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;

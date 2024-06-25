import { Outlet } from "react-router-dom";
// import Navbar from "../components/navbar/Navbar"
// import Navbar from "../components/navbar/Navbar";
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Navbar/Footer";
import './style.css'

const HomeLayout = () => {
  return (
    <>
      <nav>
        <Navbar/>
      </nav>
      <Outlet />
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default HomeLayout;
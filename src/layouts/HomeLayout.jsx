import { Outlet } from "react-router-dom";
import  { NavbarWithSearch } from "../Components/Navbar/Navbar"
import Footer from "../Components/Navbar/Footer";
import './style.css'

const HomeLayout = () => {
  return (
    <>
      <nav>
        
        <NavbarWithSearch/>
      </nav>
      <Outlet />
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default HomeLayout;
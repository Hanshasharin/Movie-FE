import { Outlet } from "react-router-dom";



import { NavbarDefault } from "../Components/Navbar/AdminNavbar";

const AdminLayout = () => {
  return (
    <>
      <nav>
      
<NavbarDefault/>
      </nav>
      <Outlet />
      
    </>
  );
};

export default AdminLayout;
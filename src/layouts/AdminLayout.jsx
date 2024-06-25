import { Outlet } from "react-router-dom";



import AdminNavbar from "../Components/Navbar/AdminNavbar";

const AdminLayout = () => {
  return (
    <>
      <nav>
        <AdminNavbar/>
      </nav>
      <Outlet />
      
    </>
  );
};

export default AdminLayout;
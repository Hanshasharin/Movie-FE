


import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import './Navbar.css';
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (savedDarkMode) {
      setDarkMode(savedDarkMode);
      document.body.classList.toggle('dark-mode', savedDarkMode);
    }
  }, []);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
  };

  const tokenrelease = () => {
    sessionStorage.removeItem('token');
  };

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" color="white" className="flex items-center gap-x-2 p-1 font-medium">
        
          <Link to='/admin/addmovies' className="text-lg font-semibold hover:text-blue-500">ADDMOVIE</Link>
      
      </Typography>
      <Typography as="li" variant="small" color="white" className="flex items-center gap-x-2 p-1 font-medium">
      
          <Link to='/admin/users' className="text-lg font-semibold hover:text-blue-500">USERS</Link>
        
      </Typography>
      <Typography as="li" variant="small" color="white" className="flex items-center gap-x-2 p-1 font-medium">
        
          <Link to='/admin/review' className="text-lg font-semibold hover:text-blue-500">REVIEW</Link>
        
      </Typography>
      
    </ul>
  );

  return (
    <Navbar className="w-full mx-auto px-4 py-2 lg:px-8 lg:py-4">
      <nav className={`navbar ${darkMode ? 'navbar-dark' : 'navbar-light'} w-full`}>
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <button onClick={handleDarkModeToggle}>
           {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          
          <div className="hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
           
            <Button variant="gradient" size="sm" className="hidden lg:inline-block">
            <Link to='/login' onClick={tokenrelease} className="text-lg font-semibold hover:text-blue-500">LOGOUT</Link>

            </Button>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <div className="container mx-auto">
            {navList}
            <div className="flex items-center gap-x-1">
              
              <Button fullWidth variant="gradient" size="sm" className="">
                
              <Link to='/login' onClick={tokenrelease} className="text-lg font-semibold hover:text-blue-500">LOGOUT</Link>
              
              </Button>
            </div>
          </div>
        </Collapse>
      </nav>
    </Navbar>
  );
}

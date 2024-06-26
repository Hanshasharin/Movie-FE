import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  

  // Load dark mode preference from local storage
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

 

  return (
    <nav className={`navbar ${darkMode ? 'navbar-dark' : 'navbar-light'}`}>
      <div className="navbar-brand">MyApp</div>
      <div className="navbar-buttons">
        <button onClick={handleDarkModeToggle}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <ul className='flex space-x-4'>
        <li>
          <Link to='/admin/addmovies' className="text-lg font-semibold hover:text-blue-500">ADDMOVIE</Link>
        </li>
        <li>
          <Link to='/admin/users' className="text-lg font-semibold hover:text-blue-500">USERS</Link>
        </li>
        <li>
          <Link to='/login' onClick={tokenrelease} className="text-lg font-semibold hover:text-blue-500">LOGOUT</Link>
        </li>
      </ul>
      
      
    </nav>
  );
};

export default AdminNavbar;



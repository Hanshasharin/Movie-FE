


import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery); // Log searchQuery before submitting

    try {
      const response = await fetch(`http://localhost:3000/api/v1/movie/search?query=${searchQuery}`);
      const data = await response.json();
      // Navigate to search results page with search data
      navigate('/search', { state: { searchResults: data } });
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <nav className={`navbar ${darkMode ? 'navbar-dark' : 'navbar-light'}`}>
      <div className="navbar-brand">MyApp</div>
      <div className="navbar-buttons">
        <button onClick={handleDarkModeToggle}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <ul className='link'>
        <li>
          <Link to='/login' onClick={tokenrelease}>Logout</Link>
        </li>
      </ul>
      {location.pathname === '/movie' && (
        <form className="search-bar" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </form>
      )}
    </nav>
  );
};

export default Navbar;



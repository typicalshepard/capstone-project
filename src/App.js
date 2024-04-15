import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Map from './Map';
import Research from './Research';
import References from './References';
import './styles.css';

const App = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClick = () => {
    if (isSmallScreen) {
      setShowMenu(false);
    }
  };

  return (
    <Router>
      <div className="mainMenu">
        <div className="mainMenu__container">
          <Link to="/" className="mainMenu__logo">
            Capstone Project
          </Link>

          {isSmallScreen ? (
            <div className="menu-button" onClick={toggleMenu}>
              ☰
            </div>
          ) : (
            <ul className={`mainMenu__menu ${showMenu ? 'show' : ''}`}>
              <li className="mainMenu__item">
                <Link to="/" className="mainMenu__links" onClick={handleMenuClick}>
                  Home
                </Link>
              </li>
              <li className="mainMenu__item">
                <Link to="/map" className="mainMenu__links" onClick={handleMenuClick}>
                  Map
                </Link>
              </li>
              <li className="mainMenu__item">
                <Link to="/research" className="mainMenu__links" onClick={handleMenuClick}>
                  Research
                </Link>
              </li>
              <li className="mainMenu__item">
                <Link to="/contact" className="mainMenu__links" onClick={handleMenuClick}>
                  Contact
                </Link>
              </li>
              <li className="mainMenu__item">
                <Link to="/references" className="mainMenu__links" onClick={handleMenuClick}>
                  References
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/research" element={<Research />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/references" element={<References />} />
      </Routes>
    </Router>
  );
};

export default App;

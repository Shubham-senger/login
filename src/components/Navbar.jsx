import React, { useState } from 'react';
import '../assets/css/Navbar.css';

import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <div className={`l-navbar ${isExpanded ? 'expander' : ''}`} id="navbar">
      <nav className="nav">
        <div>
          <div className="nav__brand">
            <i className="fas fa-bars nav__toggle" id="nav-toggle" onClick={toggleNavbar}></i>
            <a href="#" className="nav__logo">CooliWale</a>
          </div>
          <div className="nav__list">
            <a href="#" className={`nav__link ${activeLink === 'home' ? 'active' : ''}`} onClick={() => handleLinkClick('home')}>
              <i className="fas fa-home nav__icon"></i>
              <span className="nav__name">Home</span>
            </a>
            <div className="nav__link collapse">
              <i className="fa fa-people-carry-box"></i> 
              <span className="nav__name">Coolie</span>
              <i className="fas fa-chevron-down collapse__link"></i>
              <ul className="collapse__menu">
                <a href="#" className="collapse__sublink">Booking Received</a>
                <a href="#" className="collapse__sublink">Completed</a>
                <a href="#" className="collapse__sublink">Nearing Completion</a>
                <a href="#" className="collapse__sublink">Under Process</a>
                <a href="#" className="collapse__sublink">Cancelled</a>
                <a href="#" className="collapse__sublink">Disputed</a>
              </ul>
            </div>
            <a href="#" className={`nav__link ${activeLink === 'status' ? 'active' : ''}`} onClick={() => handleLinkClick('status')}>
              <i className="fas fa-chart-pie nav__icon"></i>
              <span className="nav__name">Status</span>
            </a>
            <a href="#" className={`nav__link ${activeLink === 'support' ? 'active' : ''}`} onClick={() => handleLinkClick('support')}>
              <i className="fas fa-comments nav__icon"></i>
              <span className="nav__name">Support</span>
            </a>
            <a href="#" className={`nav__link ${activeLink === 'settings' ? 'active' : ''}`} onClick={() => handleLinkClick('settings')}>
              <i className="fas fa-cogs nav__icon"></i>
              <span className="nav__name">Settings</span>
            </a>
            <div className="nav__link collapse">
              <i className="fa fa-user-lock"></i> 
              <span className="nav__name">Privacy Policy</span>
              <i className="fas fa-chevron-down collapse__link"></i>
            </div>
            <div className="nav__link collapse">
              <i className="fa fa-file-contract"></i> 
              <span className="nav__name">Terms & Conditions</span>
              <i className="fas fa-chevron-down collapse__link"></i>
            </div>
            <div className="nav__link collapse">
              <i className="fa fa-bank"></i> 
              <span className="nav__name">Account</span>
              <i className="fas fa-chevron-down collapse__link"></i>
            </div>
          </div>
        </div>
        <a href="#" className="nav__link">
          <i className="fas fa-sign-out-alt nav__icon"></i>
          <span className="nav__name">Log Out</span>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;

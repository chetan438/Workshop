import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
      </div>
      <input type="text" placeholder="Search" className="navbar__search" />
      <div className="navbar__icons">
        <i className="fas fa-home" title="Home"></i>
        <i className="fas fa-paper-plane" title="Messages"></i>
        <i className="fas fa-heart" title="Notifications"></i>
        <i className="fas fa-user" title="Profile"></i>
      </div>
    </div>
  );
}

export default Navbar;

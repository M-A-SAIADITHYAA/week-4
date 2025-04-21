import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Hackathon Finder</Link>
      </div>
      <div className="navbar-links">
        <Link to="/hackathons">Hackathons</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/messages">Messages</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar; 
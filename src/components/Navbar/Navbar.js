import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand" href="#">POWER <span className="secondary-text">X</span></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">Our classes</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">Blog</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">Pricing</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
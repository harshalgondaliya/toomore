import React from "react";
import { Link } from "react-router-dom";
import "./OurStory.css"; // Add the CSS file here
import logo from "../assets/logo1.png"; // Adjust the path based on where your image is stored
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome styles
import "./Navbar.css"; // Optional, if you need custom styles

class Navbar extends React.Component {
  render() {
    return (
      <header className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-logo">
            <img src={logo} alt="Toomore Juice Logo" />
          </a>
          <nav className="navbar-links">
            <ul className="navbar-menu">
              <li>
                <Link to="/our-story">Our Story</Link>
              </li>
              <li className="dropdown">
                <Link to="/Juice">Products</Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/Juice">Juices</Link>
                  </li>
                  <li>
                    <Link to="/">Soft Drinks</Link>
                  </li>
                  <li>
                    <Link to="/">Energy Drinks</Link>
                  </li>
                  <li>
                    <Link to="/">Drinking Water</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="/">Investors</Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/">Investor Relations</Link>
                  </li>
                  <li>
                    <Link to="/">Financial Reports</Link>
                  </li>
                  <li>
                    <Link to="/">Press Releases</Link>
                  </li>
                  <li>
                    <Link to="/">Stockholder Information</Link>
                  </li>
                  <li>
                    <Link to="/">FAQs for Investors</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="/">Sustainability</Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/">Environmental Impact</Link>
                  </li>
                  <li>
                    <Link to="/">Water Conservation</Link>
                  </li>
                  <li>
                    <Link to="/">Community Support</Link>
                  </li>
                  <li>
                    <Link to="/">Sustainability Reports</Link>
                  </li>
                  <li>
                    <Link to="/">Certifications & Achievements</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="/">Join Us</Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/">Careers</Link>
                  </li>
                  <li>
                    <Link to="/">Internship Opportunities</Link>
                  </li>
                  <li>
                    <Link to="/">Life at Toomore Beverages</Link>
                  </li>
                  <li>
                    <Link to="/">Job Openings</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="/">Support</Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/">Feedback</Link>
                  </li>
                  <li>
                    <Link to="/">FAQs</Link>
                  </li>
                  <li>
                    <Link to="/">Distributor Support</Link>
                  </li>
                  <li>
                    <Link to="/">Customer Care</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className="navbar-icons">
            <Link to="/" className="navbar-icon">
              <i className="fas fa-search"></i>
            </Link>
            <Link to="/" className="navbar-icon">
              <i className="fas fa-heart"></i>
            </Link>
            <Link to="/" className="navbar-icon">
              <i className="fas fa-shopping-cart"></i>
            </Link>
            <Link to="/" className="navbar-icon" id="language-selector">
              <i className="fas fa-globe"></i>
            </Link>
            <Link to="/" className="navbar-icon">
              <i className="fas fa-user"></i>
            </Link>
          </div>
          <button className="navbar-toggle" aria-label="Toggle navigation">
            <span className="navbar-toggle-icon"></span>
          </button>
        </div>
      </header>
    );
  }
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import logo from "../assets/logo1.png"; // Adjust the path based on your image location
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome styles
import "./Footer.css"; // Optional, if you need custom styles

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={logo} alt="Too More Beverages" />
          </div>
          <hr className="footer-line" />
          <div className="footer-content">
            <div className="footer-column">
              <h4>About Us</h4>
              <ul>
                <li>
                  <Link to="/media-center">Media Center</Link>
                </li>
                <li>
                  <Link to="/foundation">Toomore Foundation</Link>
                </li>
                <li>
                  <Link to="/investors">Investors</Link>
                </li>
                <li>
                  <Link to="/policies">Policies and Practices</Link>
                </li>
                <li>
                  <Link to="/careers">Careers</Link>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Need Help ?</h4>
              <ul>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                <li>
                  <Link to="/international">International</Link>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Terms of Use</h4>
              <ul>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/cookies-policy">Cookies Policy</Link>
                </li>
                <li>
                  <Link to="/notice-at-collection">Notice at Collection</Link>
                </li>
                <li>
                  <Link to="/do-not-sell">
                    Do Not Sell or Share My Personal Information
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service">Terms of Service</Link>
                </li>
                <li>
                  <Link to="/cookies-settings">Cookies Settings</Link>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Address</h4>
              <address>
                PITHDIYA ROAD,
                <br />
                near SHIV FELT,
                <br />
                Derdi, Rajkot-360370,
                <br />
                Gujarat, India
              </address>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-country">
              <Link to="/states">
                <i className="fas fa-map-marker-alt" /> Indian | States
              </Link>
            </div>
            <div className="footer-social">
              <a
                href="https://www.facebook.com/too.more.142"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="https://www.instagram.com/too_more1/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                href="https://www.youtube.com/@toomorebeverages9253"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-youtube" />
              </a>
              <a
                href="https://wa.me/+918780499433"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fab fa-whatsapp" />
              </a>
              <a
                href="mailto:harshalgondaliya07@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fas fa-envelope"></i>
              </a>

              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="fa-brands fa-x-twitter" />
              </a>
            </div>
          </div>
          <hr className="footer-line" />
          <p className="footer-copyright">
            Copyright © 2025 Toomore Beverages Company. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;

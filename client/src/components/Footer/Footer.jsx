import React from "react";
import "./Footer.css";
import { WEBNAME, EMAIL, WHATSAPP } from "../../constant/AppConstant";

export const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* Company Section */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">{WEBNAME}</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="footer-link">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="footer-link">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">Contact Us</h5>
            <p className="footer-contact">{ADDRESS}</p>
            <p className="footer-contact">Email: {EMAIL}</p>
            <p className="footer-contact">Phone:{WHATSAPP}</p>
          </div>

          {/* Social Media Links */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">Follow Us</h5>
            <div className="social-icons">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom text-center mt-5">
          <p>&copy; 2025 {WEBNAME}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

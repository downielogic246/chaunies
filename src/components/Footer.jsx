import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../css/footer.css";

const Footer = () => {
  return (
    <>
      <article className="copyright">
        Copyright &copy;2023. All rights reserved.
      </article>
      <footer>
        <img
          src="../../Photos/logoImg.png"
          alt="logo"
          className="footer-logo"
        />
        <nav>
          <ul className="footer-linksContainer">
            <div className="half-link">
              <li className="footer-links">
                <Link className="footer-link" to="/">
                  Home
                </Link>
              </li>
              <li className="footer-links">
                <Link className="footer-link" to="/order">
                  Place An Order
                </Link>
              </li>
              <li className="footer-links">
                <Link className="footer-link" to="/services">
                  Services
                </Link>
              </li>
            </div>
            <div className="half-link">
              <li className="footer-links">
                <Link className="footer-link" to="/about">
                  About
                </Link>
              </li>
              <li className="footer-links">
                <Link className="footer-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </div>
          </ul>
          <Outlet />
        </nav>
      </footer>
    </>
  );
};

export default Footer;

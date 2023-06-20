import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const handleLinkClick = () => {
    scrollTo(0, 0);
  };
  return (
    <>
      <article className="copyright">
        Copyright &copy;2023. All rights reserved.
      </article>
      <footer>
        <div title="logo" className="footer-logo"></div>
        <nav>
          <ul className="footer-linksContainer">
            <div className="half-link">
              <li className="footer-links">
                <Link
                  onClick={() => {
                    handleLinkClick();
                  }}
                  className="footer-link"
                  to="/chaunies.io/"
                >
                  Home
                </Link>
              </li>
              <li className="footer-links">
                <Link
                  onClick={() => {
                    handleLinkClick();
                  }}
                  className="footer-link"
                  to="/chaunies.io/order"
                >
                  Place An Order
                </Link>
              </li>
              <li className="footer-links">
                <Link
                  onClick={() => {
                    handleLinkClick();
                  }}
                  className="footer-link"
                  to="/chaunies.io/services"
                >
                  Services
                </Link>
              </li>
            </div>
            <div className="half-link">
              <li className="footer-links">
                <Link
                  onClick={() => {
                    handleLinkClick();
                  }}
                  className="footer-link"
                  to="/chaunies.io/about"
                >
                  About
                </Link>
              </li>
              <li className="footer-links">
                <Link
                  onClick={() => {
                    handleLinkClick();
                  }}
                  className="footer-link"
                  to="/chaunies.io/contact"
                >
                  Contact Us
                </Link>
              </li>
            </div>
          </ul>
          {/* <Outlet /> */}
        </nav>
      </footer>
    </>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const handleLinkClick = () => {
    scrollTo(0, 0);
  };

  // const copyrightTop = useRef();

  return (
    <>
      <article className="copyright">
        Copyright &copy;2023. All rights reserved.
      </article>
      <footer>
        <div title="logo" className="footer-logo"></div>
        <nav>
          <ul className="footer-linksContainer">
            <div className="half-link one">
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
            <div className="footer-socials">
              <ul className="footer-social">
                <li>
                  <a
                    title="Email"
                    href="mailto:chaunies246@outlook.com ? subject=Ask Chaunie Anything "
                  >
                    <i className="fa-regular fa-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    title="Instagram"
                    href="https://instagram.com/chaunies246?igshid=MTg0ZDhmNDA="
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a title="Whatsapp" href="wa.link/9mc4s6">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="half-link two">
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

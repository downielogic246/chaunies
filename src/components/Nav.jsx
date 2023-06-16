import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <header>
        <nav>
          <div className="header-container">
            <div id="logo" title="Chaunies246"></div>
            <ul className="links-container">
              <li className="nav-links">
                <Link className="links" to="/chaunies.io/">
                  Home
                </Link>
              </li>
              <li className="nav-links">
                <Link className="links" to="/chaunies.io/order">
                  Place An Order
                </Link>
              </li>
              <li className="nav-links">
                <Link className="links" to="/chaunies.io/services">
                  Services
                </Link>
              </li>
              <li className="nav-links">
                <Link className="links" to="/chaunies.io/about">
                  About Us
                </Link>
              </li>
              <li className="nav-links">
                <Link className="links" to="/chaunies.io/contact">
                  Contact Us
                </Link>
              </li>
              {/* 
              <li className="links">
                <a
                  className="nav_menu"
                  href="chauniesContactUs.html"
                  title="Contact Us"
                >
                  CONTACT US
                </a>
              </li> */}
            </ul>
          </div>
          <Outlet />
        </nav>
      </header>
    </>
  );
};

export default Nav;

import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <header>
        <nav>
          <div className="header-container">
            <img
              src="Photos/chanie's.png"
              alt="chanies logo"
              id="logo"
              title="Chaunies246"
            />
            <ul className="links-container">
              <li className="nav-links">
                <Link className="links" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-links">
                <Link className="links" to="/order">
                  Place An Order
                </Link>
              </li>
              <li className="nav-links">
                <Link className="links" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-links">
                <Link className="links" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-links">
                <Link className="links" to="/contact">
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

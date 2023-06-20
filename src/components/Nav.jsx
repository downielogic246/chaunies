import { Outlet, Link } from "react-router-dom";
import { useRef, useState } from "react";

const Nav = () => {
  const [menuState, setMenuState] = useState({
    display: "flex",
  });

  const bars = "fa-solid fa-bars";
  const x = "fa-solid fa-xmark";

  const [menuBtnClass, setMenuBtnClass] = useState(x);

  const linksContainer = useRef();
  let toggleLinks = true;

  const toggleMenu = () => {
    // toggleLinks = toggleLinks ? false : true;
    // console.log(toggleLinks);

    setMenuState(
      menuState.display === "flex"
        ? {
            display: "none",
          }
        : {
            display: "flex",
          }
    );
    setMenuBtnClass(menuBtnClass === x ? bars : x);
    // console.log(menuState.display);
  };

  window.addEventListener("orientationchange", (event) => {
    setMenuState({
      display: "flex",
    });
    setMenuBtnClass(x);
  });
  return (
    <>
      <header>
        <nav>
          <div id="logo" title="Chaunies246"></div>

          <div className="header-container">
            <ul
              className="links-container"
              ref={linksContainer}
              style={menuState}
            >
              <li className="nav-links">
                <Link
                  className="links"
                  to="/chaunies.io/"
                  onClick={() => toggleMenu()}
                >
                  Home
                </Link>
              </li>
              <li className="nav-links">
                <Link
                  className="links"
                  to="/chaunies.io/order"
                  onClick={() => toggleMenu()}
                >
                  Place An Order
                </Link>
              </li>
              <li className="nav-links">
                <Link
                  className="links"
                  to="/chaunies.io/services"
                  onClick={() => toggleMenu()}
                >
                  Services
                </Link>
              </li>
              <li className="nav-links">
                <Link
                  className="links"
                  to="/chaunies.io/about"
                  onClick={() => toggleMenu()}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-links">
                <Link
                  className="links"
                  to="/chaunies.io/contact"
                  onClick={() => toggleMenu()}
                >
                  Contact Us
                </Link>
              </li>
              <div className="socials-container">
                <ul className="socials">
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
            </ul>
            {/* <!-- Social Links --> */}
          </div>
          <Outlet />
        </nav>
        <div className="menubtn-container" onClick={() => toggleMenu()}>
          <button className="menubtn">
            <i className={menuBtnClass}></i>
          </button>
        </div>
      </header>
    </>
  );
};

export default Nav;

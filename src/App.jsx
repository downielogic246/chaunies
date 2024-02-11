import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Cheese from "./components/Designs/Cheese";
import TopBtn from "./components/TopBtn";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/Notfound";

const App = () => {
  const welcome = React.useRef();
  const [show, setShow] = React.useState(() => {
    const value = localStorage.getItem("show");

    return value === null ? "button-container" : localStorage.show;
  });
  React.useEffect(() => {
    localStorage.setItem("show", show);
  }, [show]);

  const handleClick = () => {
    localStorage.setItem("show", "button-container no-show");
    setShow(localStorage.show);
  };
  return (
    <>
      <div className={show} ref={welcome}>
        <div className="buttonHolder">
          <button
            className="closeBtn"
            title="Close"
            onClick={() => {
              handleClick();
            }}
          >
            <i className="fa-sharp fa-regular fa-circle-xmark"></i>
          </button>
          <h1 title="Welcome to Chaunies">WELCOME TO CHAUNIE'S</h1>
          <article>
            Feel free to navigate through our website and place your orders
            today!
          </article>
          <p>ORDER NOW</p>
          <Link
            className="toOrderServices"
            title="Order Now"
            to="/order"
            onClick={() => handleClick()}
          >
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
      <Nav />
      <Cheese />
      <TopBtn />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;

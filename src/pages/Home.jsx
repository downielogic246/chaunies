import React, { useRef, useState, useEffect } from "react";
import TopBtn from "../components/TopBtn";
import Footer from "../components/Footer";
import Cheese from "../components/Designs/Cheese";

const Home = () => {
  const welcome = useRef();
  const mainArea = useRef();

  const [show, setShow] = useState(() => {
    const value = localStorage.getItem("show");

    return value === null ? "button-container" : localStorage.show;
  });

  const handleClick = () => {
    localStorage.setItem("show", "button-container no-show");
    setShow(localStorage.show);
  };

  useEffect(() => {
    localStorage.setItem("show", show);
  }, [show]);

  console.log(show);

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
            Feel free to navigate through the website and place your orders
            today!
          </article>
          <p>Click here to see our services</p>
          <a
            className="toServices"
            title="Services"
            href="chauniesServices.html"
            onClick={() => handleClick()}
          >
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      {/* <!-- Main Content --> */}
      <section className="main-area" ref={mainArea}>
        {/* <!-- Greeting Section --> */}
        <div className="greeting-container">
          <div className="greeting-heading">
            <h1>chaunie's</h1>
            <h2>deliciously smooth</h2>
          </div>
          <div className="greeting-image"></div>
        </div>
      </section>
      <section className="other-area">
        <div className="qualities-container">
          <div className="quality">
            <h3 className="third-heading">Delivery</h3>
            <i className="fa-solid fa-truck"></i>
            <article>Fast delivery</article>
          </div>
          <div className="quality">
            <h3 className="third-heading">Taste</h3>
            <i className="fa-regular fa-face-grin-tongue-squint"></i>
            <article>Quality taste</article>
          </div>
          <div className="quality">
            <h3 className="third-heading">Unique</h3>
            <i className="fa-solid fa-fingerprint"></i>
            <article> Chaunie's touch</article>
          </div>
        </div>
        <article className="chaunies-desc">
          At Chaunie's our customers come first. We look out for you and your
          interest. Our customers are always right!
        </article>
      </section>
    </>
  );
};

export default Home;

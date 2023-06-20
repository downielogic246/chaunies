import React, { useRef, useState, useEffect } from "react";
import { Link, useActionData } from "react-router-dom";
import OrderBtn from "../components/OrderBtn";

const Home = () => {
  const welcome = useRef();
  const mainArea = useRef();

  const [animateHome, setAnimateHome] = useState("qualities-container");

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

  window.addEventListener("scroll", () => {
    setAnimateHome(scrollY < 100 ? null : "showFade flyIn");
  });

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
          <Link
            className="toServices"
            title="Services"
            to="/chaunies.io/services"
            onClick={() => handleClick()}
          >
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </Link>
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
          <div className="greeting-image">
            <OrderBtn />
          </div>
        </div>
      </section>
      <section className="other-area">
        <div className="heading-why">why us?</div>
        <div className={"qualities-container " + animateHome}>
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
        <article className={"chaunies-desc " + animateHome}>
          At Chaunie's our customers come first. We look out for you and your
          interest. Our customers are always right!
        </article>
      </section>
    </>
  );
};

export default Home;

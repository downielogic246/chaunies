import React, { useRef, useState, useEffect } from "react";
import { Link, useActionData } from "react-router-dom";
import OrderBtn from "../components/OrderBtn";

const slideDisplayables = [
  {
    id: "why",
    heading: "why us?",
    desc: "Why us you may ask. Chaunie's services and products are produced with qualities and standards that makes customers want more every time.",
    link: "/chaunies.io/",
  },
  {
    id: "who",
    heading: "who we cater?",
    desc: "Chaunie's caters to weddings, parties, corporate events and for any special events that you may require cheesepaste.",
    link: "/chaunies.io/services",
  },
  {
    id: "how",
    heading: "how to contact?",
    desc: "Chaunie's is very easy to contact. Contact us via our socials, phonecall or email.",
    link: "/chaunies.io/contact",
  },
];

const Home = () => {
  const mainArea = useRef();
  const why = useRef();

  const [animateHome, setAnimateHome] = useState("qualities-container");

  const [slide, setSlide] = React.useState(0);

  window.addEventListener("scroll", () => {
    setAnimateHome(scrollY < 200 ? null : " flyIn");
  });

  const slideLeft = () => {
    console.log("left");
    let x = slide;
    x -= 1;
    setSlide(x < 0 ? slideDisplayables.length - 1 : x);
  };
  const slideRight = () => {
    console.log("right");
    let x = slide;
    x += 1;
    setSlide(x > slideDisplayables.length - 1 ? 0 : x);
  };

  const locationCheck = (event) => {
    const learn = event.currentTarget.classList.contains("why");

    learn === true
      ? why.current?.scrollIntoView({ behavior: "smooth" })
      : scrollTo(0, 0);
  };

  return (
    <main>
      {/* <!-- Main Content --> */}
      <section className="main-area" ref={mainArea}>
        {/* <!-- Greeting Section --> */}

        <div className="greeting-container">
          <div className="greeting-heading">
            <h2>
              Welcome to Chaunie's. Interested in our paste? <br />
              Click the link below
            </h2>
            <OrderBtn />
          </div>
          <div className="greeting-slideContainer">
            <button className="slide-left" onClick={() => slideLeft()}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <div className="greeting-slide">
              <h3 className="slide-heading">
                {slideDisplayables[slide].heading}
              </h3>
              <article className="slide-desc">
                {slideDisplayables[slide].desc}
              </article>

              {/* <a href={slide.link} className="learn-more">
                learn more
              </a> */}
              <Link
                className={"learn-more " + slideDisplayables[slide].id}
                to={slideDisplayables[slide].link}
                onClick={(e) => {
                  locationCheck(e);
                }}
              >
                learn more
              </Link>
            </div>
            <button className="slide-right" onClick={() => slideRight()}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>
      <section className="other-area" id="why" ref={why}>
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
          interest.
        </article>
        <div className="design-outterCircle"></div>
        <div className="design-innerCircle"></div>
      </section>
    </main>
  );
};

export default Home;

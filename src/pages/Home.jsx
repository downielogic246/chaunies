import React, { useRef, useState, useEffect } from "react";
import { Link, useActionData } from "react-router-dom";
import OrderBtn from "../components/OrderBtn";
import About from "./About";
import Cheese from "../components/Designs/Cheese";

const slideDisplayables = [
  {
    id: "why",
    heading: "why us?",
    desc: "Why us you may ask. Chaunie's services and products are produced with qualities and standards that makes customers want more every time.",
    link: "/",
  },
  {
    id: "who",
    heading: "who we cater?",
    desc: "Chaunie's caters to weddings, parties, corporate events and for any special events that you may require cheesepaste.",
    link: "/services",
  },
  {
    id: "how",
    heading: "how to contact?",
    desc: "Chaunie's is very easy to contact. Contact us via our socials, phonecall or email.",
    link: "/contact",
  },
];

const Home = () => {
  const mainArea = useRef();
  const why = useRef();
  const quickOrder = useRef();
  const quickOrderHeading = useRef();
  const [quickOrderBtn, setQuickOrderBtnStyle] = React.useState("flex");

  // const [toggleHeight, setToggleHeight] = React.useState("max-content");
  const [displayQuickOrder, setDisplayQuickOrder] = React.useState("flex");

  const [animateHome, setAnimateHome] = useState("qualities-container");

  const [slide, setSlide] = React.useState(0);

  window.addEventListener("scroll", () => {
    setAnimateHome(scrollY < 200 ? null : " flyIn");
  });

  const slideLeft = () => {
    let x = slide;
    x -= 1;
    setSlide(x < 0 ? slideDisplayables.length - 1 : x);
  };
  const slideRight = () => {
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

  const closeQuickOrder = () => {
    setDisplayQuickOrder("none");
  };

  // window.addEventListener("resize", () => {
  //   setDisplayQuickOrder(window.screen.width <= 1190 ? "none" : "flex");
  // });

  const QuickOrder = () => {
    return (
      <div
        className="quick-order"
        style={{
          display: displayQuickOrder,
        }}
      >
        <button
          onClick={() => closeQuickOrder()}
          className="no-order"
          ref={quickOrder}
        >
          <i className="fa fa-times"></i>
        </button>
        <h2 ref={quickOrderHeading}>Try it now</h2>
        <OrderBtn orderStyle={quickOrderBtn} />
      </div>
    );
  };

  const SlideHome = () => {
    return (
      <div className="greeting-slideContainer">
        <button className="slide-left" onClick={() => slideLeft()}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <div className="greeting-slide">
          <h3 className="slide-heading">{slideDisplayables[slide].heading}</h3>
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
    );
  };

  const Qualities = () => {
    return (
      <div className={"qualities-container " + animateHome}>
        <div className="quality">
          <div className="symbol-container">
            <i className="fa-solid fa-truck"></i>
          </div>
          <div className="symbol-desc">
            <h3 className="third-heading">Fast Delivery</h3>
            <article>
              Chaunies is known for its swift and reliable delivery services.
              Whether it's a last-minute gift or an urgent business requirement,
              Chaunies exceeds expectations by providing efficient and
              dependable delivery. We're commitment to customer satisfaction has
              positioned them as a leader in the industry, making us the go-to
              choice for those who prioritize fast and reliable services.
            </article>
          </div>
        </div>
        {/* <div className="quality">
            <div className="symbol-container">
              <i className="fa-regular fa-face-grin-tongue-squint"></i>
            </div>
            <div className="symbol-desc">
              <h3 className="third-heading">Taste</h3>
              <article>Quality taste</article>
            </div>
          </div> */}
        <div className="quality">
          <div className="symbol-container">
            <i className="fa-solid fa-fingerprint"></i>
          </div>
          <div className="symbol-desc">
            <h3 className="third-heading">Chaunie's Touch</h3>
            <article>
              Chaunies stands out with its distinctive and captivating taste
              profiles. Committed to culinary innovation, the business infuses
              its products with a unique blend of locally bought ingredients
              that emphasizes the idea of "Bajan Cheespaste". From savory to
              delicious, our cheesepaste is a testament to our dedication to
              offering a taste experience that transcends the ordinary.
            </article>
          </div>
        </div>
      </div>
    );
  };

  const WhyUsSection = () => {
    return (
      <section className="other-area" id="why">
        <About />
        <div className="heading-why" ref={why}>
          why us?
        </div>
        <Qualities />

        <article className={"chaunies-desc " + animateHome}>
          Place an order TODAY!
        </article>
        <div className="design-outterCircle"></div>
        <div className="design-innerCircle"></div>
      </section>
    );
  };
  return (
    <main>
      {/* <!-- Main Content --> */}
      <section className="main-area" ref={mainArea}>
        {/* <!-- Greeting Section --> */}

        <div className="greeting-container">
          {/* <QuickOrder /> */}
          <div className="enjoy-heading">
            <article className="enjoy-desc">
              Come enjoy our deliciously smooth cheesepaste
            </article>
            <OrderBtn />
          </div>
          <SlideHome />
        </div>
      </section>
      <WhyUsSection />
    </main>
  );
};

export default Home;

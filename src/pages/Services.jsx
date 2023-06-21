import React from "react";
import { useRef } from "react";

const services = [
  {
    name: "Weddings",
    picture: "fa-solid fa-cake-candles",
    message: `Chaunie's cater to weddings, where cheese guaranteed to say "I DO!"`,
  },
  {
    name: "Parties",
    picture: "fa-solid fa-gift",
    message: `We also cater to parties, making partying cheesy.`,
  },
  {
    name: "Corporate Events",
    picture: "fa-sharp fa-solid fa-briefcase",
    message: `And even corporate events, just cheese and relax.`,
  },
];

const Services = () => {
  const wedding = useRef();
  const party = useRef();
  const corporate_events = useRef();

  // ~

  return (
    <>
      {/* <!-- Main Area --> */}
      <div className="main-area">
        {/* <!-- Services Message --> */}
        <section className="services-container">
          <h1 className="services-title">services</h1>
          {/* <article>
            here are events in which we cater
            <ul>
              <li>
                <a href="#wedding">
                  <i className="fa-solid fa-arrow-right"></i> Weddings
                </a>
              </li>
              <li>
                <a href="#parties">
                  <i className="fa-solid fa-arrow-right"></i> Parties
                </a>
              </li>
              <li>
                <a href="#corporate_events">
                  <i className="fa-solid fa-arrow-right"></i> Corporate Events
                </a>
              </li>
            </ul>
          </article> */}
          <div className="services-area">
            <div className="services-book">
              <h1>book today!</h1>
            </div>
            <div className="services-order">
              <article>
                To book a service call{" "}
                <a href="tel:+12468383455">(246) 838-3455</a> or email{" "}
                <a href="mailto:chaunies246@outlook.com">
                  chaunies246@outlook.com
                </a>
              </article>
            </div>
            {services.map((service) => {
              return (
                <div className="service">
                  <div className="service-image" id={service.name}>
                    <i className={service.picture}></i>
                  </div>

                  <div className="desc">
                    {" "}
                    <h1 className="service-title">{service.name}</h1>
                    <p>{service.message}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* <!-- Services --> */}
        {/* <div className="service-1" ref={wedding}>
          <div className="title" id="wedding">
            <h1>Weddings</h1>
          </div>
          <div className="desc">
            <p>
              Chaunie's caters to weddings, where cheese guaranteed to say "I
              DO!"
            </p>
          </div>
        </div>
        <div className="service-2">
          <div className="desc">
            <p>We also cater to parties, making partying cheesy.</p>
          </div>
          <div className="title" id="parties" ref={party}>
            <h1>Parties</h1>
          </div>
        </div>
        <div className="service-3">
          <div className="title" id="corporate_events" ref={corporate_events}>
            <h1>Corporate Events</h1>
          </div>
          <div className="desc">
            <p>And even corporate events, just cheese and relax.</p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Services;

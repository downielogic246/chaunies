import React from "react";
import TopBtn from "../components/TopBtn";
import Cheese from "../components/Designs/Cheese";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <>
      {/* <!-- Main Area --> */}
      <div className="main-area">
        {/* <!-- Services Message --> */}
        <section className="message">
          <h1>services</h1>
          <article>
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
          </article>
        </section>

        {/* <!-- Services --> */}
        <div id="wedding" className="service-1">
          <div
            className="title"
            style={{ backgroundImage: "url(/Photos/wedding.jpg)" }}
          >
            <h1>Weddings</h1>
          </div>
          <div className="desc">
            <p>
              Chaunie's caters to weddings, where cheese guaranteed to say "I
              DO!"
            </p>
          </div>
        </div>
        <div id="parties" className="service-2">
          <div className="desc">
            <p>We also cater to parties, making partying cheesy.</p>
          </div>
          <div
            className="title"
            style={{ backgroundImage: "url(/Photos/party.jpg)" }}
          >
            <h1>Parties</h1>
          </div>
        </div>
        <div id="corporate_events" className="service-3">
          <div
            className="title"
            style={{ backgroundImage: "url(/Photos/corporate_events.jpg)" }}
          >
            <h1>Corporate Events</h1>
          </div>
          <div className="desc">
            <p>And even corporate events, just cheese and relax.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

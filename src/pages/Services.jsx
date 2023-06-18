import React from "react";
import { useRef } from "react";

const Services = () => {
  const wedding = useRef();
  const party = useRef();
  const corporate_events = useRef();

  // window.addEventListener("scroll", () => {
  //   let win_bottom = window.scrollY + window.innerHeight;
  //   // if ( scrollY )
  //   // console.log(window.getBoundingClientRect().bottom);
  //   if (win_bottom > wedding.current.getBoundingClientRect().top) {
  //     wedding.current.classList.add("slideInR");
  //     // console.log(wedding.current.classList);
  //   }
  // });

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
        <div className="service-1" ref={wedding}>
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
        </div>
      </div>
    </>
  );
};

export default Services;

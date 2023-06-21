import React from "react";

const About = () => {
  return (
    <>
      <section className="main-area">
        <div className="about-container">
          <h1 className="about-title">about us</h1>
          <div className="leadership">
            <div id="ceo"></div>
            <h2 className="ceo-name">Chantal Downie</h2>
            <article className="roles">CEO</article>
          </div>
          <div className="about">
            <div className="mission-container">
              <h2 className="ceo-name">mission statement</h2>
              <article className="mission">
                "At Chaunie's, our mission is to produce quality cheesepaste
                that provides a 'deliciously smooth' taste for all cheesepaste
                lovers."
              </article>
            </div>
            <article className="about-desc">
              Chaunie's is a small barbadian business that was established in
              2018, and owned by a diligent female. Since then, Chaunie's has
              been operating as one of Barbados' catering services, with special
              orders for events and their standard 6oz and 18oz cheesepaste.
              Finally, Chaunie's cheesepaste is known for its 'deliciously
              smooth' taste, that is guaranteed to make you want more.
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

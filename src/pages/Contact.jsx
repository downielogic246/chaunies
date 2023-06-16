import React from "react";
import Cheese from "../components/Designs/Cheese";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <section className="contact-container">
        <div className="socialMedia-container">
          <ul className="socialMedia">
            <li>
              <a href="https://instagram.com/chaunies246?igshid=MTg0ZDhmNDA=">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <h2>instagram</h2>
            </li>
            <li>
              <a href="wa.link/9mc4s6">
                {" "}
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <h2>whatsapp</h2>
            </li>
          </ul>
          <div className="other-container">
            <i className="fa-sharp fa-solid fa-phone"></i>
            <br />
            <a href="tel:+12468383455">+1 (246) 838-3455</a>
            <br />
            <a href="mailto:chaunies246@outlook.com ? subject=Ask Chaunie Anything ">
              <br />
              <i className="fa-regular fa-envelope"></i>{" "}
            </a>
            <br />
            <a href="mailto:chaunies246@outlook.com ? subject=Ask Chaunie Anything ">
              chaunies246@outlook.com
            </a>
          </div>
          <div className="outro">
            <p>contact us anytime!!</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

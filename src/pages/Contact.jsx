import React from "react";

const Contact = () => {
  return (
    <>
      <section className="main-area">
        <section className="contact-container">
          <div className="contact-title">
            <h1>contact us</h1>
          </div>
          <div className="screen-outer">
            <div className="screen-inner">
              <div className="notch">
                <div className="speaker"></div>
                <div className="camera"></div>
                <div className="vol-up"></div>
                <div className="vol-down"></div>
                <div className="power"></div>
              </div>
              <ul className="socialMedia">
                <li>
                  <a
                    href="https://instagram.com/chaunies246?igshid=MTg0ZDhmNDA="
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram"></i>
                    <h2>Instagram</h2>
                  </a>
                </li>
                <li>
                  <a href="wa.link/9mc4s6" target="_blank">
                    <i className="fa-brands fa-whatsapp"></i>
                    <h2>Whatsapp</h2>
                  </a>
                </li>
                <li>
                  <a href="mailto:chaunies246@outlook.com ? subject=Ask Chaunie Anything">
                    <i className="fa-regular fa-envelope"></i>
                    <h2>chaunies246@outlook.com</h2>
                  </a>
                </li>
                <li>
                  <a href="tel:+12468383455">
                    <i className="fa-sharp fa-solid fa-phone"></i>
                    <h2>+1 (246) 838-3455</h2>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Contact;

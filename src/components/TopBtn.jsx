import React, { useState } from "react";

const TopBtn = () => {
  const [showBtn, setShowBtn] = useState("none");

  window.addEventListener("scroll", () => {
    let screenHeight = window.scrollY;

    setShowBtn(screenHeight >= 250 ? "flex" : "none");
  });

  return (
    <a
      href="#"
      className="toTop"
      title="Back to top"
      style={{ display: showBtn }}
    >
      <i className="fa fa-arrow-up" aria-hidden="true"></i>
    </a>
  );
};

export default TopBtn;

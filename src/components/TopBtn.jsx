import React, { useState } from "react";

const TopBtn = () => {
  const [showBtn, setShowBtn] = useState(0);

  window.addEventListener("scroll", () => {
    let screenHeight = window.scrollY;

    setShowBtn(screenHeight >= 250 ? 1 : 0);
  });

  return (
    <a
      href="#"
      className="toTop"
      title="Back to top"
      style={{ opacity: showBtn }}
    >
      <i className="fa fa-arrow-up" aria-hidden="true"></i>
    </a>
  );
};

export default TopBtn;

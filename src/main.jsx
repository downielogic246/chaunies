import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/home.css";
import "./css/index.css";
import "./css/topbtn.css";
import "./css/header.css";
import "./css/order.css";
import "./css/about.css";
import "./css/contact.css";
import "./css/cheese.css";
import "./css/footer.css";
import "./css/services.css";

// window.onload(() => {
//   if (window.location.href != "http://localhost:5173/chaunies.io/")
//     window.location.href = "http://localhost:5173/chaunies.io/";
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

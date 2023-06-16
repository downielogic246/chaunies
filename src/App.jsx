import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/chaunies.io" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="chaunies.io/order" element={<Order />} />
            <Route path="chaunies.io/services" element={<Services />} />
            <Route path="chaunies.io/about" element={<About />} />
            <Route path="chaunies.io/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;

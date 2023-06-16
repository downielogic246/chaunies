import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Cheese from "./components/Designs/Cheese";
import TopBtn from "./components/TopBtn";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/Notfound";

const App = () => {
  return (
    <>
      <Nav />
      <Cheese />
      <TopBtn />
      <Routes>
        <Route path="/chaunies.io/" element={<Home />} />
        <Route path="/chaunies.io/order" element={<Order />} />
        <Route path="/chaunies.io/services" element={<Services />} />
        <Route path="/chaunies.io/about" element={<About />} />
        <Route path="/chaunies.io/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;

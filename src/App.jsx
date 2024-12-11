import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Work from "./pages/Work/Work"
import Contact from "./pages/Contact/Contact"
const App = () => {
  return (
    <div className="w-full h-full relative">
      <div className="absolute top-28 left-24 bg-orange-600 w-28 h-28 rounded-full"></div>
      <div className="absolute bg-pink-700 w-20 h-20 top-[720px] left-[481px] rounded-md"></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

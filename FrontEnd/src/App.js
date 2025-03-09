import React from "react";
import { Routes, Route } from "react-router-dom";
import ImageCarousel from "./components/Carousel.js";
import Navbar from "./components/Navbar.js";
import "./styles.css";
import "./global.css";
import Footer from "./components/Footer.js";
import Sections from "./components/Section.js";
import Checkout from "./components/Checkout.js";
import { CartProvider } from "./context/CartContext";

const Home = () => (
  <>
    <h1 className="shop-title text-center mt-3">B-LOAD KITCHEN</h1>
    <ImageCarousel />
    <Sections />
  </>
);

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;

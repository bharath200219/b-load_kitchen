import React from "react";
import carouselData from "../data/carouselData.js";
import "../styles/carousel.css"; // ✅ Import CSS file

const ImageCarousel = () => {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {carouselData.map((item, index) => (
          <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={item.id}>
            <img src={item.src} className="d-block w-100 carousel-img" alt={item.alt} />
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
};

export default ImageCarousel;

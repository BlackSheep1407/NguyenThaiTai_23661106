import React, { useState, useEffect } from "react";
import "./assets/css/BannerSlider.css";

// Import các ảnh từ assets
import banner1 from "./assets/images/banner1.jpg";
import banner2 from "./assets/images/banner2.jpg";
import banner3 from "./assets/images/banner3.jpg";

const BannerSlider = () => {
  const images = [banner1, banner2, banner3];
  const [current, setCurrent] = useState(0);

  // Chuyển slide tự động
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="banner-slider">
      {images.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
        >
          <img src={img} alt={`banner ${index + 1}`} />
        </div>
      ))}

      {/* Nút điều hướng */}
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>

      {/* Dấu chấm chỉ slide */}
      <div className="dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === current ? "active" : ""}`}
            onClick={() => setCurrent(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;

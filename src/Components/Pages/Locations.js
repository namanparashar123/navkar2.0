import React, { useState } from "react";
import "./Locations.css";
import toronto from "../images/Toronto1.jpeg";
import winnipeg from "../images/winni.png";
import london from "../images/London.jpeg";
import brandon from "../images/brandon.jpeg";

const Locations = () => {
  const slides = [
    { imageUrl: `${winnipeg}`, title: "Winnipeg, MB" },
    { imageUrl: `${toronto}`, title: "Toronto, ON" },
    { imageUrl: `${london}`, title: "London, ON" },
    { imageUrl: `${brandon}`, title: "Brandon, MB" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const containerStyles = {
    width: "900px",
    height: "300px",
    margin: "0 auto",
  };

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].imageUrl})`,
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "-32px",
    fontSize: "45px",
    color: "white",
    zIndex: 1,
    cursor: "pointer",
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "-32px",
    fontSize: "45px",
    color: "white",
    zIndex: 1,
    cursor: "pointer",
  };

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <div className="prime_container">
        <div style={containerStyles}>
          <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrev}>
              ❰
            </div>
            <div style={rightArrowStyles} onClick={goToNext}>
              ❱
            </div>
            <div style={slideStyles}></div>
          </div>
        </div>
      </div>
      <div className="locations_list">
        <p className="location_content">
          The following cities are where Navkar Courier is now in operation:
        </p>
          <div className="topRow">
            <div className="box">Winnipeg</div>
            <div className="box">Toronto</div>
            <div className="box">Kenora</div>
          </div>
          <div className="bottomRow">
            <div className="box">Brandon</div>
            <div className="box">London</div>
          </div>
        </div>
      </div>
  );
};

export default Locations;

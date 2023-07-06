import React, { useState } from "react";

const Slide = ({ slides, slidesToPreview }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => {
      const nextSlide = prevSlide + 1;
      const lastSlideIndex = slides.length - 1;
      const newCurrentSlide =
        nextSlide > lastSlideIndex ? nextSlide % slides.length : nextSlide;
      return newCurrentSlide;
    });
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => {
      const prevSlideIndex = prevSlide - 1;
      const newCurrentSlide =
        prevSlideIndex < 0 ? slides.length - 1 : prevSlideIndex;
      return newCurrentSlide;
    });
  };

  const slideContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const slideItemStyle = {
    width: `${100 / slidesToPreview}%`,
    height: "200px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    fontWeight: "bold",
    color: "white",
  };

  const buttonStyle = {
    padding: "8px 16px",
    backgroundColor: "lightgray",
    border: "none",
    borderRadius: "4px",
    margin: "0 8px",
    cursor: "pointer",
  };

  const previewedSlides = slides.slice(
    currentSlide,
    currentSlide + slidesToPreview
  );

  // If the current slide index is close to the end, add additional slides from the beginning
  if (currentSlide > slides.length - slidesToPreview) {
    const additionalSlides = slides.slice(
      0,
      slidesToPreview - previewedSlides.length
    );
    previewedSlides.push(...additionalSlides);
  }

  return (
    <div style={slideContainerStyle}>
      <button className="light-rounded-btn-turquoise" onClick={goToPrevSlide}>
        Prev
      </button>
      {previewedSlides.map((slide, index) => (
        <div key={index} style={slideItemStyle}>
          {slide}
        </div>
      ))}
      <button className="light-rounded-btn-turquoise" onClick={goToNextSlide}>
        Next
      </button>
    </div>
  );
};

export default Slide;

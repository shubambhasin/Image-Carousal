import React, { useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import { ImageData } from "../data/ImageData";
const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = ImageData.length;

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  // react-icons size is multiple of 14px 1x ,2x ,3x, 4x, 5x

  console.log(currentSlide);
  return (
    <div className="slider-container">
      <FcPrevious className="prev" size={42} onClick={prevSlide} />
      <FcNext className="next" size={42} onClick={nextSlide} />
      <div className="carousal">
        {slides.map((slide, index) => {
          return (
            <div className={currentSlide === index ? "slide active" : "slide"}>
              {currentSlide === index ? (
                <img
                  className="slide-image"
                  src={slide.images}
                  alt="carousal-pics"
                  key={index}
                />
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>

      <footer>
        By{" "}
        <strong>
          <a href="https://github.com/shubambhasin">Shubam Bhasin</a>
        </strong>
      </footer>
    </div>
  );
};

export default Slider;

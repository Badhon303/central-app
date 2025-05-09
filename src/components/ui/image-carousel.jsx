import React, { useState, useEffect, useCallback  } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageCarousel = ({
  images,
  mobileImages,
  autoplay = true,
  delay = 5000,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // images array based on device
  const displayImages = isMobile && mobileImages ? mobileImages : images;

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % displayImages.length);
  }, [displayImages.length]);

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + displayImages.length) % displayImages.length
    );
  };

  useEffect(() => {
    let interval;
    if (autoplay && !isHovering) {
      interval = setInterval(handleNext, delay);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, delay, isHovering, handleNext]);

  return (
    <div
      className={`relative w-full h-full ${className || ""}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Image Slides */}
      <div className="absolute inset-0 w-full h-full">
        {displayImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-fit"
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={handlePrevious}
        className={`absolute w-fit left-4 sm:left-auto sm:right-20 top-[calc(50%-12rem)] lg:top-[calc(90%-8rem)] transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 focus:none transition-colors`}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={handleNext}
        className={`absolute w-fit right-4 top-[calc(50%-12rem)] lg:top-[calc(90%-8rem)] transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 focus:none transition-colors`}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide indicators */}
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full focus:outline-none transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default ImageCarousel;

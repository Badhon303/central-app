import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageCarousel = ({
  images,
  mobileImages,
  titles,
  subtexts,
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
      {/* image Slides */}
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
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 transform translate-y-[-14%] md:translate-y-[-10%]">
              <div
                style={{
                  background:
                    "linear-gradient(to right, rgba(59, 130, 246, 0.7), rgba(6, 182, 212, 0.7), rgba(16, 185, 129, 0.7))",
                }}
                className="text-white text-center px-6 py-4 rounded-3xl max-w-lg md:max-w-2xl"
              >
                {" "}
                <h1 className="text-3xl md:text-5xl font-bold">
                  {titles[index]}
                </h1>
                <p className="text-lg md:text-xl mt-2">{subtexts[index]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* navigation buttons */}
      <button
        onClick={handlePrevious}
        className={`absolute w-fit left-4 md:left-auto md:right-20 top-[calc(50%-10rem)] md:top-[calc(90%-10rem)] transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 focus:none transition-colors`}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={handleNext}
        className={`absolute w-fit right-4 top-[calc(50%-10rem)] md:top-[calc(90%-10rem)] transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 focus:none transition-colors`}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default ImageCarousel;

"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";

export const Slider = ({
  images,
  mobileImages,
  children,
  className,
  autoplay = true,
  direction = "up",
  delay = 10000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState([]);
  const [loadedMobileImages, setLoadedMobileImages] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  //appropriate length
  const slideCounts = useMemo(
    () => ({
      desktop: images.length,
      mobile: mobileImages?.length || images.length,
    }),
    [images.length, mobileImages?.length]
  );

  // current slide count
  const currentSlideCount = isMobile ? slideCounts.mobile : slideCounts.desktop;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === currentSlideCount ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? currentSlideCount - 1 : prevIndex - 1
    );
  };

  // Handle window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Image loading
  useEffect(() => {
    const loadImages = async (imageSet) => {
      return Promise.all(
        imageSet.map((image) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = image;
            img.onload = () => resolve(image);
            img.onerror = reject;
          });
        })
      );
    };

    const loadAllImages = async () => {
      setLoading(true);
      try {
        const [desktopLoaded, mobileLoaded] = await Promise.all([
          loadImages(images),
          mobileImages ? loadImages(mobileImages) : Promise.resolve([]),
        ]);
        setLoadedImages(desktopLoaded);
        setLoadedMobileImages(mobileLoaded);
      } catch (error) {
        console.error("Failed to load images", error);
      } finally {
        setLoading(false);
      }
    };

    loadAllImages();
  }, [images, mobileImages]);

  // Autoplay
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    let interval;
    if (autoplay && !loading) {
      interval = setInterval(() => {
        handleNext();
      }, delay);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, [loading, delay, autoplay, currentSlideCount]);

  const slideVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
    upExit: {
      opacity: 1,
      y: "-150%",
      transition: {
        duration: 0.7,
      },
    },
    downExit: {
      opacity: 1,
      y: "150%",
      transition: {
        duration: 0.7,
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;
  const hasMobileImages = loadedMobileImages.length > 0;

  return (
    <div
      className={cn(
        "overflow-hidden w-full h-screen relative flex items-center justify-center",
        className
      )}
      style={{ perspective: "1000px" }}
    >
      {areImagesLoaded && children}

      {areImagesLoaded && (
        <AnimatePresence mode="wait">
          {/* Desktop Images */}
          <motion.img
            key={`desktop-${currentIndex}`}
            src={loadedImages[currentIndex % loadedImages.length]}
            initial="initial"
            animate="visible"
            exit={direction === "up" ? "upExit" : "downExit"}
            variants={slideVariants}
            className="hidden md:block h-full w-full absolute inset-0 object-cover"
            alt={`Slide ${currentIndex + 1}`}
          />

          {/* Mobile Images */}
          {hasMobileImages ? (
            <motion.img
              key={`mobile-${currentIndex}`}
              src={loadedMobileImages[currentIndex % loadedMobileImages.length]}
              initial="initial"
              animate="visible"
              exit={direction === "up" ? "upExit" : "downExit"}
              variants={slideVariants}
              className="md:hidden h-full w-full absolute inset-0 object-fit"
              alt={`Slide ${currentIndex + 1} (Mobile)`}
            />
          ) : (
            <motion.img
              key={`fallback-${currentIndex}`}
              src={loadedImages[currentIndex % loadedImages.length]}
              initial="initial"
              animate="visible"
              exit={direction === "up" ? "upExit" : "downExit"}
              variants={slideVariants}
              className="md:hidden h-full w-full absolute inset-0 object-cover"
              alt={`Slide ${currentIndex + 1}`}
            />
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

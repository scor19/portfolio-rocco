import { motion, useMotionValue } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

const DRAG_BUFFER = 50;

const ImageCarousel = ({ images }) => {
  const dragConstraints = { left: 0, right: 0 };

  const [isDragging, setIsDragging] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);

  const dragX = useMotionValue(0);

  const onDragStart = () => {
    setIsDragging(true);
  };

  const onDragEnd = () => {
    setIsDragging(false);
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < images.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };

  const handleKeyDown = useCallback(
    (event) => {
      if (isFocused) {
        if (event.key === "ArrowRight" && imgIndex < images.length - 1) {
          setImgIndex((prev) => prev + 1);
        } else if (event.key === "ArrowLeft" && imgIndex > 0) {
          setImgIndex((prev) => prev - 1);
        }
      }
    },
    [imgIndex, images.length, isFocused]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <>
      <motion.div
        drag="x"
        dragConstraints={dragConstraints}
        style={{ x: dragX }}
        animate={{ translateX: `-${imgIndex * 100}%` }}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        className="flex cursor-grab active:cursor-grabbing"
      >
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Carousel Image ${index + 1}`}
            className="w-[272px] h-[572px] flex-shrink-0 z-[10]"
            draggable="false"
            tabIndex={0}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        ))}
      </motion.div>
      <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2">
        <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} images={images} />
      </div>
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex, images }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {images.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`w-2 h-2 rounded-full transition-colors ${
              imgIndex === idx ? "bg-primary" : "bg-gray-300"
            }`}
          />
        );
      })}
    </div>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.array.isRequired,
};

Dots.propTypes = {
  imgIndex: PropTypes.number.isRequired,
  setImgIndex: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
};

export default ImageCarousel;

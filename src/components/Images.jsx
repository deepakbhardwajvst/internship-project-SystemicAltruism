import React, { useState, useEffect } from "react";
import image1 from "../assets/Untitled (1).png";
import image2 from "../assets/Untitled (3).png";
import image3 from "../assets/Untitled (4).png";
import image4 from "../assets/Untitled (5).png";
import image5 from "../assets/Untitled (6).png";
import image6 from "../assets/Untitled (7).png";
import image7 from "../assets/Untitled (8).png";
import image8 from "../assets/Untitled (9).png";
import image9 from "../assets/Untitled (10).png";
import image10 from "../assets/Untitled (11).png";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

const Images = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex  h-96  justify-center items-center mb-[2rem]">
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="w-auto h-full rounded-lg object-cover"
      />
    </div>
  );
};

export default Images;

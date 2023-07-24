"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import louisa from "../../components/images/Louisa.jpeg";
import louisa2 from "../../components/images/Louisa2.jpeg";
import louisa3 from "../../components/images/Louisa3.jpeg";

const images = [louisa, louisa2, louisa3];

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {images.map((image, index) => (
        <div className="carousel-item w-full" key={index}>
          <Image src={image} className="rounded-md" />
        </div>
      ))}
    </>
  );
}

const team = () => {
  return (
    <div className="lg:h-[30rem] flex items-center lg:mx-20">
      {/* Louisa */}

      <div className="">
        <div className="w-80 carousel rounded-box drop-shadow-lg">
          <Carousel />
        </div>
      </div>

      {/* Filipa */}
    </div>
  );
};

export default team;

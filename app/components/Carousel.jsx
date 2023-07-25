"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import louisa from ".images/Louisa.jpeg";
import louisa2 from ".images/Louisa2.jpeg";
import louisa3 from ".images/Louisa3.jpeg";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const images = [louisa, louisa2, louisa3];


const CarouselTeam = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="lg:h-[30rem] flex items-center lg:mx-20">
      {/* Louisa */}
      <div className="">
        <div className="w-80 rounded-box drop-shadow-lg">
          <Carousel
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            autoPlay
            // interval={7000}
            infiniteLoop
            dynamicHeight
            selectedItem={currentSlide}
            onSwipeMove
          >
            {images.map((image, index) => (
              <div key={index}>
                <Image src={image} className="rounded-md" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      {/* Filipa */}
    </div>
  );
};

export default CarouselTeam;

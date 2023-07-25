"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import filipa from "../../components/images/filipa.jpeg";
import filipa2 from "../../components/images/filipa2.jpeg";
import filipa3 from "../../components/images/filipa3.jpeg";
import quotes1 from "../../components/images/quotes1.svg";
import quotes2 from "../../components/images/quotes2.svg";

import { Carousel } from "react-responsive-carousel";
import neuro from "../../components/images/neuro.svg";
import webdev from "../../components/images/webdev.svg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const images = [filipa, filipa2, filipa3];
// const imagesFilipa =[filipa, filipa1, filipa2];

const Filipa = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="lg:h-[30rem] flex items-center lg:mx-20">
        {/* Louisa */}
        <div className="">
          <div className="w-80 rounded-box drop-shadow-lg">
            <Carousel
              showThumbs={false}
              showIndicators={false}
              showStatus={false}
              autoPlay
              interval={10000}
              infiniteLoop
              dynamicHeight
              selectedItem={currentSlide}
              onSwipeMove>
              {images.map((image, index) => (
                <div key={index}>
                  <Image src={image} className="rounded-md" />
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="lg:ml-10">
          <h1 className="text-3xl lg:text-5xl lg:mb-2">Filipa Merino</h1>
          <p className="text-sm">
            <strong>Web Developer</strong> of Admin Virtuosa.
          </p>
          <hr className="horizontalLineTeam "></hr>

          <p className="text-md mb-2"> </p>
          <p className="text-md mb-2 text-justify">
            Filipa has a passion for psychology, photography, and design which
            give her a unique set of skills allowing her to bring a fresh
            perspective to every project she works on. Her knowledge of
            psychology helps her{" "}
            <strong>approach every project with empathy</strong> and her
            commitment to mental health is evident in everything she does.
          </p>
        </div>

        <hr className="verticalLineTeam ml-10"></hr>

        <div className="p-10 flex flex-col items-center justify-center ">
          <div className="flex flex-col justify-center items-center mb-5">
            <Image src={webdev} className="w-[30%] mr-5 mb-3" />
            <p className="text-sm text-center">Degree in Web Development</p>
          </div>
          <div className="flex flex-col justify-center items-center mb-5">
            <Image src={neuro} className="w-[30%] mr-5 mb-3" />
            <p className="text-sm text-center">Master in Neuropsychology</p>
          </div>
        </div>
      </div>

      <div className="bg-white relative ">
        <div className="mx-20 lg:h-[25rem] flex items-center">
          <div className="absolute top-10 left-40">
            <Image src={quotes1} className="w-32" />
          </div>
          <h1 className="text-lg lg:text-3xl mb-3 lg:mb-5 italic text-center mx-64">
            " I embrace each line of code with care, knowing it shapes
            experiences and bridges connections. "
          </h1>
          <div className="absolute bottom-10 right-40">
            <Image src={quotes2} className="w-32" />
          </div>
        </div>
      </div>

      <div className=" flex flex-col items-center  mx-20 lg:h-[15rem]">
        <hr className="horizontalLineCard mt-10"></hr>
        <p className="my-10 text-center">
          Filipa is a certified web developer who is on a mission to help business owners stand out
          online. With her extensive knowledge of how the human brain processes
          information and interacts with technology, she is able to understand
          the science behind user behavior and use it to help design websites
          that are both user-friendly and engaging.
        </p>
      </div>

      {/* Filipa */}
    </div>
  );
};

export default Filipa;

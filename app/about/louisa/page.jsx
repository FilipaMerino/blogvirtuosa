"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import louisa from "../../components/images/Louisa.jpeg";
import louisa2 from "../../components/images/Louisa2.jpeg";
import louisa3 from "../../components/images/Louisa3.jpeg";
import quotes1 from "../../components/images/quotes1.svg";
import quotes2 from "../../components/images/quotes2.svg";

import { Carousel } from "react-responsive-carousel";
import degree from "../../components/images/degree.svg";
import experience from "../../components/images/experience.svg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const images = [louisa, louisa2, louisa3];
// const imagesFilipa =[filipa, filipa1, filipa2];

const Louisa = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="lg:h-[30rem] flex flex-col lg:flex lg:flex-row lg:items-center lg:mx-20">
        {/* Louisa */}
        <div className="flex justify-center my-10">
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

        <div className="flex flex-col items-center mt-5 lg:items-start lg:ml-10">
          <h1 className="text-3xl lg:text-5xl lg:mb-2">Louisa Thiessen</h1>
          <p className="text-sm">
            <strong>Owner</strong> and <strong>founder</strong> of Admin
            Virtuosa.
          </p>
          <hr className="horizontalLineTeam "></hr>

          <p className="text-md mx-10 lg:mx-0 mt-2 lg:my-2 text-justify">
            {" "}
            Louisa is an experienced administrative professional with a passion
            for <strong>sustainable business growth</strong>.
          </p>
          <p className="text-md mx-10 lg:mx-0 my-2 text-justify">
            As a mom and business owner, she understands the importance of
            having proper systems in place so that everything can run smoothly
            on the business side of things. She has worked to balance her
            business and personal life, allowing her more freedom to conquer her
            goals and focus on the core aspects of her life.
          </p>
        </div>

        <hr className="verticalLineTeam ml-10 hidden lg:block"></hr>

        <div className="p-10 flex flex-col items-center justify-center ">
        <div className="flex lg:flex-col justify-center items-center mb-5">
            <Image src={degree} className="w-[20%] lg:w-[30%] mr-5 mb-3" />
            <p className="text-sm text-center">Degree in Administration</p>
          </div>
          <div className="flex lg:flex-col justify-center items-center mb-5">
            <Image src={experience} className="w-[20%] lg:w-[30%] mr-5 mb-3" />
            <p className="text-sm text-center">Over 15 Years of Experience</p>
          </div>
        </div>
      </div>

      <div className="bg-white relative ">
      <div className="lg:mx-20 h-[30rem] lg:h-[20rem]  flex items-center  ">
          <div className="absolute top-10 left-40 hidden lg:block">
            <Image src={quotes1} className="w-32" />
          </div>
          <h1 className="text-xl lg:text-3xl mb-3 lg:mb-5 italic text-center mx-10 lg:mx-64">
            " I am passionate about joining forces with business owners and
            helping them do business in a healthy way. "
          </h1>
          <div className="absolute bottom-10 right-40 hidden lg:block">
            <Image src={quotes2} className="w-32" />
          </div>
        </div>
      </div>

      <div className=" flex flex-col items-center  mx-10 lg:mx-20 lg:h-[15rem]">
        <hr className="horizontalLineCard mt-10"></hr>
        <p className=" lg:text-md my-10 lg:my-10 text-center lg:text-justify">
          Admin Virtuosa is a result of her personal burnout, and her desire to
          help others avoid the same mistakes. She firmly believes that no one
          is meant to run a business all on their own but that everyone has a
          unique gifting. Through collaboration and partnerships, Admin Virtuosa
          can help any business operate in a healthier way.
        </p>
      </div>

    </div>
  );
};

export default Louisa;

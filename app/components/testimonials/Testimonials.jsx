"use client";

import { useState, useEffect, useContext } from "react";
import AddTestimonial from "./AddTestimonial";
import { UserContext } from "../../contexts/UserContext";

import { BsTrash3Fill } from "react-icons/bs";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);



  const handlePrevious = () => {
    // Find the index of the current testimonial ID in the array
    const currentIndex = testimonials.findIndex((testimonial) => testimonial.id === currentSlide);

    // Find the previous testimonial ID based on the current index
    const previousTestId = testimonials[
      (currentIndex - 1 + testimonials.length) % testimonials.length
    ].id;

    // Update the currentSlide state with the previous testimonial ID
    setCurrentSlide(previousTestId);
  };

  const handleNext = () => {
    // Find the index of the current testimonial ID in the array
    const currentIndex = testimonials.findIndex((testimonial) => testimonial.id === currentSlide);

    // Find the next testimonial ID based on the current index
    const nextTestId = testimonials[(currentIndex + 1) % testimonials.length].id;

    // Update the currentSlide state with the next testimonial ID
    setCurrentSlide(nextTestId);
  };




  const { currentUser } = useContext(UserContext);

  const [testimonials, setTestimonials] = useState([]);

  const fetchTestimonials = async () => {
    const res = await fetch("/api/testimonials");
    const testimonials = await res.json();

    setTestimonials([...testimonials]);
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const deleteTestimonial = async (id) => {
    const res = await fetch(`/api/testimonials/${id}`, {
      method: "DELETE",
    });

    fetchTestimonials();
  };

  return (

    <div className="lg:h-[40rem] flex justify-center">
      <div className="flex items-center mx-20">


        <div className="w-[50%] mr-20">
          {/* AQUI VAI ESTAR A CENA COM O TESTIMONIAL A OCUPAR METADE */}
          <h1 className="text-3xl lg:text-5xl mb-3">Testimonials</h1>
          <hr className="horizontalLineWebDev my-5"></hr>

          <p className="text-md md:text-lg">
            Our customers' happiness is our top priority, and we're humbled by
            the kind words they share.
          </p>
        </div>





          {/* Aqui vai estar o testimonial */}
          <div className="w-[55%] flex ">
            <div className="carousel ">
              {testimonials.map((testimonial) => (
                <div className="carousel-item relative w-full flex flex-col">
                  <div className="flex justify-center">
                    <img src={testimonial.avatar} className="w-32"></img>
                  </div>

                  <div className="flex flex-col items-center">
                    <h4 className="text-xl md:text-2xl font-semibold mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs md:text-sm italic mb-5">
                      {testimonial.companyName}
                    </p>
                    <p className="text-md italic mx-20 text-center">
                      {testimonial.testimonialText}
                    </p>
                  </div>

                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                    <button
                      onClick={handlePrevious}
                      className="btn btn-circle bg-[#f2f2f2]  text-[#333333] hover:bg-[#e0e0e0] border-none" >
                      ❮
                    </button>
                    <button
                      onClick={handleNext}
                      className="btn btn-circle bg-[#f2f2f2]  text-[#333333] hover:bg-[#e0e0e0] border-none">
                      ❯
                    </button>
                  </div>



                </div>
              ))}
            </div>
          </div>





        </div>
    </div>
  );
};

export default Testimonials;

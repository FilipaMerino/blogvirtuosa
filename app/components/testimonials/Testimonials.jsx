"use client";

import { useState, useEffect, useContext } from "react";
import AddTestimonial from "./AddTestimonial";
import { UserContext } from "../../contexts/UserContext";

import { BsTrash3Fill } from "react-icons/bs";

const Testimonials = () => {
  const { currentUser } = useContext(UserContext);
  const [testimonials, setTestimonials] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const fetchTestimonials = async () => {
    const res = await fetch("/api/testimonials");
    const testimonialsData = await res.json();

    setTestimonials(testimonialsData);
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handlePrevious = () => {
    if (testimonials.length === 0) return;

    setCurrentSlide(
      (currentSlide - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    if (testimonials.length === 0) return;

    setCurrentSlide((currentSlide + 1) % testimonials.length);
  };

  const deleteTestimonial = async (id) => {
    const res = await fetch(`/api/testimonials/${id}`, {
      method: "DELETE",
    });

    fetchTestimonials();
  };

  return (
    <div className="lg:h-[40rem] flex justify-center">
      <div className="flex flex-col lg:flex-row items-center mx-10 lg:mx-20">
        <div className="lg:w-[40%] lg:mr-20 flex flex-col items-center lg:items-start my-10 p-5 lg:my-0 lx:p-0">
          {/* AQUI VAI ESTAR A CENA COM O TESTIMONIAL A OCUPAR METADE */}
          <h1 className="text-3xl lg:text-5xl mb-3">Testimonials</h1>
          <hr className="horizontalLineWebDev my-5 hidden lg:block"></hr>

          <p className="text-md md:text-lg mb-3 text-center lg:text-start">
            Our customers are at the heart of everything we do. Their
            satisfaction isn't just a goal, it's our measure of success. Here's
            what some of our valued customers have to say about their
            experiences with us.
          </p>





          <AddTestimonial refreshTestimonials={fetchTestimonials}/>
        </div>

        {/* Aqui vai estar o testimonial */}
        <div className="lg:w-[55%] flex ">
          <div className="carousel ">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`carousel-item relative w-full flex flex-col ${
                  index === currentSlide ? "visible" : "hidden"
                }`}>
                <div className="flex justify-center">
                  <img
                    src={testimonial.avatar}
                    className="w-32"
                    alt="testimonial"></img>
                </div>

                <div className="flex flex-col items-center p-10 lg:p-0">
                  <h4 className="text-xl md:text-2xl font-semibold mb-1">
                    {testimonial.name}
                  </h4>

                  <p className="text-xs md:text-sm italic mb-5">
                    {testimonial.companyName}
                  </p>
                  <p className="text-sm italic  lg:mx-20 text-center">
                    {testimonial.testimonialText}
                  </p>

                  {currentUser && (
                    <button
                      className="btn mt-10"
                      onClick={() => deleteTestimonial(testimonial.id)}>
                      <BsTrash3Fill className="hover:text-[#fb653e]" />
                      Delete Testimonial
                    </button>
                  )}
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 lg:top-1/2 top-10 ">
                  <button
                    onClick={handlePrevious}
                    className="btn btn-circle  bg-[#f2f2f2]  text-[#333333] hover:bg-[#e0e0e0] border-none">
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

"use client";

import { useState, useEffect, useContext } from "react";
import AddTestimonial from "./AddTestimonial";
import { UserContext } from "../../contexts/UserContext";

import { BsTrash3Fill } from "react-icons/bs";

const Testimonials = () => {
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
    // <div className="items-center p-10">
    //   <AddTestimonial refreshTestimonials={fetchTestimonials} />

    //   <div className="flex justify-center mb-5">
    //       <hr className="horizontalLineCard my-3"></hr>
    //     </div>
    //   <div className="flex flex-col items-center justify-center">
    //     <h1 className="text-3xl lg:text-5xl mb-3">
    //       Testimonials
    //     </h1>
    //     <p className="text-sm md:text-md">
    //       Our customers' happiness is our top priority, and we're humbled by the
    //       kind words they share.{" "}
    //     </p>
    //   </div>

    //   {testimonials.map((testimonial) => (
    //     <div className="flex flex-col items-center justify-center my-10">
    //     <div>
    //       <img
    //         src={testimonial.avatar}
    //         alt="testimonial"
    //         className="w-32"></img>
    //     </div>
    //     <div className="flex flex-col items-center">
    //       <h4 className="text-xl md:text-2xl font-semibold mb-1">{testimonial.name}</h4>
    //       <p className="text-xs md:text-sm italic mb-5">{testimonial.companyName}</p>
    //       <p className="mx-20 text-center">{testimonial.testimonialText}</p>
    //     </div>

    //     </div>
    //   ))}
    // </div>

    <div className="lg:h-[40rem]">
      <div className="flex items-center">
        <div className="w-[50%]">
          {/* AQUI VAI ESTAR A CENA COM O TESTIMONIAL A OCUPAR METADE */}
          <h1 className="text-3xl lg:text-5xl mb-3">Testimonials</h1>

          <p className="text-md md:text-lg">
            Our customers' happiness is our top priority, and we're humbled by
            the kind words they share.
          </p>
        </div>

        <div>{/* Aqui vai estar o testimonial */}





        </div>
      </div>
    </div>
  );
};

export default Testimonials;

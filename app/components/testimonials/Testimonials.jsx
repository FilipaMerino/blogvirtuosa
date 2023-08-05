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
    <div className="flex flex-col items-center p-10">
      <AddTestimonial refreshTestimonials={fetchTestimonials} />

      {testimonials.map((testimonial) => (



          <div>
            <img src={testimonial.avatar} alt="testimonial" className="w-32"></img>
          </div>







        /* <div className="mb-10">
          <div className=" flex flex-col items-center w-[30rem] lg:w-[40rem] lg:mb-10">
            <h3 className="text-xl lg:text-3xl mb-10 text-center">
              {testimonial.name}
            </h3>
            <figure>
              <img
                src={testimonial.avatar}
                alt="avatar"
                className="hover:brightness-90 transition-all duration-200 w-[40rem] mb-5 rounded"
              />
            </figure>
            <div className="">
              <p className="text-sm mb-5 text-justify">
                {testimonial.companyName}
              </p>

              <div className="flex justify-end">
                {currentUser && (
                  <button onClick={() => deleteTestimonial(testimonial.id)}>
                    <BsTrash3Fill className="hover:text-[#fb653e]" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div> */
      ))}
    </div>
  );
};

export default Testimonials;

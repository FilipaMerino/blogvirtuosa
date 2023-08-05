"use client";

import { useState, useRef, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { uuid } from "uuidv4";
import axios from "axios";

const AddTestimonial = ({ refreshTestimonials }) => {
  const { currentUser } = useContext(UserContext);

  const [modalOpen, setModalOpen] = useState(false);

  const [newTestimonialAvatar, setTestimonialAvatar] = useState("");
  let [newTestimonialName, setTestimonialName] = useState("");
  let [newTestimonialCompanyName, setTestimonialCompanyName] = useState("");
  let [newTestimonialText, setTestimonialText] = useState("");
  const uploadPreset = "ujv26lrm";




  const fileInputRef = useRef(null);

  const handleSubmitNewTestimonial = async (e) => {
    e.preventDefault();

    if (newTestimonialAvatar) {
      const formData = new FormData();
      formData.append("file", newTestimonialAvatar);
      formData.append("upload_preset", uploadPreset);

      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dugiameli/image/upload",
          formData
        );


        const newTestimonialAvatar = response.data.secure_url;

        const res = await fetch("/api/testimonials/", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            id: uuid(),

            avatar: newTestimonialAvatar,
            name: newTestimonialName,
            companyName: newTestimonialCompanyName,
            testimonialText: newTestimonialText,
          }),
        });



        if (res.ok) {
          setTestimonialName("");
          setTestimonialCompanyName("")
          setTestimonialText("")
          setModalOpen(false);
          refreshTestimonials();
        }
      } catch (error) {
        console.error(error);
      }
    }
  };




  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setTestimonialAvatar(file);
  };

  return (
    <div>
      {currentUser && (
        <button className="btn mb-5" onClick={() => setModalOpen(true)}>
          Add New Testimonial
        </button>
      )}

      <dialog
        id="my_modal_3"
        className={`modal ${modalOpen ? "modal-open" : ""}`}>
        <form
          method="POST"
          className="modal-box"
          onSubmit={handleSubmitNewTestimonial}>
          <button
            onClick={() => setModalOpen(false)}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>

          <h3 className="font-bold text-2xl mb-10 text-center">Add New Testimonial</h3>

          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Enter Name"
              className="input input-bordered mb-5 text-lg"
              value={newTestimonialName}
              onChange={(e) => {
                setTestimonialName(e.target.value);
              }}
            />


<input
              type="text"
              placeholder="Enter Company Name"
              className="input input-bordered mb-5 text-lg"
              value={newTestimonialCompanyName}
              onChange={(e) => {
                setTestimonialCompanyName(e.target.value);
              }}
            />




            <textarea
              className="textarea textarea-bordered text-lg mb-5"
              placeholder="Testimonial Content"
              value={newTestimonialText}
              onChange={(e) => {
                setTestimonialText(e.target.value);
              }}></textarea>

            <input
              type="file"
              className="file-input file-input-bordered  mb-5"
              ref={fileInputRef}
              onChange={handleAvatarChange}
            />

            <button className="btn btn-primary ">Add Testimonial</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default AddTestimonial;

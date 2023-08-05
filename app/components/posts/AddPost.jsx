"use client";

import { useState, useEffect, useRef, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import { uuid } from "uuidv4";
import axios from "axios";

const AddPost = ({ refreshPosts }) => {
  const { currentUser } = useContext(UserContext);

  const [modalOpen, setModalOpen] = useState(false);
  let [newPostTitle, setNewPostTitle] = useState("");
  let [newPostContent, setNewPostContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const uploadPreset = "ujv26lrm";

  const fileInputRef = useRef(null);

  const handleSubmitNewPost = async (e) => {
    e.preventDefault();

    if (selectedImage) {
      const formData = new FormData();
      formData.append("file", selectedImage);
      formData.append("upload_preset", uploadPreset);

      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dugiameli/image/upload",
          formData
        );

        // Get the Cloudinary image URL from the response and store it as newPostImage

        const newPostImage = response.data.secure_url;

        const res = await fetch("/api/posts/", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            id: uuid(),
            title: newPostTitle,
            content: newPostContent,
            img: newPostImage,
            createdAt: new Date(),
          }),
        });

        if (res.ok) {
          setNewPostTitle("");
          setNewPostContent("");
          setModalOpen(false);
          refreshPosts();
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div>
      {currentUser && (
        <button className="btn mb-5" onClick={() => setModalOpen(true)}>
          Add New Post
        </button>
      )}

      <dialog
        id="my_modal_3"
        className={`modal ${modalOpen ? "modal-open" : ""}`}>
        <form
          method="POST"
          className="modal-box"
          onSubmit={handleSubmitNewPost}>
          <button
            onClick={() => setModalOpen(false)}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>

          <h3 className="font-bold text-2xl mb-10 text-center">Add New Post</h3>

          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Enter New Post Title"
              className="input input-bordered mb-5 text-lg"
              value={newPostTitle}
              onChange={(e) => {
                setNewPostTitle(e.target.value);
              }}
            />

            <textarea
              className="textarea textarea-bordered text-lg mb-5"
              placeholder="Post Content"
              value={newPostContent}
              onChange={(e) => {
                setNewPostContent(e.target.value);
              }}></textarea>

            <input
              type="file"
              className="file-input file-input-bordered  mb-5"
              ref={fileInputRef}
              onChange={handleImageChange}
            />

            <button className="btn btn-primary ">Add Post</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default AddPost;

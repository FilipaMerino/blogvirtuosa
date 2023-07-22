'use client';

import { useState } from "react";
import { uuid } from "uuidv4";

const AddPost = ({refreshPosts}) => {


  const [modalOpen, setModalOpen] = useState(false)
  let [newPostTitle, setNewPostTitle] = useState("");
  let [newPostContent, setNewPostContent] = useState("");
  let [newPostImage, setNewPostImage] = useState("");


  const handleSubmitNewPost = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/posts/", {

        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          id: uuid(),
          title: newPostTitle,
          content: newPostContent,
          img: "https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg"

        })

    })


    if(res.ok){
      setNewPostTitle("");
      setNewPostContent("");
      setModalOpen(false);
      refreshPosts();

    }
  };





  return (
    <div>
      {/* You can open the modal using ID.showModal() method */}
      <button className="btn mb-5" onClick={() => setModalOpen(true)}>
        open modal
      </button>
      <dialog id="my_modal_3" className={`modal ${modalOpen ? "modal-open" : "" }`}>
        <form
          method="POST"
          className="modal-box"
          onSubmit={handleSubmitNewPost}>




          <button onClick={() => setModalOpen(false)}className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>

          <h3 className="font-bold text-2xl mb-10 text-center">Add New Post</h3>

          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Enter New Post Title"
              className="input input-bordered mb-5 text-lg"
              value={newPostTitle}
              onChange={(e) => setNewPostTitle(e.target.value)}
            />

            <textarea
              className="textarea textarea-bordered text-lg mb-5"
              placeholder="Post Content"
              value={newPostContent}
              onChange={(e) => {setNewPostContent(e.target.value)}}></textarea>

            <button className="btn btn-primary">Add Post</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default AddPost;

"use client";

import { useState, useEffect } from "react";
import AddPost from "./AddPost";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await fetch("/api/posts");
    const posts = await res.json();
    const sortedPosts = posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    setPosts(sortedPosts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);



  return (
    <div className="flex flex-col items-center p-10">

      <AddPost  refreshPosts={fetchPosts} />

      {posts.map((post) => (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10">
          <figure>
            <img src={post.img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p>{post.content}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-link">Learn More</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;

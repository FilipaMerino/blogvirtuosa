"use client";

import { useState, useEffect } from "react";
import AddPost from "./AddPost";
import Link from "next/link";
import { BsTrash3Fill } from "react-icons/bs";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await fetch("/api/posts");
    const posts = await res.json();
    const sortedPosts = posts
      .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      .reverse();

    setPosts([...sortedPosts]);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const deletePost = async (id) => {
    const res = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });

    fetchPosts();
  };

  return (
    <div className="flex flex-col items-center p-10">
      <AddPost refreshPosts={fetchPosts} />

      {posts.map((post) => (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10">
          <figure>

            <Link href={`/blog/${post.id}`}>
              <img src={post.img} alt="post" />
            </Link>


          </figure>
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p>{post.content}</p>
            <div className="card-actions justify-end items-center">
              <Link href="" className="btn btn-link">
                Learn More
              </Link>
              <button onClick={() => deletePost(post.id)}>
                <BsTrash3Fill />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;

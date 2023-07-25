"use client";

import { useState, useEffect } from "react";
import AddPost from "./AddPost";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BsTrash3Fill } from "react-icons/bs";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
        <div className="mb-10">
          <div className=" flex flex-col items-center lg:w-[40rem] lg:mb-10">
            <h1 className="text-3xl lg:text-5xl mb-10">{post.title}</h1>
            <figure>
              <Link href={`/blog/${post.id}`}>
                <img src={post.img} alt="post" className="w-[40rem] mb-5 rounded" />
              </Link>
            </figure>
            <div className="">
              <p className="text-sm mb-5">{post.content}</p>

              <div className="flex justify-between">
                <div className="flex justify-start items-center ">
                  <Link
                    href=""
                    className="text-xs hover:underline hover:text-[#fb653e]">
                    Learn More
                  </Link>
                  <a href={post.href}>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="flex ml-2 text-sm  md:w-2"
                    />
                  </a>
                </div>

                <div className="flex justify-end">
                  <button onClick={() => deletePost(post.id)}>
                    <BsTrash3Fill className="hover:text-[#fb653e]"/>
                  </button>
                </div>
              </div>
          <hr className="horizontalLineBlog w-full mt-5"></hr>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;

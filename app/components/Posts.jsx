"use client";

import { useState, useEffect } from "react";
import AddPost from "./AddPost";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BsTrash3Fill } from "react-icons/bs";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "../../context/AuthContext";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useAuthContext();

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
      {user && <AddPost refreshPosts={fetchPosts} />}
      {/* <AddPost refreshPosts={fetchPosts} /> */}

      {posts.map((post) => (
        <div className="mb-10">
          <div className=" flex flex-col items-center w-[30rem] lg:w-[40rem] lg:mb-10">
            <h3 className="text-xl lg:text-3xl mb-10 text-center">
              {post.title}
            </h3>
            <figure>
              <Link href={`/blog/${post.id}`}>
                <img
                  src={post.img}
                  alt="post"
                  className="hover:brightness-90 transition-all duration-200 w-[40rem] mb-5 rounded"
                />
              </Link>
            </figure>
            <div className="">
              <p className="text-sm mb-5 text-justify">
                {post.content.substring(0, 180) + "..."}
              </p>

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

                {user && (
                  <div className="flex justify-end">
                    <button onClick={() => deletePost(post.id)}>
                      <BsTrash3Fill className="hover:text-[#fb653e]" />
                    </button>
                  </div>
                )}
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

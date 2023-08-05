'use client'
import React, { useEffect, useState } from 'react'

const page = ({ params }) => {
  const [currentPost, setCurrentPost] = useState([])
  console.log(params.postId)
  const fetchPost = async () => {
    const res = await fetch(`/api/posts/${params.postId}`)
    const post = await res.json()

    setCurrentPost(post)
    console.log(currentPost)
  }

  useEffect(() => {
    fetchPost()
  })

  if (!currentPost) {
    return <div>loading...</div>
  }
  return (
    <div className='mx-5 lg:mx-20 p-10 flex flex-col items-center justify-center'>
    <div>
    </div>
      <img src={currentPost.img} alt={currentPost.title} className='w-[40rem] rounded-lg' />
      <div className="flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl text-center lg:w-[40rem] mt-5">{currentPost.title}</h1>
      <hr className="horizontalLineCard my-5"></hr>

      <p className='text-sm md:text-[16px] lg:w-[50rem] text-justify leading-6'>{currentPost.content}</p>
      </div>
    </div>
  )
}

export default page

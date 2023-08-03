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
    <div>
      <div>{currentPost.title}</div>
      <div>{currentPost.content}</div>
    </div>
  )
}

export default page



import posts from './data.json';
import {NextResponse} from "next/server";



export async function GET(req){
  return NextResponse.json(posts);
}


export async function POST(req){
  const {title, content, img} = await req.json();

  const newPost = {
    title,
    content,
    img,

  };

    posts.push(newPost);

    
    return NextResponse.json("Post added successfuly");

}

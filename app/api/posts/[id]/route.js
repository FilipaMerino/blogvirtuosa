import posts from "../data.json";
import { NextResponse } from "next/server";


export const DELETE = async (request, {params}) => {

  const id = params.id;


  const index = posts.findIndex((post) => post.id === id)


  if(index !== -1){
    posts.slice(index, 1);
  }




  return new NextResponse({"Post deleted": id});

}

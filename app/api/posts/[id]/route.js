import posts from "../data.json";
import { NextResponse } from "next/server";


export const DELETE = async (request, {params}) => {

  const id = params.id;


  await prisma.post.delete({where: {id:id}})



  return new NextResponse({"Post deleted": id});

}

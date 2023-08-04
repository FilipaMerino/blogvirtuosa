import posts from "./data.json";
import { NextResponse } from "next/server";
import { prisma } from "../../db";
// import { v4 as uuidv4} from "uuid";

export async function GET(req) {
  const posts = await prisma.post.findMany();

  return NextResponse.json(posts);
}




export async function POST(req) {
  const { title, content, img } = await req.json();

  await prisma.post.create({
    data: {
      title: title,
      content: content,
      img: img,
    },
  });

  return NextResponse.json("Post added successfuly");
}

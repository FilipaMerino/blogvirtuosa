import { NextResponse } from "next/server";

// get a post by id
export const GET = async (request, { params }) => {
  const id = params.id;

  const post = await prisma.post.findUnique({
    where: { id: id },
  });

  return NextResponse.json(post);
};

export const DELETE = async (request, { params }) => {
  const id = params.id;

  await prisma.post.delete({ where: { id: id } });

  return new NextResponse({ "Post deleted": id });
};

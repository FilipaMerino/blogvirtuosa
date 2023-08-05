import { NextResponse } from "next/server";

// get a testimonial by id
export const GET = async (request, { params }) => {
  const id = params.id;

  const testimonial = await prisma.testimonial.findUnique({
    where: { id: id },
  });

  return NextResponse.json(testimonial);
};

export const DELETE = async (request, { params }) => {
  const id = params.id;

  await prisma.testimonial.delete({ where: { id: id } });

  return new NextResponse({ "Testimonial deleted": id });
};

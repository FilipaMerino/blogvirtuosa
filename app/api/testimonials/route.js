import { NextResponse } from "next/server";
import { prisma } from "../../db";



export async function GET(req) {
  const testimonials = await prisma.testimonial.findMany();

  return NextResponse.json(testimonials);
}




export async function POST(req) {
  const { avatar, name, companyName, testimonialText } = await req.json();

  await prisma.testimonial.create({
    data: {
      avatar: avatar,
      name: name,
      companyName: companyName,
      testimonialText: testimonialText,
    },
  });

  return NextResponse.json("Post added successfuly");
}

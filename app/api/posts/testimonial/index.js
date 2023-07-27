import { prisma } from "../../../db";

// This file will handle the GET (get all testimonials)
//  and POST (create a new testimonial) requests.

export default async function handle(req, res) {
  if (req.method === "GET") {
    // Makes a query to the databas
    //  to find all testimonials (findMany())
    const testimonials = await prisma.testimonial.findMany();
    // then we need to send the response we got to the testimonials
    res.json(testimonials);

    // This line means that,
    // "If the user is trying to create new testimonial"
  } else if (req.method === "POST") {
    // We will want to get the picture, name, etc from the testimonial;
    // This will be the body of our response

    const { picture, name, companyName, testimonialText } = req.body;

    // Makes a query to the database to create a new testimonial;
    // The create() method takes an object
    // that describes the data for the new testimonial

    const newTestimonial = await prisma.testimonial.create({
      data: { picture,
      name,
      companyName,
      testimonialText },
    });

    // sends a JSON response with the data of the new testimonial.
    res.json(newTestimonial);
  }
}

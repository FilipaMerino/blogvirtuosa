// This file will handle GET (get a single testimonial),
// DELETE (delete a testimonial),
// and PATCH (update a testimonial) requests
// for a testimonial with a specific id.

import { prisma } from "../../../db";


export default async function handle(req, res){

  const {id} = req.query;


  if (req.method === "GET"){
    const testimonial = await prisma.testimonial.findUnique({ where: { id } });
    res.json(testimonial);
  } else if(req.method === "DELETE"){
    const testimonial = await prisma.testimonial.delete({where: {id}});
  }else if (req.method === "PATCH"){
    const {picture, name, companyName, testimonialText} = req.body;
    const updatedTestimonial = await prisma.testimonial.update({where: {id},
    data: {picture, name, companyName, testimonialText},
  });

  res.json(updatedTestimonial)
  }

}

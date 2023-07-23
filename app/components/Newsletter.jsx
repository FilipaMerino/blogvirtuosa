"use client";

import subscribe from "./images/subscribe.png";

import Image from "next/image";

const Newsletter = () => {
  return (
    <div className="bg-[#f2f2ef5e] h-[31rem] flex items-center">
      <div className=" lg:flex lg:flex-row">
        <div className="relative h-[30rem] bg-cover bg-center  items-center lg:w-[25rem] ml-0 hidden lg:block">
          <Image
            src={subscribe}
            layout="fill"
            objectFit="cover"
            alt="subscribe"
          />
        </div>

        <div className="flex flex-col justify-center lg:mx-20 mx-5 p-5 ">
          <div className="flex mb-4">
            <h1 className="text-3xl lg:text-5xl">Subscribe Our</h1>
            <h1 className="text-3xl lg:text-5xl ml-3 text-[#fb653e]">
              Newsletter
            </h1>
          </div>

          <p className="mb-10 mx-5">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>

          <div className="flex ">

            <form method="POST">
              <div className="flex ">
                <input
                  type="email"
                  placeholder="Enter New Post Title"
                  className="inputNewsletter mb-5 text-md "
                  value="Email"
                />

                <button className=" newsletterButton" type="submit">
                  Add Post
                </button>
              </div>
            </form>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

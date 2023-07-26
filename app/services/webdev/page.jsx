import Image from "next/image";

import concept from "../../components/images/concept.png";
import design from "../../components/images/design.png";
import code from "../../components/images/code.png";
import rocket from "../../components/images/rocket.png";
import dots from "../../components/images/dots.svg";
import dev from "../../components/images/dev.jpeg";

const WebDev = () => {
  return (
    <div className="">
      <div className="flex items-center relative h-[35rem]">
        <Image src={dev} layout="fill" objectFit="cover" alt="banner"></Image>
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="flex  md:m-10 flex-col  p-5 absolute">
          <h1 className="text-3xl md:text-5xl text-white">Web Development</h1>
          <h2>We build awesome Websites</h2>
          <hr className="horizontalLineWebDev"></hr>

          <p className="text-white text-sm md:text-lg lg:mt-5 mr-[30rem] text-justify">
            We provide business and technology solutions that are directly
            related to our customers business strategy.
          </p>
        </div>
      </div>

      {/* <div className="flex items-center my-10">
        <div className="w-[100rem]">
          <Image src={dev2} objectFit="cover" className="w-90" />
        </div>

        <div className="ml-10 mr-20">
          <h1 className="text-3xl lg:text-5xl lg:mb-5">Web Development</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div> */}

      <div className="bg-[#f2f2ef5e]">
        <div className="lg:h-[30rem] lg:mb-5 flex flex-col justify-center mx-20 lg:mx-20 ">
          <div className="flex justify-center mb-3 lg:mb-5">
            <h1 className="text-3xl lg:text-5xl">Our</h1>
            <h1 className="text-[#fb653e] text-3xl lg:text-5xl lg:ml-3">
              Process
            </h1>
          </div>

          <div className="flex justify-center">
            <p className="text-center lg:mb-5">
              We are trying to make it as simple as possible. We don't believe
              in complex.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="flex flex-col lg:flex-row justify-around items-center ">
              <div className="flex flex-col items-center mb-10 lg:mb-0">
                <Image src={concept} className="w-16 lg:mb-3" />
                <h5 className="text-xl text-center lg:text-md mb-3 lg:mb-0">
                  Concept
                </h5>
                <p className="text-xs  lg:mt-3 text-center lg:w-[15rem]">
                  We begin by carefully studying your vision and business
                  requirements to help develop your concept into an actionable
                  plan.
                </p>
              </div>

              <div className="flex items-center">
                <Image src={dots} className="w-32 hidden lg:block" />
              </div>

              <div className="flex flex-col items-center mb-10 lg:mb-0">
                <Image src={design} className="w-16 lg:mb-3" />
                <h5 className="text-xl text-center lg:text-md mb-5 lg:mb-3">
                  Design & Estimation
                </h5>
                <p className="text-xs text-center lg:mt-3 lg:w-[15rem]">
                  We dive into the technical requirements to build a design and
                  outline a roadmap to build it.
                </p>
              </div>

              <div className="flex items-center">
                <Image src={dots} className="w-32 mx-3 hidden lg:block" />
              </div>

              <div className="flex flex-col items-center mb-10 lg:mb-0">
                <Image src={code} className="w-16 lg:mb-3" />
                <h5 className="text-xl text-center lg:text-md mb-5 lg:mb-3">
                  Development
                </h5>
                <p className="text-xs  lg:mt-3 text-center lg:w-[15rem]">
                  We are using the best-known practices & methodologies to
                  develop your project.
                </p>
              </div>

              <div className="flex items-center">
                <Image src={dots} className="w-32 mx-3 hidden lg:block" />
              </div>

              <div className="flex flex-col items-center mb-10 lg:mb-0">
                <Image src={rocket} className="w-16 lg:mb-3" />
                <h5 className="text-xl text-center lg:text-md mb-5 lg:mb-3">
                  Test & Launch
                </h5>
                <p className="text-xs  lg:mt-3 text-center lg:w-[15rem]">
                  We ensure the final product is well-tested and meets the needs
                  of your business, then create a winning launch strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDev;

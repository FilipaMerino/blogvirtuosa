import Image from "next/image";

import concept from "../../components/images/concept.png";
import design from "../../components/images/design.png";
import code from "../../components/images/code.png";
import rocket from "../../components/images/rocket.png";
import dots from "../../components/images/dots.svg";

const WebDev = () => {
  return (
    <div className="lg:mx-20">
      <div>
        <h1 className="text-3xl lg:text-5xl">Web Development</h1>
      </div>

      <div className="lg:h-[30rem] lg:mb-5 flex flex-col justify-center mx-20 lg:mx-0 ">
        <div className="flex justify-center mb-3 lg:mb-5">
          <h1 className="text-3xl lg:text-5xl">Our</h1>
          <h1 className="text-[#fb653e] text-3xl lg:text-5xl lg:ml-3">
            Process
          </h1>
        </div>

        <div className="flex justify-center">
          <p className="text-center lg:mb-5">
            We are trying to make it as simple as possible. We don't believe in
            complex.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="flex flex-col lg:flex-row justify-around items-center ">
            <div className="flex flex-col items-center mb-10 lg:mb-0">
              <Image src={concept} className="w-16 lg:mb-3" />
              <h5 className="text-xl text-center lg:text-md mb-3 lg:mb-0">Concept</h5>
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
              <h5 className="text-xl text-center lg:text-md mb-5 lg:mb-3">Design & Estimation</h5>
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
              <h5 className="text-xl text-center lg:text-md mb-5 lg:mb-3">Development</h5>
              <p className="text-xs  lg:mt-3 text-center lg:w-[15rem]">
                We are using the best-known practices & methodologies to develop
                your project.
              </p>
            </div>

            <div className="flex items-center">
              <Image src={dots} className="w-32 mx-3 hidden lg:block" />
            </div>

            <div className="flex flex-col items-center mb-10 lg:mb-0">
              <Image src={rocket} className="w-16 lg:mb-3" />
              <h5 className="text-xl text-center lg:text-md mb-5 lg:mb-3">Test & Launch</h5>
              <p className="text-xs  lg:mt-3 text-center lg:w-[15rem]">
                We ensure the final product is well-tested and meets the needs
                of your business, then create a winning launch strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDev;

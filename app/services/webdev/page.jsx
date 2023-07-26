import Image from "next/image";

import concept from "../../components/images/concept.png";
import design from "../../components/images/design.png";
import code from "../../components/images/code.png";
import rocket from "../../components/images/rocket.png";
import dots from "../../components/images/dots.svg";
import dev from "../../components/images/dev.jpeg";
import development from "../../components/images/development.svg";
import responsive from "../../components/images/responsive.svg";
import SEO from "../../components/images/SEO.svg";

const WebDev = () => {
  return (
    <div className="">
      {/* BANNER */}
      <div className="flex items-center relative h-[35rem]">
        <Image src={dev} layout="fill" objectFit="cover" alt="banner"></Image>
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="flex mx-5 md:mx-10 flex-col p-5 absolute">
          <h3 className="lg:text-lg mb-5 text-white">WEB DEVELOPMENT</h3>
          <h1 className="text-3xl md:text-5xl text-white mb-5 lg:w-[30rem] font-bold md:font-extrabold">
            Website Creation
          </h1>

          <hr className="horizontalLineWebDev"></hr>

          <h1 className="text-white text-xl md:text-4xl lg:w-[40rem] lg:mr-[30rem] mt-5">
            We design awesome websites that bring growth to your businesses.
          </h1>
        </div>
      </div>

      {/* DIV WITH PARAGRAPH ABOUT BUILDING WEBSITES */}
      <div className="lg:h-[30rem] lg:mx-20 flex justify-center">
        <div className="flex items-center">
          <div className="w-[50%] hidden lg:flex">
            <Image src={development} />
          </div>

          <div>
            <p className="text-lg lg:w-[25rem] mx-20 my-10 text-center lg:my-0">
              Our team will design you a powerful website optimized to drive
              engagement and transform visitors into loyal customers.
            </p>
          </div>
        </div>
      </div>

      {/* OUR PROCESS DIV */}
      <div className="bg-[#f2f2ef5e] ">
        <div className="flex justify-center lg:hidden p-10">
          <hr className="horizontalLineCard"></hr>
        </div>

        <div className="lg:h-[30rem] mt-0 flex flex-col justify-center mx-20 ">
          <div className="flex justify-center mb-3  lg:mb-5">
            <h1 className="text-3xl lg:text-5xl">Our</h1>
            <h1 className="text-[#fb653e] text-3xl lg:text-5xl ml-3">
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
                <Image src={concept} className="w-16 mb-3" />
                <h5 className="text-xl text-center lg:text-md mb-2 lg:mb-0">
                  Concept
                </h5>
                <p className="text-xs w-80 lg:mt-3 text-center lg:w-[15rem]">
                  We begin by carefully studying your vision and business
                  requirements to help develop your concept into an actionable
                  plan.
                </p>
              </div>

              <div className="flex items-center">
                <Image src={dots} className="w-32 hidden lg:block" />
              </div>

              <div className="flex flex-col items-center mb-10 lg:mb-0">
                <Image src={design} className="w-16 mb-3" />
                <h5 className="text-xl text-center lg:text-md mb-2 lg:mb-3">
                  Design & Estimation
                </h5>
                <p className="text-xs w-80 text-center lg:mt-3 lg:w-[15rem]">
                  We dive into the technical requirements to build a design and
                  outline a roadmap to build it.
                </p>
              </div>

              <div className="flex items-center">
                <Image src={dots} className="w-32 mx-3 hidden lg:block" />
              </div>

              <div className="flex flex-col items-center mb-10 lg:mb-0">
                <Image src={code} className="w-16 mb-3" />
                <h5 className="text-xl text-center lg:text-md mb-2 lg:mb-3">
                  Development
                </h5>
                <p className="text-xs w-80 lg:mt-3 text-center lg:w-[15rem]">
                  We are using the best-known practices & methodologies to
                  develop your project.
                </p>
              </div>

              <div className="flex items-center">
                <Image src={dots} className="w-32 mx-3 hidden lg:block" />
              </div>

              <div className="flex flex-col items-center mb-10 lg:mb-0">
                <Image src={rocket} className="w-16 mb-3" />
                <h5 className="text-xl text-center lg:text-md mb-2 lg:mb-3">
                  Test & Launch
                </h5>
                <p className="text-xs w-80 lg:mt-3 text-center lg:w-[15rem]">
                  We ensure the final product is well-tested and meets the needs
                  of your business, then create a winning launch strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* THIS IS OUR WEBSITES ARE DIV */}
      <div className="lg:h-[25rem] flex flex-col items-center lg:flex lg:flex-row lg:items-center lg:mx-20">
        <div className="flex justify-center lg:hidden p-10">
          <hr className="horizontalLineCard"></hr>
        </div>

        <div className="lg:w-[90%]">
          <h1 className="text-3xl mb-5 lg:mb-0 lg:text-5xl">
            Our Websites are
          </h1>
        </div>

        <div className="lg:flex lg:justify-around p-10 lg:p-0 lg:gap-10">
          <div className="flex flex-col items-center lg:w-[50%] mb-10 lg:mb-0">
            <Image src={responsive} className="w-32 mb-3 lg:mb-5" />
            <h5 className="text-xl lg:text-md text-center mb-3 lg:mb-0">
              Responsive
            </h5>
            <p className="text-xs w-96 lg:w-[90%] text-center lg:mt-3">
              Web design is all about flexibility and adaptability. Imagine a
              website that automatically scales, resizes, and alters its layout
              to look perfect on any device.
            </p>
          </div>

          <div className="flex flex-col items-center lg:w-[50%] mb-10 lg:mb-0">
            <Image src={SEO} className="w-32 mb-3 lg:mb-5" />
            <h5 className="text-xl lg:text-md text-center mb-3 lg:mb-0">
              Optimized for Search Engines
            </h5>
            <p className="text-xs w-96 lg:w-[70%] text-center lg:mt-3 ">
              We will make it easier for potential customers to find you.
            </p>
          </div>
        </div>
      </div>

      {/* WHAT WE DO */}

      <div className="lg:h-[30rem] flex flex-col justify-center bg-[#f2f2ef5e] ">
        <div className="mx-20 p-5">
          <div className="flex justify-center mt-5 lg:my-0">
            <hr className="horizontalLineCard"></hr>
          </div>


          <div className="flex justify-center my-3 lg:my-5 ">
            <h1 className="text-3xl lg:text-5xl mb-3 lg:mb-10 text-center">
              We can help you with
            </h1>
          </div>



          <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-12 ">

            <div className="card w-80 bg-base-100 shadow-xl text-center lg:min-h-[13rem]">
              <div className="card-body">
                <div className="flex justify-center">
                  <h2 className="card-title">Design & Development</h2>
                </div>
                <div className="flex justify-center">
                  <hr className="horizontalLineCard flex justify-center"></hr>
                </div>
                <p>Creating you a brand new website from scratch</p>
              </div>
            </div>

            <div className="card w-80 bg-base-100 shadow-xl text-center lg:min-h-[13rem]">
              <div className="card-body">
                <div className="flex justify-center">
                  <h2 className="card-title">Website Maintenance</h2>
                </div>
                <div className="flex justify-center">
                  <hr className="horizontalLineCard flex justify-center"></hr>
                </div>
                <p>
                  Theme and plugin updates, speed optimization and migrations
                </p>
              </div>
            </div>

            <div className="card w-80 bg-base-100 shadow-xl text-center lg:min-h-[13rem]">
              <div className="card-body">
                <div className="flex justify-center">
                  <h2 className="card-title">Bug Fixes</h2>
                </div>
                <div className="flex justify-center">
                  <hr className="horizontalLineCard flex justify-center"></hr>
                </div>
                <p>
                  Database optimization, page errors and other opmitizations
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

import Image from "next/image";

import management from "../../components/images/management.jpeg";
import obmplan from "../../components/images/obmplan.svg";
import obmteam from "../../components/images/obmteam.svg";
import obmoperations from "../../components/images/obmoperations.svg";
import obmproject from "../../components/images/obmproject.svg";

const BusinessManagement = () => {
  return (
    <div className="">
      {/* BANNER */}
      <div className="flex items-center relative h-[35rem]">
        <Image
          src={management}
          layout="fill"
          objectFit="cover"
          alt="banner"></Image>
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="flex mx-5 md:mx-10 flex-col p-5 absolute">
          <h3 className="lg:text-lg mb-5 text-white">Business Management</h3>
          <h1 className="text-3xl md:text-5xl text-white mb-5 lg:w-[30rem] font-bold md:font-extrabold">
            Business Planning
          </h1>
          <hr className="horizontalLineWebDev"></hr>

          <h1 className="text-white text-xl lg:text-4xl lg:w-[50rem] md:text-4xl lg:mr-[30rem] mt-5">
            We create simple, effective business plans that help your company
            grow and succeed.
          </h1>
        </div>
      </div>

      {/* QUOTE */}

      <div className="lg:h-[30rem] flex items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="w-[25%] hidden lg:block">
            <Image src={obmplan} />
          </div>

          <div>
            <p className="text-lg lg:w-[25rem] mx-20 my-10 text-center lg:my-0">
              We organize, plan, analyze and implement solutions for businesses
              to help them achieve their goals.
            </p>
          </div>
        </div>
      </div>

      {/* PROJECT MANAGEMENT */}
      <div className="lg:h-[30rem] bg-[#f2f2ef5e] flex items-center py-10 lg:p-0">
        <div className="flex mx-20 items-center">
          <div className="hidden lg:flex w-[35rem]">
            <Image src={obmproject} className="rounded" />
          </div>

          <div className="lg:mx-20 mb-10 lg:mb-0">
            
            <h1 className="text-3xl lg:text-5xl lg:mb-10 text-center lg:text-start mb-5">
              Project Management
            </h1>
            <hr className="horizontalLineTeam hidden lg:block"></hr>

            <p className="text-sm text-center lg:text-lg lg:mt-10 lg:text-start">
              We specialize in managing complex projects from start to finish,
              ensuring that all aspects of the projects are completed on time,
              within budget and to the highest standards of quality.
            </p>
          </div>
        </div>
      </div>

      {/* TEAM MANAGEMENT */}

      <div className="lg:h-[30rem] flex items-center py-10 lg:p-0">
        <div className="flex mx-20 items-center">
          <div className="lg:mx-20">


            <h1 className="text-3xl lg:text-5xl lg:mb-10 text-center lg:text-start mb-5">
              Team Management
            </h1>

            <hr className="horizontalLineTeam  hidden lg:block"></hr>

            <p className="text-sm text-center lg:text-lg lg:mt-10 lg:text-start">
              We specialize in helping businesses optimize their team’s
              performance and achieve their goals. We have a vast knowledge of
              different leadership styles and personalities that helps us
              understand your team's strengths and weaknesses. Through that
              understanding, we can help identify areas for improvement and
              develop strategies to enhance team productivity and collaboration.
            </p>
          </div>
        </div>

        <div className="hidden lg:flex mr-20">
          <Image src={obmteam} className="rounded" />
        </div>
      </div>

      {/* OPERATIONS MANAGEMENT */}
      <div className="lg:h-[30rem] flex items-center bg-[#f2f2ef5e] py-10 lg:p-0">
        <div className="flex mx-20 items-center w-[100%]">
          <div className="hidden lg:flex">
            <Image src={obmoperations} className="rounded" />
          </div>

          <div className="lg:mx-20">

            <h1 className="text-3xl lg:text-5xl text-center lg:text-start lg:mb-10 mb-5">
              Operations Management
            </h1>

            <hr className="horizontalLineTeam hidden lg:block"></hr>

            <p className="text-sm lg:text-lg lg:mt-10 text-center lg:text-start">
              Our operations management service is designed to help businesses
              optimize their operations and achieve maximum efficiency. We
              understand the importance of operations management and we work
              closely with you to identify areas for improvement, develop
              strategies to enhance productivity, and streamline your operations
              to achieve better outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessManagement;

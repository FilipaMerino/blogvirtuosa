import Image from "next/image";


import table from "../../components/images/table.jpeg"
import management from "../../components/images/management.jpeg"



import concept from "../../components/images/concept.png";
import design from "../../components/images/design.png";
import code from "../../components/images/code.png";
import rocket from "../../components/images/rocket.png";
import dots from "../../components/images/dots.svg";
import development from "../../components/images/development.svg";
import responsive from "../../components/images/responsive.svg";
import SEO from "../../components/images/SEO.svg";

const BusinessManagement = () => {
  return (
    <div className="">
      {/* BANNER */}
      <div className="flex items-center relative h-[35rem]">
        <Image src={management} layout="fill" objectFit="cover" alt="banner"></Image>
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="flex mx-5 md:mx-10 flex-col p-5 absolute">
          <h3 className="lg:text-lg mb-5 text-white">Business Management</h3>
          <h1 className="text-3xl md:text-5xl text-white mb-5 lg:w-[30rem] font-bold md:font-extrabold">
            Business Planning
          </h1>

          <hr className="horizontalLineWebDev"></hr>

          <h1 className="text-white text-lg lg:text-4xl lg:w-[50rem] md:text-4xl lg:mr-[30rem] mt-5">
            We organize, plan, analyze and implement solutions for businesses to
            help them achieve their goals.
          </h1>
        </div>
      </div>


{/*  */}



    </div>
  );
};

export default BusinessManagement;

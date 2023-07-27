import Image from "next/image";
import calendar from "../../components/images/calendar.jpeg";
import client from "../../components/images/client.svg";
import socialmedia from "../../components/images/socialmedia.svg";
import email from "../../components/images/email.svg";
import event from "../../components/images/event.svg";
import planner from "../../components/images/planner.svg";

const VirtualAssistant = () => {
  return (
    <div>
      {/* BANNER */}
      <div className="flex items-center relative h-[35rem]">
        <Image
          src={calendar}
          layout="fill"
          objectFit="cover"
          alt="banner"></Image>
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="flex mx-5 md:mx-10 flex-col p-5 absolute">
          <h3 className="lg:text-lg mb-5 text-white">Virtual Assistant</h3>
          <h1 className="text-3xl md:text-5xl text-white mb-5 lg:w-[30rem] font-bold md:font-extrabold">
            Administrative Services
          </h1>

          <hr className="horizontalLineWebDev"></hr>

          <h1 className="text-white text-xl md:text-4xl lg:w-[40rem] lg:mr-[30rem] mt-5">
            From tedious administrative tasks to content creation, together we
            create a system of success and growth.
          </h1>
        </div>
      </div>

      <div className="lg:h-[30rem] flex items-center">
        <div className="items-center lg:w-[1/3] mx-20 hidden lg:flex">
          <div className="w-[70%] h-auto">
            <Image src={planner} className="rounded" />
          </div>

          <div className="ml-20 lg:w-[2/3]">
            <h1 className="text-3xl lg:text-5xl mb-5">Calendar Management</h1>
            <hr className="horizontalLineTeam hidden lg:block"></hr>

            <p className="text-sm text-center lg:text-lg lg:mt-10 lg:text-start">
              This service is designed to help businesses manage their schedules
              and appointments efficiently. We work with you to develop
              customized calendar management strategies that meet your specific
              business needs and help you achieve your scheduling goals.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:h-[30rem] flex items-center bg-[#f2f2ef5e]">
        <div className="items-center mx-20 hidden lg:flex">
          <div className="mr-20 lg:w-[2/3]">
            <h1 className="text-3xl lg:text-5xl mb-5">
              Client Care Management
            </h1>
            <hr className="horizontalLineTeam hidden lg:block"></hr>

            <p className="text-sm text-center lg:text-lg lg:mt-10 lg:text-start">
              Our client care management is designed to help businesses build
              and maintain strong relationships with their clients. We believe
              that happy clients are critical to the success of any business and
              through our experience with client care management we are here to
              help. We work with you to understand your client’s needs and
              develop strategies to enhance the client experience so that you
              can build long-lasting relationships with your clients.
            </p>
          </div>

          <div className="w-full h-auto">
            <Image src={client} className="rounded" />
          </div>
        </div>
      </div>





      <div className="lg:h-[30rem] flex items-center">
        <div className="items-center lg:w-[1/3] mx-20 hidden lg:flex">
          <div className="w-[70%] h-auto">
            <Image src={planner} className="rounded" />
          </div>

          <div className="ml-20 lg:w-[2/3]">
            <h1 className="text-3xl lg:text-5xl mb-5">Calendar Management</h1>
            <hr className="horizontalLineTeam hidden lg:block"></hr>

            <p className="text-sm text-center lg:text-lg lg:mt-10 lg:text-start">
              This service is designed to help businesses manage their schedules
              and appointments efficiently. We work with you to develop
              customized calendar management strategies that meet your specific
              business needs and help you achieve your scheduling goals.
            </p>
          </div>
        </div>
      </div>







    </div>
  );
};

export default VirtualAssistant;

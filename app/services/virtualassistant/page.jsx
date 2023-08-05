import Image from "next/image";
import calendar from "../../components/images/calendar.jpeg";
import client from "../../components/images/client.png";
// import socialmedia from "../../components/images/socialmedia.svg";
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

      {/* EMAIL MANAGEMENT */}
      <div className="lg:h-[30rem] flex items-center bg-[#f2f2ef5e]">
        <div className="items-center mx-20 lg:flex justify-center lg:p-0 py-10">
          <div className="w-full h-auto hidden lg:block">
            <Image src={email} className="rounded" alt="Email Management"
              objectFit="cover"
              width={300}
              height={300} />
          </div>

          <div className="lg:ml-20 lg:w-[2/3]">
            <h1 className="text-3xl lg:text-5xl lg:mb-5  text-center lg:text-start">
              Email Management
            </h1>
            <hr className="horizontalLineTeam hidden lg:block"></hr>
            <div className="flex justify-center lg:hidden">
              <hr className="horizontalLineCard my-3"></hr>
            </div>
            <p className="text-sm text-center lg:text-lg lg:mt-10 lg:text-start lg:mr-10">
              Our Email Management service is designed to bring order to your
              business communication. We create tailored strategies for
              efficiently handling your emails, which align with your unique
              business needs. By ensuring your important messages are
              prioritized and your inbox remains organized, we help you save
              valuable time and maintain effective communication.
            </p>
          </div>
        </div>
      </div>

      {/* CLIENT CARE MANAGEMENT */}
      <div className="lg:h-[30rem] flex items-center ">
        <div className="items-center mx-20 lg:flex lg:p-0 py-10">
          <div className="lg:mr-20 lg:w-[2/3]">
            <h1 className="text-3xl lg:text-5xl lg:mb-5 lg:text-start text-center">
              Client Care Management
            </h1>
            <hr className="horizontalLineTeam hidden lg:block"></hr>
            <div className="flex justify-center lg:hidden">
              <hr className="horizontalLineCard my-3"></hr>
            </div>
            <p className="text-sm text-center lg:text-lg lg:mt-10 lg:text-start">
              In business, building and nurturing client relationships is
              fundamental, and our Client Care Management service has been
              designed with this in mind. Our expert team focuses on
              understanding the needs of your clients and formulating strategies
              that enhance their experience with your brand. Let us take on the
              role of maintaining client relations, allowing you to concentrate
              on the other aspects of growing your business.
            </p>
          </div>

          <div className="w-full h-auto hidden lg:block">
            <Image src={client} className="rounded " alt="Client Care"
              objectFit="cover"
              width={300}
              height={300} />
          </div>
        </div>
      </div>

      {/* CALENDAR MANAGEMENT */}
      <div className="lg:h-[30rem] flex items-center bg-[#f2f2ef5e]">
        <div className="items-center lg:w-[1/3] mx-20 lg:flex lg:p-0 py-10">
          <div className="w-full h-auto hidden lg:block">
            <Image src={planner} className="rounded" alt="Calendar Management"
              objectFit="cover"
              width={300}
              height={300}/>
          </div>

          <div className="lg:ml-20 lg:w-[2/3]">
            <h1 className="text-3xl lg:text-5xl lg:mb-5 lg:text-start text-center">
              Calendar Management
            </h1>
            <hr className="horizontalLineTeam hidden lg:block"></hr>
            <div className="flex justify-center lg:hidden">
              <hr className="horizontalLineCard my-3"></hr>
            </div>
            <p className="text-sm text-center lg:text-lg lg:mt-10 lg:text-start">
              Achieving your goals often begins with efficient scheduling and
              time management. With our Calendar Management service, we help you
              stay on top of your appointments and manage your schedule
              effectively. We develop personalized calendar management
              strategies that cater to your specific business needs, keeping
              your operations running smoothly and on time.
            </p>
          </div>
        </div>
      </div>




      <div className="lg:h-[30rem] flex items-center ">
        <div className="items-center mx-20 lg:flex lg:p-0 py-10">
          <div className="">
            <h1 className="text-3xl lg:text-5xl lg:mb-5 lg:text-start text-center">
              Event Coordinator
            </h1>
            <hr className="horizontalLineTeam hidden lg:block"></hr>
            <div className="flex justify-center lg:hidden">
              <hr className="horizontalLineCard my-3"></hr>
            </div>
            <p className="text-sm text-center lg:text-lg lg:mt-10 lg:text-start">
            Creating successful events starts with a clear vision and detailed
              planning. Our Event Coordination service takes the stress out of
              planning and execution. We engage with you to fully understand
              your event goals and objectives, and then manage every detail to
              ensure a seamless event experience.
            </p>
          </div>

          <div className="w-full h-auto hidden lg:flex lg:justify-end">
            <Image src={event} className="rounded " alt="Client Care"
              objectFit="cover"
              width={300}
              height={300} />
          </div>
        </div>
      </div>



{/*
      SOCIAL MEDIA

      <div className="lg:h-[30rem] flex items-center bg-[#f2f2ef5e]">
        <div className="items-center mx-20 lg:flex lg:p-0 py-10">
          <div className="w-[50%] h-auto hidden lg:block">
            <Image src={socialmedia} className="rounded" />
          </div>

          <div className="lg:ml-20 lg:w-[2/3] flex flex-col justify-center">
            <h1 className="text-3xl lg:text-5xl lg:mb-5 lg:text-start text-center">
              Content Creation
            </h1>
            <hr className="horizontalLineTeam hidden lg:block"></hr>
            <div className="flex justify-center lg:hidden">
              <hr className="horizontalLineCard my-3"></hr>
            </div>
            <p className="text-sm text-center lg:text-lg lg:mt-10 lg:text-start lg:mr-10">
              This service is designed to help businesses create high-quality
              engaging content that resonates with their audience. We work with
              you to develop customized content strategies that meet your
              specific business needs.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default VirtualAssistant;

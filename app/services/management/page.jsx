import Image from "next/image";
import Link from "next/link";
import management from "../../components/images/management.jpeg";
import obmplan from "../../components/images/obmplan.svg";
import obmteam from "../../components/images/obmteam.svg";
import obmoperations from "../../components/images/obmoperations.svg";
import obmproject from "../../components/images/obmproject.svg";
import ebook from "../../components/images/ebook.jpeg";
import affordable from "../../components/images/affordable.png";
import knowledge from "../../components/images/knowledge.png";
import consulting from "../../components/images/consulting.png";
import automation from "../../components/images/automation.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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

      <div className="lg:h-[30rem] flex items-center bg-[#f2f2ef5e] py-10 lg:p-0">
        <div className="flex mx-20 items-center w-[100%]">
          <div className="hidden lg:flex">
            <Image src={obmproject} className="rounded" />
          </div>

          <div className="lg:mx-20">
            <h1 className="text-3xl lg:text-5xl text-center lg:text-start lg:mb-10 mb-5">
              Project Management
            </h1>

            <hr className="horizontalLineTeam hidden lg:block"></hr>

            <p className="text-sm lg:text-lg lg:mt-10 text-center lg:text-start">
              Stay on top of your business projects with our expert project
              management services. From initial planning to final delivery, we
              handle every step with an eye for detail. Our goal is to ensure
              your projects are completed on time, within budget, and to the
              highest quality standards. We use proven project management
              strategies and tools, adapted to fit the unique needs and
              complexities of your business. With us managing your projects, you
              can focus on the bigger picture - growing your business.
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
              Team Management Services: Building and managing a high-performing
              team is crucial to the success of your business. Our team
              management services focus on coordinating tasks, optimizing
              workflows, and creating a collaborative environment that
              encourages productivity and innovation. With our hands-on
              approach, we assist in maximizing the potential of your team,
              ensuring everyone collaborates effectively towards your business
              goals. Let us manage your team, so you can concentrate on leading
              your business to success. Don't have a team and looking to build
              one? This service can be tailored to hiring and building your
              business.
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
              In today's fast-paced business environment, efficient operations
              are vital. Our operations management services focus on improving
              your internal processes and workflow for increased productivity
              and efficiency. We oversee daily business activities, fine-tuning
              as necessary to ensure a smooth operation. Our objective is to
              align your operations with your strategic objectives, giving you
              more time to concentrate on important strategic decisions and
              growth. Partner with us and enjoy the peace of mind that comes
              from knowing your operations are in capable hands.
            </p>
          </div>
        </div>
      </div>

      {/* CONSULTING */}

      <div className="lg:h-[30rem] flex items-center py-10 lg:p-0">
        <div className="flex mx-20 items-center">
          <div className="lg:mx-20">
            <h1 className="text-3xl lg:text-5xl lg:mb-10 text-center lg:text-start mb-5">
              1:1 Consulting
            </h1>

            <hr className="horizontalLineTeam  hidden lg:block"></hr>

            <p className="text-sm text-center lg:text-lg lg:mt-10 lg:text-start">
              Your business deserves personalized attention, and that's exactly
              what we provide with our 1:1 consulting service. We engage with
              you directly, understanding your unique challenges and
              opportunities. Together, we create actionable strategies designed
              to drive sustainable growth for your business. Our comprehensive
              approach covers all areas - from optimizing your operations to
              expanding your market reach. With our 1:1 consulting service, you
              receive expert guidance and tailored solutions that address your
              specific needs, helping your business thrive in a sustainable and
              balanced manner.
            </p>
          </div>
        </div>

        <div className="hidden lg:flex mr-20">
          <Image src={consulting} className="rounded" />
        </div>
      </div>

      {/* THIS IS THE SECTION FOR DIY OPTIONS */}

      <div className="flex flex-col items-center justify-center bg-[#f2f2ef5e]">
        <div className="lg:mx-32 p-10">
          <div className="flex justify-center mb-10">
            <hr className="horizontalLineCard "></hr>
          </div>

          <div className="flex flex-col items-center mb-5">
            <h1 className="text-3xl md:text-5xl text-center">
              Budget-Friendly DIY Services
            </h1>
          </div>

          <div>
            <p className="text-sm lg:text-md text-center">
              We understand that every business has different needs and
              resources, which is why we offer a variety of affordable,
              do-it-yourself solutions.
            </p>




            <div className="flex flex-col lg:flex-row justify-center items-center m-20 lg:my-0 lg:p-20 lg:gap-20">
              <div className="flex flex-col items-center mb-10 lg:mb-0">

                <Image src={affordable} className="w-16 mb-3" />
                <div className="flex flex-col items-center">
                  <h4 className="text-lg mb-2 text-center">Cost Effective</h4>
                  <p className="text-xs text-center">
                    Say goodbye to outsourcing expenses and embrace efficient,
                    cost-effective strategies for sustainable growth.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Image src={knowledge} className="w-16 mb-3" />
                <h4 className="text-lg mb-2 text-center">knowledge</h4>
                <p className="text-xs text-center">
                  Gain valuable insights through our knowledge-driven approach
                  that supports informed decisions for your business success.
                </p>
              </div>
            </div>

            <p className="text-sm lg:text-md text-center lg:text-justify ">
              These services are designed to equip you with the essential tools
              and guidance you need to effectively manage and grow your business
              at your own pace. Our DIY services are not just cost-effective;
              they're an <strong>investment into your business's future</strong>
              . Whether it's planning for your next quarter with our{" "}
              <strong>Roadmap to Success</strong> or streamlining your
              operations with our <strong>SOP QuickStart</strong>, our
              budget-friendly options are dedicated to supporting your journey
              toward sustainable growth.
            </p>
          </div>
        </div>
      </div>






      {/* THOSE ARE THE DIY OPTIONS */}
      <div className="lg:h-[40rem] flex items-center bg-[#f2f2ef5e] p-5 lg:p-0">
        <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-center gap-10 lg:gap-20 lg:mx-10">
          <div className="lg:w-[40%]">
            <div className="flex flex-col items-center mt-3">
              <Link href="https://www.adminvirtuosa.com/Roadmaptosuccess/">
                <Image
                  src={ebook}
                  className="w-80 h-80 object-cover rounded-lg mb-5 drop-shadow-md"
                />
              </Link>

              <h2 className="text-center text-xl font-semibold">
                Roadmap to Success
              </h2>
              <div className="flex justify-center lg:hidden">
                <hr className="horizontalLineCard mt-3"></hr>
              </div>
              <p className="text-sm text-center lg:text-justify my-3 lg:w-[90%] mx-10">
                Planning is key to any business's success, and with our Roadmap
                to Success, we make it easy and budget-friendly. This
                do-it-yourself service provides a comprehensive 90-day planning
                report, offering a clear and actionable strategy to help you
                meet your business goals.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end mx-6 items-center">
              <Link
                href="https://www.adminvirtuosa.com/Roadmaptosuccess/"
                className="hover:underline text-sm flex items-center font-semibold">
                <p>Learn More</p>

                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-sm md:w-2 ml-2"
                />
              </Link>
            </div>
          </div>


          <div className="lg:w-[40%]">
            <div className="flex flex-col items-center mt-3">
              <Link href="https://www.adminvirtuosa.com/Roadmaptosuccess/">
                <Image
                  src={automation}
                  className="w-80 h-80 object-cover rounded-lg mb-5 drop-shadow-md"
                />
              </Link>

              <h2 className="text-center text-xl font-semibold">
              SOP QuickStart
              </h2>
              <div className="flex justify-center lg:hidden">
                <hr className="horizontalLineCard mt-3"></hr>
              </div>
              <p className="text-sm text-center lg:text-justify my-3 lg:w-[90%] mx-10">
              Standard Operating Procedures (SOPs) are the backbone of any
                successful operation, providing consistency, clarity, and
                efficiency. This service provides you with comprehensive
                guidance on how to establish effective SOPs in your business.
                You'll receive expert advice, practical steps, and templates
                that streamline the SOP creation process.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end mx-6 items-center">
              <Link
                href="https://www.adminvirtuosa.com/Roadmaptosuccess/"
                className="hover:underline text-sm flex items-center font-semibold">
                <p>Learn More</p>

                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-sm md:w-2 ml-2"
                />
              </Link>
            </div>
          </div>





        </div>
      </div>
    </div>
  );
};

export default BusinessManagement;

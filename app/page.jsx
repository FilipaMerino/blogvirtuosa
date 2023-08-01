import Link from "next/link";
import Image from "next/image";

import Banner from "./components/Banner";
import ServiceCard from "./components/ServiceCard";
import Newsletter from "./components/Newsletter";

import blogBack from "./components/images/blogBack.png";
import blogBackSquare from "./components/images/blogBackSquare.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";



const HomePage = () => {


  return (
    <div>
      <Banner />

      {/* THIS IS THE ABOUT SESSION FROM THE HOME PAGE */}
      <div className="bg-[#f2f2ef5e] mb-5 lg:h-[26rem] lg:p-10">
        <div className=" mx-5 mt-10 p-5 md:flex md:mt-[1rem] ">
          <h1 className="text-3xl  md:text-5xl">We help businesses grow.</h1>
          <h1 className="text-3xl  md:text-5xl lg:ml-3 text-[#fb653e]">
            Together
          </h1>
        </div>

        <div className="mx-5 px-5 md:mt-5 ">
          <p className="text-md md:text-lg md:mr-[12rem] text-justify">
            At Admin Virtuosa, our <strong>mission</strong> is to serve as a
            support system for small business owners and entrepreneurs to
            fulfill their goals while advocating for a balanced approach to work
            and life. We are proud to offer exceptional personalized services to
            help prevent burnout and enhance the <strong>mental health</strong>{" "}
            and well-being of our clients.
          </p>
        </div>
        <div className="flex mx-5 p-5 md:mt-5 md:mx-5 w-[20rem] justify-start">
          <Link
            href="/about/team"
            className="btn  border-none drop-shadow-md lg:w-64 bg-[#333333] text-white ">
            About us
          </Link>
        </div>
      </div>

      {/* THIS IS THE SERVICE SESSION FROM THE HOME PAGE */}

      <div className="lg:p-10" id="service">
        <div className="flex justify-center mb-10">
          <hr className="horizontalLineCard"></hr>
        </div>

        <div className="mx-5 my-10 flex flex-col :items-center">
          <div className="mb-16">
            <h1 className="text-3xl text-center  lg:text-5xl lg:mb-2">
              High Quality Services
            </h1>
            <h1 className="text-3xl text-center  lg:text-5xl">
              For Your Business
            </h1>
          </div>

          <div className=" flex flex-col items-center md:flex lg:flex-row lg:justify-between">
            <ServiceCard
              href="./services/management"
              title="Business Management"
              content="The process of organizing, planning, analyzing and implementing solutions for businesses to help achieve their goals."
            />

            <ServiceCard
              href="./services/virtualassistant"
              title="Virtual Assistant"
              content="A remote assistant to help with administrative, technical and creative services for businesses, entrepreneurs or individuals."
            />
            <ServiceCard
              href="./services/webdev"
              title="Web Development"
              content="The process of designing a unique and personalized website to help
  promote brand awareness, sell products, services or other
  opportunities."
            />
          </div>
        </div>
      </div>

      {/* THIS IS THE MENTAL HEALTH SESSION FROM THE HOME PAGE */}

      <div className="bg-[#f2f2ef5e] h-[30rem] p-5 lg:p-[5rem]">
        <div className="flex justify-center mb-5">
          <h4>Hello Friend,</h4>
        </div>

        <div className="flex justify-center mt-1">
          <h1 className="text-3xl md:text-5xl">
            You deserve to have a life and
          </h1>
        </div>

        <div className="flex justify-center">
          <h1 className="text-3xl md:text-5xl">business that</h1>
          <h1 className="text-3xl md:text-5xl text-[#fb653e] ml-2">
            doesn't
          </h1>
          <h1 className="text-3xl md:text-5xl italic text-[#fb653e] ml-2">
            drain you.
          </h1>
        </div>
        <div className="mx-5">
          <p className=" mt-5 md:mt-10 text-md text-justify">
            We often forget that our work should be something that sparks joy,
            right? You absolutely deserve a life and a business that lifts you
            up, rather than drains you. Life's too short to feel constantly
            exhausted or overwhelmed. Picture a business that's in sync with
            your life, one that values your happiness just as much as your
            success. Imagine a life where you wake up every morning excited and
            inspired. Sounds nice, doesn't it? This is what you're meant to
            have, this is what you deserve. Let's take this journey together,
            realigning our work with what truly matters.
          </p>
        </div>
      </div>

      {/* THIS IS BLOG SESSION FROM THE HOME PAGE */}

      <div className="flex flex-col mx-5 lg:flex-row p-10 lg:mx-20 items-center md:justify-around">
        <div className="lg:w-[60%] mr-20 lg:mr-10">
          <Link href="/blog">
            <h1 className="text-3xl mb-5 lg:text-5xl hover:text-[#fb653e]">
              Our Blog
            </h1>
          </Link>

          <hr className="horizontalLineCard block lg:hidden"></hr>

          <p className=" md:mb-5 text-justify">
            Our blog is more than just a place for us to share our thoughts.
            It's a platform for us to connect, engage, and grow together. We've
            filled it with enlightening articles, helpful tips, and the latest
            industry trends to keep you informed and inspired. Start exploring
            today and let's embark on this journey of learning and discovery
            together!
          </p>

          <div className="flex items-center text-sm mt-5">
            <Link href="./blog" className="hover:underline">
              Learn More
              <FontAwesomeIcon
                icon={faArrowRight}
                className="ml-2 text-sm w-2 "
              />
            </Link>
          </div>
        </div>

        <div className=" mb-10 hidden lg:block">
          <div className="blogImagesContainer relative ">
            <Image
              src={blogBackSquare}
              className="w-[20rem] "
              alt="Blog"></Image>
            <Image
              src={blogBack}
              className="w-[10rem] absolute bottom-[-10%] left-[-10%] "
              alt="Blog"></Image>
          </div>
        </div>
      </div>


      {/* NEWSLETTER */}
      <Newsletter />
    </div>
  );
};

export default HomePage;

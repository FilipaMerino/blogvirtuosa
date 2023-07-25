"use client";
import ValueCard from "../components/ValueCard";

import Image from "next/image";
import Link from "next/link";
import team from "../components/images/team.jpeg";
import team3 from "../components/images/team3.jpeg";
import filipa from "../components/images/filipa.jpeg";
import louisa from "../components/images/louisa.jpeg";

const AboutPage = () => {
  return (
    <div className="">
      {/* THIS IS THE TITLE AND TEXT OF ABOUT SESSION */}

      <div className="flex items-center lg:h-[30rem]">


        <div className="hidden lg:block  flex-col justify-center items-start lg:w-[20rem] lg:ml-20">
          <p className="font-semibold	lg:mb-1">About Us.</p>
          <p className="font-semibold	lg:mb-1">Our Values.</p>
          <p className="font-semibold	">Team.</p>
        </div>

        <div className=" p-10 lg:h-[20rem] flex flex-col justify-center mx-5 lg:mx-20 lg:p-5">
          <div className="flex mb-2 lg:mb-10">
            <h1 className="text-3xl lg:text-5xl">About</h1>
            <h1 className="text-3xl lg:text-5xl text-[#fb653e] ml-3">Us.</h1>
          </div>

          <hr className="horizontalLineCard block  lg:hidden"></hr>

          <p className="mb-5">
            At Admin Virtuosa, our mission is to serve as a{" "}
            <strong>support system</strong> for small business owners and
            entrepreneurs to fulfill their objectives while advocating for a{" "}
            <strong>balanced</strong> approach to work and life. We are proud to
            offer exceptional personalized services to help prevent burnout and
            enhance the mental health and well-being of our clients.
          </p>

          <p>
            Through understanding and collaboration, we work to create custom
            business plans for our clients that take into consideration their
            individual needs and goals. By combining our passion to serve with
            our problem-solving skills, we help to build a process that ensures
            our clients reach their personal and professional goals. We strive
            to create a genuine partnership built on trust, respect and a shared
            vision for growth and opportunity.
          </p>


        </div>


      </div>

      {/* THIS IS THE BANNER FROM THE ABOUT SESSION */}

      <div className="flex flex-col items-center justify-center h-[30rem] bg-[#f2f2ef5e]">
        <div className="flex justify-center mb-10">
          <hr className="horizontalLineCard"></hr>
        </div>

        <div className="flex flex-col   text-[#333333] text-center mx-4 p-5 lg:mx-[10rem]">
          <h1 className="text-lg lg:text-3xl mb-3 lg:mb-5 italic">
            "Success is the ability to live your life the way you want to live
            it, doing what you most enjoy, surrounded by people who you admire
            and respect."
          </h1>
          <p className="text-sm lg:text-lg">Brian Tracy</p>
        </div>
      </div>




      {/* HERE IS THE VALUES */}

      <div className="flex flex-col lg:flex-row lg:h-[30rem] md:mx-20 justify-around">
        <div className="flex items-center justify-center mt-10">
          <h1 className="text-3xl lg:text-5xl">Our</h1>
          <h1 className="text-3xl lg:text-5xl ml-2 text-[#fb653e]">Values.</h1>
        </div>

        <div className="carousel w-[100%] lg:w-[50%] flex">
          <div id="slide1" className="carousel-item relative w-full">
            <ValueCard
              title="Honesty"
              content="We believe that trust is the foundation of any successful partnership."
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide2" className="carousel-item relative w-full">
            <ValueCard
              title="Integrity"
              content="We are committed to doing all things in an ethical, sustainable, and respectful manner."
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide3" className="carousel-item relative w-full">
            <ValueCard
              title="Respect"
              content="We treat all clients and team members with dignity, fairness and respect. We provide an inclusive environment that values diversity and promotes equal opportunity."
            />

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide4" className="carousel-item relative w-full">
            <ValueCard
              title="Love"
              content="We believe that love has the ability to create a positive and nurturing environment that supports the growth and success of our clients."
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide5" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide5" className="carousel-item relative w-full">
            <ValueCard
              title="Humility"
              content="We believe that collaboration is the key to unlocking creativity and success."
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide6" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide6" className="carousel-item relative w-full">
            <ValueCard
              title="Colaboration"
              content="We believe that collaboration is the key to unlocking creativity and success. We are committed to fostering a culture of teamwork, open communication, and mutual support"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide5" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* {/* THIS IS THE TEAM SESSION */}

      <div className="bg-[#f2f2ef5e] flex items-center my-auto">
        <div className="relative  flex-col items-start w-[35%] justify-center lg:h-[40rem] mx-20 hidden lg:flex lg:mb-20">

          <div className="relative z-10 bottom-3 left-40 transform -translate-y-16 group overflow-hidden">

              <Image
                src={team3}
                className="w-64 rounded-md drop-shadow-lg z-0"
              />

          </div>

          <div className="absolute top-80 z-10 group overflow-hidden">
            <Image className="w-64 rounded-md drop-shadow-md z-0" src={team} />
          </div>


        </div>



        <div className="lg:mr-20 lg:w-[50%] p-5">
          <div className="flex justify-center lg:justify-start items-start lg:mb-5">
            <h1 className="text-3xl lg:text-5xl">Our</h1>
            <h1 className="text-3xl lg:text-5xl text-[#fb653e] lg:ml-3 ml-2">
              Team.
            </h1>
          </div>

          <div className=" text-center lg:text-start mx-5 p-5 flex flex-col items-center lg:items-start lg:mx-0 lg:p-0">
            <p className="">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="my-10 flex justify-center lg:justify-start">
            <div className="avatar relative">
              <div className="w-32 lg:w-20 rounded">
                <Link href="./about/louisa">
                  <Image
                    src={louisa}
                    className="transform hover:scale-105 transition-transform"
                  />
                  {/* The semi-transparent overlay */}
                  <div className="overlay"></div>
                </Link>
              </div>
            </div>

            <div className="avatar relative ml-5">
              <div className="w-32 lg:w-20 rounded ">
                <Link href="./about/filipa">
                  <Image
                    src={filipa}
                    className="transform hover:scale-105 transition-transform"
                  />
                  {/* The semi-transparent overlay */}
                  <div className="overlay"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default AboutPage;

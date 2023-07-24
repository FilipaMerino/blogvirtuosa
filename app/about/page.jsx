"use client";
import ValueCard from "../components/ValueCard";

import Image from "next/image";
import Link from "next/link";
import office from "../components/images/office.jpeg";
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
        {/* <Image
          src={office}
          layout="fill"
          objectFit="cover"
          alt="banner"></Image>
        <div className="absolute inset-0 bg-[#333333] opacity-30"></div> */}
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
          <h1 className="text-3xl lg:text-5xl ml-2 text-[#fb653e]">
            Values.
          </h1>
        </div>

        <div className="carousel w-[100%] lg:w-[50%] flex">
          <div id="slide1" className="carousel-item relative w-full">
           <ValueCard title="Honesty" content="We believe that trust is the foundation of any successful partnership."/>
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
            <ValueCard title="Integrity" content="We are committed to doing all things in an ethical, sustainable, and respectful manner." />
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
          <ValueCard title="Respect" content="We treat all clients and team members with dignity, fairness and respect. We provide an inclusive environment that values diversity and promotes equal opportunity."/>



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
          <ValueCard title="Love" content="We believe that love has the ability to create a positive and nurturing environment that supports the growth and success of our clients." />
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
          <ValueCard title="Humility" content="We believe that collaboration is the key to unlocking creativity and success."/>
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
          <ValueCard title="Colaboration" content="We believe that collaboration is the key to unlocking creativity and success. We are committed to fostering a culture of teamwork, open communication, and mutual support"/>
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

        {/* <div className="flex items-center justify-start ml-20 w-[30rem] ">
          <div className=" carousel rounded-box">



            <div className="carousel-item w-full h-[20rem] ml-20">
           <ValueCard title="Honesty" content="We believe that trust is the foundation of any successful partnership." contentBig=" Without honesty there is no trust which is why honesty is our #1 value. We strive to earn and maintain the confidence of our clients and are dedicated to providing accurate, objective, and unbiased advice to our clients."/>

            </div>
            <div className="carousel-item w-full">
              <img
                src="/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="/images/stock/photo-1494253109108-2e30c049369b.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="/images/stock/photo-1559181567-c3190ca9959b.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
          </div>
        </div> */}
      </div>



      {/* THIS IS THE TEAM SESSION */}
    </div>
  );
};

export default AboutPage;

// This is a good quote to have on a banner on this page, with the opacity bigger
// “ Success is the ability to live your life the way you want to live it, doing what you most enjoy, surrounded by people who you admire and respect. ”
// Brian Tracy

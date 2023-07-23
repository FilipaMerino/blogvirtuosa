import Link from "next/link";
import Banner from "./components/Banner";

import Posts from "./components/Posts";

const HomePage = () => {
  return (
    <div>
      <Banner />

      <div className="bg-[#f2f2ef5e] mb-5 md:h-[26rem] md:p-10">



        <div className=" mx-5 mt-10 p-5 md:flex md:mt-[1rem] ">
          <h1 className="text-3xl  md:text-5xl">We help businesses grow.</h1>
          <h1 className="text-3xl  md:text-5xl md:ml-3 text-[#fb653e]">
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
          <Link href="/about/team" className="btn">
            Meet The Team
          </Link>
          <Link href="/about/mission" className="btn ml-2">
            Our Story
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

{
  /* <div className="h-[37rem] flex items-center">
      <Image src={banner} layout="fill" objectFit="cover" alt="banner" />
      <div className="absolute  flex m-10 flex-col">
          <h2 className="text-[#ffffff] text-2xl mb-1">Effective</h2>
          <Title title="Business" className="text-white" />
          <Title title="Management Solutions" className="text-white" />
          <h3 className="text-white text-xl mb-5 mt-3">Simplify. Organize. Succeed.</h3>
          <Link href="#" className="linkButton">Book A Free Consultation</Link>
        </div> */
}

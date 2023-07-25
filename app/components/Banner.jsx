import Image from "next/image";
import bannerPic from "./images/bannerPic.png";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="flex items-center relative h-[35rem]">
      <Image
        src={bannerPic}
        layout="fill"
        objectFit="cover"
        alt="banner"></Image>

      <div className="flex  md:m-10 flex-col  p-5 absolute">
        <h2 className="text-[#ffffff] text-lg md:text-2xl md:mb-2 ">
          Effective
        </h2>
        <h1 className="text-3xl md:text-5xl text-white">Business</h1>
        <div className="md:flex">
          <h1 className="text-3xl md:text-5xl text-white">Management</h1>
          <h1 className="text-3xl md:text-5xl text-white md:mb-2 md:ml-2">
            Solutions
          </h1>
        </div>
        <h3 className="text-white text-lg md:text-3xl mb-5 mt-2">
          Simplify. Organize. Succeed.
        </h3>
        <Link
          href="#"
          className="btn w-64 hover:bg-[#ffffff]    bg-[#333333] hover:text-[#333333] text-white border-none">
          Book A Free Consultation
        </Link>
      </div>
    </div>
  );
};

export default Banner;

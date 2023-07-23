import Link from "next/link";
import Banner from "./components/Banner"


import Posts from "./components/Posts";

const HomePage = () => {
  return (
    <div>
      <Banner />
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

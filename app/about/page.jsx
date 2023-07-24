import Image from "next/image";
import Link from "next/link";
import office from "../components/images/office.jpeg";

export const metadata = {
  title: "About Admin Virtuosa",
  description: "find out more about admin virtuosa",
  keywords: "values",
};

const AboutPage = () => {
  return (
    <div className="mx-20 p-5  ">
      <div className=" h-[20rem] flex flex-col justify-center">
        <div className="flex mb-5">
          <h1 className="text-3xl lg:text-5xl">About</h1>
          <h1 className="text-3xl lg:text-5xl text-[#fb653e] ml-3">Us.</h1>
        </div>

        <p>
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
          individual needs and goals. By combining our passion to serve with our
          problem-solving skills, we help to build a process that ensures our
          clients reach their personal and professional goals. We strive to
          create a genuine partnership built on trust, respect and a shared
          vision for growth and opportunity.
        </p>
      </div>

      <div className="flex items-center relative h-[15rem]">
        <Image
          src={office}
          layout="fill"
          objectFit="cover"
          alt="banner"></Image>
      </div>
    </div>
  );
};

export default AboutPage;

// This is a good quote to have on a banner on this page, with the opacity bigger
// “ Success is the ability to live your life the way you want to live it, doing what you most enjoy, surrounded by people who you admire and respect. ”
// Brian Tracy

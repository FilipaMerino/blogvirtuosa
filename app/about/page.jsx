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
    <div className="mx-20 p-5 h-[20rem] flex flex-col justify-center">
      <div className="mb-10">
        <div className="flex mb-5">
          <h1 className="text 3xl lg:text-5xl">About</h1>
          <h1 className="text 3xl lg:text-5xl text-[#fb653e] ml-3">Us.</h1>
        </div>

        <p>
          At Admin Virtuosa, our mission is to serve as a{" "}
          <strong>support system</strong> for small business owners and
          entrepreneurs to fulfill their objectives while advocating for a{" "}
          <strong>balanced</strong> approach to work and life. We are proud to
          offer exceptional personalized services to help prevent burnout and
          enhance the mental health and well-being of our clients.
        </p>
      </div>

      <div className="flex items-center relative h-[35rem]">
      <Image src={office} layout="fill" objectFit="cover" alt="banner"></Image>

</div>
    </div>
  );
};

export default AboutPage;

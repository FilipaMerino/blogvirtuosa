import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ValueCard = ({ title, content, contentBig }) => {
  return (
    <div className="flex flex-col items-center justify-center mx-[10rem]">
      <h1 className="text-2xl lg:text-3xl flex justify-center mb-5 text-[#fb653e]">{title}</h1>
      <p className="text-md mb-3 text-center">{content}</p>
      {/* <p className="text-sm text-center">{contentBig}</p> */}










    </div>
  );
};

export default ValueCard;

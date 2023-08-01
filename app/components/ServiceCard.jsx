import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ServiceCard = ({ title, content, href }) => {
  return (
    <Link href={href}>
      <div className="card w-96 bg-[#f5f5f4] shadow-xl mb-5 lg:mb-1 lg:min-h-[19rem] mr-5 transform transition-transform hover:scale-105 cursor-pointer">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <hr className="horizontalLineCard mt-5"></hr>
          <p>{content}</p>
          <div className="card-actions justify-start lg:mt-2 text-sm flex items-center hover:underline">
            <span>Learn More</span>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-sm md:w-2 ml-2"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;

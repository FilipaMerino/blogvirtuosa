import Ract from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ServiceCard = ({ title, content, href }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-5 lg:mb-1 lg:min-h-[19rem] mr-5">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <hr className="horizontalLineCard"></hr>
        <p>{content}</p>
        <div className="card-actions justify-start lg:mt-2 text-sm flex items-center">
          <Link href={href} className="">
            Learn More
          </Link>
          <a href={href}>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="flex ml-2 text-sm  md:w-2"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

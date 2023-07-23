import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "./images/logo.png";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faLinkedin,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

import "@fortawesome/fontawesome-svg-core/styles.css";

library.add(faInstagram, faLinkedin, faFacebookSquare);

const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#fb653e] text-neutral-content md:flex md:justify-around md:items-center">
      <div className=" w-full md:w-[13rem] flex justify-center items-center">
        <div className="flex justify-center md:justify-start">
          <Image src={logo} alt="Logo" className="w-[10rem] md:w-[30rem]" />
        </div>
        <div className="vertical_line ml-5 md:ml-20 hidden md:block"></div>
      </div>

      <div className="flex flex-col  my-auto">
        <a href="">
          <h1 className="text-2xl text-[#ffffff] hover:text-[#333333]">
            Let's Chat!
          </h1>
        </a>
        <p className="text-[#ffffff] text-sm">
          Stay current with updates from our social channels
        </p>

        <div className="flex w-[5rem] justify-between">
          <a href="https://www.instagram.com/adminvirtuosa/">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-2xl text-[#ffffff] hover:text-[#333333]"
            />
          </a>
          <a href="https://www.facebook.com/Adminvirtuosa">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className="text-2xl text-[#ffffff] hover:text-[#333333]"
            />
          </a>
          <a href="https://www.linkedin.com/in/adminvirtuosa/">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-2xl text-[#ffffff] hover:text-[#333333]"
            />
          </a>
        </div>
      </div>
      <div className=" my-auto vertical_line ml-20 hidden md:block"></div>

      <div className="horizontalLineFooter md:hidden"></div>

      <div className="flex mr-20">
        <Link
          href="./about"
          className="text-sm text-[#ffffff]  hover:underline">
          Our Story
        </Link>

        <Link
          href="./about/mission"
          className="text-sm text-[#ffffff]  hover:underline ml-2">
          Mission
        </Link>
        <Link
          href="./blog"
          className="text-sm text-[#ffffff]  hover:underline ml-2">
          Blog
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

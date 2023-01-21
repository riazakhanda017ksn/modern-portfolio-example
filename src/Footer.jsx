/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { BsGithub, BsFacebook } from "react-icons/bs";
import { RxLinkedinLogo } from "react-icons/rx";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="icon-items">
        <a
          href="https://www.facebook.com/nisshongojiboner.pothik/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsFacebook />
        </a>
        <a
          href="https://github.com/riazakhanda017ksn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/riaz-ahmed-akhanda-752b84210/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RxLinkedinLogo />
        </a>
      </div>
      <p>
        Designed and Developed by{" "}
        <a href="https://www.facebook.com/nisshongojiboner.pothik">
          Riaz Akhanda
        </a>
      </p>
      <p style={{ margin: "0" }}>Copyright © {date} . All Rights Reserved.</p>
    </div>
  );
};

export default Footer;

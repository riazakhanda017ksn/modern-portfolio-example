import React from "react";
import "./About.scss";
import { FiDownload } from "react-icons/fi";
import { ImLinkedin } from "react-icons/im";
import { BsGithub, BsFacebook } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-container">
      <div class="parent">
        <div class="div1">
          <h4>ABOUT ME</h4>
          <h2>
            {" "}
            <span>MERNSTACK</span> Developer
          </h2>
          <p>
            Hi there, I'm <span>Riaz Ahmed</span> . I work in the field of Web
            Development, and I am very passionate and dedicated to what I do.
            With 2 years experience as a professional Web developer, I have
            acquired the skills and knowledge necessary to make your project a
            success.I enjoy every step of the design process, from discussion
            and collaboration.
          </p>
          <br />
          <div className="download">
            <a href="">
              <FiDownload /> <br />
              <h2>DOWNLOAD CV</h2>
            </a>
          </div>
        </div>
        <div class="div2">
          <div className="image-div">
            <img src="https://i.ibb.co/gmWdH2T/riaz2-2a31e694.jpg" alt="" />
            <div className="social">
              <h5>RIAZ AHMED AKHANDA</h5>
              <ul>
                <li>
                  <a href="">
                    {" "}
                    <BsFacebook />{" "}
                  </a>
                </li>
                <li>
                  <a href="">
                    {" "}
                    <ImLinkedin />{" "}
                  </a>
                </li>
                <li>
                  <a href="">
                    {" "}
                    <BsGithub />{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

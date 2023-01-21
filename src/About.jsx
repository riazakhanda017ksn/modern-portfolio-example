import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div
        className="about-image"
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="100"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
      >
        <img src="https://i.ibb.co/gmWdH2T/riaz2-2a31e694.jpg" alt="" />
      </div>
      <div
        className="about-description"
        data-aos="fade-down"
        data-aos-offset="100"
        data-aos-delay="80"
        data-aos-duration="3000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <h1>ABOUT ME</h1>
        <h2>A MERN STACK DEVELOPER</h2>
        <p>
          Hi there, I'm Riaz Ahmed. I work in the field of Web Development, and
          I am very passionate and dedicated to what I do. With 2 years
          experience as a professional Web developer, I have acquired the skills
          and knowledge necessary to make your project a success.I enjoy every
          step of the design process, from discussion and collaboration.
        </p>
      </div>
    </div>
  );
};

export default About;

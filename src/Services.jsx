import React from "react";
import "./Services.scss";

const Services = () => {
  return (
    <div
      className="services"
      data-aos="fade-up"
      data-aos-offset="90"
      data-aos-delay="80"
      data-aos-duration="1400"
      data-aos-easing="ease-in-out"
      data-aos-mirror="false"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <h1>MY SERVICES</h1>
      <h3>
        I provide three types of services including web development,
        <br /> web design and web design
      </h3>
      <div className="parent-item">
        <div className="service">
          <img
            src="https://i.ibb.co/8jxF0cp/nick-adams-y-TWq8n3-4k0-unsplash-1.jpg"
            alt=""
          />
          <h2>
            Frontend <span style={{ color: "#767676" }}>Development</span>
          </h2>
          <p>
            Since i work as a{" "}
            <span style={{ color: "#767676" }}>Front-End Developer</span>, i
            have experience creating user-friendly web interfaces that enhance
            user experience and increase customer engagement.
          </p>
        </div>
        <div className="service">
          <img
            src="https://i.ibb.co/SVPPv2Y/brandon-romanchuk-r-Qb-17-Jm-Gmk-unsplash.jpg"
            alt=""
          />
          <h2>
            Web <span style={{ color: "#767676" }}>Development</span>
          </h2>
          <p>
            Im am very familiar with{" "}
            <span style={{ color: "#767676" }}>
              nodejs , expressjs, mongodb/mongoose.
            </span>{" "}
            in this way, i can use mern to build full-stack applications.This
            service is something i am capable of providing
          </p>
        </div>
      </div>
      <div className="last-service">
        <img
          src="https://i.ibb.co/Ms1qnxJ/dmitry-mashkin-DY3-Nt1-Mr-Orw-unsplash-1.jpg"
          alt=""
        />
        <h2>
          UI
          <span style={{ color: "#767676" }}> Design</span>
        </h2>
        <p>
          Also, I provide fully responsive static website design using{" "}
          <span style={{ color: "#767676" }}>
            html css bootstrap and javascript
          </span>
          . i will provide you with any website design you want.this service is
          something i am capable of providing
        </p>
      </div>
    </div>
  );
};

export default Services;

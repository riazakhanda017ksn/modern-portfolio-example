/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Project.scss";
import { TbExternalLink } from "react-icons/tb";
import { AiFillRead } from "react-icons/ai";
import { VscGithubAlt } from "react-icons/vsc";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const Project = () => {
  const [project, setProject] = useState(false);
  const [open, setOpen] = useState(false);
  const [open1, setOpen2] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    bgcolor: "#FFF",
    border: "2px solid transparent",
    boxShadow: 24,
    p: 6,
  };

  return (
    <div
      className="Project"
      data-aos="fade-right"
      data-aos-offset="90"
      data-aos-delay="80"
      data-aos-duration="1900"
      data-aos-easing="ease-in-out"
      data-aos-mirror="false"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <h1>PROJECT'S</h1>
      <h3>
        Some of my recent Projects including{" "}
        <span style={{ color: "#767676" }}>
          E-commerce, Event Management , Blog Site and any static website
        </span>
        .
      </h3>

      {/*  */}
      <div className="container">
        <div className="text__of_projects">
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="project-name">
                  <h1>RSM EVENTOR</h1>
                  <h3>The Application Basically Made For Event Management</h3>

                  <>
                    <img src="https://i.ibb.co/JyYd5xv/667.png" alt="" />
                  </>
                  <p>
                    <span>About The project - </span> Nowadays peoples are
                    organizing different types of events. It may be a commercial
                    event or an official event or a social event. Peoples enjoy
                    all types of events very much. So to accomplish the event
                    there is no such platform where someone can easily get
                    service properly according to their needs.
                  </p>
                  <p>
                    <span>technologies USED - </span> Built the client-side &
                    backend-side using HTML, CSS, ReactJS, React-Router, React
                    Router, Bootstrap, MongoDB, Redux, express JS and deployed
                    on Onrender.com
                  </p>
                  <br />
                  <p>
                    <span>LIVE LINK - </span>{" "}
                    <a
                      href="https://rsm-event-management.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://rsm-event-management.web.app/
                    </a>
                  </p>
                </div>
              </Box>
            </Modal>
          </div>
          <div>
            <Modal
              open={open1}
              onClose={handleClose2}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="project-name">
                  <h1>RSM E-COMMERCE</h1>
                  <h3>
                    The Application Basically Made For Seasonal Fashion Women
                    Cloth
                  </h3>

                  <>
                    <img src="https://i.ibb.co/QFFdPxR/7878.png" alt="" />
                  </>
                  <p>
                    <span>About The project - </span> This application has
                    professional design. Besides, it has products categories,
                    products sorting, products comment, Multiple products buy
                    and sell option, products searching, products rating, and it
                    has also dynamic stripe payment system.The application Also
                    has dynamic login system. A user can create his account with
                    profile picture, also he can change his profile image,
                    update his profile, if he wants he can change his password.
                    Also, it has forgot password option.There are two dashboard
                    option for user and admin. An account profile for the user,
                    And also has for admin.In the user options, the user can do
                    whatever is limited for the user. In the admin dashboard,
                    Admin has full website control. Admin can change everything
                    if he wants.
                  </p>
                  <p>
                    <span>technologies USED - </span> Built the client-side &
                    backend-side using HTML, CSS, ReactJS, React-Router, React
                    Router, Bootstrap, MongoDB, Redux, express JS and deployed
                    on Onrender.com
                  </p>
                  <br />
                  <p>
                    <span>LIVE LINK - </span>{" "}
                    <a
                      href="https://fashion-ecommerce.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://fashion-ecommerce.onrender.com/
                    </a>
                  </p>
                </div>
              </Box>
            </Modal>
          </div>
          <div>
            <div className="Projects__container">
              <div className="projects__container">
                <div className="project_">
                  <div className="icon-part">
                    <div className="two-live-link">
                      <a href="https://github.com/riazakhanda017ksn/fashion-mern-ecommerce">
                        {" "}
                        <VscGithubAlt /> Source Code
                      </a>
                      <a href="https://fashion-ecommerce.onrender.com/">
                        {" "}
                        <TbExternalLink /> Live Link
                      </a>
                    </div>
                    <div className="two-live-link">
                      <a onClick={handleOpen2}>
                        {" "}
                        <AiFillRead /> Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project_two">
                  <div className="icon-part">
                    <div className="two-live-link">
                      <a href="https://github.com/riazakhanda017ksn/event-management">
                        {" "}
                        <VscGithubAlt /> Source Code
                      </a>
                      <a href="https://rsm-event-management.web.app/">
                        {" "}
                        <TbExternalLink /> Live Link
                      </a>
                    </div>
                    <div className="two-live-link">
                      <a onClick={handleOpen}>
                        {" "}
                        <AiFillRead /> Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-project">
                <div className="single-project_item"></div>
              </div>
            </div>
            <div className="text-align-end">
              <a href="/projects">See All Projects</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

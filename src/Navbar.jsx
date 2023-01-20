import React, { useState } from "react";
import "./Navbar.scss";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [open, setOpen] = useState(true);

  const close = () => {
    setOpen(true);
  };
  const openX = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="menu">
        <h1>{open ? "RIAZ" : ""}</h1>
        <div className="hamberger" onClick={openX}>
          <span className={open ? `one` : ""}></span>
          <span className={open ? `two` : ""}></span>
        </div>
      </div>
      <div className={open ? "navbar" : `Navbar`}>
        <div className="parents">
          <h1>{open ? "" : "RIAZ"}</h1>
          <span onClick={close}>{open ? "Shut Down" : "Close"}</span>
        </div>

        <div className="link-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

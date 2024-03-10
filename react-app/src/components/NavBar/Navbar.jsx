import "../NavBar/Navbar.css";
import { PiDevToLogoFill } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";

import React, { useState } from "react";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className="container">
        <div className="logo">
          <PiDevToLogoFill className="logo-icon logoAnimation" />
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Location</a>
            </li>
            <li>
              <a href="#">Address</a>
            </li>
          </ul>
        </div>
        <div onClick={() => setShowNav(!showNav)} className="menu">
          {showNav ? <MdClose /> : <IoMenu />}
        </div>
      </div>

      <div className={showNav ? "active mobile-links" : "mobile-links"}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Location</a>
          </li>
          <li>
            <a href="#">Address</a>
          </li>
        </ul>
      </div>
    </>
  );
}

import "./NavBar.css";
import { IoMenu } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";
import React from "react";

export default function NavBar() {
  return (
    <>
      <div className="nav-bar">
        <div className="listBtn">
          <IoMenu />
        </div>
        <div className="title">
          <h1>Sign in</h1>
        </div>
        <div className="logo">
          <FaTiktok />
        </div>
      </div>
    </>
  );
}

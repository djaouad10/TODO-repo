import "./UserDetails.css";

import React from "react";
import NavBar from "../NavBar/NavBar";

export default function UserDetails({
  nextPage,
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
}) {
  return (
    <>
      <NavBar />
      <div className="form">
        <div className="inputs-container">
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
          <input
            className="input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email Address"
          />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <div className="Buttons-container">
            <button className="nextStep" onClick={nextPage}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

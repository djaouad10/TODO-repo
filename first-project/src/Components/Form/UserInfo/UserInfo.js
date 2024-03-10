import "./UserInfo.css";
import NavBar from "../NavBar/NavBar";
import React from "react";

export default function UserInfo({
  nextPage,
  prevPage,
  address,
  setAddress,
  bio,
  setBio,
}) {
  return (
    <>
      <NavBar />
      <div className="form">
        <div className="inputs-container">
          <input
            className="input"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter you address"
          />
          <input
            className="input"
            type="text"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Enter your Bio"
          />

          <div className="Buttons-container">
            <button className="PrevStep" onClick={prevPage}>
              Go Back
            </button>
            <button className="nextStep" onClick={nextPage}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

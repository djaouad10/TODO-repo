import "./ConfirmPage.css";
import NavBar from "../NavBar/NavBar";
import React from "react";

export default function ConfirmPage({
  nextPage,
  prevPage,
  username,
  email,
  address,
  bio,
}) {
  return (
    <>
      <NavBar />
      <div className="form">
        <div className="inputs-container">
          <div className="ul-container">
            <ul className="my-list">
              <li>Your username is : {username} </li>
              <li>Your email is : {email} </li>
              <li>Your address is : {address} </li>
              <li>Your Bio is : {bio} </li>
            </ul>
          </div>

          <div className="Buttons-container">
            <button className="PrevStep" onClick={prevPage}>
              Go Back
            </button>
            <button className="nextStep" onClick={nextPage}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

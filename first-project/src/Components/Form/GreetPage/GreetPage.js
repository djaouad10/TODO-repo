import "./GreetPage.css";

import React from "react";

export default function GreetPage({ prevPage }) {
  return (
    <>
      <div className="greet">
        <h1>You have successfuly Created an account !</h1>
        <div className="Buttons-container">
          <button className="PrevStep" onClick={prevPage}>
            Go Back
          </button>
        </div>
      </div>
    </>
  );
}

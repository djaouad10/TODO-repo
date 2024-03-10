import "./Accordion.css";
import data from "./data.js";
import React, { useState } from "react";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMulti, setEnableMulti] = useState(false);
  const [multiSelected, setMultiSelected] = useState([]);

  const singleClick = (id) => {
    setSelected(selected === id ? null : id);
  };

  const multiClick = (id) => {
    const cpyArr = [...multiSelected];
    const index = cpyArr.indexOf(id);
    index === -1 ? cpyArr.push(id) : cpyArr.splice(index, 1);
    setMultiSelected(cpyArr);
  };
  console.log(multiSelected);
  return (
    <>
      <div className="wrapper">
        <div className="btn">
          <button onClick={() => setEnableMulti(!enableMulti)}>
            Enable multiSelection
          </button>
        </div>
        <div className="main">
          <div className="title">
            <h4>Frequently Asked Questions</h4>
          </div>
          <div className="items-cont">
            {data.map(({ id, question, answer }) => {
              return (
                <>
                  <div
                    onClick={
                      enableMulti ? () => multiClick(id) : () => singleClick(id)
                    }
                    className="item"
                  >
                    <div className="question">
                      <p> {question} </p>
                      <span>+</span>
                    </div>
                    <div className="answer">
                      {enableMulti
                        ? multiSelected.indexOf(id) !== -1 && <p> {answer} </p>
                        : selected === id && <p> {answer} </p>}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

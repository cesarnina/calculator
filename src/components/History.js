import React from "react";
import "./History.css";

const History = (props) => {
  return (
    <div className="history-wrapper">
      <h2>Previous Calculation</h2>
      {
      props.history.map((ele, index) => {
        return <p key={index}>{ele}</p>
      })
      }
    </div>
  );
};

export default History;

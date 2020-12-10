import React from "react";
import "./History.css";

const History = (props) => {
  return (
    <div className="history-wrapper">
      <h2>Previous Calculation</h2>
      {
      props.history.map((ele) => {
        return <p key={ele.id}>{ele.calculation}</p>
      })
      }
    </div>
  );
};

export default History;

import React from "react";
import "./stats.css";

export const UserStats = (props) => {
  return (
    <div className="stat-box" style={{backgroundColor: props.bgc}}>
      <div style={{textAlign: "center"}}>{props.children}</div>
    </div>
  );
};

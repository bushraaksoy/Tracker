import React from "react";
import "./Activity.css";

const Activity = (props) => {
  let styles = { background: props.background };
  return (
    <div
      style={styles}
      className="activity rounded-4 border border-white d-flex gap-1 flex-column align-items-center justify-content-center"
    >
      <div className="icon">{props.icon}</div>
      <div className="title">{props.title}</div>
      <div className="count fs-4 fw-bold">{props.count}</div>
    </div>
  );
};

export default Activity;

import React from "react";
import "./Sidebar.css";

const Sidebar = (props) => {
  let styles = { minWidth: props.width };
  return (
    <div style={styles} className="sidebar rounded-4">
      <div>{props.content}</div>
    </div>
  );
};

export default Sidebar;

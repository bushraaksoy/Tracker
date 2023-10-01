import React from "react";
import "./ListItem.css";

const ListItem = (props) => {
  return (
    <div className="list-item">
      {props.icon} <span className="px-2 ">{props.title}</span>
    </div>
  );
};

export default ListItem;

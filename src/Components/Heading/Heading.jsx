import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";

const Heading = () => {
  return (
    <div className="heading d-flex">
      <div>
        <FaLocationDot />
        {props.location}
      </div>
      <div>
        <FaRegBell />
        <div className="rounded "></div>
      </div>
    </div>
  );
};

export default Heading;

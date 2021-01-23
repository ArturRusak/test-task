import React from "react";

const Triangle = ({ yPos }) => (
  <svg x="80" y={yPos} className="svg-triangle" width='20' height='20'>
    <path d="M 0 10 L 20 0 L 20 20 Z" fill="blue"/>
  </svg>
);

export default Triangle;

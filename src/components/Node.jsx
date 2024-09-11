import React from "react";

function Node(props) {
  //to set style according to the state of node
  const extraClassName = props.isEnd
    ? "node-end"
    : props.isStart
      ? "node-start"
      : props.isWall
        ? "node-wall"
        : "";
  return (
    <div
      className={`node ${extraClassName}`}
      onMouseDown={props.handleMouseDown}
    ></div>
  );
}

export default Node;

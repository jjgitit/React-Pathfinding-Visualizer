import React from "react";

function Node(props) {
  return (
    <div
      className="node"
      onMouseDown={() => props.handleMouseDown(props.row, props.col)}
    >
      {props.col}
    </div>
  );
}

export default Node;

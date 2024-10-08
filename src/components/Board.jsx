import React, { useState } from "react";
import Node from "./Node"; // Assuming Node component is defined elsewhere

function Board() {
  const createNode = (row, col) => {
    return {
      row,
      col,
      isStart: false,
      isEnd: false,
      isWall: false,
    };
  };

  // Generate a new grid for the initial board or whenever resetting the board
  const newGrid = () => {
    const grid = [];
    for (let row = 0; row < 20; row++) {
      const curRow = [];
      for (let col = 0; col < 40; col++) {
        curRow.push(createNode(row, col));
      }
      grid.push(curRow);
    }
    return grid;
  };

  const [startNode, setStartNode] = useState(false);
  const [endNode, setEndNode] = useState(false);
  const [grid, setGrid] = useState(newGrid());
  // Change node based on start/end node flags or toggle walls
  const [mousePressed, setMousePressed] = useState(false);

  const changeNode = (node) => {
    if (!startNode || node.isStart) {
      setStartNode(!startNode);
      return { ...node, isStart: !node.isStart };
    } else if (!endNode || node.isEnd) {
      setEndNode(!endNode);
      return { ...node, isEnd: !node.isEnd };
    } else if (!node.isStart && !node.isEnd) {
      return { ...node, isWall: !node.isWall };
    }
  };

  // Toggle wall on the grid
  const toggleWall = (grid, row, col) => {
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    const newNode = changeNode(node);
    newGrid[row][col] = newNode;
    return newGrid;
  };

  // Handle mouse down event
  const handleMouseDown = (row, col) => {
    setGrid(toggleWall(grid, row, col));
    setMousePressed(true);
  };

  // Handle mouse enter event for potential dragging functionality
  const handleMouseEnter = (row, col) => {
    if (!mousePressed) return;
    const newGrid = toggleWall(grid, row, col);
    setGrid(newGrid);
  };

  // Handle mouse up event (for future functionality)
  const handleMouseUp = (row, col) => {
    setMousePressed(false);
  };

  return (
    <div className="grid">
      {grid.map((row, rowIdx) => (
        <div key={rowIdx}>
          {row.map((node, colIdx) => (
            <Node
              key={`${rowIdx}-${colIdx}`}
              row={rowIdx}
              col={colIdx}
              isStart={node.isStart}
              isEnd={node.isEnd}
              isWall={node.isWall}
              handleMouseDown={() => handleMouseDown(rowIdx, colIdx)}
              handleMouseEnter={() => handleMouseEnter(rowIdx, colIdx)}
              handleMouseUp={() => handleMouseUp(rowIdx, colIdx)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;

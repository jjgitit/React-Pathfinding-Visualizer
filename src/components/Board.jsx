import React, { useState } from "react";
import Node from "./Node";

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

  //for initial board and whenever resetting board
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

  //make 'walls' when pressed
  const toggleWall = (grid, row, col) => {
    //we are shallow copying the grid so we don't update it without 'set' method
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    const newNode = {
      ...node,
      isWall: !node.isWall,
    };
    newGrid[row][col] = newNode;
    return newGrid;
  };

  const [grid, setGrid] = useState(newGrid);

  function handlMouseDown(row, col) {
    if (!grid[row][col].isStart && !grid[row][col].isEnd) {
      setGrid(toggleWall(grid, row, col));
    }
    console.log(grid[row][col]);
  }

  function handleMouseUp(row, col) {
    console.log({ row }, { col });
  }

  return (
    <div className="grid">
      {grid.map((row, rowIdx) => {
        return (
          <div key={rowIdx}>
            {row.map((node, colIdx) => {
              return (
                <Node
                  key={(rowIdx, colIdx)}
                  row={rowIdx}
                  col={colIdx}
                  isStart={node.isStart}
                  isEnd={node.isEnd}
                  isWall={node.isWall}
                  handleMouseDown={handlMouseDown}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Board;

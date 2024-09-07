import React, { useState } from "react";
import Node from './Node';

function Board() {

  const createNode = (row, col) => {
    return ({
      row,
      col,
      isStart : false,
      isEnd : false,
      isWall : false,
    })
  }


  const newGrid = () => {
    const grid = []
    for (let row=0; row < 20; row++) {
      const curRow = []
      for (let col = 0; col < 40; col++) {
        curRow.push(createNode(row, col))
      }
      grid.push(curRow)
    }
    return grid
  }

  const [grid, setGrid] = useState(newGrid)


  function handlMouseDown(row, col) {
    console.log('mouse down!');
  }

  function handleMouseUp(row, col) {
    console.log('mouse up!')
  }

  return (
    <div className="grid">
      {grid.map((row, rowIdx) => {
        return (
          <div key={rowIdx}>
            {row.map((node, colIdx) => {
              return (
                <Node
                  key = {(rowIdx, colIdx)}
                  row = {row}
                  col = {colIdx}
                  isStart = {node.isStart}
                  isEnd = {node.isEnd}
                  isWall = {node.isWall}
                />
              )
            })}
          </div>
        )
      })}
    </div>
  )
}


export default Board;

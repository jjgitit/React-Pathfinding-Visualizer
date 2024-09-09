import Menu from "./components/Menu";
import Board from "./components/Board";
import { useState } from "react";

function App() {
  const [startNode, setStartNode] = useState(false)
  const [endNode, setEndNode] = useState(false)
  return (
    <div>
      <Menu />
      <Board startNode={startNode} endNode={endNode} setStartNode={setStartNode} setEndNode={setEndNode} />
    </div>
  );
}

export default App;

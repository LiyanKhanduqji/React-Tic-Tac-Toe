import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  const handleSelectPlayer = () => {
    setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initilaName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />

          <Player
            initilaName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectPlayer} activePlayerSymbol={activePlayer}/>
      </div>
    </main>
  );
}

export default App;

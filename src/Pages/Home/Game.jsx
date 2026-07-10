import { useState } from "react";
import TicTacToe from "./games/TicTacToe";
import Game2048 from "./games/Game2048";
import SnakeGame from "./games/SnakeGame";

const GAMES = [
  { id: "ttt", label: "Tic-Tac-Toe", tag: "Minimax AI", Component: TicTacToe },
  { id: "2048", label: "2048", tag: "Merge puzzle", Component: Game2048 },
  { id: "snake", label: "Snake", tag: "Arcade", Component: SnakeGame },
];

export default function Game() {
  const [active, setActive] = useState("ttt");
  const Current = GAMES.find((g) => g.id === active).Component;

  return (
    <section className="game--section" id="Game">
      <div className="portfolio--container">
        <p className="section--title">Take a Break</p>
        <h2 className="skills--section--heading">Arcade</h2>
        <p className="game--subtitle">
          A few games I built — from an unbeatable minimax AI to classic arcade logic.
        </p>
      </div>

      <div className="game--tabs" role="tablist" aria-label="Games">
        {GAMES.map((g) => (
          <button
            key={g.id}
            role="tab"
            aria-selected={active === g.id}
            className={`game--tab ${active === g.id ? "active" : ""}`}
            onClick={() => setActive(g.id)}
          >
            {g.label}
            <span className="game--tab--tag">{g.tag}</span>
          </button>
        ))}
      </div>

      <div className="game--stage">
        <Current key={active} />
      </div>
    </section>
  );
}

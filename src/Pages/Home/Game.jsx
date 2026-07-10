import { useState, useCallback } from "react";

const LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
  [0, 4, 8], [2, 4, 6], // diagonals
];

// Returns 'X' | 'O' if there's a winner, 'draw' if the board is full, else null.
function getResult(board) {
  for (const [a, b, c] of LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];
  }
  return board.every(Boolean) ? "draw" : null;
}

// Minimax: score a terminal board from the AI's ('O') perspective, depth-adjusted so the AI
// prefers faster wins and slower losses. This makes 'O' unbeatable.
function minimax(board, isAiTurn, depth) {
  const result = getResult(board);
  if (result === "O") return 10 - depth;
  if (result === "X") return depth - 10;
  if (result === "draw") return 0;

  const player = isAiTurn ? "O" : "X";
  let best = isAiTurn ? -Infinity : Infinity;
  for (let i = 0; i < 9; i++) {
    if (board[i]) continue;
    board[i] = player;
    const score = minimax(board, !isAiTurn, depth + 1);
    board[i] = null;
    best = isAiTurn ? Math.max(best, score) : Math.min(best, score);
  }
  return best;
}

function bestMove(board) {
  let move = -1;
  let bestScore = -Infinity;
  for (let i = 0; i < 9; i++) {
    if (board[i]) continue;
    board[i] = "O";
    const score = minimax(board, false, 0);
    board[i] = null;
    if (score > bestScore) {
      bestScore = score;
      move = i;
    }
  }
  return move;
}

const EMPTY = Array(9).fill(null);

export default function Game() {
  const [board, setBoard] = useState(EMPTY);
  const [locked, setLocked] = useState(false);
  const result = getResult(board);

  const status = result
    ? result === "draw"
      ? "Draw — nobody beats the machine. 🤝"
      : result === "X"
        ? "You win! 🎉"
        : "AI wins 🤖"
    : "Your move (you're X)";

  const reset = useCallback(() => {
    setBoard(EMPTY);
    setLocked(false);
  }, []);

  const play = (i) => {
    if (locked || board[i] || result) return;
    const next = board.slice();
    next[i] = "X";
    setBoard(next);

    if (getResult(next)) return; // player ended the game
    setLocked(true);
    // Let the X render before the AI responds.
    setTimeout(() => {
      const ai = next.slice();
      const move = bestMove(ai);
      if (move >= 0) ai[move] = "O";
      setBoard(ai);
      setLocked(false);
    }, 220);
  };

  return (
    <section className="game--section" id="Game">
      <div className="portfolio--container">
        <p className="section--title">Take a Break</p>
        <h2 className="skills--section--heading">Beat the AI</h2>
        <p className="game--subtitle">
          Tic-Tac-Toe against an unbeatable <strong>minimax</strong> opponent — the best you can do is a draw.
        </p>
      </div>

      <div className="game--wrap">
        <div className="game--status" aria-live="polite">{status}</div>
        <div className="game--board" role="grid" aria-label="Tic-tac-toe board">
          {board.map((cell, i) => (
            <button
              key={i}
              className={`game--cell ${cell ? `is-${cell.toLowerCase()}` : ""}`}
              onClick={() => play(i)}
              disabled={!!cell || !!result || locked}
              aria-label={`Cell ${i + 1}${cell ? `, ${cell}` : ", empty"}`}
            >
              {cell}
            </button>
          ))}
        </div>
        <button className="btn btn-outline-primary game--reset" onClick={reset}>
          New Game
        </button>
      </div>
    </section>
  );
}

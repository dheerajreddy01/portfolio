import { useState, useCallback } from "react";

const LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

function getResult(board) {
  for (const [a, b, c] of LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];
  }
  return board.every(Boolean) ? "draw" : null;
}

// Depth-aware minimax from 'O' (AI) perspective — makes the AI unbeatable.
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

export default function TicTacToe() {
  const [board, setBoard] = useState(EMPTY);
  const [locked, setLocked] = useState(false);
  const result = getResult(board);

  const status = result
    ? result === "draw"
      ? "Draw — nobody beats the machine 🤝"
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
    if (getResult(next)) return;
    setLocked(true);
    setTimeout(() => {
      const ai = next.slice();
      const move = bestMove(ai);
      if (move >= 0) ai[move] = "O";
      setBoard(ai);
      setLocked(false);
    }, 200);
  };

  return (
    <div className="game--wrap">
      <div className="game--status" aria-live="polite">{status}</div>
      <div className="game--board ttt--board" role="grid" aria-label="Tic-tac-toe board">
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
  );
}

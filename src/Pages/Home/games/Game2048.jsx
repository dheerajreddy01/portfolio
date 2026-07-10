import { useState, useEffect, useCallback } from "react";

const SIZE = 4;

const emptyBoard = () => Array.from({ length: SIZE }, () => Array(SIZE).fill(0));

function spawn(board) {
  const empties = [];
  board.forEach((row, r) => row.forEach((v, c) => v === 0 && empties.push([r, c])));
  if (!empties.length) return board;
  const [r, c] = empties[Math.floor(Math.random() * empties.length)];
  const next = board.map((row) => row.slice());
  next[r][c] = Math.random() < 0.9 ? 2 : 4;
  return next;
}

// Slide + merge one row toward the left. Returns { row, gained }.
function slide(row) {
  const nums = row.filter((v) => v);
  const out = [];
  let gained = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      out.push(nums[i] * 2);
      gained += nums[i] * 2;
      i++;
    } else {
      out.push(nums[i]);
    }
  }
  while (out.length < SIZE) out.push(0);
  return { row: out, gained };
}

const transpose = (b) => b[0].map((_, c) => b.map((row) => row[c]));
const reverse = (b) => b.map((row) => row.slice().reverse());

function move(board, dir) {
  let work = board;
  if (dir === "up") work = transpose(board);
  else if (dir === "down") work = reverse(transpose(board));
  else if (dir === "right") work = reverse(board);

  let gained = 0;
  const slid = work.map((row) => {
    const res = slide(row);
    gained += res.gained;
    return res.row;
  });

  let result = slid;
  if (dir === "up") result = transpose(slid);
  else if (dir === "down") result = transpose(reverse(slid));
  else if (dir === "right") result = reverse(slid);

  const changed = JSON.stringify(result) !== JSON.stringify(board);
  return { board: result, gained, changed };
}

function isOver(board) {
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      if (board[r][c] === 0) return false;
      if (c < SIZE - 1 && board[r][c] === board[r][c + 1]) return false;
      if (r < SIZE - 1 && board[r][c] === board[r + 1][c]) return false;
    }
  }
  return true;
}

const start = () => spawn(spawn(emptyBoard()));
const KEYS = { ArrowUp: "up", ArrowDown: "down", ArrowLeft: "left", ArrowRight: "right" };

export default function Game2048() {
  const [board, setBoard] = useState(start);
  const [score, setScore] = useState(0);
  const [over, setOver] = useState(false);

  const reset = useCallback(() => {
    setBoard(start());
    setScore(0);
    setOver(false);
  }, []);

  const handleMove = useCallback(
    (dir) => {
      if (over) return;
      const { board: moved, gained, changed } = move(board, dir);
      if (!changed) return;
      const withNew = spawn(moved);
      setBoard(withNew);
      setScore((s) => s + gained);
      if (isOver(withNew)) setOver(true);
    },
    [board, over]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (KEYS[e.key]) {
        e.preventDefault();
        handleMove(KEYS[e.key]);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleMove]);

  const won = board.some((row) => row.some((v) => v >= 2048));

  return (
    <div className="game--wrap">
      <div className="g2048--top">
        <div className="game--status">{over ? "Game over" : won ? "You made 2048! 🏆" : "Use arrow keys"}</div>
        <div className="g2048--score">Score <b>{score}</b></div>
      </div>
      <div className="g2048--board">
        {board.map((row, r) =>
          row.map((v, c) => (
            <div key={`${r}-${c}`} className={`g2048--tile g2048--v${v}`}>
              {v || ""}
            </div>
          ))
        )}
      </div>
      <div className="g2048--controls">
        <div className="g2048--dpad">
          <button className="g2048--btn up" onClick={() => handleMove("up")} aria-label="Up">▲</button>
          <button className="g2048--btn left" onClick={() => handleMove("left")} aria-label="Left">◀</button>
          <button className="g2048--btn right" onClick={() => handleMove("right")} aria-label="Right">▶</button>
          <button className="g2048--btn down" onClick={() => handleMove("down")} aria-label="Down">▼</button>
        </div>
        <button className="btn btn-outline-primary game--reset" onClick={reset}>New Game</button>
      </div>
    </div>
  );
}

import { useState, useEffect, useRef, useCallback } from "react";

const SIZE = 15;
const SPEED = 130;
const START = [{ x: 7, y: 7 }];

const randCell = () => ({ x: Math.floor(Math.random() * SIZE), y: Math.floor(Math.random() * SIZE) });
function randFood(snake) {
  let f = randCell();
  while (snake.some((s) => s.x === f.x && s.y === f.y)) f = randCell();
  return f;
}

const DIRS = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
};

export default function SnakeGame() {
  const [snake, setSnake] = useState(START);
  const [food, setFood] = useState({ x: 4, y: 4 });
  const [running, setRunning] = useState(false);
  const [over, setOver] = useState(false);
  const [score, setScore] = useState(0);

  const dirRef = useRef({ x: 0, y: -1 });
  const foodRef = useRef(food);
  foodRef.current = food;

  const reset = useCallback(() => {
    setSnake(START);
    setFood(randFood(START));
    dirRef.current = { x: 0, y: -1 };
    setScore(0);
    setOver(false);
    setRunning(false);
  }, []);

  const tick = useCallback(() => {
    setSnake((prev) => {
      const d = dirRef.current;
      const head = { x: prev[0].x + d.x, y: prev[0].y + d.y };
      // wall or self collision → game over
      if (
        head.x < 0 || head.x >= SIZE || head.y < 0 || head.y >= SIZE ||
        prev.some((s) => s.x === head.x && s.y === head.y)
      ) {
        setOver(true);
        setRunning(false);
        return prev;
      }
      const ate = head.x === foodRef.current.x && head.y === foodRef.current.y;
      const next = [head, ...prev];
      if (ate) {
        setScore((s) => s + 1);
        setFood(randFood(next));
      } else {
        next.pop();
      }
      return next;
    });
  }, []);

  useEffect(() => {
    if (!running) return undefined;
    const id = setInterval(tick, SPEED);
    return () => clearInterval(id);
  }, [running, tick]);

  useEffect(() => {
    const onKey = (e) => {
      const d = DIRS[e.key];
      if (!d) return;
      e.preventDefault();
      const cur = dirRef.current;
      if (d.x === -cur.x && d.y === -cur.y) return; // no 180° reversal
      dirRef.current = d;
      if (!over) setRunning(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [over]);

  const cells = [];
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      const isHead = snake[0].x === x && snake[0].y === y;
      const isBody = !isHead && snake.some((s) => s.x === x && s.y === y);
      const isFood = food.x === x && food.y === y;
      cells.push(
        <div
          key={`${x}-${y}`}
          className={`snake--cell${isHead ? " head" : ""}${isBody ? " body" : ""}${isFood ? " food" : ""}`}
        />
      );
    }
  }

  return (
    <div className="game--wrap">
      <div className="g2048--top">
        <div className="game--status">
          {over ? "Game over 💥" : running ? "Go!" : "Press an arrow key to start"}
        </div>
        <div className="g2048--score">Score <b>{score}</b></div>
      </div>
      <div className="snake--board" style={{ gridTemplateColumns: `repeat(${SIZE}, 1fr)` }}>
        {cells}
      </div>
      <button className="btn btn-outline-primary game--reset" onClick={reset}>New Game</button>
    </div>
  );
}

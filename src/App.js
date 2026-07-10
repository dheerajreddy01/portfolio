import "./App.css";
import React from "react";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Homescreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;

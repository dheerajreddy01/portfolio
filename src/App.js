import { react } from "react";
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'

import Home from "./Pages/Homescreen";
import './App.css'

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;

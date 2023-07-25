
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import NoteState from './context/notes/NoteState';

function App() {
  //All functions will written here
  const [mode, setMode] = useState("dark");
  const changemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white"
    }
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black"
    }
  }
  return (
    <>
    <NoteState>
      <Navbar mode={mode} changemode={changemode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </NoteState>
    </>
  );
}

export default App;

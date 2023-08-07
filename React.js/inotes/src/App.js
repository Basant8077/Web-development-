
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import NoteState from './context/notes/NoteState';
import Alert from './Components/Alert';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  //All functions will written here
  const [mode, setMode] = useState("light");
  const [alert ,setAlert] = useState({});

  const changeAlert = (message , type)=>{
    setAlert({
     message: message,
     type : type
    })
    setTimeout(() => {
     setAlert({});
    }, 2000);
   }
  const changemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#37003C";
      document.body.style.color = "white"
      changeAlert("Dark mode Activated", "success")
    }
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#404040"
      changeAlert("Light mode activated", "success")
    }
  }
 
  return (
    <>
    <NoteState>
      <Navbar mode={mode} changemode={changemode} />
      <div className="container " style={{overflow: 'hidden'}}>
      <Alert alert = {alert}/>
      <Routes>
        <Route path="/" element={<Home changeAlert = {changeAlert} mode= {mode} /> } />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login changeAlert = {changeAlert}/>}  />
        <Route path='/signup' element={<Signup changeAlert={changeAlert}/>} />
      </Routes>
      </div>
    </NoteState>
    </>
  );
}

export default App;

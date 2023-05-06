
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const[mode , setMode] = useState('light');
  const[alert , setAlert] = useState(null);

  const changeAlert =(message , type)=>{

    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }
  

  const change = ()=>{
    if(mode ==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor="rgb(40, 40, 40)"
      document.body.style.color="white"
      changeAlert("Dark Mode Activated","success")
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
      changeAlert("Light Mode Enabled" , "success")
    }
  }



  return (
    //! inside it the content is jsx and it return only one value and you can wrap it in jsx fragment shown blow
    //* className is replaced with classNameName
    //* for is relaced with htmlFor since for is a reserved keyword in java script
    //* tab is replaced with tabIndex


    <>
      {/* <Navbar title = "Text-utils"  aboutus = "About text utils" / > */}
      <Navbar title = "Text-utils" mode = {mode} toggleMode ={change}/ >
      <Alert alert={alert}/>
      
      <TextForm Heading ="Enter The Text to analyse " mode = {mode} changeAlert = {changeAlert}/>
      {/* <About  /> */}
    </>
  );
}

export default App;

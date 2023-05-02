
import './App.css';
import Navbar from './components/Navbar';


function App() {
  return (
    //! inside it the content is jsx and it return only one value and you can wrap it in jsx fragment shown blow
    //* className is replaced with classNameName
    //* for is relaced with htmlFor since for is a reserved keyword in java script
    //* tab is replaced with tabIndex
    <>
      {/* <Navbar title = "Text-utils"  aboutus = "About text utils" / > */}
      <Navbar title = "Text-utils"  / >
      {/* <Navbar/> */}
    
    </>
  );
}

export default App;

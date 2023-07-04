import Home from './Components/Home';
import Booklist from './Components/Booklist';
import Book from './Components/Book';
import NewBook from './Components/NewBook';
import Notfound from './Components/Notfound';


import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Bookslayout from './Components/Bookslayout';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to ="/Books" >Booklist</Link>
          </li>

        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/Books' element = {<Bookslayout/>}>
          <Route index element = {<Booklist/>}/>
          <Route path=':id' element ={<Book/>}/>
          <Route path='newbooks' element ={<NewBook/>}/>
        </Route>
        <Route path='*' element={<Notfound/>}/>

        {/* <Route path='/Books' element={<Booklist />} />
        <Route path='/Books/:id' element ={<Book/>} />
        <Route path='/Books/newbooks' element = {<NewBook/>}/> */
        }

      </Routes>
    </>

  );
}

export default App;

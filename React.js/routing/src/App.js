import Home from './Components/Home';
import Booklist from './Components/Booklist';
import Book from './Components/Book';
import NewBook from './Components/NewBook';
import Notfound from './Components/Notfound';


import './App.css';
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Bookslayout from './Components/Bookslayout';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>

            {/* inside style we are passing a function which is taking an object and when clicked it will respond   */}

            {/* <NavLink style={({ isActive }) => {
              return isActive ? { color: "red" } : {}     //* empty object
            }} to="/" >
              {({ isActive }) => {
                return isActive ? "Home Activated" : "Home";
              }}
            </NavLink> */}
          <NavLink to = "/ " element = {<Home/>}>Home</NavLink>

          </li>
          <li>
            <NavLink end to="/Books"  >Booklist</NavLink>
          </li>

        </ul>
      </nav>
      {/* <Routes>
        <Route path='/Books' element={<h1>Welcome to book section " Extra content"</h1>} />
      </Routes> */}
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/Books' element={<Bookslayout />}>
          <Route index element={<Booklist />} />
          <Route path=':id' element={<Book />} />
          <Route path='newbooks' element={<NewBook />} />
        </Route>
        <Route path='*' element={<Notfound />} />

        {/* <Route path='/Books' element={<Booklist />} />
        <Route path='/Books/:id' element ={<Book/>} />
        <Route path='/Books/newbooks' element = {<NewBook/>}/> */
        }

      </Routes>
    </>

  );
}

export default App;

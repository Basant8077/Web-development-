import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Bookslayout() {
  return (
   <>
    <nav>
        <ul>
            <li>
                <Link to = "/Books/1">Book 1</Link><br />
                <Link to = "/Books/2">Book 2</Link><br />
                <Link to = "/Books/newbooks">New Books</Link><br />
                
            </li>
        </ul>
    </nav>
    <Outlet/>
   </>
  )
}

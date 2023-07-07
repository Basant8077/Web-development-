import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

export default function Bookslayout() {
    const [SearchParams, setSearchParams] = useSearchParams({ n: 3 })
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/Books/1">Book 1</Link><br />
                        <Link to="/Books/2">Book 2</Link><br />
                        <Link to={`/Books/${number}`}>Book {number}</Link><br />
                        <Link to="/Books/newbooks">New Books</Link><br />

                    </li>
                </ul>
            </nav>
            <input type="number" value={number} onChange={(e) => setSearchParams({ n: e.target.value })}></input>
            <Outlet context={{ hello: "world" }} />
        </>
    )
}

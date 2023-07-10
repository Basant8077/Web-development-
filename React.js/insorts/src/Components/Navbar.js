import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'

export class Navbar extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/newsapp">
                        <img src="https://img.freepik.com/premium-photo/fire-alphabet-letter-i-isolated-black-background_564276-9241.jpg?w=740" width="30" height="30" alt="IMG" />
                    </a>
                    <Link className="navbar-brand"  to = "/" >Inshort's</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                           
                            <li className="nav-item  active">
                                <Link to="/business" className="nav-link"> Business</Link>
                            </li>
                            <li className="nav-item  active">
                                <Link to="/entertainment" className="nav-link"> Entertainment</Link>
                            </li>
                            <li className="nav-item  active">
                               <Link to="/health" className="nav-link">Health</Link>
                            </li>
                            <li className="nav-item active ">
                            <Link to="/science" className="nav-link">Science</Link>
                            </li>
                            <li className="nav-item  active" >
                            <Link to="/sports" className="nav-link">Sports</Link>
                            </li>
                            <li className="nav-item  active">
                            <Link to="/technology" className="nav-link">Technology</Link>
                            </li>
                    
                        </ul>
                    </div>
                </nav>
                <Outlet/>
            </div>
        )
    }
}

export default Navbar

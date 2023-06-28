import React, { Component } from 'react'

export class Navbar extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/newsapp">
                        <img src="https://img.freepik.com/premium-photo/fire-alphabet-letter-i-isolated-black-background_564276-9241.jpg?w=740" width="30" height="30" alt="IMG" />
                    </a>
                    <a className="navbar-brand" href="/newsapp">Inshort's</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/newsapp">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/newsapp">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/newsapp">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar

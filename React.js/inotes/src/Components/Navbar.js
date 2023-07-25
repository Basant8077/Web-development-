import React from 'react'
import { Link } from 'react-router-dom'
function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary bg-${props.mode} border-bottom border-bottom-${props.mode}`} data-bs-theme={`${props.mode}`}>

      <div className="container-fluid">
        <a className="navbar-brand" href="#">INotes</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"} >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/about"}> About </Link>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.changemode} />
          <label className="form-check-label" for="flexSwitchCheckChecked">{`${props.mode} Mode`}</label>
        </div>

      </div>
    </nav>
  )
}

export default Navbar

import React from 'react'
import { Link, useLocation  } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
function Navbar(props) {

  const location = useLocation();
  const navigate = useNavigate();
  const {changeAlert} = props
  const handleLogout =()=>{
    localStorage.clear("token");
    changeAlert("Logged out SuccesFully", "success");
    navigate("/login");
  }
  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary bg-${props.mode} border-bottom border-bottom-${props.mode}`} data-bs-theme={`${props.mode}`}>

      <div className="container-fluid">
        <a className="navbar-brand" href="home">INotes</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to={"/"} >Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to={"/about"}> About </Link>
            </li>
          </ul>
        </div>
        <div className="d-flex justify-content-between">
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.changemode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{`${props.mode} Mode`}</label>
          </div>
         {  !localStorage.getItem("token") ? <form>
          <Link className="btn btn-primary mx-2" to="/Login" role="button">Login</Link>
          <Link className="btn btn-outline-primary mx-2" to="/signup" role="button">SignUp</Link>
          </form> : <button className='btn btn-danger mx-3' onClick={handleLogout}>Log Out</button>}

        </div>

      </div>
    </nav>
  )
}

export default Navbar

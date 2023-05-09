import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
   
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">{props.aboutus}</a>
      </li>
    </ul>
  </div>
  <div className="custom-control custom-switch ">
  <input type="checkbox" onClick={props.toggleMode} className="custom-control-input" id="customSwitch1" />
  <label className={`custom-control-label text-${props.mode === 'light'?'dark':'light'}`} htmlFor="customSwitch1">{props.mode} Mode</label>
</div>
</nav>
  )
}
Navbar.propTypes={
    title: PropTypes.string.isRequired,
    aboutus: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: 'App title here',
    aboutus: 'About '
  };

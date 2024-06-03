import React, {useState} from 'react'
import Proptype from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(proops) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${proops.mode} bg-${proops.mode}`}>
    <div className="container-fluid mx-3">
      <Link className="navbar-brand" to="/">{proops.tytle}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active mx-2" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active mx-2" to="/about">{proops.aboutText}</Link>
          </li>
        </ul>
        <div className={`form-check form-switch text-${proops.mode === 'light'?'secondary':'light'}`}>
  <input className="form-check-input " type="checkbox" onClick={proops.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{proops.changesMode}</label>
</div>
      </div>
    </div>
  </nav>
  )
}

Navbar.prototype = {tytle: Proptype.string,
                 aboutText: Proptype.string
}

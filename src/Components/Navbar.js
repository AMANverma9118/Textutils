import React, {useState} from 'react'
import Proptype from 'prop-types'


export default function Navbar(proops) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${proops.mode} bg-${proops.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{proops.tytle}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">{proops.aboutText}</a>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-primary mx-1" type="submit">Search</button>
        </form> */}
        <div className={`form-check form-switch text-${proops.mode === 'light'?'secondary':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={proops.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault" >{proops.changesMode}</label>
</div>
      </div>
    </div>
  </nav>
  )
}

Navbar.prototype = {tytle: Proptype.string,
                 aboutText: Proptype.string
}

import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'

const Navbar = (props) => {
  let location = useLocation();
  let history = useHistory()

  const handleLogout = () => {
    localStorage.removeItem('token')
    history.push('/login') // redirect
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">CloudNotes</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""} `} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
            </li>
          </ul>
          
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-3`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btnText}</label>
          </div>

          
          {!localStorage.getItem('token') ?
            <form className="d-flex">
              <Link className="btn btn-secondary mx-1 btn-sm" to="/login" role="button">Login</Link>
              <Link className="btn btn-secondary mx-1 btn-sm" to="/signup" role="button">SignUp</Link>
            </form> : <button onClick={handleLogout} className='btn btn-secondary btn-sm'>Logout</button>}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

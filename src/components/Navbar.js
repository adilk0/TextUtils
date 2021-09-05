import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

export const Navbar = (props) => {
    return (
        <>
            <nav style={{background : props.mode === 'light' ? "#ff8c00ad" : "#212529"}} className={`nav-grid navbar navbar-expand-lg navbar-${props.mode}`} data-toggle="affix">
                <div className="mx-auto d-block flex-sm-nowrap title">
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link className="navbar-brand" to="/">{props.title}</Link>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="./About">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={`form-check form-switch mx-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                </div>
            </nav>
        </>
    )
}

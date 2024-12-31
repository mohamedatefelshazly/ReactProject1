// import React from 'react'
import { NavLink } from 'react-router-dom'
import { activeNav } from '../helper func'

export default function Nav() {
    return (

        <nav className="navbar navbar-expand-lg  bg-[#2C3E50] navCol">
            <div className="container px-2 py-2">
                <a className="navbar-brand text-white fw-bold fs-2" href="#">Start Framework</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white activeTab" aria-current="page" to="/about" onClick={(e) => activeNav(e)} >About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/portfolio" onClick={(e) => activeNav(e)}>Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/contact" onClick={(e) => activeNav(e)}>Contact</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

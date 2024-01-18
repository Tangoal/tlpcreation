import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from "../assets/img/LOGO_TLP_square.png";

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
            <div className='sidebar-logo'><NavLink to='/'><img src={logo} alt="Logo" /></NavLink></div>
            <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className={`bar bar1`}></div>
                <div className={`bar bar2`}></div>
                <div className={`bar bar3`}></div>
            </div>
            <nav className={`sidebar-links ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <NavLink to='/' onClick={toggleMenu}><li>Accueil</li></NavLink>
                    <NavLink to='/projets' onClick={toggleMenu}><li>Projets</li></NavLink>
                    <NavLink to='/contact' onClick={toggleMenu}><li>Contact</li></NavLink>
                </ul>
            </nav>
            <div className="footer-legal">
                <p><NavLink to="/mentions-legales" title="Mentions Légales">Mentions Légales</NavLink></p>
            </div>
        </div>
    );
}
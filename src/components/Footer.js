import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="footer-social">
                <a href="" title="Facebook" target="_blank"><i className="fab fa-square-facebook"></i></a>
                <a href="https://www.linkedin.com/in/tanguy-le-pors" title="LinkedIn" target="_blank"><i className="fab fa-linkedin"></i></a>
                <a href="" title="Instagram" target="_blank"><i className="fab fa-square-instagram"></i></a>
            </div>
            <div className="footer-legal">
                <p><Link to="/mentions-legales" title="Mentions Légales">Mentions Légales</Link></p>
            </div>
        </footer>
    )
}
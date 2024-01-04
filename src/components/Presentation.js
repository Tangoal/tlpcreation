import React from 'react'
import { NavLink } from 'react-router-dom';
import './Presentation.css'
import profile_pic from ".//../assets/img/default.jpg"

export default function Presentation() {
  return (
    <div class="container">
      <div class="section">
        <div className='header'>
          <h1>Créateur de sites internet</h1>
          <p><NavLink to='/contact'>Demander un devis</NavLink></p>
        </div>
      </div>
      <div class="section">
        <div class="grid">
          <div className='box'>
            <div class="presentation-text">
              <p>TLP Creation vous accompagne pour toutes création de sites internet.</p>
              <p>Ingénieur de formation, Tanguy LE PORS vous propose.</p>
            </div>
            <div class="presentation-img"><img src={profile_pic} loading="lazy" alt="Tanguy Le Pors" />
            </div>
          </div>
          <div className='box'></div>
          <div className='box'></div>
      </div>
      </div>
    </div>
  )
}
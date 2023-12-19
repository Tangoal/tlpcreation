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
        <div class="home_grid">
          <div className='home_box'>
            <div class="presentation-text">
              <p>TLP Creation vous accompagne pour toutes création de sites internet.</p>
              <p>Tanguy LE PORS</p>
            </div>
            <div class="presentation-img"><img src={profile_pic} loading="lazy" alt="Tanguy Le Pors" />
            </div>
          </div>
          <div className='home_box'>
          <h3>Il nous font confiance :</h3>
          </div>
          <div className='home_box'>
          <h3>Technologies utilisées :</h3>
          <div class="techno_grid">
          <div className='techno_box'></div>
          <div className='techno_box'></div>
          <div className='techno_box'></div>
          <div className='techno_box'></div>
          <div className='techno_box'></div>
          <div className='techno_box'></div>
          </div>

          </div>
      </div>
      </div>
    </div>
  )
}
import React from 'react'
import { NavLink } from 'react-router-dom';
import './Presentation.css'
import Caroussel from '../components/Caroussel'
import PopupTypeForm from './PopupTypeForm'
import profile_pic from ".//../assets/img/default.jpg"
import logo_HTML5 from ".//../assets/img/logo_techno/logo_HTML5.png"
import logo_CSS3 from ".//../assets/img/logo_techno/logo_CSS3.png"
import logo_JS from ".//../assets/img/logo_techno/logo_JS.png"
import logo_React from ".//../assets/img/logo_techno/logo_React.png"
import logo_Webflow from ".//../assets/img/logo_techno/logo_Webflow.png"
import logo_WordPress from ".//../assets/img/logo_techno/logo_WordPress.png"


export default function Presentation() {
  return (
    <div class="container">
      <div class="section">
        <div className='header'>
          <h1>Créateur de sites internet</h1>
          <PopupTypeForm />
        </div>
      </div>
      <div class="section">
        <div class="home_grid">
          <div className='home_box'>
            <div class="presentation-text">
              <p>TLP Creation vous accompagne pour toutes création de sites internet.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div class="presentation-img"><img src={profile_pic} loading="lazy" alt="Tanguy Le Pors" />
            </div>
          </div>
          <div className='home_box'>
            <h3>Ils m'ont fait confiance :</h3>
            <Caroussel />
          </div>
          <div className='home_box'>
            <h3>Technologies utilisées :</h3>

            <div class="techno_grid">
              <div className='techno_box'><a href="https://fr.wikipedia.org/wiki/Hypertext_Markup_Language" title="HTML5" target="_blank"><img src={logo_HTML5} loading="lazy" alt="logo_HTML5" /></a></div>
              <div className='techno_box'><a href="https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade" title="CSS3" target="_blank"><img src={logo_CSS3} loading="lazy" alt="logo_CSS3" /></a></div>
              <div className='techno_box'><a href="https://fr.wikipedia.org/wiki/JavaScript" title="JS" target="_blank"><img src={logo_JS} loading="lazy" alt="logo_JS" /></a></div>
              <div className='techno_box'><a href="https://fr.wikipedia.org/wiki/React" title="React" target="_blank"><img src={logo_React} loading="lazy" alt="logo_React" /></a></div>
              <div className='techno_box'><a href="https://fr.wikipedia.org/wiki/WordPress" title="WordPress" target="_blank"><img src={logo_WordPress} loading="lazy" alt="logo_WordPress" /></a></div>
              <div className='techno_box'><a href="https://fr.wikipedia.org/wiki/Webflow" title="Webflow" target="_blank"><img src={logo_Webflow} loading="lazy" alt="logo_Webflow" /></a></div>

            </div>

          </div>
        </div>
      </div>





    </div>
  )
}
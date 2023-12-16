import React from 'react'
import './Contact.css'
import avatar from ".//../assets/img/default.jpg"
import phone from ".//../assets/img/default.jpg"
import mail from ".//../assets/img/default.jpg"
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section id="contact">
      <div class="section-bg-white">
        <div class="section-contact">
          <h2>Contact</h2>
          <div class="container-contact">
            <div class="info-contact">
              <div class="icon-text">
                <img src={avatar} loading="lazy" alt="Fondateur" />
                <p>Tanguy LE PORS</p>
              </div>
              <div class="icon-text">
                <img src={phone} loading="lazy" alt="Téléphone" />
                <p>06 09 93 27 96</p>
              </div>
              <div class="icon-text">
                <img src={mail} loading="lazy" alt="Mail" />
                <p>contact@tlpcreation.fr</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
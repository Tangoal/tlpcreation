import React from 'react'
import './Caroussel.css'
import car1 from ".//../assets/img/logo-sefosa.jpg"
import car2 from ".//../assets/img/logo-lsu.png"


function Caroussel() {
    return (
        <div class="container-caroussel">
            <div class="caroussel">
                <img src={car1} alt="Caroussel 1" />
                <img src={car2} alt="Caroussel 2" loading="lazy" />
                <img src={car1} alt="Caroussel 1" />
            </div>
        </div>
    )
}

export default Caroussel
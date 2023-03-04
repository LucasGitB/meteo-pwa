import '@fortawesome/fontawesome-free/css/all.css';

import "./app.js";
import { weather } from './data/weather.js';
import nuageImg from './asset/img/nuage.png';
import soleilImg from './asset/img/soleil.png';
import orageImg from './asset/img/orage.png';
import pluieImg from './asset/img/pluie.png';
import createDay from './createDay.js';



let valueIdCity = 1;
createDay(valueIdCity);
console.log(weather[valueIdCity].city);


const btnPreviousCity = document.getElementById("btnPreviousCity");

btnPreviousCity.addEventListener("click", function () {
    if (valueIdCity > 1) {
        valueIdCity -= 1;
    }

    if (valueIdCity === 1) {
        btnPreviousCity.disabled = true;
    }

    btnNextCity.disabled = false;
    createDay(valueIdCity);
});


const btnNextCity = document.getElementById("btnNextCity");

btnNextCity.addEventListener("click", function () {

    if (valueIdCity < weather.length) {
        valueIdCity += 1;
    }

    if (valueIdCity === weather.length) {
        btnNextCity.disabled = true;
    }

    btnPreviousCity.disabled = false;
    createDay(valueIdCity);
});






addEventListener


const citiesArr = weather.map(w => w.city);





console.log(weather);

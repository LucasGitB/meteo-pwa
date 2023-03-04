import { weather } from './data/weather.js';
import nuageImg from './asset/img/nuage.png';
import soleilImg from './asset/img/soleil.png';
import orageImg from './asset/img/orage.png';
import pluieImg from './asset/img/pluie.png';


function state(state) {
    switch (state) {
        case "soleil":
            return soleilImg;
        case "nuage":
            return nuageImg;

        case "orage":
            return orageImg;

        case "pluie":
            return pluieImg;
    }
}

function createDay(id) {
    const cityWeather = weather.find((el) => el.id === id);
    const temperatures = cityWeather.records;
    const cityName = cityWeather.city;

    const weatherContainerEl = document.getElementById("weatherContainer");
    weatherContainerEl.innerHTML = "";

    const cityNameEl = document.getElementById("cityName");
    cityNameEl.innerText = cityName;

    const dayTempsEl = document.getElementById("dayTemps");
    dayTempsEl.src = state(temperatures[0].state);
    console.log(state(temperatures[0].state));

    const dayTemperatureEl = document.getElementById("dayTemperature")
    dayTemperatureEl.innerHTML = temperatures[0].temperature;


    for (const temperature of temperatures) {
        const divDay = document.createElement("div");
        divDay.classList.add("flex", "justify-center", "items-center", "gap-14");

        const pDay = document.createElement("p");
        const imgEl = document.createElement("img");
        imgEl.classList.add("w-10")
        const pTemperature = document.createElement("p");

        pDay.innerText = new Date(temperature.date).toLocaleDateString("fr-FR", { weekday: "long" });


        imgEl.src = state(temperature.state);

        pTemperature.innerText = temperature.temperature;

        divDay.append(pDay, imgEl, pTemperature);


        weatherContainerEl.appendChild(divDay);
    }

}



export default createDay;
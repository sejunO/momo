'use strict'
const clockContainer = document.querySelector(".js-clock");
const clockTitle = document.querySelector("h1");
      
function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : `${hours}`} : ${
        minutes < 10 ? `0${minutes}` : `${minutes}`
    }`;
}

function init() {

setInterval(getTime, 1000);
}

init();
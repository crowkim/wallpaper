const weather = document.querySelector(".js-weather");
const apiKey = 'f8322c4d6ddb8a044e38ede62442f576'
const coords = "coords"

function getWeather(lat, lng) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`
        )
        .then(function (response) {
            return response.json()
        })
        .then(function (json) {
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature}'c
            ${place}`;
        })
}

function saveCoords(coordsObj) {
    localStorage.setItem(coords, JSON.stringify(coordsObj))
}

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude)
}

function handleGeoError() {
    console.log("can't eccess geo location")
}

function aksForCoodrs() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(coords);
    if (loadedCoords === null) {
        aksForCoodrs();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude)
    }
}

function init() {
    loadCoords();
}

init();
const weatherAPI = document.querySelector('#weatherAPI');

const USERKEY = 'e33e6f103695ad2603ce610584427513';

function onGeoOk(response){
    const lat = response.coords.latitude;
    const lon = response.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${USERKEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(response => {
            let city = response.name;
            let weather = response.weather[0].main;
            let temp = response.main.temp;
            let humidity = response.main.humidity;
            let text = `City: ${city} / Weather: ${weather} / Temp: ${temp}°C / Humidity: ${humidity}%`;
            weatherAPI.innerText = text;
        });
}

function onGeoError(){
    alert("Can't find your position");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

const weather = document.querySelector('#weather');

const USERKEY = 'e33e6f103695ad2603ce610584427513';

function onGeoOk(event){
    const lat = event.coords.latitude;
    const lon = event.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${USERKEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(response => {
            const city = response.name;
            const temp = response.main.temp;
            const humidity = response.main.humidity;
            const weatherState = response.weather[0].main;
            weather.innerText = `City: ${city} / Temp: ${temp}°C / Humidity: ${humidity}% / Weather: ${weatherState}`;
        });
}

function onGeoError(){
    alert("Can't get your location!");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
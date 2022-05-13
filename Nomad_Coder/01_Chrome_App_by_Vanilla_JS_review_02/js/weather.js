const USER_ID = 'e33e6f103695ad2603ce610584427513';

const weatherContainer = document.querySelector('#weather');


function geoOk(position){
    const lon = position.coords.longitude;
    const lat = position.coords.latitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${USER_ID}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            const city = response.name;
            const weather = response.weather[0].main;
            const temp = response.main.temp;
            weatherContainer.innerText = `City: ${city} / Weather: ${weather} / Temp: ${temp}°C`;
        });
}

function geoError(response){
    console.log('error!');
}


navigator.geolocation.getCurrentPosition(geoOk, geoError);
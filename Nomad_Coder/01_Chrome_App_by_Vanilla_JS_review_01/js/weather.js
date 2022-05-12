const USER_ID = 'e33e6f103695ad2603ce610584427513';

const weatherContainer = document.querySelector('#weather');


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${USER_ID}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then((data) => {
        const city = data.name;
        const weather =  data.weather[0].main;
        const temp =  data.main.temp;
        weatherContainer.innerText = `city: ${city} / weather: ${weather} / temp: ${temp}°C`;
    });
}
function onGeoError(){
    console.log("error!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


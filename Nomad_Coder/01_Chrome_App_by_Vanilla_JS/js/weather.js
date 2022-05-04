const API_KEY = "e33e6f103695ad2603ce610584427513";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weatherContainer = document.querySelector("#weather span:first-Child");
        const cityContainer = document.querySelector("#weather span:last-Child");
        weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        cityContainer.innerText = data.name;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
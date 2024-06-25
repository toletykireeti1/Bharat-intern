let country = document.querySelector("#country");
let city = document.querySelector("#city");
let check = document.querySelector("#check");
let tempIcon = document.querySelector("#tempIcon");
let weatherCountry = document.querySelector("#weatherCountry");
let temperature = document.querySelector("#temperature");
let weatherDescription = document.querySelector("#weatherDescription");
let feelsLike = document.querySelector("#feelsLike");
let humidity = document.querySelector("#humidity");
let longitude = document.querySelector("#longitude");
let latitude = document.querySelector("#latitude");

check.addEventListener("click", () => {
    let key = '7e3a39c2d49f0204e69a7394bb263ed9';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&lang=en&units=metric&appid=${key}`;

    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        weatherCountry.innerText = `${data.name} / ${data.sys.country}`;
        temperature.innerHTML = `${data.main.temp}°<b>C</b>`;
        document.body.style.backgroundImage ="https://th.bing.com/th/id/OIP.D5uQC9rVCqkNLGbmpUhu3wHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" + "')";

        data.weather.forEach(items => {
            weatherDescription.innerText = items.description;
            if (items.id < 250) {
                tempIcon.src = 'storm.svg';
            } else if (items.id < 350) {
                tempIcon.src = 'drizzle.png';
            } else if (items.id < 550) {
                tempIcon.src = 'snow.png';
            } else if (items.id < 650) {
                tempIcon.src = 'rain.png';
            } else if (items.id < 800) {
                tempIcon.src ='atmosphere.svg';
            } else if (items.id === 800) {
                tempIcon.src = 'sun.png';
            } else if (items.id > 800) {
                tempIcon.src = 'clouds.png';
            }
        })

        feelsLike.innerText = `Feels Like ${data.main.feels_like}°C`;
        
        humidity.innerText = `Humidity ${data.main.humidity}`;
        latitude.innerText = `Latitude ${data.coord.lat}`;
        longitude.innerText = `Latitude ${data.coord.lon}`;
        
    })
    country.value = "";
    city.value = "";
})
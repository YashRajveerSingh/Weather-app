

const API_KEY = `263d2f33a0cc977a192da72980434dfa`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");
let tempvalue = document.querySelector(".temp");

const getWeather = async (city) => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        
        if (response.ok) {
            showWeather(data);
        } else {
            weather.innerHTML = `<h2>${data.message}</h2>`;
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        weather.innerHTML = "<h2>An error occurred while fetching weather data.</h2>";
    }
};

const showWeather = (data) => {
    tempvalue.innerText = `${data.main.temp}°C`;
    console.log("Weather data displayed:", data);
};

form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    const city = search.value.trim(); 
    if (city) {
        getWeather(city);
    }
});

let country = document.getElementById("countryName")
let countryName = country.getAttribute("value");

// generate random country
async function randomLocation() {
    let response = await fetch('https://countriesnow.space/api/v0.1/countries/capital');
    let info = await response.json();
    let index = Math.floor(Math.random() * info.data.length);
    let randomCountry = info.data[index].name;
    country.setAttribute("value", randomCountry);
    countryName = randomCountry;
}

// get weather data of country
async function getWeather() {
    let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=e8c9a942f1b642e29a0155234220902&q=${countryName}&aqi=yes`);
    let info = await response.json();
    // console.log(countryName);
    dayWeatherCode = await info.current.condition.code;
    fahrenheitWeather = await info.current.temp_f;
    console.log(fahrenheitWeather)
    console.log(dayWeatherCode)
    getData();
    displayData();
}
// get weather code and icon 
async function getData() {
    let response = await fetch("https://www.weatherapi.com/docs/weather_conditions.json")
    let info = await response.json();
    for (let i = 0; i < info.length; i++) {
        if (info[i].code === dayWeatherCode) {
            // console.log("it exists");
        }
    }
}
// displaying weather data on html 
function displayData() {
    displayCountry = document.getElementById("countryDisplay");
    displayWeather = document.getElementById("currentWeather");
    clearData();
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h1");
    h1Text = document.createTextNode(`Country : ${countryName}`);
    h1.appendChild(h1Text);
    displayCountry.appendChild(h1);
    h1Text2 = document.createTextNode(`Current Temp: ${fahrenheitWeather}°F`);
    h2.appendChild(h1Text2);
    displayWeather.appendChild(h2);
}

// set condition only when previous weather data still exists.
function clearData() {
    if (displayCountry.childNodes != 0 && displayWeather.childNodes != 0) {
        removeNodes(displayCountry);
        removeNodes(displayWeather);
    }
}
// function to remove html elements after fetching weather data from previous country
function removeNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
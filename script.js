let country = document.getElementById("countryName");
let dayWeatherCode = "";
let nightWeatherCode = "";
let weather = "";
// let capital = document.getElementById("capitalName");

// generate random country
async function randomLocation() {
    let response = await fetch('https://countriesnow.space/api/v0.1/countries/capital');
    let info = await response.json();
    let index = Math.floor(Math.random() * info.data.length);
    let randomCountry = info.data[index].name;
    // let randomCapital = info.data[index].capital
    country.setAttribute("value", randomCountry)
    // capital.setAttribute("value", randomCapital)
    // console.log(randomCountry, randomCapital);
}


// get weather data of country
async function getWeather() {
    if (country.value === "country") {
        console.log("Randomize country first to get weather forecast!");
    }
    let response = await fetch('http://api.weatherapi.com/v1/current.json?key=e8c9a942f1b642e29a0155234220902&q=%{country}&aqi=yes');
    let info = await response.json();
    fahrenheitWeather = info.current.temp_f;
    dayWeatherCode = info.current.condition.code;
    console.log(typeof dayWeatherCode);
    console.log(dayWeatherCode)
    // await weatherData();
}

async function compareData() {
    let response = await fetch("https://www.weatherapi.com/docs/weather_conditions.json")
    let info = await response.json();
    for (let i = 0; i < info.length; i++) {
        if (info[i].code === dayWeatherCode) {
            console.log(typeof info[i].code);
        }
    }
}
compareData();

// displaying weather data on html 
function weatherData() {
    let div = document.createElement("div")
    let text = "'Location: ${country}'"
    div.classList.add("weatherForecast");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    // day & night weather icons
    let dayWeatherIcon = document.createElement("img")
}
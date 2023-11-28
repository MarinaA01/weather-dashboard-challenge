var searchHistory = document.getElementById('search-history');
var searchFormEl = document.getElementById('search-form');
let city = `Orlando`
state = `FL`
let country = `USA`;
let lat = "lat";
let lon = "lon";
let key = `2ee898c012e56cb36166d4a71be09113`;
let url = `api.openweathermap.org/data/2.5/forecast?q=${city},${state}&appid=${key}`

function fetchWeather() {
    fetch(url)
        .then(function(response){
        return response.json;
    })
    .then(function(data) {
    console.log(data);
    })
}


function display() {
    localStorage.setItem(city, searchFormEl);
    var h3 = document.createElement('h3');
    searchHistory.innerHTML = localStorage.getItem(city);
}

display();
fetchWeather();
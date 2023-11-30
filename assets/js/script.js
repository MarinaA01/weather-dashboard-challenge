var searchHistory = document.getElementById('search-history');
var searchFormEl = document.getElementById('search-input');
var button = document.getElementById('submitBtn');

function fetchWeather() {
    var userInput = searchFormEl.value;
    let key = `2ee898c012e56cb36166d4a71be09113`;
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&appid=${key}&units=imperial`;

    fetch(url)
        .then(function(response){
        return response.json();
    })
    .then(function(data) {
    console.log(data);
    displayData(data);
    })
    .catch(function(error) {
        console.error('Error:', error);
    })
}

function displayData(data) {
    var tempEl = document.querySelector('.temp');
    var dayEl = document.querySelector('#currentDay');
    var dateEl = document.querySelector('.date');
    var cityEl = document.querySelector('.card-title-1');
    var windEl = document.querySelector('.wind');
    var humidEl = document.querySelector('.humidity');
    var iconEl = document.querySelector('.icon');
    var currentDate = dayjs()
    dateEl.textContent = data.date;
    tempEl.textContent = 'Temp: ' + data.list[0].main.temp + '\u00B0F';
    cityEl.textContent = data.city.name;
    iconEl.innerHTML = data.list[0].weather[0].icon;
    windEl.textContent = 'Wind: ' + data.list[0].wind.speed + 'MPH';
    humidEl.textContent = 'Humidity: ' + data.list[0].main.humidity + '%';
    dayEl.textContent = currentDate.format('MM/DD/YYYY');

    tomorrow = document.getElementById('day-1');
    tomorrowsDate = currentDate.add(1, 'day');
    tomorrow.textContent = tomorrowsDate.format('MM/DD/YYYY');


    
}

function updateHistory(userInput) {
    var h3 = document.getElementById('lastSearch');
    localStorage.setItem('lastSearchedCity', userInput);
    searchHistory.appendChild(h3);
    h3.textContent = localStorage.getItem(userInput, 'lastSearchedCity');

}

button.addEventListener('click', function(event) {
    event.preventDefault();



    fetchWeather();
    updateHistory();
  


    
        
})
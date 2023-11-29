var searchHistory = document.getElementById('search-history');
var searchFormEl = document.getElementById('search-input');
var button = document.getElementById('submitBtn');

function fetchWeather() {
    var userInput = searchFormEl.value;
    let key = `2ee898c012e56cb36166d4a71be09113`;
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&appid=${key}`;

    fetch(url)
        .then(function(response){
        return response.json();
    })
    .then(function(data) {
    console.log(data);
    displayData(data);
    updateHistory();
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
    var currentDate = dayjs()
    tempEl.textContent = 'Temperature: ' + data.temperature;
    dateEl.textContent = data.date;
    cityEl.textContent = data.name;
    dayEl.textContent = currentDate.format('MM/DD/YYYY');


    
}

function updateHistory(userInput) {
    var h3 = document.createElement('<h3>')
    localStorage.setItem('lastSearchedCity', userInput);

}


// let city = `Orlando`
// state = `FL`
// let country = `USA`;
// let lat = "lat";
// let lon = "lon";

button.addEventListener('click', function(event) {
    event.preventDefault();



    fetchWeather();
    displayData();
    updateHistory();
  


    h3.textContent = localStorage.getItem(userInput, 'lastSearchedCity');
    searchHistory.children().append(h3);
        
})
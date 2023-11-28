var searchHistory = document.getElementById('search-history');
var searchFormEl = document.getElementById('search-input');
var button = document.getElementById('submitBtn');
var userInput = searchFormEl.value;
let key = `2ee898c012e56cb36166d4a71be09113`;
let url = `https://api.openweathermap.org/data/2.5/forecast?q=` + userInput;

function fetchWeather() {
    fetch(url)
        .then(function(response){
        return response.json;
    })
    .then(function(data) {
    console.log(data);
    })
    .catch(function(error) {
        console.error('Error:', error);
    })
}

function displayData() {
    var tempEl = document.querySelector('.temp');
    var dayEl = document.querySelector('#currentDay');
    var dateEl = document.querySelector('.date');
    var currentDate = dayjs()
    tempEl.textContent = 'Temperature: ' + data.temperature;
    dateEl.textContent = data.date;
    dayEl.textContent = currentDate.format('MM/DD/YYYY');


    
}

function updateHistory(userInput) {
    var h3 = document.createElement('<h3>')
    localStorage.setItem('lastSearchedCity', userInput);
    searchHistory.textContent = this.children().append(h3);

}


// let city = `Orlando`
// state = `FL`
// let country = `USA`;
// let lat = "lat";
// let lon = "lon";

button.addEventListener('click', function(event) {
    event.preventDefault();

    localStorage.getItem(userInput, 'lastSearchedCity');


    fetchWeather();
    displayData();
    updateHistory();
        
})
fetch(
    'http://api.openweathermap.org/geo/1.0/direct?q=Orlando,FL,USA&limit=5&appid=2ee898c012e56cb36166d4a71be09113'
)
.then(function(response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
})
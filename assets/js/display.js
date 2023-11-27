var today = dayjs();
var currentDate = $('#currentDay');

function getCurrentDate() {
    $('#currentDay').innerHTML = today.format('[YYYYescape] MM/DD/YYYY');

}

getCurrentDate()
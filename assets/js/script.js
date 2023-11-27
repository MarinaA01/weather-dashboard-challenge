fetch(
    'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=0806a7d4dcf9a0279005b42384c3dda9'
)

var searchformEl = $('#search-form');

function handleSearchFormSubmit(event) {
    event.preventDefault();
    searchHistory();

    $('#search-input').val(localStorage.getItem)

}

function searchHistory() {
    const task = $('#search-input').val();
    const input = $(this).parent().attr('id');
    localStorage.setItem(input, task);
}



searchformEl.addEventListener('submit', handleSearchFormSubmit);
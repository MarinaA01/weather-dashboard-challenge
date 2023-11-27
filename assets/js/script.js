var searchformEl = $('#search-form');

function handleSearchFormSubmit(event) {
    event.preventDefault();
    searchHistory();

    $('#search-input').val(localStorage.getItem)

}

function searchHistory() {
    var searchParam = $('search-input');
    var liEl = $('#search-history').children();
    var recentSearch = liEl.first();
    
    var newItem = "<li><p>$(searchParam)</p></li>"

    switch($('#search-history').children().length) {
        case 0:
            $('#search-history').append(newItem);
            break;

        case 1:
            var secondSearch = liEl.children()[1].innerHTML;

            recentSearch.before(newItem);
            localStorage.setItem('search1', searchParam);
            localStorage.setItem('search2', secondSearch);
            break;
        
        case 2:
            var secondSearch = liEl.children()[1].innerHTML;
            var thirdSearch = liEl.children()[3].innerHTML;

            recentSearch.before(newItem);
            localStorage.setItem('search1', searchParam);
            localStorage.setItem('search2', secondSearch);
            localStorage.setItem('search3', thirdSearch);
            break;

        default:
            var oldSearch = liEl.last();
            var secondSearch = liEl.children()[1].innerHTML;
            var thirdSearch = liEl.children()[3].innerHTML;

            localStorage.setItem('search1', searchParam);
            localStorage.setItem('search2', secondSearch);
            localStorage.setItem('search3', thirdSearch);

            recentSearch.before(newItem);
            oldSearch.remove();
    }
}



searchformEl.addEventListener('submit', handleSearchFormSubmit);
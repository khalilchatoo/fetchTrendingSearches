import $ from 'jquery';

const fetchAndUpdate = (options) => {
    options.loadingHotTrends();

    $.get("http://localhost:3001/hot_trends")
    .done((data) =>  {
        options.updateHotTrends(data.trends);
    })
    .fail(() =>  {
        /*
        	To Do:
        	- Add an error action and dispatch it here if HTTP request to server API fails
        */
        alert( "Error retrieving data from backend." );
    });
}

export default fetchAndUpdate
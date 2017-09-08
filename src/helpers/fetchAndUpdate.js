import $ from 'jquery';

const fetchAndUpdate = (options) => {
	options.loadingHotTrends();

	const jqxhr = $.get("http://localhost:3001/hot_trends")
	.done((data) =>  {
    	options.updateHotTrends(data.trends);
	})
	.fail(() =>  {
    	alert( "error" );
    })
}

export default fetchAndUpdate
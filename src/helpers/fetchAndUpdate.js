const trendsExampleData = [
    { title: "Jason" },
    { title: "Khalil" },
    { title: "Tam" },
    { title: "Chatoo" }
];

const fetchAndUpdate = (options) => {
	options.loadingHotTrends();
	setTimeout(() => {
		options.updateHotTrends(trendsExampleData);
	}, 1500);
}

export default fetchAndUpdate
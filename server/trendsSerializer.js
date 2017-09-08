const parseString = require('xml2js').parseString;

const trendsSerializer = (data, res) => {
    parseString(data, function (err, result) {
        if(err) {
            res.status(400).send("error");
        } else {
            const returnedTrends = result.rss.channel[0].item.map((row) => {
                return {
                    title: row["title"][0],
                    picture: row["ht:picture"][0],
                    description: row["ht:news_item"][0]["ht:news_item_title"][0]
                };
            });

            res.status(200).send({
                trends: returnedTrends
            });
        }
    });
}

module.exports = trendsSerializer;

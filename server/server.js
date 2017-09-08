const express = require('express')
const https = require('https');
const app = express()
const cors = require('cors')

const trendsSerializer = require('./trendsSerializer');
app.use(cors());

app.get('/hot_trends', function (req, res) {
    https.get('https://trends.google.com/trends/hottrends/atom/feed',(resp) => {  
        let data = '';
        resp.on('data', (chunk) => {
            data += chunk;
        });
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            const parsedTrendsData = trendsSerializer(data, res);
        });
    })
    .on("error", (err) => {
        res.status(400).send("Error");
        console.log("Error: " + err.message);
    });
})

app.listen(3001, function () {
  console.log('Server is connected to port 3001!');
})
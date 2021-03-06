var express = require('express');
var app = express();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
});


var state = {
  cards: [{ color: "Red", shape: "Squiggle", number: "One" }]
}

app.get('/games/1', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(state));
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

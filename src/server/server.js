let express = require("express");
let bodyParser = require("body-parser");

let app = express();

let jsonParser = bodyParser.json();

app.use(express.static(__dirname + "/public"));


let products = [
    {
        name: 'Pizza',
        cost: '5$'
    },
    {
        name: 'Eggs',
        cost: '1$'
    },
    {
        name: 'Icecream',
        cost: '0.5$'
    }

];

let numbers = [
    {
        number: 20,
        multiplier: 3
    },
    {
        number: 5,
        multiplier: 2
    },
    {
        number: 7,
        multiplier: 4
    }
];

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/products', function (req, res) {
    console.log("/products requested");
    res.send(products);
});

app.get('/numbers', function (req, res) {
    console.log("/numbers requested");
    res.send(numbers);
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});


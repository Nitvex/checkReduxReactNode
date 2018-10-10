let express = require("express");
let bodyParser = require("body-parser");

let app = express();

let jsonParser = bodyParser.json();

app.use(express.static(__dirname + "/public"));;

let products=[
    {
        name:'Pizza',
        cost:'5$'
    },
    {
        name:'Eggs',
        cost:'1$'
    },
    {
        name:'Icecream',
        cost:'0.5$'
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
    console.log("request has been recieved");
    res.send(products);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});


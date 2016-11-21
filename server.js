var express = require('express'),
    http = require('http');
var myApp = express();
var server = http.createServer(myApp);

myApp.set("viewEngine", 'ejs');
myApp.use(express.static('app'));



// Load mongoose package
var mongoose = require('mongoose');
// Connect to MongoDB and create/use database called todoAppTest
mongoose.connect('mongodb://localhost/flowersAppTest');
// Create a schema
var FlowerSchema = new mongoose.Schema({
    id: { type: Number, default: 0 },
    name: String,
    snippet: String,
    color: String,
    image: String,
    price: { type: Number, default: 0 }
});

var Flower = mongoose.model('Flower', FlowerSchema);

var flowers = [];
Flower.find(function(err, myFlowers){
    if (err)
        console.log(err);
    else {
        flowers = myFlowers;
        console.log(flowers);
    }
});


// for(i = 0; i<flowers.length; i++)
// {
//     var myFlower = flowers[i];
// // Create a model based on the schema
//     Flower.create(myFlower, function(err){
//         if(err)
//             console.log(err);
//         else
//             console.log(myFlower);
//     });
// }

myApp.get('/flowers', function (req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST");
    res.setHeader('Content-Type', 'application/json');

    res.json(flowers);
    console.log("response send");
    console.log(flowers);

});

myApp.get('/flowers/:flowerId', function (req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST");
    res.setHeader('Content-Type', 'application/json');
    res.json({
        flower: flowers[req.params.flowerId],
        length: flowers.length
    });
    console.log("response send");

});


server.listen(8081);
console.log("listening on port 8081");
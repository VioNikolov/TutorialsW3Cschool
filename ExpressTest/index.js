var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var mongoose = require('mongoose');
var upload = multer();
var app = express();

app.get('/', function(req, res){
   res.render('form');
});

app.set('view engine', 'pug');
app.set('views', './views');

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 


// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));

app.post('/', function(req, res){
   console.log(req.body);
   res.send("recieved your request!");
});
app.listen(3000);




// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
// app.set('view engine', 'pug');
// app.set('views', './views');
// var things = require('./things');

// app.get('/first-template', function(req, res) {
//     res.render('first_view');
// });

// app.use(express.static('public'));
// app.use(express.static('images'));
// app.use(express.static('static'));
// // app.use('/public', express.static('public'));

// app.use(bodyParser.urlencoded({ extended: false}));
// var parsed = app.use(bodyParser.json());


// app.use('/things', function (req, res, next) {
//     console.log('The time that is received: ' + Date.now());
//     next();
// });

// app.get('/testimage', (req, res) => res.render('testimage'))

// app.get('/dynamic_view', function (req, res) {
//     res.render('dynamic', {
//       user: { name: "Vio", age: "26"}
//     });
// });

// app.get('/content', function (req, res) {
//     res.render('content');
// })

// app.get('/things', function (req, res) {
//     res.send('this is only for things');
// });

// app.use('/', function (req, res, next) {
//     console.log(Date.now());
//     next();
// });

// app.get('/', function (req, res) {
//     res.send('Hello');
// });




// app.get('/things/:id', function (req, res) {
//     res.send('the id is: ' + req.params.id);
    
// });



// app.get('/:id([0-9]{5})', function (req, res) {
//     res.send('Its 5 nums!');
// });


// app.get('/things/:name/:id', function (req, res) {
//     res.send('the id is: ' + req.params.id + ' and the name is: ' + req.params.name);
// });



// app.get('/hell', function (req, res)
// {
//     res.send("Hello world");
// }); 

// app.post('/hell', function (req, res) {
//     res.send('Called another method on POST with \'hell\' route');
// });

// app.all('/test', function(req, res){
//    res.send("HTTP method doesn't have any effect on this route!");
// });

// app.get('*', function (req, res) {
//     res.send('ERROR 404, bace!');
// });

// app.listen(3000);
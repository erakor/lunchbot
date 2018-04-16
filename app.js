var express = require('express');
var bodyParser = require('body-parser');
var lunchcmd = require('./lib/lunchcmd');
var request = require("request");

var app = express();
var port = process.env.PORT || 3000;

// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));


// test route
app.get('/', function (req, res) { res.status(200).send('Hello world!') });

// // lunchbot
// app.post('/hello', lunchbot);

// lunchcmd
app.post('/roll', lunchcmd);


// basic error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});


app.listen(port, function () {
  console.log('Slack bot listening on port ' + port);
});


// // set variables for environment
// var express = require('express');
// var app = express();
// var request = require("request");

// app.get('/recipe', function (req, res) {

//   var url = "https://api.zerocater.com/v3/meals/559920";

//   request({
//       url: url,
//       json: true
//   }, function (error, response, body) {

//     fetchMeal = function(id) {
//       JSON.parse(http.get("https://api.zerocater.com/v3/meals/#{id}").body);
//     }

//     fetchMeal(559920)


//       if (!error && response.statusCode === 200) {
//           res.render('recipe', {body: body}); // Print the json response
//       }
//   })
//   // var json = ("https://api.zerocater.com/v3/meals/559920");
//   // res.render('recipe', { title: 'Hey', message: 'Hello there!'});
// });

// // Set server port
// app.listen(4000);
// console.log('server is running');
// app.set('views', './views'); // specify the views directory

// // // Telling the server to pick the views folder
// // // and used the Jade templating language
// // app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
// // app.use(express.static('public'));

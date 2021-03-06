var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index')
});

app.get('/drinks', function(request, response) {
  response.render('pages/drinks')
});

app.get('/sage', function(request, response) {
  response.render('pages/sage')
});

app.get('/cuda', function(request, response) {
  response.render('pages/site-cuda')
});

app.get('/notify', function(request, response) {
  response.render('pages/site-notify')
});
app.get('/green-design', function(request, response) {
  response.render('pages/site-green-design')
});
app.get('/lipsum-media', function(request, response) {
  response.render('pages/site-lipsum-media')
});
app.get('/graff-pink', function(request, response) {
  response.render('pages/site-graff-pink')
});
app.get('/awesome-hosting', function(request, response) {
  response.render('pages/site-awesome-hosting')
});
app.get('/awesome-hosting/about-us', function(request, response) {
  response.render('pages/awesome-hosting/about-us')
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
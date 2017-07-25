const express = require('express');
const mustacheExpress = require('mustache-express');

const app = express();


app.engine = ('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {



  res.render('index');
});


app.listen(2999, function() {
  console.log('Listening on port 2999');
})

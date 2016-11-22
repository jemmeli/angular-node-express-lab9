/*
express example
>>node app.js
>>npm install express-generator -g
>>express -h
>>express myapp (create application architecture using express generator)
>>cd myapp
>>npm install
>>SET DEBUG=myapp:* & npm start (execute the application)
>>npm install nodemon --save-dev (refresh application when save automatic)
>>app.METHOD(PATH, HANDLER)
 */



var express = require('express');
var app = express();

/*charge le module de routage*/
var birds = require('./birds');
app.use('/birds', birds);



app.get('/', function (req, res) {
    res.send('Hello World from express!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});


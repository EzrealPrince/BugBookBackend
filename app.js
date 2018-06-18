var express = require('express');
var bodyParser = require('body-parser');
var router = require('./routes/router');
var path = require('path');

var app = express();
app.use(bodyParser.json());


app.get('/',(req, res) => {
    res.send('hello world');
    console.log('hello');
})

app.use(router);

app.post('/orderpost',(req,res) => {
   console.log(req.body);
   res.send("hello  ok");

})

app.listen(8000, function(error) {
    if(error) {
        console.log('error!');
    }
    else {
        console.log("Server start! Listening on localhost:8000");
    }
});

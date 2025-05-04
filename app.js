const express = require('express');
const app = express();
const path = require('path');

//specify that we want to run our website on 'http://localhost:8000/'
const host = 'localhost';
const port = 8000;

// var publicPath = path.join(__dirname, 'public'); //get the path to use our "public" folder where we stored our html, css, images, etc
app.use(express.static(__dirname));  //tell express to use that folder

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/"));
});

app.get('/t1', function (req, res) {
    res.sendFile(__dirname + '/t1.html');
});

app.get('/t2', function (req, res) {
    res.sendFile(__dirname + '/t2.html');
});

//run this server by entering "node App.js" using your command line. 
app.listen(port, () => {
    console.log(`Server is running on http://${host}:${port}`);
  });
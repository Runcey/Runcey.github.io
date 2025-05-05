// local development script, run with npm start or node app.js

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

app.get('/oculus', function (req, res) {
    res.sendFile(__dirname + '/oculus.html');
});

app.get('/oculus_fs', function (req, res) {
    res.sendFile(__dirname + '/oculus_fs.html');
});

app.get('/rp2040cr_fs', function (req, res) {
    res.sendFile(__dirname + '/rp2040cr_fs.html');
});

//run this server by entering "node app.js" using your command line. 
app.listen(port, () => {
    console.log(`Server is running on http://${host}:${port}`);
  });
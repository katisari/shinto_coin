const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
app.use(express.static(__dirname + '/public/dist/public'));
app.use(bodyParser.json());

app.all('*', (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"));
})

app.listen(8000, function() {
    console.log("listening to port 8000");
})
const express = require("express");
const app = expres();
const path = require('path')

app.use(express.static(_dirname + '/dist'));

app.listen(process.env.PORT || 8080);


app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
})


console.log('console listening!')
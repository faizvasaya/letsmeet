var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname + '/public')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/app/view/index.html'));
});

app.listen(port, function () {
    console.log('Server running at port ' + port);
});
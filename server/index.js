require('dotenv').config()
var express = require('express')

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.listen(process.env.PORT, function() {
  console.log(`listening on port ${process.env.PORT}`);
});

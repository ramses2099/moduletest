//Server generated
const express = require('express');
const { urlencoded, json  } = require('express');
var cors = require('cors');

var app = express();

app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    return res.send('<h2>Welcome to Express App<h2>');
})

var Port = process.env.PORT || 3000;
var IP = process.env.IP || '127.0.0.1';
app.listen(Port, IP, (err) => {
    if (err) {
       console.log(err)
   } else {
       console.log('Server is listening at ' + IP + ':' + Port);
    }
});
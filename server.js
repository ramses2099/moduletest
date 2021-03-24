//Server generated
const express = require('express');
const { urlencoded, json } = require('express');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const cors = require('cors');

require('dotenv').config();

//middlerware
const authenticateToken = require('./security');


var app = express();

app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(express.static(__dirname));


const posts = [
    {
        username: 'josee',
        title: 'test token'
    },
    {
        username: 'carlop',
        title: 'test token 2'
    }
]


app.get('/', (req, res) => {
    return res.send('<h2>Welcome to Express App<h2>');
});

app.get('/token', (req, res) => {

    const token = crypto.randomBytes(64).toString('hex');

    return res.json({ token });
});

app.get('/post', authenticateToken, (req, res) => {
   
    const post = posts.filter(post => post.username == req.user.name);

    return res.json({ post });
});


app.post('/login', (req, res) => {
    const { username } = req.body;

    const user = { name: username }

    const accessToken = jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '10m' });

    return res.json({ accessToken });
});

var Port = process.env.PORT || 3000;
var IP = process.env.IP || '127.0.0.1';
app.listen(Port, IP, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Server is listening at ' + IP + ':' + Port);
    }
});
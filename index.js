const express = require('express');
var userRoutes = require('./routes/userRoutes');
var bodyParser = require('body-parser');
const path = require('path');
var CONFIG = require('./config');

const app = express();

app.listen('2000', () => {
    console.log('Server started at 127.0.0.1:2000');
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/*+json' }));

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", CONFIG.ALLOW_DOMAIN);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use('/api', userRoutes);

app.use(express.static('public'));

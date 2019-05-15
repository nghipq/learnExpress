var dotenv = require('dotenv').config();

var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var userRoute = require('./routes/users.route');
var authRoute = require('./routes/auth.route');

var authMiddleware = require('./middleware/auth.middleware')

var port = 3000;

app.use(cookieParser(process.env.SESSON_SECRET))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => res.render('index'));

app.use('/auth', authRoute)

app.use('/user', authMiddleware.requiredAuth,userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
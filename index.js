var dotenv = require('dotenv').config();

var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

var userRoute = require('./routes/users.route');
var authRoute = require('./routes/auth.route');
var cartRoute = require('./routes/cart.route');
var cartCount = require('./middleware/cart.middleware');

var authMiddleware = require('./middleware/auth.middleware');
var sessionMiddleware = require('./middleware/session.middleware');
var controller = require('./controller/main.controller')

var port = 3000;

app.use(cookieParser(process.env.SESSON_SECRET))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(sessionMiddleware);
app.use(cartCount)

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', controller.index);

app.use('/cart', cartRoute)

app.use('/auth', authRoute)

app.use('/user', authMiddleware.requiredAuth,userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
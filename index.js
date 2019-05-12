var express = require('express');
var app = express();
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser');

var userRoute = require('./routes/users.route');
var authRoute = require('./routes/auth.route');

var port = 3000;

app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => res.render('index', {
    name: "Nghi"
}));

app.use('/auth', authRoute)

app.use('/user', userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var userRoute = require('./routes/users.route')

var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => res.render('index', {
    name: "Nghi"
}));

app.use('/user', userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
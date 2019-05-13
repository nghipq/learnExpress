var db = require('../db');
var shortid = require('shortid');

module.exports.index = function(req, res) {
    var user = db.get('users').find({id: req.signedCookies.userId}).value();
    var products = db.get('products').value();
    res.render('users/index', {
        user: user,
        products: products
    })
}

module.exports.search = function(req, res) {
    var q = req.query.q;
    var products = db.get('products').value();
    var matchedProducts = products.filter(function(product) {
        return product.name.toLowerCase().indexOf(q.toLowerCase()) != -1;
    });
    res.render('users/index', {
        products: matchedProducts,
        q: q
    });
}

module.exports.create = function(req, res) {
    res.render('users/create');
}

module.exports.postCreate = function(req, res) {
    req.body.id = shortid.generate();
    db.get('products').push(req.body).write()
    res.redirect('/user')
}
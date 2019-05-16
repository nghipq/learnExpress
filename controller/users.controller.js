var User = require('../models/users.model')
var Product = require('../models/products.model')

module.exports.index = async function(req, res) {
    var findUser = await User.find({_id: req.signedCookies.userId});
    var user = findUser[0]
    
    var page = parseInt(req.query.page) || 1;
    var perPage = 6;
    
    var start = (page - 1) * perPage;
    var end = page * perPage;

    var products = await Product.find();
    res.render('users/index', {
        user: user,
        products: products.slice(start, end)
    })
}

module.exports.search = async function(req, res) {
    var q = req.query.q;
    var products = await Product.find();
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

module.exports.postCreate = async function(req, res) {
    req.body.img = (req.file.destination + req.file.filename).slice(9)
    await Product.create(req.body)
    res.redirect('/user')
}
var db = require('../db')

module.exports.index = function(req, res) {
    var page = parseInt(req.query.page) || 1;
    var perPage = 6;
    
    var start = (page - 1) * perPage;
    var end = page * perPage;

    var products = db.get('products').value().slice(start, end);
    res.render('index', {
        products: products
    })
}


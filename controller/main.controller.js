var Product = require('../models/products.model')

module.exports.index = async function(req, res) {
    var page = parseInt(req.query.page) || 1;
    var perPage = 6;
    
    var start = (page - 1) * perPage;
    var end = page * perPage;
    
    var products= await Product.find();
    res.render('index', {
        products: products.slice(start, end)
    })
}


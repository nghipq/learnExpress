var db = require('../db')

module.exports.addToCart = function(req, res, next) {
    var productId = req.params.productId;
    var sessionId = req.signedCookies.sessionId;

    if(!sessionId) {
        res.redirect('/');
        return;
    }

    var count =  db.get('sessions')
    .find({id: sessionId})
    .get('cart.' + productId, 0 )
    .value()

    db.get('sessions')
    .find({id: sessionId})
    .set('cart.' + productId, count + 1 )
    .write();

    var cartCount = 0;
    var items = db.get('sessions')
    .find({id: sessionId})
    .value()
    .cart 

    for(item in items) {
        cartCount += items[item]
    }

    res.redirect('/')
;
}
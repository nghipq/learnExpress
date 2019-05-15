var db = require('../db');

module.exports = function(req, res, next) {
    var sessionId = req.signedCookies.sessionId;
    if(!sessionId) {
        res.redirect('/');
        return
    }

    var cartCount = 0
    var items = db.get('sessions')
    .find({id: sessionId})
    .value()
    .cart

    for(item in items) {
        cartCount += items[item]
    }
    
    res.locals.cart = cartCount

    next()
}
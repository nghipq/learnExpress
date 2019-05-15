var db = require('../db')

module.exports.addToCart = function(req, res, next) {
    var productId = req.params.productId;
    var user = db.get('users').find({id: req.signedCookies.userId}).value();
    var sessionId;
    if(!user) {
        sessionId = req.signedCookies.sessionId;
        if(!sessionId) {
            res.redirect('/products');
            return
        }
    } else {
        sessionId = userId;
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

    res.redirect('/')
}
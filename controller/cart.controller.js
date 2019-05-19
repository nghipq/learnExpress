var db = require('../db');
var Session = require('../models/sessions.model');
var User = require('../models/users.model');
var Product = require('../models/products.model')

module.exports.addToCart = function(req, res, next) {
    var productId = req.params.productId;
    // var user = db.get('users').find({id: req.signedCookies.userId}).value();
    var user = User.findById(req.signedCookies.userId);
    var sessionId;
    if(!user) {
        sessionId = req.signedCookies.sessionId;
        if(!sessionId) {
            res.redirect('/products');
            return
        }
    } else {
        sessionId = req.signedCookies.userId;
        return;
    }  

    // var count =  db.get('sessions')
    // .find({id: sessionId})
    // .get('cart.' + productId, 0 )
    // .value()

    // db.get('sessions')
    // .find({id: sessionId})
    // .set('cart.' + productId, count + 1 )
    // .write();

    // await Session.findByIdAndUpdate(sessionId);
    console.log(productId);

    res.redirect('/')
}
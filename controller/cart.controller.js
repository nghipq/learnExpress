var Session = require('../models/sessions.model');

module.exports.addToCart = async function(req, res, next) {
    var productId = req.params.productId;
    console.log(productId);
    var userId = req.signedCookies.userId
    var sessionId;
    if(!userId) {
        sessionId = req.signedCookies.sessionId;
        if(!sessionId) {
            res.redirect('/products');
            return
        }
    } else {
        sessionId = userId
        return;
    }  

    var cart = await Session.find({_id: sessionId});
    cart[0].cart.push(productId);
    console.log(cart[0].cart)
    await Session.updateOne({_id: sessionId}, cart[0])

    res.redirect('/')
}
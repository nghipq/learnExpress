var Session = require('../models/sessions.model')

module.exports = async function(req, res, next) {
    var sessionId = req.signedCookies.sessionId;
    if(!sessionId) {
        res.redirect('/');
        return
    }

    var session = await Session.findById(sessionId)
    var cartCount = session.cart.length

    res.locals.cart = cartCount

    next()
}
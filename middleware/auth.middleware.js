var User = require('../models/users.model')

module.exports.requiredAuth = async function(req, res, next) {
    var findUser = await User.find({_id: req.signedCookies.userId});
    var user = findUser[0]
    if(!req.signedCookies.userId) {
        res.redirect('/auth/login');
        return;
    }
    if(!user) {
        res.redirect('/auth/login');
        return;
    }
    res.locals.user = user
    next();
}
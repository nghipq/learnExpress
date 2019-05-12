module.exports.login = function(req, res, next) {
    var errors = [];
    if(!req.body.email) {
        errors.push('email is required!');
    }

    if(!req.body.password) {
        errors.push('password is required!');
    }

    if(errors.length) {
        res.render('auth/login', {
            errors: errors,
            values: req.body
        });
        return;
    }
    next()
}


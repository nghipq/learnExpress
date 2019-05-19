var shortid = require('shortid');

var db = require('../db');
var Session = require('../models/sessions.model')

module.exports = async function(req, res, next) {
    if (!req.signedCookies.sessionId) {
        // var sessionId = shortid.generate()
        // res.cookie('sessionId', sessionId, {
        //     signed: true
        // })
        // db.get('sessions').push({
        //     id: sessionId,
        //     cart: {}
        // }).write()

        await Session.create({
            cart: {
                null: 0
            }
        })

        var items = await Session.find()
        var sessionId = items[items.length - 1]._id;
        console.log(sessionId);
        res.cookie('sessionId', sessionId, {
            signed: true
        })
    }

    next();
}
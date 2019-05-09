/*
 * Export all my models in a single dependecie
 * */

const user = require('./User.js');
const loc = require('./Location.js');
const consumer = require('./Consumer.js');

module.exports = {
    User: user.User,
    Location: loc.Location,
    Consumer: consumer.Consumer,
};

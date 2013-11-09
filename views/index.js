var services = require('../services');

module.exports.users = require('./users.js')(services.user);

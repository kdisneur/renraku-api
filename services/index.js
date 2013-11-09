var models = require('../models');

module.exports.user = require('./user')(models.organization, models.user);

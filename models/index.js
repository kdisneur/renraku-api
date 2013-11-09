var mongoose        = require('mongoose');
var nconf           = require('nconf');

mongoose.connect('mongodb://' + nconf.get('database:host') + '/' + nconf.get('database:name'));

module.exports.user         = require('./user')(mongoose);
module.exports.organization = require('./organization')(mongoose);

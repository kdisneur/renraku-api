var views = require('../views');

module.exports.load = function(server) {
  require('./users')(server, views.users);
};

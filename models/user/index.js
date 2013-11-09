var callbacks       = require('./callbacks');
var schema          = require('./schema');
var instanceMethods = require('./instance_methods');

var UserModel = function(mongoose) {
  var userSchema = schema.load(mongoose);
  instanceMethods.apply(mongoose, userSchema);
  callbacks.apply(userSchema);

  return mongoose.model('User', userSchema);
};

module.exports = UserModel;

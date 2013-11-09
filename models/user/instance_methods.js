var crypto = require('crypto');
var nconf  = require('nconf');
var uuid   = require('node-uuid');

var InstanceMethods = function(mongoose, schema) {
  schema.methods.encryptPassword = function() {
    shaSum = crypto.createHash('sha512');
    shaSum.update(this.password);
    shaSum.update('-');
    shaSum.update(nconf.get('security:salt'));
    this.password = shaSum.digest('hex');
  };

  schema.methods.generateToken = function(callback) {
    this.authToken = uuid.v4();

    var self = this;
    return mongoose.model('User').findOne({ authToken: this.authToken }, function(error, _) {
      if (error) return self.generateToken(callback);
      return callback();
    });
  };
};

module.exports.apply = InstanceMethods;

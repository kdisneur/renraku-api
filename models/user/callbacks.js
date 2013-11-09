var Callbacks = function(schema) {
  schema.pre('save', function(next) {
    this.encryptPassword();
    next();
  });

  schema.pre('validate', function(next) {
    if (this.authToken) return next();

    return this.generateToken(function() {
      return next();
    });
  });
};

module.exports.apply = Callbacks;

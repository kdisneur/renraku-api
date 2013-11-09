var restify = require('restify');
var util    = require('util');

var ValidationError = function(error, object) {
  var buildMessage = function(error, object) {
    var errors   = {};
    errors[object.constructor.modelName] = buildErrors(error, object);

    return errors;
  };

  var buildErrors = function(error, object) {
    var messages = {};
    for (var field in error.errors) {
      if (!messages[field]) messages[field] = [];
      messages[field].push(error.errors[field].message);
    };

    return messages;
  };

  restify.RestError.call(this, {
    restCode:       'validation',
    statusCode:     422,
    message:        buildMessage(error, object),
    constructorOpt: ValidationError
  });

  this.name = 'ValidationError';
};

util.inherits(ValidationError, restify.RestError);

module.exports = ValidationError;

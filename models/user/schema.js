var uniqueValidator = require('mongoose-unique-validator');
var validate        = require('mongoose-validator').validate;

var UserSchema = function(mongoose) {
  var ObjectId = mongoose.Schema.ObjectId;
  var schema   = new mongoose.Schema({
    email:         { type: String, required: true, unique: true, validate: validate('isEmail') },
    login:         { type: String, required: true, unique: true },
    password:      { type: String, required: true, validate: validate('len', 8) },
    authToken:     { type: String, required: true, unique: true },
    organizations: { type: ObjectId, ref: 'Organization' }
  });

  schema.plugin(uniqueValidator);

  return schema;
};

module.exports.load = UserSchema;

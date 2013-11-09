var uniqueValidator = require('mongoose-unique-validator');

var OrganizationModel = function(mongoose) {
  var organizationSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, match: /^[a-zA-Z0-9_-]+$/ }
  });
  organizationSchema.plugin(uniqueValidator);

  return mongoose.model('Organization', organizationSchema);
};

module.exports = OrganizationModel;

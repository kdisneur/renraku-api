var CreationService = function(OrganizationModel, UserModel) {
  return function(organizationName, userInformations, callback) {
    var organization = new OrganizationModel({ name: organizationName });
    organization.save(function(error) {
      if (error) return callback(error, organization);

      var user = new UserModel(userInformations);
      user.organization = organization;

      user.save(function(error) {
        if (error) {
          return organization.remove(function(_error, _organization) {
            return callback(error, user);
          });
        }

        callback(null, user);
      });
    });
  };
};

module.exports = function(OrganizationModel, UserModel) {
  return {
    create: CreationService(OrganizationModel, UserModel)
  };
};

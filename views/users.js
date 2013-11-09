var errors = require('../errors');

var CreationView = function(UserService) {
  return function(request, result, next) {
    var parameters       = JSON.parse(request.body);
    var organizationName = parameters.organization_name;
    var userAttributes   = parameters.user;

    return UserService.create(organizationName, userAttributes, function(error, user) {
      if (error) return next(new errors.ValidationError(error, user));

      result.send({ organization_name: user.organization.name, login: user.login, auth_token: user.authToken, organizations: user.organizations });
      return next();
    });
  };
};

module.exports = function(UserService) {
  return {
    create: CreationView(UserService)
  };
};

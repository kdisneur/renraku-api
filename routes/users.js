module.exports = function(server, views) {
  server.post({ path: '/users', versions: ['1.0.0'] }, views.create);
};

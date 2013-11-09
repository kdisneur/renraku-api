var nconf = require('nconf');
nconf.env().argv().file({ file: 'config/' + nconf.get('environment') + '.json' }).defaults({'environment': 'development'});

var restify = require('restify');
var routes  = require('./routes');

var server = restify.createServer({ name: 'renraku-api', version: '1.0.0' });
server.use(restify.acceptParser(server.acceptable));
server.use(restify.bodyParser());
server.use(restify.gzipResponse());

routes.load(server);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});

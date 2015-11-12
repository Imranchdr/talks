var Hapi = require('hapi');
var Joi = require('joi');

var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8004
});

server.route({
  method: 'GET',
  path: '/hello/{name}',
  handler: function (request, reply) {
    reply('hello ' + request.params.name);
  },
  config: {
    validate: {
      params: {
        name: Joi.string().min(3).max(12)
      }
    }
  }
});

server.start(function() {
  console.log('Server running at:', server.info.uri);
});

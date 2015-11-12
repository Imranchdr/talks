var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8003
});

server.route({
  method: 'GET',
  path: '/hello',
  handler: function (request, reply) {
    reply('hello world');
  }
});

var options = {
  opsInterval: 1000,
  reporters: [{
    reporter: require('good-console'),
    events: { log: '*', response: '*' }
  }, {
    reporter: require('good-file'),
    events: { ops: '*' },
    config: './mylog'
  }]
};

server.register({
  register: require('good'),
  options: options
}, function (err) {

  if (err) {
    console.error(err);
  }
  else {
    server.start(function () {
      console.info('Server started at ' + server.info.uri);
    });
  }
});

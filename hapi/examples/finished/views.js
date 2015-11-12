var Hapi = require('hapi');
var Vision = require('vision');
var HapiReactViews = require('hapi-react-views');

var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8005
});


server.register(Vision, function (err) {
  if (err) {
    console.log("Failed to load vision.");
  }

  server.views({
      engines: {
          jsx: HapiReactViews
      },
      compileOptions: {}, // optional
      relativeTo: __dirname,
      path: 'views'
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply.view('hello');
    }
  });

  server.start(function (err) {
    if (err) {
      throw err;
    }

    console.log('Server is listening at ' + server.info.uri);
  });
});

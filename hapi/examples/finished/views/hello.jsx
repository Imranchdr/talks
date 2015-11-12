var React = require('react');

var Hello = React.createClass({
  render: function() {
    return (
      <html>
        <head><title>React rendered on the server</title></head>
        <body><h1>Hello there</h1></body>
      </html>
    );
  }
});

module.exports = Hello;

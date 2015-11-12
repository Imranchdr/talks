/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} = React;

var Meetup = React.createClass({
  onPress: function() {
    alert('Hello Munich');
  },
  render: function() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPress}>
        <View style={styles.redbox} />
        </TouchableOpacity>
        <Text style={styles.welcome}>
          Welcome to React Native! Hello meetup!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  redbox: {
    width: 200,
    height: 200,
    backgroundColor: 'red'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 32,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Meetup', () => Meetup);

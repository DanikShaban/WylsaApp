import React, { Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { Constants, WebBrowser } from 'expo';

export class Date {
  render () {
    return (
      <View style = {styles.forall}>
      </View>
    );
  }
}

export default class App extends Component {
  render () {
    return (
      <View style = {styles.backg}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  backg: {
    backgroundColor: 'grey',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  forall : {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#696969',
  }
});

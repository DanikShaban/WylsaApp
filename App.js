import React, { Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { Constants, WebBrowser } from 'expo';

const INTERVAL = 100;


export default class Appr extends Component {
  render () {
    return (
      <View>
          <Timer starttime = {new Date().getTime()}/>
      </View>
    );
  }
}

class Timer extends Component {
  constructor (props) {
    super (props);
    this.state = {timenow: new Date().getTime(),}
  }
  render () {
    let distance = this.state.timenow - this.props.starttime;
    return (
      <View style = {styles.forall}>
      <View style  = {styles.box}>
        <Text style = {styles.foreach}>Timer:</Text>
        <Text style = {styles.foreach}>{Math.floor(distance/INTERVAL/60/60%60)} : </Text>
        <Text style = {styles.foreach}>{Math.floor(distance/INTERVAL/60%60)} : </Text>
        <Text style = {styles.foreach}>{Math.floor(distance/INTERVAL%60)} . </Text>
        <Text style = {styles.foreach}>{distance % INTERVAL}</Text>
        </View>
      </View>
    );
};

/* class Timer extends Component {
  constructor (props) {
    super (props);
    this.state = {value: 0,}
  }

  increment () {
    this.setState({value: this.state.value + 1});
  }

  componentDidMount() {
      this.timerID = setInterval(() => this.increment(), 1000/INTERVAL);
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

  render () {
    const value = this.state.value
    return (
      <View style = {styles.forall}>
      <View style  = {styles.box}>
        <Text style = {styles.foreach}>Timer:</Text>
        <Text style = {styles.foreach}>{Math.floor(value/INTERVAL/60/60%60)} : </Text>
        <Text style = {styles.foreach}>{Math.floor(value/INTERVAL/60%60)} : </Text>
        <Text style = {styles.foreach}>{Math.floor(value/INTERVAL%60)} . </Text>
        <Text style = {styles.foreach}>{value % INTERVAL}</Text>
        </View>
      </View>
    );
  }
}*/

const styles = StyleSheet.create({
  forall: {
    backgroundColor: '#F08080',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  foreach: {
      flex:1,
      fontSize: 20,
    },
});

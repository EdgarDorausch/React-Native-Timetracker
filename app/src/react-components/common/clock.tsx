import React, { SFC } from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import { ApplicationState } from '../../redux';
import { connect } from 'react-redux';

const clockStyles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '100%'
  },
  text: {
    fontSize: 40,
    color: '#777'
  }
});

function formatTimeNumber(x: number): string {
  let str = x.toString();
  if(str.length === 1) {
    str = '0' + str;
  }
  return str;
}

function time(
  str: TemplateStringsArray,
  h: number,
  m: number,
  s:number
  ) {

  return `${str[0]}${formatTimeNumber(h)}${str[1]}${formatTimeNumber(m)}${str[2]}${formatTimeNumber(s)}${str[3]}`
}

function secondsToString(n: number) {
  const seconds =  n % 60;
  const bigMinutes = Math.floor((n - seconds) / 60);
  const minutes = bigMinutes % 60;
  const hours = Math.floor((bigMinutes - minutes) / 60);
  return time`${hours}:${minutes}:${seconds}`
}

function mapStateToProps(state: ApplicationState) {
  return {
    seconds: state.timer.value
  }
}
type Props =
  ReturnType<typeof mapStateToProps> &
  {};

function Clock(props: Props) {
  return (
    <View style={clockStyles.container}>
      <Text style={clockStyles.text}>{secondsToString(props.seconds)}</Text>
    </View>
  )
}

const ExportClock = connect(mapStateToProps)(Clock);
export default ExportClock;

const containerStyles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#eee',
  }
});

export const WithClock: SFC = (props) => {
  return (
    <View style={containerStyles.outerContainer}>
      <ExportClock/>
      {props.children}
    </View>
  )
}
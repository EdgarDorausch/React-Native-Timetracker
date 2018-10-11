import { View, TouchableWithoutFeedback, Text, StyleSheet } from 'react-native';
import React from 'react';
import { ApplicationState } from '../../redux/index';
import { Dispatch } from 'redux';
import { toggleTimer } from '../../redux/timer/actions';
import { connect } from 'react-redux';
import { WithClock } from '../common/clock';
import { Entypo } from '@expo/vector-icons';


const recordButtonSize = 100;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    borderRadius: recordButtonSize,
    width: recordButtonSize,
    height: recordButtonSize,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10

  },
  bgColorRed: {
    backgroundColor:'red'
  },
  bgColorGreen: {
    backgroundColor:'green'
  }
});

function mapStateToProps(state: ApplicationState) {
  return {
    isRecording: state.timer.isActive,
    timeValue: state.timer.value
  }
}
function mapDispatchToProps(dispatch: Dispatch) {
  return {
    toggleTimer() {
      dispatch(toggleTimer(dispatch))
    }
  }
}

type Props = 
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  {};

function TimeRecordScreen(props: Props) {
  return (
    <WithClock>
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => props.toggleTimer()}
          >
        <View style={[styles.button, props.isRecording ? styles.bgColorRed : styles.bgColorGreen]}>
          <Text>{props.isRecording ?
            <Entypo 
              name='controller-stop'
              color="#fff"
              size={50}
            /> :
            <Entypo
              name='controller-play'
              color="#fff"
              size={50}  
            /> }
          </Text>
        </View>
        </TouchableWithoutFeedback>
      </View>
    </WithClock>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeRecordScreen);
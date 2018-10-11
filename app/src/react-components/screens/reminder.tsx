import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { WithClock } from '../common/clock';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class ReminderScreen  extends React.Component {
  render() {
    return (
      <WithClock>
        <View style={styles.container}>
          <Text>Im a Reminder!</Text>
        </View>
      </WithClock>
    );
  }
}

export default ReminderScreen;
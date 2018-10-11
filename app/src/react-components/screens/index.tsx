import React from 'react';
import { createBottomTabNavigator, TabNavigatorConfig } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import TimeRecordScreen from './time-record';
import ReminderScreen from './reminder';

const drawConfig: TabNavigatorConfig = {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Record') {
        iconName = `ios-clock`;
      } else if (routeName === 'Reminder') {
        iconName = `ios-calendar`;
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Ionicons name={iconName || ''} size={25} color={tintColor || undefined} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
};

export default createBottomTabNavigator({
  Record: TimeRecordScreen,
  Reminder: ReminderScreen
}, drawConfig);


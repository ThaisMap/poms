import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BreakTasks from '../screens/BreakTasks';
import Report from '../screens/Report';
import Timer from '../screens/Timer';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Timer' component={Timer} />
        <Tab.Screen name='Relatório' component={Report} />
        <Tab.Screen name='Pausas' component={BreakTasks} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

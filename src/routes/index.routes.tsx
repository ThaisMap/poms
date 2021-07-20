import * as React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Configurations from '../screens/Configurations';
import BreakTasks from '../screens/BreakTasks';
import Report from '../screens/Report';
import Timer from '../screens/Timer';
import theme from '../../theme';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: theme.colors.primary,
    text: theme.colors.text,
    background: theme.colors.background,
  },
};

export default function Routes() {
  const { t } = useTranslation();
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            paddingBottom: theme.spacing(),
            paddingTop: theme.spacing(),
          },
          iconStyle: {
            fontSize: 12,
          },
        }}
      >
        <Tab.Screen
          name="timer"
          component={Timer}
          options={{
            tabBarLabel: t('nav.timer'),
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="clock" color={color} size={16} />
            ),
          }}
        />
        <Tab.Screen
          name="report"
          component={Report}
          options={{
            tabBarLabel: t('nav.report'),
            tabBarIcon: ({ color }) => (
              <Ionicons name="stats-chart" color={color} size={16} />
            ),
          }}
        />
        <Tab.Screen
          name="pausas"
          component={BreakTasks}
          options={{
            tabBarLabel: t('nav.break'),
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="check-circle" color={color} size={16} />
            ),
          }}
        />
        <Tab.Screen
          name="config"
          component={Configurations}
          options={{
            tabBarLabel: t('nav.config'),
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="cog" color={color} size={16} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

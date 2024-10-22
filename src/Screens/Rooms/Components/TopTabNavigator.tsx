import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Standard from '../Standard';
import Deluxe from '../Deluxe';
import Suite from '../Suite';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => (
  <Tab.Navigator
    initialRouteName="스탠다드"
    screenOptions={{
      tabBarLabelStyle: { fontSize: 16, fontWeight: '700' },
      tabBarIndicatorStyle: { backgroundColor: '#333333' },
      tabBarStyle: { backgroundColor: 'white' },
    }}
  >
    <Tab.Screen name="스탠다드" component={Standard} />
    <Tab.Screen name="디럭스" component={Deluxe} />
    <Tab.Screen name="스위트" component={Suite} />
  </Tab.Navigator>
);

export default TopTabNavigator;

import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TasteOfTerrace from '../TasteOfTerrace';
import OrientalHarmony from '../OrientalHarmony';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => (
  <Tab.Navigator
    initialRouteName="테이스트 오브 테라스"
    screenOptions={{
      tabBarLabelStyle: { fontSize: 16, fontWeight: '700' },
      tabBarIndicatorStyle: { backgroundColor: '#333333' },
      tabBarStyle: { backgroundColor: 'white' },
    }}
  >
    <Tab.Screen name="테이스트 오브 테라스" component={TasteOfTerrace} />
    <Tab.Screen name="오리엔탈 하모니" component={OrientalHarmony} />
  </Tab.Navigator>
);

export default TopTabNavigator;

import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TasteOfTerrace from '../Taste of Terrace';
import OrientalHarmony from '../OrientalHarmony';
import DiningDetail from '../DiningDetail';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = ({ initialTab, dinings }) => {

  if (!dinings || dinings.length === 0) return null; // 방 목록이 없을 경우 예외 처리

  return (
      <Tab.Navigator
          initialRouteName={dinings.length > 0 ? dinings[0].dn_subject : ''}
          screenOptions={{
              tabBarLabelStyle: { fontSize: 16, fontWeight: '700' },
              tabBarIndicatorStyle: { backgroundColor: '#333333' },
              tabBarStyle: { backgroundColor: 'white' },
          }}
      >
          {dinings.map((dining) => (
              <Tab.Screen
                  key={dining.idx}
                  name={dining.dn_name}
                  component={DiningDetail}
                  initialParams={{ diningId: dining.idx, dn_contents: dining.dn_contents }}
              />
          ))}
      </Tab.Navigator>
  );
};

export default TopTabNavigator;

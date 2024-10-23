import React, { useEffect, useRef } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RoomDetails from '../RoomDetails';
import { useNavigation } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = ({ initialTab, rooms }) => {

  if (!rooms || rooms.length === 0) return null; 

  return (
      <Tab.Navigator
          initialRouteName={rooms.length > 0 ? rooms[0].pr_subject : ''}
          screenOptions={{
              tabBarLabelStyle: { fontSize: 16, fontWeight: '700' },
              tabBarIndicatorStyle: { backgroundColor: '#333333' },
              tabBarStyle: { backgroundColor: 'white' },
          }}
      >
          {rooms.map((room) => (
              <Tab.Screen
                  key={room.idx}
                  name={room.pr_subject} 
                  component={RoomDetails}
                  initialParams={{ roomId: room.idx, pr_contents: room.pr_contents }}
              />
          ))}
      </Tab.Navigator>
  );
};


export default TopTabNavigator;

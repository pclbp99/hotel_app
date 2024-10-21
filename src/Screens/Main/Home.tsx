/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from '../../Screens/Main/Main';
import Login from '../../Screens/Member/Login';
import EmailLogin from '../../Screens/Member/EmailLogin';
import Join from '../../Screens/Member/Join';
import Directions from '../../Screens/About/Directions';


const Stack = createNativeStackNavigator();

const Home = () => {
  return (
        <Stack.Navigator initialRouteName='Main'>
          <Stack.Screen 
              name='Main' 
              component={Main} 
              options={{
                title: '',
                headerTransparent: true,
                headerShown: false,
                animationTypeForReplace: 'pop'
              }} 
            />

          <Stack.Screen 
              name='Login' 
              component={Login} 
              options={{
                title: '',
                headerTransparent: true,
                headerShown: false,
                animationTypeForReplace: 'pop'
              }} 
          />

          <Stack.Screen 
              name='EmailLogin' 
              component={EmailLogin} 
              options={{
                title: '',
                headerTransparent: true,
                headerShown: false,
                animationTypeForReplace: 'pop'
              }} 
          />

          <Stack.Screen 
              name='Join' 
              component={Join} 
              options={{
                title: '',
                headerTransparent: true,
                headerShown: false,
                animationTypeForReplace: 'pop'
              }} 
          />

          <Stack.Screen 
              name='Directions' 
              component={Directions} 
              options={{
                title: '',
                headerTransparent: true,
                headerShown: false,
                animationTypeForReplace: 'pop'
              }} 
          />
        </Stack.Navigator>
  );
}


export default Home;

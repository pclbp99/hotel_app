/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Main from './src/Screens/Main/Main';
import Login from './src/Screens/Member/Login';
import EmailLogin from './src/Screens/Member/EmailLogin';
import Join from './src/Screens/Member/Join';
import Directions from './src/Screens/About/Directions';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}


export default App;

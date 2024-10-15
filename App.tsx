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
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;

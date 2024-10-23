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
import About from '../../Screens/About/About';
import FacilityIntroduction from '../../Screens/About/FacilityIntroduction';
import Promotion from '../../Screens/Promotion/Promotion';
import Detail from '../../Screens/Promotion/Detail';
import Rooms from '../../Screens/Rooms/Rooms';
import Dining from '../../Screens/Dining/Dining';
import Reservation from '../../Screens/Reservation/Reservation';
import Pay from '../../Screens/Reservation/Pay';
import Complete from '../../Screens/Reservation/Complete';
import Check from '../../Screens/Reservation/Check';
import CheckDetail from '../../Screens/Reservation/CheckDetail';


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

          <Stack.Screen 
              name='About' 
              component={About} 
              options={{
                title: '',
                headerTransparent: true,
                headerShown: false,
                animationTypeForReplace: 'pop'
              }} 
          />

          <Stack.Screen 
              name='FacilityIntroduction' 
              component={FacilityIntroduction} 
              options={{
                title: '',
                headerTransparent: true,
                headerShown: false,
                animationTypeForReplace: 'pop'
              }} 
          />

          <Stack.Screen 
              name='Promotion' 
              component={Promotion} 
              options={{
                title: '',
                headerTransparent: true,
                headerShown: false,
                animationTypeForReplace: 'pop'
              }} 
          />

          <Stack.Screen 
              name='Detail' 
              component={Detail} 
              options={{
                title: '',
                headerTransparent: true,
                headerShown: false,
                animationTypeForReplace: 'pop'
              }} 
          />

          <Stack.Screen 
              name='Rooms' 
              component={Rooms} 
              options={{
                title: '',
                headerTransparent: true,
                headerShown: false,
                animationTypeForReplace: 'pop'
              }} 
          />


          <Stack.Screen 
              name='Dining' 
              component={Dining} 
              options={{
                title: '',
                headerTransparent: true,
                headerShown: false,
                animationTypeForReplace: 'pop'
              }} 
          />

          <Stack.Screen 
              name='Reservation' 
              component={Reservation} 
              options={{
                title: '',
                headerTransparent: true,
                headerShown: false,
                animationTypeForReplace: 'pop'
              }} 
          />

          <Stack.Screen 
              name='Pay' 
              component={Pay} 
              options={{
                title: '',
                headerTransparent: true,
                headerShown: false,
                animationTypeForReplace: 'pop'
              }} 
          />

          <Stack.Screen 
              name='Complete' 
              component={Complete} 
              options={{
                title: '',
                headerTransparent: true,
                headerShown: false,
                animationTypeForReplace: 'pop'
              }} 
          />

          <Stack.Screen 
              name='Check' 
              component={Check} 
              options={{
                title: '',
                headerTransparent: true,
                headerShown: false,
                animationTypeForReplace: 'pop'
              }} 
          />

            <Stack.Screen 
              name='CheckDetail' 
              component={CheckDetail} 
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

import React from 'react';
import { Provider } from 'react-redux';
import store from './src/Redux/store';
import Home from './src/Screens/Main/Home';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  return (
    <Provider store={store}> 
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    </Provider>
  );
}


export default App;

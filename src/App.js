import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routers from './SANTRI/components/Routers/Routers';

const App = () => {
  return (
    <NavigationContainer>
      <Routers />
    </NavigationContainer>
  );
};

export default App;

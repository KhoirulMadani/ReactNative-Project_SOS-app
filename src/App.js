import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routers from './SANTRI/components/Routers/Routers';
import {Provider} from 'react-redux';
import {store} from './state_management/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routers />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

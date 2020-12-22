import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Routing } from './utils/routing';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './redux/intex';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routing />
      </NavigationContainer> 
    </Provider>
 );
};


export default App;

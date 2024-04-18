import React from 'react';
import { Provider } from 'react-redux';

import AppNavigator from './Navigation/AppNavigator';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
        <AppNavigator />
    </Provider>
  );
}
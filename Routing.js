import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Router, Scene, } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';

// redux
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react'
import reducers from './src/reducer/reducer';

//screens
import Home from './src/screen/home'
import Detail from './src/screen/detail'

let store = compose(
   applyMiddleware(ReduxThunk),
)(createStore)(reducers);
let persistor = persistStore(store);

export default class Routing extends Component {
   render() {
      return (
         <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
               <Router>
                  <Scene key="root">
                     <Scene key="home" component={Home} hideNavBar initial/>
                     <Scene key="detail" component={Detail} hideNavBar />
                  </Scene>
               </Router>
            </PersistGate>
         </Provider>
      ) 
   }
}

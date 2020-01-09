/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Router from './Routing'

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor='red' />
      {/* <SafeAreaView> */}
        <Router />
      {/* </SafeAreaView> */}
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;

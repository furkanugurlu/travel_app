import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Home from './src/screens/Home';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Home />
    </SafeAreaView>
  );
}

export default App;

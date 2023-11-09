import React from 'react';
import RootNavigation from './src/navigation/RootNavigation';
import {View} from 'react-native';
import {scaleHeight} from './src/helpers/Measurement';

function App(): JSX.Element {
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingTop: scaleHeight(40)}}>
      <RootNavigation />
    </View>
  );
}

export default App;

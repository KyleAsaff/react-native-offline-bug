import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import { store } from './store';

import {
  selectMapRoad,
} from './store/actions/map';

import { ReduxNetworkProvider } from 'react-native-offline';

const Example = () => {
  const [number, setNumber] = useState(0)
  const dispatch = useDispatch();
  const onSelectMapRoad = () => {
    dispatch(selectMapRoad(number));
    setNumber(number + 1);
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSelectMapRoad}><Text>dispatch select</Text></TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <Provider store={store}>
    <ReduxNetworkProvider pingServerUrl="https://www.thiswebsitedoesnotexistatall.com/">
        <Example />
    </ReduxNetworkProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

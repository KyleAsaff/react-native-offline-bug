import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import { store } from './store';

import {
  selectMapRoad, unselectMapRoad,
} from './store/actions/map';

const Example = () => {
  const dispatch = useDispatch();
  const onSelectMapRoad = () => {
    dispatch(selectMapRoad(1));
  }
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <TouchableOpacity onPress={onSelectMapRoad}><Text>dispatch</Text></TouchableOpacity>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    </Provider>
  );
}

export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
    <Example />
    </View>
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

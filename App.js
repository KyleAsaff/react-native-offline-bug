import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import { store } from './store';

import {
  selectMapRoad, unselectMapRoad,
} from './store/actions/map';

import { ReduxNetworkProvider } from 'react-native-offline';

const Example = () => {
  const dispatch = useDispatch();
  const onSelectMapRoad = () => {
    dispatch(selectMapRoad(1));
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSelectMapRoad}><Text>dispatch</Text></TouchableOpacity>
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

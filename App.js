import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import { store } from './store';

import {
  incrementAction,
  decrementAction,
} from './store/actions/incrementer';

import { ReduxNetworkProvider } from 'react-native-offline';

const Example = () => {
  const [number, setNumber] = useState(0)
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state);
  console.log('the state is');
  console.log(reduxState);
  console.log(reduxState.network.actionQueue.toString());
  const increment = () => {
    dispatch(incrementAction(number));
    setNumber(number + 1);
  }
  const decrement = () => {
    dispatch(decrementAction(number));
    setNumber(number - 1);
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={increment}><Text>dispatch increment</Text></TouchableOpacity>
      <TouchableOpacity onPress={decrement}><Text>dispatch decrement</Text></TouchableOpacity>
    </View>
  );
}

export default function App() {
  console.log('wtf');
  return (
    <Provider store={store}>
    <ReduxNetworkProvider pingServerUrl="https://www.thiswebsitedoesndasdsasotexistatall.com/">
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

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigation/mainStack';
import {navigationRef} from './src/utility/RootNavigation';
import configureStore from './src/redux/store';
import {Provider} from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar />
          <NavigationContainer ref={navigationRef}>
            <MainStack />
          </NavigationContainer>
        </SafeAreaView>
      </Provider>
    );
  }
}
export default App;

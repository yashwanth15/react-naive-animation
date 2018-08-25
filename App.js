import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './app/screens/LoginScreen'

export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={localStyles.safeArea}>
        <View style={localStyles.container}>
          <StatusBar hidden={true} />
          <RootStack/>
        </View>
      </SafeAreaView>
    );
  }
}

const RootStack=createStackNavigator({
    LoginScreen:LoginScreen,
  },
  {
    initialRouteName: 'LoginScreen',
    headerMode: 'none',
  }
)

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  safeArea: {
    flex:1,
    backgroundColor:'black',
  },
});

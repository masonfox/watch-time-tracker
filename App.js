import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { useColorScheme } from 'react-native-appearance'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HeaderStyle } from './src/theme'
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

// Prepare stack navigator
const RootStack = createStackNavigator()
const MainStack = createStackNavigator()

// Screen Imports
import HomeScreen from './src/screens/HomeScreen'
import WatchViewScreen from './src/screens/WatchViewScreen'

// Modal Imports
import WatchListModal from './src/modals/WatchListModal'

// MAIN STACK
function MainStackContainer () {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen name="Home" component={HomeScreen} options={{...HeaderStyle }} />
      <MainStack.Screen name="Watch View" component={WatchViewScreen} options={{ title: 'Vostok Amphibia', ...HeaderStyle }} />
    </MainStack.Navigator>
  )
}

// Render
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isReady: false
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    const { isReady } = this.state

    if (!isReady) {
      return <AppLoading />
    }

    return (
      <NavigationContainer>
        <RootStack.Navigator>
        {/* Main Stack Router */}
        <RootStack.Screen name="Main" component={MainStackContainer} options={{ headerShown: false }} />
        {/* Modals */}
        <RootStack.Screen name="Watch Selector" component={WatchListModal} options={{...HeaderStyle }} />
        </RootStack.Navigator>
      </NavigationContainer>
  );
}
}
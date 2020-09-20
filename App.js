import 'react-native-gesture-handler'
import * as React from 'react'
import { useColorScheme } from 'react-native-appearance'
import { NavigationContainer } from '@react-navigation/native'
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { createStackNavigator } from '@react-navigation/stack'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { HeaderStyle } from './src/theme'
import { default as mapping } from './mapping.json'

// Prepare stack navigator
const RootStack = createStackNavigator()
const MainStack = createStackNavigator()

// Screen Imports
import HomeScreen from './src/screens/HomeScreen'

// Modal Imports
import WatchListModal from './src/modals/WatchListModal'

// MAIN STACK
function MainStackContainer () {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen name="Home" component={HomeScreen} />
    </MainStack.Navigator>
  )
}

// Render
export default function App() {
  const scheme = useColorScheme()
  
  return (
    <ApplicationProvider {...eva} theme={eva.light} customMapping={mapping}>
      <IconRegistry icons={EvaIconsPack} />
      <NavigationContainer>
        <RootStack.Navigator mode="modal">
          {/* Main Stack Router */}
          <RootStack.Screen name="Main" component={MainStackContainer} options={{ headerTitle: 'Home', ...HeaderStyle }} />
          {/* Modals */}
          <RootStack.Screen name="Watch Selector" component={WatchListModal} options={{...HeaderStyle }} />
        </RootStack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}
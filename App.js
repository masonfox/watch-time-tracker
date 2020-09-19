import 'react-native-gesture-handler'
import * as React from 'react'
import { useColorScheme } from 'react-native-appearance'
import { NavigationContainer } from '@react-navigation/native'
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { createStackNavigator } from '@react-navigation/stack'
import { Theme, HeaderStyle } from './src/theme'

// Prepare stack navigator
const Stack = createStackNavigator()

// Screen Imports
import HomeScreen from './src/screens/HomeScreen'

// Render
export default function App() {
  const scheme = useColorScheme()
  
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Home", ...HeaderStyle}} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}
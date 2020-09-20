import * as React from 'react';
import { StyleSheet, View } from 'react-native'
import Watch from '../components/Watch'
import TimeLogButton from '../components/TimeLogButton'
import RTDeviationCalc from '../components/RTDeviationCalc'

export default function App({navigation}) {
    return (
      <View style={styles.container}>
        <Watch navigation={navigation} />
        <RTDeviationCalc />
        <TimeLogButton />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15
    },
  });
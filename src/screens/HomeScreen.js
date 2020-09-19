import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Theme } from '../theme'
import Watch from '../components/watch'

export default function App() {
    return (
      <View style={styles.container}>
        <Watch />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      backgroundColor: Theme.colors.background
    },
  });
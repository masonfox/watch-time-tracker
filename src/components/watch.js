import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Layout, Text } from '@ui-kitten/components';

class Watch extends Component {
    state = { count: 1 }

    _setCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <Layout style={styles.container} level='1'>

                <Button onPress={this._setCounter}>
                    BUTTON
                </Button>

                <Text style={styles.text}>
                    Pressed {this.state.count} times
                </Text>

                </Layout>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      marginHorizontal: 8,
    },
  });

export default Watch;
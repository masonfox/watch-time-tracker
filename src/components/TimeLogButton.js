import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'native-base'

class TimeLogButton extends Component {
    state = {

    }

    render() {
        return (
            <View style={styles.container}>
                <Button style={styles.button}>
                    <Text>Measure</Text>
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        borderRadius: 125,
        fontSize: 100,
        width: 200,
        height: 200,
        borderWidth: 4,
        borderColor: '#51F0B0'
    }
})

export default TimeLogButton;
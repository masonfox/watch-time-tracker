import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'native-base'

class RTDeviationCalc extends Component {
    state = {  }

    render() {
        return (
            <View style={styles.card}>
                <View>
                    <Text style={styles.header} category="h6">Deviations</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.deviationItem}>
                        <Text style={{ fontWeight: 'bold' }}>Current</Text>
                        <Text>-0.1 second(s)</Text>
                    </View>
                    <View style={[styles.deviationItem, styles.lastDeviationItem]}>
                        <Text style={{ fontWeight: 'bold' }}>Last</Text>
                        <Text>-0.1 second(s)</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E4E9F2',
        borderRadius: 4,
    },
    header: {
        paddingTop: 7,
        paddingBottom: 7,
        textAlign: 'center',
        backgroundColor: '#3366FF',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        color: '#fff',
        fontWeight: "700"
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    deviationItem: {
        padding: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    lastDeviationItem: {
        borderLeftWidth: 1,
        borderLeftColor: '#E4E9F2'
    }
})

export default RTDeviationCalc;
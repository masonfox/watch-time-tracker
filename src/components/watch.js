import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text, Icon } from 'native-base'
import { Theme } from '../theme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import WatchListModal from '../modals/WatchListModal'

const DetailIcon = (props) => (
    <Icon {...props} style={[props.style, { width: 25, height: 25 }]} name='arrow-ios-forward'/>
  );

class Watch extends Component {  
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false
        }
    }

    _toggleModal = () => {
        this.setState({ modalVisible: !this.state.modalVisible })
    }

    _handleWatchSelect = (index) => {
        alert(`${index} selected`)
        this._toggleModal()
    }

    _handleLogPress = () => {
        this.props.navigation.navigate('Watch View')
    }

    _handleModalClose = (index) => {
        alert(`${index} selected`)
        this.setState({ modalVisible: false })
    }

    render() {
        const { modalVisible } = this.state

        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.clock}>
                        <View>
                            <Text style={styles.clockPeriod}>AM</Text>
                            <Text style={[styles.clockPeriod, styles.activePeriod]}>PM</Text>
                        </View>
                        <Text category="h1" style={styles.clockTime}>12:00</Text>
                        <Text category="c1" style={styles.clockSeconds}>56.7</Text>
                    </View>
                    {/* <Divider /> */}
                    <View style={styles.watchItem}>
                        <TouchableOpacity onPress={this._toggleModal} style={styles.cardBody}>
                            <Icon
                                style={styles.icon}
                                fill={Theme.colors.primary}
                                name='clock'
                            />
                            <View>
                                <Text category="h5">Vostok Amphibia</Text>
                                <Text category="s2">Model HK4B</Text>
                            </View>
                        </TouchableOpacity>
                        <Button style={styles.detailButton} onPress={this._handleLogPress}>
                            <Text>Beep</Text>
                        </Button>
                    </View>
                </View>

                <WatchListModal modalVisible={modalVisible} handleClose={this._toggleModal} selectWatch={this._handleWatchSelect} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        marginBottom: 25,
    },
    card: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E4E9F2',
        borderRadius: 4,
    },
    watchItem: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 25,
        paddingLeft: 25
    },
    icon: {
        width: 40,
        height: 40,
        marginRight: 15
    },
    cardBody: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    detailButton: {
        borderRadius: 60,
        height: 30,
        width: 30
    },
    clock: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    clockPeriod: {
        color: '#ddd'
    },
    activePeriod: {
        fontWeight: 'bold',
        color: '#999'
    },
    clockTime: {
        fontSize: 65,
        fontWeight: 'bold',
        marginLeft: 15,
        marginRight: 15,
        marginTop: -10
    },
    clockSeconds: {
        fontWeight: 'bold',
        fontSize: 25,
    }
  });

export default Watch;
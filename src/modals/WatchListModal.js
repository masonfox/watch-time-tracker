import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Layout, List, ListItem, Body } from 'native-base'

const data = new Array(8).fill({
    title: 'Vostok Amphibia',
    description: 'Description for Item',
})

class WatchListModal extends Component {
    constructor(props) {
        super(props)
    }

    _selectWatch = () => {
        this.props.navigation.navigate('Home')
    }

    _createNewWatch = () => {

    }

    render() {
        const ListItems = data.map((item, index) => {
            return (
                <ListItem onPress={() => this._selectWatch()}>
                    <Body>
                        <Text>{ item.title }</Text>
                        <Text note>{ item.description }</Text>
                    </Body>
                </ListItem>
            )
        })

        ListItems

        return (
            <View>
                <List style={styles.container}>
                    { ListItems }
                </List>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        paddingLeft: 7,
        paddingRight: 7,
        backgroundColor: '#fff'
    },
    description: {

    }
})

export default WatchListModal;
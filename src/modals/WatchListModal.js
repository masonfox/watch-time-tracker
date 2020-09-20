import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Layout, List, Divider, ListItem } from '@ui-kitten/components'

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
        const renderItem = ({ item, index }) => (
            <ListItem
                title={() => <Text category="h6" style={styles.title}>{`${item.title} ${index + 1}`}</Text>}
                description={`${item.description} ${index + 1}`}
                onPress={() => this._selectWatch()}
            />
        )

        return (
            <Layout level="1">
                <List
                    style={styles.container}
                    data={data}
                    ItemSeparatorComponent={Divider}
                    renderItem={renderItem}
                />
            </Layout>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        paddingLeft: 7,
        paddingRight: 7
    },
    description: {

    }
})

export default WatchListModal;
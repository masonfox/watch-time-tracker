import React, { Component } from 'react'
import { View, StyleSheet, Modal } from 'react-native'
import { Text, List, ListItem, Body, Content, Left, Container, Icon, Header, Button, Title } from 'native-base'

const data = new Array(8).fill({
    title: 'Vostok Amphibia',
    description: 'Description for Item',
})

class WatchListModal extends Component {
    constructor(props) {
        super(props)
    }

    _selectWatch = (index) => {
        this.props.selectWatch(index)
        this._handleClose()
    }

    _handleClose = () => {
        this.props.handleClose()
    }

    _createNewWatch = () => {
        
    }

    render() {
        const { modalVisible } = this.props

        const ListItems = data.map((item, index) => {
            return (
                <ListItem onPress={() => this._selectWatch(index)}>
                    <Body>
                        <Text>{ item.title }</Text>
                        <Text note>{ item.description }</Text>
                    </Body>
                </ListItem>
            )
        })

        return (
            <Modal
                animationType="slide"
                visible={modalVisible}
            >
                <Container>
                    <Header>
                        <Left>
                            <Button transparent onPress={this._handleClose}>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Select a Watch</Title>
                        </Body>
                    </Header>
                    <Content>
                        <List style={styles.container}>
                            { ListItems }
                        </List>
                    </Content>
                </Container>
            </Modal>
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
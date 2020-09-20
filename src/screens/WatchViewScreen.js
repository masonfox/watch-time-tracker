import React, { Component } from 'react'
import { Text, Tab, Tabs, ScrollableTab, Container, Content } from 'native-base'
import { View, StyleSheet } from 'react-native'

const data = [
    { date: '9/1/20' },
    { date: '9/2/20' },
    { date: '9/3/20' },
    { date: '9/5/20' },
    { date: '9/10/20' },
    { date: '9/20/20' },
    { date: '9/21/20' },
    { date: '9/22/20' },
    { date: '9/27/20' },
    { date: '9/29/20' },
    { date: '9/30/20' },
    { date: '10/3/20' },
]

// temporary for now - should sort newest to oldest
data.reverse()

class WatchViewScreen extends Component {
    state = {
        selectedIndex: 0,
        data
    }

    _setSelectedIndex = (index) => {
        this.setState({ selectedIndex: index })
    }

    render() {
        const { selectedIndex, data } = this.state

        const TabsList = data.map((item, index) => {
            return (
                <Tab heading={item.date} key={index}>
                    <Content style={styles.tabContainer}>
                        <Text category='h3'>Beep - {item.date}</Text>
                        <Text>Lorem ipsum</Text>
                    </Content>
                </Tab>
            )
        })

        return (
            <Container>
                <Tabs
                    page={this.state.selectedIndex}
                    renderTabBar={()=> <ScrollableTab />}
                    >
                    { TabsList }
                </Tabs>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    tabContainer: {
        padding: 15
    },
})

export default WatchViewScreen;
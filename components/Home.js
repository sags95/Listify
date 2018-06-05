import React, { Component } from 'react';
import {H1, H2, H3, Header } from 'native-base';
import {StyleSheet, View, Text} from 'react-native';
import TabBar from './TabBar';

export default class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            cards: 0
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.textWrap}>
                   <H2 style={{fontWeight: 'bold'}}>Hey Alex,</H2>
                    <H2 style={{fontWeight: 'bold'}}>here's your to-do list</H2>
                </View>
                <TabBar/>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFF'
    },
    textWrap: {
        marginTop: 30,
        marginBottom: 50,

    }
});
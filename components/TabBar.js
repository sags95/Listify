import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { H1, H2, H3 } from 'native-base';
import TodayTab from './tabs/TodayTab';
import WeekTab from './tabs/WeekTab';
import MonthTab from './tabs/MonthTab';

export default class TabBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            activeIndex: 0,
        };

        this.handleTabPress = this.handleTabPress.bind(this);
    }

    handleTabPress = (e) => {
        this.setState({activeIndex: e})
    };

    render(){
        if (this.state.activeIndex === 0){
            return(
                <View>
                    <View style={styles.tabWrap}>
                        <TouchableOpacity style={styles.tabStyle} onPress={() => {this.handleTabPress(0)}}>
                            <Text style={styles.tabHeader}>TODAY</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tabStyle} onPress={() => {this.handleTabPress(1)}}>
                            <Text style={styles.tabHeader}>WEEK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tabStyle} onPress={() => {this.handleTabPress(2)}}>
                            <Text style={styles.tabHeader}>MONTH</Text>
                        </TouchableOpacity>
                    </View>
                    <TodayTab/>
                </View>
            )
        } if (this.state.activeIndex === 1){
            return(
                <View>
                    <View style={styles.tabWrap}>
                        <TouchableOpacity style={styles.tabStyle} onPress={() => {this.handleTabPress(0)}}>
                            <Text style={styles.tabHeader}>TODAY</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tabStyle} onPress={() => {this.handleTabPress(1)}}>
                            <Text style={styles.tabHeader}>WEEK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tabStyle} onPress={() => {this.handleTabPress(2)}}>
                            <Text style={styles.tabHeader}>MONTH</Text>
                        </TouchableOpacity>
                    </View>
                    <WeekTab/>
                </View>
            )
        } if (this.state.activeIndex === 2){
            return(
                <View>
                    <View style={styles.tabWrap}>
                        <TouchableOpacity style={styles.tabStyle} onPress={() => {this.handleTabPress(0)}}>
                            <Text style={styles.tabHeader}>TODAY</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tabStyle} onPress={() => {this.handleTabPress(1)}}>
                            <Text style={styles.tabHeader}>WEEK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tabStyle} onPress={() => {this.handleTabPress(2)}}>
                            <Text style={styles.tabHeader}>MONTH</Text>
                        </TouchableOpacity>
                    </View>
                    <MonthTab/>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
   tabWrap: {
       flexDirection: 'row',
       justifyContent: 'center',
   },
    tabHeader: {
       fontSize: 20,
        marginRight: 30,
    },
    tabStyle: {
       borderBottomWidth: 1,
       borderBottomColor: 'blue'
    }
});
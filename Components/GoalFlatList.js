import React from 'react';
import FlatListGoalItem from './FlatListGoalItem'

import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native';

const GoalFlatList = props => {


    return (
        <FlatList 
            contentContainerStyle = {styles.screen}
            data = {props.goalInfos}
            keyExtractor = { (itemData, index) => itemData.myOwnKey}
            renderItem = { (itemData) => (
                        <FlatListGoalItem item = { itemData.item } onDelete = {props.onDelete.bind(this)}/>
                    ) 
                }
        />
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'pink',
        width: '100%',
        alignItems: 'center'
    }
})

export default GoalFlatList;
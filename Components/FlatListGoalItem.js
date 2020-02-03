import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const FlatListGoalItem = props => {

    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.item.myOwnKey)}>
            <View style={styles.listItem}>
                <Text>AG {props.item.value}</Text>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        width: '100%',
    }
})

export default FlatListGoalItem;
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const FlatListGoalItem = props => {

    const onPressHandler = () => props.onDelete(props.item.myOwnKey)

    return (
        <TouchableOpacity onPress={onPressHandler}>
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
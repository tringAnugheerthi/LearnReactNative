import React from 'react';
import { 
    View, 
    ScrollView,
    StyleSheet,
    Text 
} from 'react-native';

const ListScrollView = props => {

    return (
        <ScrollView contentContainerStyle={styles.screen}>
            {props.listItems.map((listItem) =>
                <View style={styles.listItem} key={listItem}>
                    <Text>AG {listItem}</Text>
                </View>)
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'pink',
        width: '100%',
        alignItems: 'center'
    },
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        width: '80%',
    }
})

export default ListScrollView;
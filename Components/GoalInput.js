import React, { useState } from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Modal
} from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalTextInputChange = (goalTextInput) => {
        setEnteredGoal(goalTextInput)
    }

    return (
        <Modal animationType='slide' visible={props.visible}>
            <View style={styles.addChecklistPage}>
                <TextInput
                    style={styles.goalInputTextField}
                    placeholder="Enter checklist title"
                    onChangeText={goalTextInputChange} />
                <Button
                    style={styles.addButton}
                    title="ADD"
                    onPress={props.addButtonPressed.bind(this, enteredGoal)} />
                <Button
                    style={styles.cancelButton}
                    title="CANCEL"
                    onPress={props.cancelButtonPressed} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    addChecklistPage: {
        // flexDirection: 'row',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    goalInputTextField: {
        borderColor: 'black',
        width: '80%',
        borderWidth: 1,
        padding: 10
    },
    addButton: {
        flex: 1
    },
    cancelButton: {
        flex: 1,
        backgroundColor: 'red'
    }
})

export default GoalInput;
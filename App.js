import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import GoalFlatList from './Components/GoalFlatList';
import GoalInput from './Components/GoalInput';
import CustomButton from './TestableComponents/CustomButton';

export default function App() {

  const [addedGoals, setAddedGoals] = useState([]);
  const [isNeedToShow, setIsNeedToShow] = useState(false);

  const addButtonPressed = (enteredGoal) => {
    console.log(enteredGoal)
    setAddedGoals(currentGoals => [...currentGoals, { myOwnKey: Math.random().toString(), value: enteredGoal }])
    console.log(addedGoals)
    setIsNeedToShow(false)
  }

  const deleteGoal = (goalID) => {
    console.log(goalID)
    setAddedGoals(currentGoals => {
      return currentGoals.filter((goal) => {
        return goal.myOwnKey != goalID
      })
    })
  }

  const cancelButtonPressed = () => {
    setIsNeedToShow(false)
  }

  return (
    <View style={styles.screen}>
      <CustomButton label="Hello"/>
    </View>

  )
  // return (
  //   <View style={styles.screen}>
  //     <Button
  //       title="Start Adding Goals..!"
  //       onPress={() => { setIsNeedToShow(true) }}
  //     />
  //     <GoalInput
  //       addButtonPressed={addButtonPressed}
  //       cancelButtonPressed={cancelButtonPressed}
  //       visible={isNeedToShow} />
  //     <GoalFlatList
  //       goalInfos={addedGoals}
  //       onDelete={deleteGoal} />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  screen: {
    padding: 40
  }
});

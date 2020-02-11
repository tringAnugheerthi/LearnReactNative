import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import GoalFlatList from './Components/GoalFlatList';
import GoalInput from './Components/GoalInput';
// import CustomButton from './TestableComponents/FunctionalComponents/CustomButton';
import CustomButton from './TestableComponents/ClassComponents/CustomButton';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      addedGoals: [],
      isNeedToShow: false
    }
  }

  // const[addedGoals, setAddedGoals] = useState([]);
  // const[isNeedToShow, setIsNeedToShow] = useState(false);

  addButtonPressed = (enteredGoal) => {
    console.log(enteredGoal)
    const { addedGoals } = this.state
    this.setState({
      addedGoals: [...addedGoals, { myOwnKey: Math.random().toString(), value: enteredGoal }],
      isNeedToShow: false
    })
    // setAddedGoals(currentGoals => [...currentGoals, ])
    // console.log(addedGoals)
    // setIsNeedToShow(false)
  }

  deleteGoal = (goalID) => {
    console.log(goalID)
    const { addedGoals } = this.state
    const updatedGoals = addedGoals.filter((goal) => {
      return goal.myOwnKey != goalID
    })
    this.setState({ addedGoals: updatedGoals })
    // setAddedGoals(currentGoals => {
    //   return 
    // })
  }

  cancelButtonPressed = () => {
    this.setState({ isNeedToShow: false })
  }

  // return (
  //   <View style={styles.screen}>
  //     {/* <CustomButton label="Hello"/> */}
  //     <CustomButton label = "Welcome" url = "https://www.google.com/?client=safari" primary = {false} onPress = { () => { console.log("Custom Button Pressed") }}/>
  //   </View>
  // )
  render() {
    const {isNeedToShow, addedGoals} = this.state
    return (
      <View style={styles.screen} >
        <Button
          title="Start Adding Goals..!"
          onPress={() => this.setState({isNeedToShow: true})}
        />
        <GoalInput
          addButtonPressed={this.addButtonPressed}
          cancelButtonPressed={this.cancelButtonPressed}
          visible={isNeedToShow} />
        <GoalFlatList
          goalInfos={addedGoals}
          onDelete={this.deleteGoal} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    padding: 40
  }
});

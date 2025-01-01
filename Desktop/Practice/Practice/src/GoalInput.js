import React,{useState} from "react";
import {View, Text, StyleSheet,TextInput,Button} from 'react-native';



const GoalInput = (props)=>{
    const [enteredGoalText, setEnteredGoalText] = useState('');
    function goalInputHandler(enteredText){

        setEnteredGoalText(enteredText)
      }

      function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
      }

    return(
         <View style={styles.mainContainer}>
                  <TextInput 
                  style={styles.inputContainer}
                  placeholder='Enter your goal'
                  onChangeText={goalInputHandler}
                  value={enteredGoalText}/>
                  <Button 
                  title="Add Goal"
                  onPress={addGoalHandler}/>
            
                  </View>
        
       
    )
}

export default GoalInput;

const styles= StyleSheet.create({
    mainContainer:{
    
        // width: 350,
        // height: 50,
        flexDirection: 'row',
        // marginTop: -400
        
      },
      inputContainer:{
        backgroundColor:'white',
        width: 250,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
      },
})

import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TextInput } from 'react-native';
import { useState } from 'react';
import GoalInput from './src/GoalInput';
import GoalItem from './src/GoalItem';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
 
  function addGoalHandler(enteredGoalText){
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text:enteredGoalText, id: Math.random().toString()},
    ])
  }

  function deleteGoalHandler(id){
     setCourseGoals((currentCourseGoals)=>{
      return currentCourseGoals.filter((goal)=> goal.id!=id)

    })
  }
  function editGoalHandler(id){
    console.log("edit Button is clicked!!")

  }

  return (
    <SafeAreaProvider>
    <View style={styles.container}>

      <GoalInput onAddGoal={addGoalHandler}/>
     
      <View style={styles.listContainer}>
        <FlatList 
        data={courseGoals} 
        renderItem={({item})=>{
          return (
            <GoalItem 
            text={item.text} 
            id={item.id} 
            onDeleteItem={deleteGoalHandler}
            onEditItem={editGoalHandler}/>

          )
        }}
        keyExtractor={(item)=>
        {
          return item.id;
          }}/>
        
      </View>
      
     
    </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
 
  listContainer:{
    marginTop: 50,
    width: 330,
    // backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 10,
    marginLeft: -30,
  },
 
});

import React from "react";
import {View, Text, StyleSheet, Pressable} from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
 
const GoalItem = (props) => {
    return(
        <View style={styles.listView}>
              <Text style={styles.listText}>{props.text}</Text>
            <View style={{flexDirection: 'row',marginLeft: 210}}>
              <Pressable style={styles.editButton} onPress={()=> props.onEditItem(props.id)}>
              <Feather name="edit-2" size={24} color="black" />
              </Pressable>

              <Pressable onPress={()=>props.onDeleteItem(props.id)} style={styles.deleteButton}>
              <AntDesign 
              name="delete" 
              size={24} 
              color="black"  
              />
              </Pressable>
              </View>
              

        </View>
    )
}
export default GoalItem;
const styles= StyleSheet.create({
    listView:{
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
      },
      listText:{
        alignItems: 'center',
        marginTop: 3,
      },
      deleteButton:{
        marginLeft: 10,
      },
      editButton:{
        marginRight: 10,
      }
})
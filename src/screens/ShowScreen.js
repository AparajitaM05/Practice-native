import React, { useContext } from "react";
import {View, Text, StyleSheet} from "react-native";
import { Context } from "../context/BlogContext";
import IndexScreen from "./IndexScreen";

const ShowScreen = ({route})=>{
    const {state} = useContext(Context);
 

 const blogPost = state.find((blogPost) => blogPost.id === route.params.id);
 
  
    return (
        <View style={styles.backgroundView}>
            <Text style={styles.label}>{blogPost.title}</Text>
            <Text style={styles.input}>{blogPost.content}</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundView:{
        marginTop: 80,
        marginLeft: 30,
        height: 450,
        width: 350,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // Shadow for Android
        elevation: 5,
    
    },
    input:{
        fontSize: 18,
        borderWidth: 0.3,
        borderColor: "grey",
        marginBottom: 10,
        padding: 5,
        margin: 5,
        borderRadius: 10,
        height: 300
        
    },
    label:{
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 10,
        marginTop: 10
    }
});
export default ShowScreen;
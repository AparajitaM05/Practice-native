import React from "react";
import {View,Text,StyleSheet, FlatList, Button} from "react-native";
import {Context} from "../context/BlogContext";
import { useContext } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import { TouchableOpacity } from "react-native";


const IndexScreen = ({navigation}) => {
    const {state, addBlogPosts, deleteBlogPost} = useContext(Context);
   
  return (
    
    <View>
         <Button title="Add Blog" onPress={()=>addBlogPosts()} />

        <FlatList 
        data={state}
         keyExtractor={(blogPost)=> blogPost.title}
         renderItem={({item})=>{ return(
            <TouchableOpacity onPress={()=> navigation.navigate("Show", {id: item.id})}>
            <View style={styles.row}>
         <Text>{item.title} - {item.id}</Text>
         <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
         <AntDesign name="delete" size={24} color="black" />
         </TouchableOpacity>
         </View>
         </TouchableOpacity>
        )}}/>
         
    </View>
  );
}

IndexScreen.Options = ({navigation})=>{
    return {
       
    }

}

const styles = StyleSheet.create({
    row:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: "gray",
        paddingHorizontal: 10
        
    }
})
export default IndexScreen;
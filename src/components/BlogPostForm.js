import React, {useState} from "react";
import { View,StyleSheet,Text,TextInput, Button } from "react-native";

const BlogPostForm = ({onSubmit,initialValues={title:"", content:""}})=>
{
    const [title, setTitle]= useState(initialValues.title);
    const [content, setContent]= useState(initialValues.content);

    return (<View style={styles.backgroundView}>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} value={title} onChangeText={(text)=>setTitle(text)}/>
        <Text style={styles.label}>Content</Text>
        <TextInput style={styles.input} value={content} onChangeText={(text)=>setContent(text)}/>
        <Button title="Save Blog Post" onPress={()=>{onSubmit(title,content)}}/>

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
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 15,
        padding: 5,
        margin: 5,
        borderRadius: 10,
        
    },
    label:{
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 10,
        marginTop: 10
    }
});
export default BlogPostForm;
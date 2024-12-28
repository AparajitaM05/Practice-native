import React,{useContext} from "react";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

const CreateScreen = ({navigation})=>{
    const { addBlogPosts } = useContext(Context);
    return (

    <BlogPostForm 
    onSubmit={(title,content)=>{addBlogPosts(title,content, ()=> { console.log("Navigating to Index"); 
        navigation.navigate("Index")});
    }}
    />
);
        
        
    
};


export default CreateScreen;
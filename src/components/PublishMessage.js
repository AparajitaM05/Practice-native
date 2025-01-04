import React,{useState} from "react";
import {message} from "../state/actions";

const PublishMessage = (props)=>{
    const {dispatch} = props;
    const [text , setText]=useState("");
    const updateText = event=>{
        setText(event.target.value);
    }
    const publishContent = ()=>{
        dispatch(message(text));
    }
    const handleKeyPress = event=>{
        if(event.key === "Enter"){
            publishContent();
        }
    }

    return(
        <div>
            <h3>
                Got something to say?
            </h3>
            <input value={text} onChange={updateText} onKeyPress={handleKeyPress}/>
            {' '}
            <button onClick={publishContent}>Publish it!</button>
        </div>
    )


}
export default PublishMessage;
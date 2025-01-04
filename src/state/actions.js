import { NEW_MESSAGE } from "./types";
import { v4 as uuidv4 } from 'uuid';


export const message = (text)=>{
    return {
        type: NEW_MESSAGE,
        item: {id: uuidv4(), text, timestamp: Date.now()}
    }
}
import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = (props) =>{

    const [feedback, setFeedback] = useState([
        {
        id:"1",
        text:"Item from context",
        rating:10,
    }]
    );

    const deleteFeedback = (id) =>{
        if (window.confirm("Are you sure you want to delete this feedback?")) {
            setFeedback(feedback.filter(feedback => feedback.id !== id));

        }
    };
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback,...feedback]);
    }

    return (
        <FeedbackContext.Provider value={{feedback,deleteFeedback,addFeedback}}>
            {props.children}
        </FeedbackContext.Provider>
    )

}

export default FeedbackContext;
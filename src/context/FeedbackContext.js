import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = (props) =>{

    const [feedback, setFeedback] = useState({
        id:"1",
        text:"Item from context",
        rating:10,
    });



    return (
        <FeedbackContext.Provider value={{feedback}}>
            {props.children}
        </FeedbackContext.Provider>
    )

}

export default FeedbackContext;
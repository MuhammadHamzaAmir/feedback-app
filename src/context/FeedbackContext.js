import { createContext, useState,useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = (props) =>{

    const [feedback, setFeedback] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit:false
    });

    useEffect(() => {
        fetchFeedback();
    },[])

    const fetchFeedback = async () => {
        const response = await fetch(`/feedback?_sort=id&_order=desc`);
        const data = await response.json();
        setFeedback(data);
        setIsLoading(false);
    }

    const deleteFeedback = async (id) =>{
        if (window.confirm("Are you sure you want to delete this feedback?")) {
            await fetch(`/feedback/${id}`, {
                method: "DELETE"
            });
            setFeedback(feedback.filter(feedback => feedback.id !== id));

        }
    };
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })

        const data = await response.json();
        setFeedback([data,...feedback]);
    }

    const updateFeedback = (id,updItem) => {
        setFeedback(feedback.map( (item) => (item.id === id ? {
            ...item,...updItem
        }:item) ));
        setFeedbackEdit({
            edit:false,
        });
    }

    // set Item to be updated
    const editFeedback = (item) =>{
        setFeedbackEdit({
            item:item,
            edit:true
        });
    }

    return (
        <FeedbackContext.Provider value={{feedback,feedbackEdit,isLoading,deleteFeedback,addFeedback,editFeedback,updateFeedback}}>
            {props.children}
        </FeedbackContext.Provider>
    )

}

export default FeedbackContext;
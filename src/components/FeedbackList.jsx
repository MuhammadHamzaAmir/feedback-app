import FeedbackItem from "./FeedbackItem";
import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {

    const {feedback} = useContext(FeedbackContext);

    if (!feedback || feedback.length === 0) {
        return <div>No feedback yet</div>
    }


    return (
      <>
      <div className="feedback-list">
        {feedback.map(item => (
            <FeedbackItem key={item.id} feedback={item}/>
        ))}
        </div>
      </>
    );
}
export default FeedbackList;

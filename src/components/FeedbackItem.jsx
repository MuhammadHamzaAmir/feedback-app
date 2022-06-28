import Card from "./shared/Card";
// import PropTypes from "prop-types";
import {FaTimes,FaEdit} from 'react-icons/fa'
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";


function FeedbackItem(props) {

    const {deleteFeedback,editFeedback} = useContext(FeedbackContext);
  
    return (
    <Card reverse={true}>
        <div className="num-display">{props.feedback.rating}</div>
        <button className="close" onClick={() => {deleteFeedback(props.feedback.id)}}>
          <FaTimes color="red"></FaTimes>
        </button>
        <button className="edit" onClick={() => {editFeedback(props.feedback)}}>
            <FaEdit color="#FF5100"></FaEdit>
        </button>
        <div className="text-display">{props.feedback.text}</div>
    </Card>
  )
}

// FeedbackItem.propTypes={    
//     feedback: PropTypes.object.isRequired,
// };
export default FeedbackItem;
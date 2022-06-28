import Card from "./shared/Card";
// import PropTypes from "prop-types";
import {FaTimes} from 'react-icons/fa'
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";


function FeedbackItem(props) {

    const {deleteFeedback} = useContext(FeedbackContext);
  
    return (
    <Card reverse={true}>
        <div className="num-display">{props.feedback.rating}</div>
        <button className="close" onClick={() => {deleteFeedback(props.feedback.id)}}>
          <FaTimes color="red"></FaTimes>
        </button>
        <div className="text-display">{props.feedback.text}</div>
    </Card>
  )
}

// FeedbackItem.propTypes={    
//     feedback: PropTypes.object.isRequired,
// };
export default FeedbackItem;
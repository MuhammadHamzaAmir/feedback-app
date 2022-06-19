import Card from "./shared/Card";
import PropTypes from "prop-types";
import {FaTimes} from 'react-icons/fa'

function FeedbackItem(props) {
  return (
    <Card reverse={true}>
        <div className="num-display">{props.feedback.rating}</div>
        <button className="close" onClick={() => {props.handleDelete(props.feedback.id)}}>
          <FaTimes color="red"></FaTimes>
        </button>
        <div className="text-display">{props.feedback.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes={    
    feedback: PropTypes.object.isRequired,
};
export default FeedbackItem;
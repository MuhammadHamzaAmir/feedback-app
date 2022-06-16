import Card from "./shared/Card";
import PropTypes from "prop-types";

function FeedbackItem(props) {
  return (
    <Card reverse={true}>
        <div className="num-display">{props.feedback.rating}</div>
        <div className="text-display">{props.feedback.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes={    
    feedback: PropTypes.object.isRequired,
};
export default FeedbackItem;
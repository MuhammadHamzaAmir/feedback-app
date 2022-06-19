import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

function FeedbackList(props) {
    if (!props.feedback || props.feedback.length === 0) {
        return <div>No feedback yet</div>
    }
    return (
      <>
      <div className="feedback-list">
        {props.feedback.map(item => (
            <FeedbackItem key={item.id} feedback={item} handleDelete={props.handleDelete}/>
        ))}
        </div>
      </>
    );
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        }
        )
    ).isRequired,
}
export default FeedbackList;

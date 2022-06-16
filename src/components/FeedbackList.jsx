import FeedbackItem from "./FeedbackItem";

function FeedbackList(props) {
    if (!props.feedback || props.feedback.length === 0) {
        return <div>No feedback yet</div>
    }
    return (
      <>
      <div className="feedback-list">
        {props.feedback.map(feedback => (
            <FeedbackItem key={feedback.id} feedback={feedback} />
        ))}
        </div>
      </>
    );
}

export default FeedbackList;

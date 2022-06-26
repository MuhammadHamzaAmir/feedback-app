import PropTypes from "prop-types";

function FeedbackStats(props) {
  let avergae =
    props.feedback.reduce((sum, item) => sum + item.rating, 0) /
    props.feedback.length;

  avergae = avergae.toFixed(1).replace(/\.0+$/, "");

  return (
    <div className="feedback-stats">
      <h4>Average Ratings: {props.feedback.length > 0 ? avergae : 0}</h4>
      <h4>Total Reviws: {props.feedback.length}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        }
        )
    ).isRequired,
}

export default FeedbackStats;

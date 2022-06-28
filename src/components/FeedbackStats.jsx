// import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {

  const {feedback} = useContext(FeedbackContext);

  
  let avergae =
    feedback.reduce((sum, item) => sum + item.rating, 0) /
    feedback.length;

  avergae = avergae.toFixed(1).replace(/\.0+$/, "");

  return (
    <div className="feedback-stats">
      <h4>Average Ratings: {feedback.length > 0 ? avergae : 0}</h4>
      <h4>Total Reviws: {feedback.length}</h4>
    </div>
  );
}

// FeedbackStats.propTypes = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired,
//         }
//         )
//     ).isRequired,
// }

export default FeedbackStats;

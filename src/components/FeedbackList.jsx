import FeedbackItem from "./FeedbackItem";
import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {

    const {feedback} = useContext(FeedbackContext);

    if (!feedback || feedback.length === 0) {
        return <div>No feedback yet</div>
    }

        // return (
        //   <>
        //     <div className="feedback-list">
        //       <AnimatePresence>
        //         {props.feedback.map((item) => (
        //           <motion.div key={item.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        //             <FeedbackItem
        //               key={item.id}
        //               feedback={item}
        //               handleDelete={props.handleDelete}
        //             />
        //           </motion.div>
        //         ))}
        //       </AnimatePresence>
        //     </div>
        //   </>
        // );

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

// FeedbackList.propTypes = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//         }
//         )
//     ).isRequired,
// }
export default FeedbackList;

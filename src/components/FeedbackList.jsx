import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";
// import {AnimatePresence, motion} from "framer-motion";

function FeedbackList(props) {
    if (!props.feedback || props.feedback.length === 0) {
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
            id: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        }
        )
    ).isRequired,
}
export default FeedbackList;

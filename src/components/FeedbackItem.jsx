import {useState} from 'react';

function FeedbackItem(props) {


  return (
    <div className="card">
        <div className="num-display">{props.feedback.rating}</div>
        <div className="text-display">{props.feedback.text}</div>
    </div>
  )
}

export default FeedbackItem
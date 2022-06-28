import Card from "./shared/Card";
import {useState} from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {

    const {addFeedback} = useContext(FeedbackContext);

    const [text,setText] = useState("");
    const [rating, setRating] = useState(10);

    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");


    const handleTextChange = (e) => {
        if (text === ""){
            setBtnDisabled(true)
            setMessage(null)
        }
        else if ((text !== "") && text.trim().length <10){
            setBtnDisabled(true)
            setMessage("Review must be at least 10 characters")
        }
        else{
            setBtnDisabled(false)
            setMessage(null)
        }

        setText(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim().length <10){
            setBtnDisabled(true)
            setMessage("Review must be at least 10 characters")
        }
        else if (text.trim().length >=10){
            const newFeedback = {
                text,rating
            }
            setMessage("Review submitted")
            addFeedback(newFeedback);
            setText("");
            setBtnDisabled(true);
        }
    }


    return (
        <Card reverse={false}>
            <form onSubmit={handleSubmit}>
                <h2> Rate our Service!</h2>
                <RatingSelect select={(rating) => {setRating(rating);} }></RatingSelect>
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text}></input>
                    <Button type="submit" version="secondary" isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
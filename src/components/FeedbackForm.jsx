import Card from "./shared/Card";
import {useState} from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm() {

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




    return (
        <Card reverse={false}>
            <form>
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
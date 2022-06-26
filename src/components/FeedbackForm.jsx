import Card from "./shared/Card";
import {useState} from "react";

function FeedbackForm() {

    const [text,setText] = useState("");

    const handleTextChange = (e) => {
        setText(e.target.value);
    }


    

    return (
        <Card reverse={true}>
            <form>
                <h2> Rate our Service!</h2>
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text}></input>
                    <button type="submit">Send</button>
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm
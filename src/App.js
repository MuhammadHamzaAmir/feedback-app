import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import { useState } from "react";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";


function App() {

    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id) =>{
        if (window.confirm("Are you sure you want to delete this feedback?")) {
            setFeedback(feedback.filter(feedback => feedback.id !== id));

        }
    };

    return (
      <>
        <Header />
        <div className="container">
            <FeedbackForm />
            <FeedbackStats feedback={feedback}></FeedbackStats>
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        </div>
      </>
    );
}


export default App;

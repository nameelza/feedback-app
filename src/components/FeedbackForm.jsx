import { useState, useContext} from "react";
import RatingSelect from "./RatingSelect";
import Card from "./shared/Card";
import Button from "./shared/Button";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState("");

  const { addFeedback } = useContext(FeedbackContext);
 
  const handleTextChange = (e) => {
    let value = e.target.value;
    if (value === "") {
      setMessage("");
    } else if (value !== "" && value.trim().length < 10) {
      setMessage(
        `Text must be at least ${10 - value.length} more ${
          value.length === 9 ? "character" : "characters"
        } long`
      );
    } else {
      setMessage("");
    }
    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length < 10) {
      setMessage(
        `Text must be at least ${10 - text.length} more ${
          text.length === 9 ? "character" : "characters"
        } long`
      );
    } else {
      const newFeedback = {
        text,
        rating,
      };
      addFeedback(newFeedback);
      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect selected={rating} select={setRating} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={text.length < 10}>
            Submit
          </Button>
        </div>
        <div className="message">{message}</div>
      </form>
    </Card>
  );
}

export default FeedbackForm;

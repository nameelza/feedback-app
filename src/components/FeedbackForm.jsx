import { useState } from "react";
import RatingSelect from "./RatingSelect";
import Card from "./shared/Card";
import Button from "./shared/Button";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState("");

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

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect selected={rating} select={setRating}/>
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

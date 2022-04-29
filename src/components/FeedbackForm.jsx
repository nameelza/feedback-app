import { useState } from "react";
import Card from "./shared/Card";

function FeedbackForm() {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Card>
      <h1>How would you rate your service with us?</h1>
      <form>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;

import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback }) {
  return (
    <div>
      {!feedback || feedback.length === 0 ? (
        <div>No feedback available</div>
      ) : (
        feedback.map((item) => (
          <FeedbackItem key={feedback.id} feedback={item} />
        ))
      )}
    </div>
  );
}

export default FeedbackList;

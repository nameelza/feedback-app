import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback }) {
  return (
    <div className="feedback-list">
      {!feedback || feedback.length === 0 ? (
        <div>No feedback available</div>
      ) : (
        feedback.map((item) => <FeedbackItem key={item.id} feedback={item} />)
      )}
    </div>
  );
}

export default FeedbackList;

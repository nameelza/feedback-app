import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback }) {
  return (
    <div className="feedback-list">
      {!feedback || feedback.length === 0 ? (
        <div>No feedback available</div>
      ) : (
        feedback.map((item) => (
          <FeedbackItem
            key={item.id}
            item={item}
            handleDelete={(id) => console.log(id)}
          />
        ))
      )}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;

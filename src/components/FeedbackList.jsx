import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList({ handleDelete }) {
  const { feedback } = useContext(FeedbackContext);

  return (
    <div className="feedback-list">
      {!feedback || feedback.length === 0 ? (
        <div>No feedback available</div>
      ) : (
        <AnimatePresence>
          {feedback.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem
                key={item.id}
                item={item}
                handleDelete={handleDelete}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      )}
    </div>
  );
}

export default FeedbackList;

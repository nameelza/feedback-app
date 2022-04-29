import Card from './shared/Card';

function FeedbackForm() {
  return (
    <Card>
      <h1>How would you rate your service with us?</h1>
      <form>
          <div className="input-group">
              <input type='text' placeholder='Write a review' />
              <button type='submit'>Submit</button>
          </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;

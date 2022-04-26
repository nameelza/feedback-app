function App() {
  const comments = [
    { id: 1, text: "Love this!" },
    { id: 2, text: "Super good" },
    { id: 3, text: "You are the best" },
  ];
  return (
    <div className="container">
      <h1>Feedback App</h1>
      <h3>Comments ({comments.length})</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

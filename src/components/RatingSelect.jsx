function RatingSelect() {
  const handleChange = () => {
    console.log("selected");
  };
  return (
    <ul className="rating">
      <li>
        <input
          type="radio"
          id="num1"
          name="rating"
          value="1"
          onChange={handleChange}
          selected="true"
        />
        <label htmlFor="num1">1</label>
      </li>
    </ul>
  );
}

export default RatingSelect;

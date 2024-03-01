/* eslint-disable react/prop-types */
import "./SearchBar.css";
export default function SearchBar({ userInput, setUserInput, submitHandler }) {
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
    </form>
  );
}

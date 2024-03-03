/* eslint-disable react/prop-types */
import "./SearchBar.css";
export default function SearchBar({
  userInput,
  setUserInput,
  submitHandler,
  showWordEmptyError,
}) {
  let classToAdd = "";
  if (showWordEmptyError) {
    classToAdd = "cannot-be-empty";
  }

  return (
    <form className="search-bar-form" onSubmit={submitHandler}>
      <div className={`word-search-bar ${classToAdd}`}>
        <input
          type="text"
          value={userInput}
          placeholder="Search For Any Word..."
          onChange={(e) => setUserInput(e.target.value)}
        />
      </div>
    </form>
  );
}

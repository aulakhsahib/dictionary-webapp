import { useState } from "react";
import "./App.css";
import Dictionary from "./components/Dictionary/Dictionary";
import SearchBar from "./components/SearchBar/SearchBar";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [wordToSearch, setWordToSearch] = useState("");
  const [showWordEmptyError, setWordEmptyError] = useState(false);

  const [userInput, setUserInput] = useState("");
  const onSubmitSearchBar = (e) => {
    e.preventDefault();
    if (userInput) {
      setWordEmptyError(false);
      setWordToSearch(userInput)
    }
    else {
      setWordEmptyError(true);
      setWordToSearch("");
    }
  };

  return (
    <div className="main-wrapper-container">
      <Navbar />
      <SearchBar
        userInput={userInput}
        setUserInput={setUserInput}
        submitHandler={onSubmitSearchBar}
        showWordEmptyError={showWordEmptyError}
      />
      {wordToSearch && <Dictionary wordToSearch={wordToSearch} />}
      <div className="source-container"></div>
    </div>
  );
}

export default App;

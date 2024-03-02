import { useState } from "react";
import "./App.css";
import Dictionary from "./components/Dictionary/Dictionary";
import SearchBar from "./components/SearchBar/SearchBar";
import FontDropdown from "./components/FontDropdown/FontDropdown";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [wordToSearch, setWordToSearch] = useState("");

  const [userInput, setUserInput] = useState("");
  const onSubmitSearchBar = (e) => {
    e.preventDefault();
    setWordToSearch(userInput);
  };

  return (
    <div>
      <Navbar />
      <p>User Input {userInput}</p>
      <SearchBar
        userInput={userInput}
        setUserInput={setUserInput}
        submitHandler={onSubmitSearchBar}
      />
      {wordToSearch && <Dictionary wordToSearch={wordToSearch} />}
      <FontDropdown />
    </div>
  );
}

export default App;

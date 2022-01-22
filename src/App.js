import { useState } from "react";
import Form from "./components/form";
import { LetterContainer } from "./components/gameboard/LetterContainer";
import KeyboardContainer from "./components/keyboard/KeyboardContainer";

const App = () => {
  const [word, setWord] = useState("");

  const handleChange = (e) => {
    setWord(e.target.value.toUpperCase());
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(word);
  };

  return (
    <div
      className="app"
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h1 className="app-header">WORDLE</h1>
      <LetterContainer word={word} />
      <Form handleChange={handleChange} word={word} handleSubmit={handleSubmit} />
      {/* <KeyboardContainer /> */}
    </div>
  );
};

export default App;

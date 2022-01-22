import { useState } from "react";
import Form from "./components/form";
import { LetterContainer } from "./components/gameboard/LetterContainer";

const App = () => {
  const [word, setWord] = useState(["", "", "", "", "", "", ""]);
  const [curRow, setCurRow] = useState(0);

  let form = document.getElementById("word-form");

  const handleChange = (e) => {
    let newWord = [...word];
    newWord[curRow] = e.target.value.toUpperCase();
    setWord(newWord);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurRow(curRow + 1);
    form.reset();
  };

  return (
    <div
      className="app"
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h1 className="app-header">WORDLE</h1>
      <LetterContainer word={word} curRow={curRow} />
      <Form
        handleChange={handleChange}
        word={word}
        handleSubmit={handleSubmit}
        curRow={curRow}
      />
    </div>
  );
};

export default App;

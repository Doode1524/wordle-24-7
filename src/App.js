import { useEffect, useState } from "react";
import Form from "./components/form";
import { LetterContainer } from "./components/gameboard/LetterContainer";
import { dictionary } from "./dictionary";

const App = () => {
  const [curWord, setCurWord] = useState("");
  const [word, setWord] = useState(["", "", "", "", "", "", ""]);
  const [curRow, setCurRow] = useState(0);

  let form = document.getElementById("word-form");

  useEffect(() => {
    fetchWord();
  }, []);

  useEffect(() => {
    console.log(curWord);
  }, [word]);

  const fetchWord = () => {
    const randWord =
      dictionary.solutions[
        Math.floor(Math.random() * dictionary.solutions.length)
      ];
    setCurWord(randWord.toUpperCase());
  };

  const isValidGuess = (guess) => {
    return (
      dictionary.guesses.includes(guess.toLowerCase()) ||
      dictionary.solutions.includes(guess.toLowerCase())
    );
  };

  const handleChange = (e) => {
    let newWord = [...word];
    newWord[curRow] = e.target.value.toUpperCase();
    setWord(newWord);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValidGuess(word[curRow])) {
      setCurRow(curRow + 1);
      checkWord(word[curRow]);
      form.reset();
    }
  };

  const handleReset = (event) => {
    event.preventDefault();
    window.location.reload();
    // TODO: this, obviously.
  };

  const checkWord = (enteredWord) => {
    let letterRow = document.getElementById(`row-${curRow + 1}`);
    let rowBoxes = Array.from(letterRow.children).map((box) => {
      return box;
    });

    enteredWord.split("").map((letter, i) => {
      if (letter == curWord[i]) {
        rowBoxes[i].style.backgroundColor = "#6aaa64";
        rowBoxes[i].style.color = "white";
      } else if (curWord.split("").includes(letter)) {
        rowBoxes[i].style.backgroundColor = "#c9b458";
        rowBoxes[i].style.color = "white";
      } else {
        rowBoxes[i].style.backgroundColor = "#787c7e";
        rowBoxes[i].style.color = "white";
      }
    });
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
        handleReset={handleReset}
        word={word}
        handleSubmit={handleSubmit}
        curRow={curRow}
      />
    </div>
  );
};

export default App;

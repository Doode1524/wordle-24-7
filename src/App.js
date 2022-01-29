import { useEffect, useState } from "react";
import Form from "./components/form";
import { LetterContainer } from "./components/gameboard/LetterContainer";
import { dictionary } from "./dictionary";

const App = () => {
  const [curWord, setCurWord] = useState("");
  const [word, setWord] = useState(["", "", "", "", "", "", ""]);
  const [curRow, setCurRow] = useState(0);

  let form = document.getElementById("word-form");

  const fetchWord = () => {
    const randWord = dictionary.solutions[Math.floor(Math.random() * dictionary.solutions.length)];
    setCurWord(randWord);
  };

  useEffect(() => {
    fetchWord();
  }, []);

  useEffect(() => {
    console.log(curWord);
  }, [word]);

  const handleChange = (e) => {
    let newWord = [...word];
    newWord[curRow] = e.target.value.toUpperCase();
    setWord(newWord);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    checkWord(word[curRow]);
    setCurRow(curRow + 1);
    form.reset();
  };

  const checkWord = (enteredWord) => {
    // TO RECREATE BUG //
    // if you enter two of the same letter and one of them is in the
    // correct spot, then the block will permanently be yellow
    // no matter what letter you enter

    // found second bug. Same as above, but if you guess the last letter correctly

    let enteredWordArr = enteredWord.split("");
    let wordArr = curWord.split("");
    let letterRow = document.getElementById(`row-${curRow + 1}`);
    let rowBoxes = Array.from(letterRow.children).map((box) => {
      return box;
    });

    enteredWordArr.forEach((letter, i) => {
      rowBoxes.forEach((box) => {
        let letterCheck = wordArr.find((element) => box.innerText === element);
        let boxEle = rowBoxes.find((box) => box.id === `box-${i + 1}`);

        if (letter === wordArr[i]) {
          boxEle.style.backgroundColor = "#6aaa64"; //green
          boxEle.style.color = "white";
        } else if (letterCheck !== undefined) {
          letterCheck = undefined;
          boxEle.style.backgroundColor = "#c9b458"; //yellow
          boxEle.style.color = "white";
        } else {
          box.style.backgroundColor = "#787c7e"; //black
          box.style.color = "white";
        }
      });
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
        word={word}
        handleSubmit={handleSubmit}
        curRow={curRow}
      />
    </div>
  );
};

export default App;

import { useEffect, useState } from "react";
import Form from "./components/form";
import { LetterContainer } from "./components/gameboard/LetterContainer";

const App = () => {
  const [curWord, setCurWord] = useState("");
  const [word, setWord] = useState(["", "", "", "", "", "", ""]);
  const [curRow, setCurRow] = useState(0);

  let form = document.getElementById("word-form");

  const fetchWord = () => {
    fetch("https://random-word-api.herokuapp.com/word?number=10")
      .then((res) => res.json())
      .then((data) => {
        let newWord = data.find((word) => word.length === 5);
        if (!newWord) {
          fetchWord();
        } else {
          setCurWord(newWord.toUpperCase());
        }
      });
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

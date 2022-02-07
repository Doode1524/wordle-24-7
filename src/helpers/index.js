export const checkWord = async (enteredWord, curWord, curRow) => {
    let letterRow = document.getElementById(`row-${curRow + 1}`);
    let rowBoxes = Array.from(letterRow.children).map((box) => {
      return box;
    });

    enteredWord.split("").map((letter, i) => {
      if (letter === curWord[i]) {
        rowBoxes[i].style.backgroundColor = "#6aaa64";
        rowBoxes[i].style.color = "white";
        return rowBoxes[i];
      } else if (curWord.split("").includes(letter)) {
        rowBoxes[i].style.backgroundColor = "#c9b458";
        rowBoxes[i].style.color = "white";
        return rowBoxes[i];
      } else {
        rowBoxes[i].style.backgroundColor = "#787c7e";
        rowBoxes[i].style.color = "white";
        return rowBoxes[i];
      }
    });
  };
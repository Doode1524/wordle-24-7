import { LetterContainer } from "./gameboard/components/LetterContainer";

const App = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>WORDLE</h1>
      <LetterContainer>Hello</LetterContainer>
    </div>
  );
};

export default App;

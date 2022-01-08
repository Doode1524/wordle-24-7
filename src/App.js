import {LetterContainer} from './components/gameboard/LetterContainer';
import KeyboardContainer from './components/keyboard/KeyboardContainer';
const App = () => {
  return (
    <div className="app">
      <h1 className="app-header">WORDLE</h1>
      <LetterContainer />
      <KeyboardContainer />
    </div>
  );
};

export default App;

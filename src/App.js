import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from './components/AppHeader';
import TextAnalyzer from './components/TextAnalyzer';
import TextBox from './components/TextBox';
import { useState } from 'react';

function App() {
  const [characterCount, setCharacterCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);

  const handleCharacterCount = (characters) => {
    setCharacterCount(characters);
  }

  const handleWordCount = (array) => {
    setWordCount(array.length);
  }
  return (
    <div className="app h-100">
      <AppHeader></AppHeader>
      <TextAnalyzer characterCount={characterCount} setCharacterCount={handleCharacterCount} wordCount={wordCount} setWordCount={handleWordCount}></TextAnalyzer>
      <TextBox></TextBox>
    </div>
  );
}

export default App;

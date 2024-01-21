import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from './components/AppHeader';
import TextAnalyzer from './components/TextAnalyzer';
import TextBox from './components/TextBox';
import TextAnalyzerItem from './components/TextAnalyzerItem';
import { useState } from 'react';

function App() {
  const [characterCount, setCharacterCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);

  const handleCharacterCount = (text) => {
    setCharacterCount(text.length);
  }

  const handleWordCount = (string) => {
    const words = string.match(/\S+/g);
    if (words.length !== 0) {
      setWordCount(words.length);
    }
  }

  const handleSentenceCount = (string) => {
    const sentences = string.match(/\./g);
    if (sentences.length !== 0) {
      setSentenceCount(sentences.length);
    }
  }
  return (
    <div className="app h-100">
      <AppHeader></AppHeader>
      <TextAnalyzer>
        <TextAnalyzerItem title="Characters" value={characterCount} setValue={handleCharacterCount}></TextAnalyzerItem>
        <TextAnalyzerItem title="Words" value={wordCount} setValue={handleWordCount}></TextAnalyzerItem>
        <TextAnalyzerItem title="Sentences" value={sentenceCount} setValue={handleSentenceCount}></TextAnalyzerItem>
      </TextAnalyzer>
      <TextBox></TextBox>
    </div>
  );
}

export default App;

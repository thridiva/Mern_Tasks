import React, { useState } from "react";
import WordCounter from "./WordCounter.js";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        rows="6"
        placeholder="Type your text here....."
        value={text}
        onChange={handleTextChange}
      ></textarea>
      <WordCounter text={text} />
    </div>
  );
}

export default App;

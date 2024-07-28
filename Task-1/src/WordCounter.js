import React from "react";
import "./App.css";

function WordCounter({ text }) {
  const wordCount = text.split(/\s+/).filter((word) => word !== "").length;

  return (
    <div className="cnt">
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default WordCounter;

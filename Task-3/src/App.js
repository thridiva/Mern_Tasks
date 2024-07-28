import React, { useState } from "react";
import "./App.css";
import "./ColorPicker.css";

import ColorPicker from "./components/ColorPicker";

const App = () => {
  const colors = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FFC0CB",
    "#40E0D0",
    "#FFA500",
    "#800080",
    "#FFB6C1",
    "#006400",
  ];
  const [selectedColor, setSelectedColor] = useState("#FF5733");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="App">
      <h1>Color Picker App</h1>
      <ColorPicker colors={colors} onColorChange={handleColorChange} />
      <div className="selected-color">Selected Color: </div>
      <div className="cb" style={{ backgroundColor: selectedColor }}></div>
    </div>
  );
};

export default App;

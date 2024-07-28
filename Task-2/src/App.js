import React, { useState } from "react";
export default function Nage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const handler = (e) => {
    setInput(e.target.value);
  };
  const handleclear = (e) => {
    setInput("");
    setResult();
  };

  function handleSetResult(inputValue) {
    inputValue = inputValue
      .split("")
      .map((inp) => (inp === "÷" ? "/" : inp))
      .join("");
    console.log(inputValue);
    setResult(eval(inputValue));
  }

  return (
    <div className="background-gradient">
      <div className="c">
        <input
          type="text"
          className="inval"
          value={input}
          name="input"
          onChange={handler}
        ></input>
        <div className="res">{result}</div>

        <div className="btn">
          <div className="num">
            <div className="num1">
              <button
                className="btns"
                id="bt9"
                onClick={() => setInput(input + "9")}
              >
                9
              </button>
              <button
                className="btns"
                id="bt8"
                onClick={() => setInput(input + "8")}
              >
                8
              </button>
              <button
                className="btns"
                id="bt7"
                onClick={() => setInput(input + "7")}
              >
                7
              </button>
            </div>
            <div className="num1">
              <button
                className="btns"
                id="bt6"
                onClick={() => setInput(input + "6")}
              >
                6
              </button>
              <button
                className="btns"
                id="bt5"
                onClick={() => setInput(input + "5")}
              >
                5
              </button>
              <button
                className="btns"
                id="bt4"
                onClick={() => setInput(input + "4")}
              >
                4
              </button>
            </div>
            <div className="num1">
              <button
                className="btns"
                id="bt3"
                onClick={() => setInput(input + "3")}
              >
                3
              </button>
              <button
                className="btns"
                id="bt2"
                onClick={() => setInput(input + "2")}
              >
                2
              </button>
              <button
                className="btns"
                id="bt1"
                onClick={() => setInput(input + "1")}
              >
                1
              </button>
            </div>
            <div className="num1">
              <button
                className="btns"
                id="bt0"
                onClick={() => setInput(input + "0")}
              >
                0
              </button>
              <button
                className="btns"
                id="bt."
                onClick={() => setInput(input + ".")}
              >
                .
              </button>
              <button
                className="btns"
                id="bt="
                onClick={() => handleSetResult(input)}
              >
                =
              </button>
            </div>
          </div>

          <div className="exp">
            <button className="btns" id="btb" onClick={handleclear}>
              ⌫
            </button>
            <button
              className="btns"
              id="bt*"
              onClick={() => setInput(input + "÷")}
            >
              ÷
            </button>
            <button
              className="btns"
              id="bt-"
              onClick={() => setInput(input + "*")}
            >
              {" "}
              *{" "}
            </button>
            <button
              className="btns"
              id="bt+"
              onClick={() => setInput(input + "+")}
            >
              +
            </button>
            <button
              className="btns"
              id="bt*"
              onClick={() => setInput(input + "-")}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useRef } from "react";
import { useState, useEffect } from "react";

const UserInput = ({ content }) => {
  const [Counter, setCounter] = useState(0);
  const [CorrectWords, setCorrectWords] = useState(1);
  const [WrongWords, setWrongWords] = useState(1);
  const [NewWordArray,setWordArray]=useState([])
  // New States
  const [CurrentCharArray, setCurrentCharArray] = useState([]);
  const GlobalCounter = useRef(1);
  const [afterRender, setAfterRender] = useState();
  const [rerender, setRerender] = useState();
  const CurrentCounter = useRef(0);
  const [CurrentRange, setCurrentRange] = useState([0, 0]);
  const CorrectChars = useRef(0)


  useEffect(() => {
    if (!afterRender) return;
    let counters=0
    for (let i = 0; i < content.length; i++) {
      let currentWord = content[i] + " ";
      NewWordArray.push([currentWord,counters,counters+currentWord.length-1])
      counters=counters + currentWord.length
      for (let j = 0; j < currentWord.length; j++) {
        CurrentCharArray.push([currentWord[j], false]);
        GlobalCounter.current = GlobalCounter.current + 1;
      }
    }
    setAfterRender(false);
  }, [afterRender]);

  useEffect(() => {
    setAfterRender(true);
  }, [rerender]);

  const OnChangeHandler = (event) => {     
    CurrentRange[1] = content[Counter].length;    
    let value = event.target.value;
    let lastChar = value.charAt(value.length - 1);
    if (lastChar == CurrentCharArray[CurrentCounter.current][0]) {
      CorrectChars.current = CorrectChars.current + 1
      // CurrentCharArray[CurrentCounter.current][1] = true;
      CurrentCounter.current = CurrentCounter.current + 1;
      document.getElementById('CorrectChars').innerHTML = CorrectChars.current
    } else {
      CorrectChars.current = CorrectChars.current - 1
      CurrentCounter.current = CurrentCounter.current + 1;
      document.getElementById('CorrectChars').innerHTML = CorrectChars.current
    }
  };

  const KeyDownHandler = (evt) => {
    if (evt.ctrlKey && evt.keyCode === 8) {
      CorrectChars.current = CorrectChars.current - (CurrentRange[1]-1)
      for (let i = evt.target.value.length - 1; i > 0; i--) {
        CurrentCounter.current = CurrentCounter.current - 1;
        CurrentCharArray[CurrentCounter.current][1] = false;
      }
    }
  };
  const OnSpaceHandler = (event) => {
    document.getElementById(Counter).classList.add("bg-secondary");
    if (event.keyCode === 32) {
      let CurrentWordLength = content[Counter].length;
      let CurrentValueLength = event.target.value.length;
      let CounterValue = CurrentWordLength - CurrentValueLength + 1;
      CurrentCounter.current = CurrentCounter.current + CounterValue;
      var value = event.target.value;
      if (value.length === 1) {
        event.target.value = "";
      } else {
        setCounter(Counter + 1);
        if (event.target.value.trim() === content[Counter]) {
          document.getElementById(Counter).classList.remove("bg-secondary");
          document.getElementById(Counter + 1).classList.add("bg-secondary");
          document.getElementById(Counter).classList.add("text-success");
          setCorrectWords(CorrectWords + 1);
        } else {
          document.getElementById(Counter).classList.remove("bg-secondary");
          document.getElementById(Counter + 1).classList.add("bg-secondary");
          document.getElementById(Counter).classList.add("text-danger");
          setWrongWords(WrongWords + 1);
        }
        event.target.value = "";
      }
    } else if (event.keyCode === 8) {
      console.log(NewWordArray[Counter])
      console.log(NewWordArray[Counter][1])
      if (CurrentCounter.current > NewWordArray[Counter][1]){
      CurrentCounter.current = CurrentCounter.current - 2;
      console.log(CurrentCounter.current)
      }
    }
  };
  const ResetCounter = () => {
    setCounter(0);
  };
  return (
    <div className="container d-flex" style={{ margin: "10px" }}>
      <input
        className="form-control me-5"
        type="text"
        onKeyDown={(e) => KeyDownHandler(e)}
        onKeyUp={(e) => OnSpaceHandler(e)}
        onChange={(e) => OnChangeHandler(e)}
      />
      <button className="btn btn-secondary me-2" id="Timer">
        1:00
      </button>
      <button className="btn btn-primary" onClick={ResetCounter}>
        <i className="bi bi-arrow-clockwise"></i>
      </button>

      <div className="container">
        <h1 id="CorrectChars"></h1>
        <h1 id="WrongChars"></h1>
      </div>
    </div>
  );
};

export default UserInput;

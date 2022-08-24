import React, { useRef } from "react";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2'


const UserInput = ({ content }) => {
  const [Counter, setCounter] = useState(0);
  const [CorrectWords, setCorrectWords] = useState(1);
  const [WrongWords, setWrongWords] = useState(1);
  const [NewWordArray, setWordArray] = useState([]);
  const [afterRender, setAfterRender] = useState();
  const [rerender, setRerender] = useState();
  const CorrectChars =useRef(0)
  const [startTimer,setStartTimer]= useState(true)
  const WrongCharCount=useRef(0)
  const [Showwpm,setshowwpm]=useState(false)
  const [WPM ,setWPM]=useState(0)

  const funRef = useRef(null);



  useEffect(() => {
    if (!afterRender) return;
    setAfterRender(false);
  }, [afterRender]);

  useEffect(() => {
    setAfterRender(true);
  }, [rerender]);

  const Timer = () => {    
    var time = 59;
    setStartTimer(false)
    funRef.current= setInterval(function() {
  var seconds = time ;
  var minutes = (time - seconds) / 60;
  if (seconds.toString().length == 1) {
    seconds =  seconds;
  }
  document.getElementById("Timer").innerHTML =+ seconds;  
  time--;
  if (time < 0) {
    setshowwpm(true);    
    clearInterval(funRef.current);    
  }
}, 1000);
    }

const onChangeHandler =(event) =>{
  // let CharPosition=(event.target.value.length) - 1
  let CurrentWord=content[Counter]+' '
  let CurrentValue=event.target.value
  let result=CurrentWord.includes(CurrentValue)
  if (result){    
    document.getElementById(Counter).classList.remove("bg-danger");
  }
  else{
    document.getElementById(Counter).classList.add("bg-danger");    
  }
}

  const OnSpaceHandler = (event) => {
    if (startTimer){
    Timer()
    }   

    document.getElementById(Counter).classList.add("bg-secondary");
    if (event.keyCode === 32) {
      WrongCharCount.current= 0
      document.getElementById(Counter).classList.remove("bg-danger");
      var value = event.target.value;
      var CurrentWord=content[Counter]
      for(let i=0; i<value.length ; i++){
        if(value[i] === CurrentWord[i]){
          CorrectChars.current = CorrectChars.current + 1
        }
        else{
          if( value[i] != ' '){
            CorrectChars.current = CorrectChars.current - value.length + 1
          }
        }
      }
      CorrectChars.current = CorrectChars.current + 1
      document.getElementById('CorrectChars').innerHTML = CorrectChars.current
      setWPM(CorrectChars.current / 5)          
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
    }
  };

  if(Showwpm){
    Swal.fire({
      icon: 'success',
      title: 'Congratulations...',
      text: `Your Speed Was ${WPM} Words Per Minute`,  
    })
  }

  const ResetCounter = () => {
    setCounter(0);
  };
  return (
    <div className="container d-flex" style={{ margin: "10px" }}>
    {Showwpm? null :<input
        className="form-control me-5"
        type="text"
        onChange= {(e) => onChangeHandler(e)}
        onKeyUp={(e) => OnSpaceHandler(e)}
      />}
      <button className="btn btn-secondary me-2" id="Timer">
        1:00
      </button>
      <button className="btn btn-primary" onClick={ResetCounter}>
        <i className="bi bi-arrow-clockwise"></i>
      </button>

      <div className="container">
        <h1 id="CorrectChars"></h1>
      </div>      
    </div>
  );
};

export default UserInput;

import {React,useState,useEffect,useRef} from 'react'
import {Helmet} from 'react-helmet';
import Swal from 'sweetalert2'
import $ from 'jquery'
import { Modal } from 'bootstrap'

import { useNavigate,Link } from "react-router-dom";

const UserInteract = ({content, Theme , ThemeBackground}) => {

  const [Counter, setCounter] = useState(0);
  const [CorrectWords, setCorrectWords] = useState(0);
  const [WrongWords, setWrongWords] = useState(0);  
  const CorrectChars =useRef(0)
  const [startTimer,setStartTimer]= useState(true)  
  const [Showwpm,setshowwpm]=useState(false)
  const [WPM ,setWPM]=useState(0)
  const funRef = useRef(null);

  let navigate = useNavigate();

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
    document.getElementById("UserInput").readOnly = true
    setshowwpm(true);    
    clearInterval(funRef.current);
  }
}, 1000);
    }

const onChangeHandler =(event) =>{    
  document.getElementById(Counter).scrollIntoView();
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
      document.getElementById(Counter).classList.remove("bg-danger");
      var value = event.target.value;
      var CurrentWord=content[Counter]
      for(let i=0; i<value.length ; i++){
        if(value[i] === CurrentWord[i]){
          CorrectChars.current = CorrectChars.current + 1          
        }
        else{
          if( value[i] != ' '){
            CorrectChars.current = CorrectChars.current - 1
          }
        }
      }
      CorrectChars.current = CorrectChars.current + 1      
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
    let myModal = new Modal(document.getElementById('WPMmodal'), {});
  myModal.show();
  }

  const ResetCounter = () => {
    clearInterval(funRef.current);
    setCounter(0);
    navigate('/redirect')
  };  
  const closeModal = () => {    
    clearInterval(funRef.current);
    setCounter(0);    
    navigate('/redirect')
  };  

  return (
    <div className="mt-4 mx-5 UserInteraction">
         <Helmet>
                <style>{`.UserInput{${ThemeBackground}}`}</style>
                <style>{`.continuebtn{${ThemeBackground}}`}</style>
                <style>{`.WPMMODAL{${ThemeBackground}}`}</style>
            </Helmet>
      <div className='d-flex'>
        <input autoComplete="off" id='UserInput' className={`form-control me-2 UserInput ${Theme == 'Light' ? 'text-dark' : 'text-light'}`} placeholder="Start Typing..." onChange= {(e) => onChangeHandler(e)} onKeyUp={(e) => OnSpaceHandler(e)}/>                
        <span id="Timer" className={`me-2 btn border ${Theme=='Light'? 'border-dark text-dark' : 'border-light text-light'}`} disabled >1:00</span>
        <button className="btn btn-primary" onClick={ResetCounter}>
        <i className="bi bi-arrow-clockwise"></i>
      </button>     
      </div>
      <div className={`modal fade WPMMODAL container-fluid`}  id="WPMmodal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className={`modal-content WPMMODAL border ${Theme =='Light'? 'text-dark border-dark' : 'text-light border-light'}`}>
      <div className="modal-header mt-3 mx-auto">
        <h5 className="modal-title fs-4">Congratulations!!</h5>        
      </div>
      <div className="modal-body text-center fw-semibold">
        Speed: {WPM} Words Per Minute
        <br/>
        Correct Words: {CorrectWords}
        <br/>
        Wrong Words: {WrongWords}
      </div>
      <div className="text-center mb-3">        
        <button onClick={closeModal} data-bs-dismiss="modal" type="button" className={`btn btn-sm bg-gradient continuebtn ${Theme =='Light'? 'text-dark border-dark' : 'text-light border-light'}`} >Continue</button>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default UserInteract
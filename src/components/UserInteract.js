import {React,useState,useEffect,useRef} from 'react'
import {Helmet} from 'react-helmet';
import Swal from 'sweetalert2'
import $ from 'jquery'
import ResultModal from './ResultModal'
import Button from 'react-bootstrap/Button';
import {Howl, Howler} from 'howler';
import Sound from '../audioclips/key1.mp3'


import { useNavigate,Link } from "react-router-dom";

const UserInteract = ({content, Theme , ThemeBackground}) => {
  const [modalShow, setModalShow] = useState(false);
  const [Counter, setCounter] = useState(0);
  const [CorrectWords, setCorrectWords] = useState(0);
  const [WrongWords, setWrongWords] = useState(0);  
  const CorrectChars =useRef(0)
  const WrongChars =useRef(0)
  const [startTimer,setStartTimer]= useState(true)  
  const [Showwpm,setshowwpm]=useState(false)
  const [WPM ,setWPM]=useState(0)
  const funRef = useRef(null);
  const TotalKeyPress= useRef(0)    
  const [allLoaded,setAllLoaded]=useState(false)
  const [boldFirst,setBoldFirst]=useState(false)

  let navigate = useNavigate();

  
  
  var sound = new Howl({
    src: Sound,    
    volume: 0.5,    
  });
  


  useEffect(() => {
    setAllLoaded(true)
  },[])

  useEffect(() => {
    if (allLoaded){
      document.getElementById(Counter).classList.remove("text-muted",'fw-bolder');
      document.getElementById(Counter).classList.add('fw-bolder');
    }
  },[allLoaded])


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
    setModalShow(true)
    clearInterval(funRef.current);
  }
}, 1000);
    }

const onChangeHandler =(event) =>{  
  
  if (startTimer){
    Timer()
    }       
      
  try{  
    document.getElementById(`${Counter}char${event.target.selectionStart}`).focus()     
  }catch(err){

  }
  document.getElementById(Counter).scrollIntoView();
  let CurrentWord=content[Counter]+' '
  let CurrentValue=event.target.value
  let length=CurrentValue.length
  let lastChar=CurrentValue[length-1]  
  if(CurrentValue=== ''){
    document.getElementById(Counter).classList.remove("text-danger"); 
  }  
  let result=CurrentWord.includes(CurrentValue)
  if (result){    
    document.getElementById(Counter).classList.remove("text-danger");
  }
  else{
    document.getElementById(Counter).classList.add("text-danger");    
  }
}

  const OnSpaceHandler = (event) => {
    sound.play()
    let lastChar=event.target.value[event.target.value.length - 1]
    let result=event.target.value.includes(' ')
    if (result) {          
      document.getElementById(Counter).classList.remove("text-danger");
      var value = event.target.value;      
      var CurrentWord=content[Counter]
      for(let i=0; i<value.length ; i++){
        if(value[i] === CurrentWord[i]){
          CorrectChars.current = CorrectChars.current + 1
          TotalKeyPress.current=TotalKeyPress.current + 1 
        }
        else{
          if( value[i] === ' '){        
            CorrectChars.current = CorrectChars.current + 1            
          }
          else{
            WrongChars.current= WrongChars.current +1
          }
        }
      }      
      TotalKeyPress.current=TotalKeyPress.current + 1       
      
      setWPM(CorrectChars.current / 5)          
      if (value.length === 1) {
        event.target.value = "";
      } else {
        setCounter(Counter + 1);         
        if (event.target.value.trim() === content[Counter]) {
          document.getElementById(Counter + 1).classList.remove("text-muted");
          document.getElementById(Counter).classList.remove("text-muted",'fw-bolder');
          document.getElementById(Counter + 1).classList.add("fw-bolder");
          document.getElementById(Counter).classList.add("text-success");
          setCorrectWords(CorrectWords + 1);
        } else {
          document.getElementById(Counter + 1).classList.remove("text-muted");
          document.getElementById(Counter).classList.remove("text-muted",'fw-bolder');
          document.getElementById(Counter + 1).classList.add("fw-bolder");
          document.getElementById(Counter).classList.add("text-danger");
          setWrongWords(WrongWords + 1);
        }
        event.target.value = "";
      }      
    }      
  };  

  const ResetCounter = () => {
    clearInterval(funRef.current);
    setCounter(0);
    navigate('/redirect')
  };  
  const closeModal = () => {    
    clearInterval(funRef.current);
    setCounter(0);    
    setModalShow(false)
    navigate('/redirect')
  };  

  return (

    <div className="mt-5 UserInteraction">
         <Helmet>
                <style>{`.UserInput{${ThemeBackground}}`}</style>
                <style>{`.continuebtn{${ThemeBackground}}`}</style>
                <style>{`.WPMMODAL{${ThemeBackground}}`}</style>
            </Helmet>
      <div className='d-flex'>
        <input autoFocus onBlur={({ target }) => target.focus()}  autoCorrect="off" autoCapitalize="none" autoComplete="off" id='UserInput' className={`form-control me-2 UserInput ${Theme == 'Light' ? 'text-dark' : 'text-light'}`} placeholder="Start Typing..." onChange= {(e) => onChangeHandler(e)} onKeyUp={(e) => OnSpaceHandler(e)}/>                
        <span id="Timer" className={` me-2 btn border ${Theme=='Light'? 'btn-outline-dark' : 'btn-outline-light'}`} disabled >1:00</span>
        <button className={` btn border ${Theme=='Light'? 'btn-outline-dark' : 'btn-outline-light'}`} onClick={ResetCounter}>
        <i className="bi bi-arrow-clockwise"></i>
      </button>  
      <div>            
        </div>  
      </div>      
      <ResultModal
      wpm={WPM}      
      accuracy={((CorrectChars.current - WrongChars.current) / TotalKeyPress.current) * 100}      
      wrongwords={WrongWords}
      correctwords={CorrectWords}
      closemodal={closeModal}      
        theme={Theme}
        themebackground={ThemeBackground}
        show={modalShow}
        onHide={() => setModalShow(false)}    
        backdrop="static"
        keyboard={false}    
        />
    </div>
  )
}

export default UserInteract
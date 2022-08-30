import {React,useState,useEffect,useRef} from 'react'
import {Helmet} from 'react-helmet';
import ResultModal from './ResultModal'
import {Howl, Howler} from 'howler';
import razergreen from '../audioclips/razergreen.wav'
import cream from '../audioclips/nkcream.mp3'
import mxspeedsilver from '../audioclips/mxspeedsilver.wav'
import holypanda from '../audioclips/holypanda.wav'
import bruh from '../audioclips/bruh.mp3'
import metal from '../audioclips/key2.wav'



import { useNavigate,Link } from "react-router-dom";

const UserInteract = ({content, Theme , ThemeBackground,Sound,Reload,setReload}) => {
  const [modalShow, setModalShow] = useState(false);
  const [Counter, setCounter] = useState(0);
  const [CorrectWords, setCorrectWords] = useState(0);
  const [WrongWords, setWrongWords] = useState(0);  
  const CorrectChars =useRef(0)
  const WrongChars =useRef(0)
  const [startTimer,setStartTimer]= useState(true)  
  const [WPM ,setWPM]=useState(0)
  const funRef = useRef(null);
  const TotalKeyPress= useRef(0)    
  const [allLoaded,setAllLoaded]=useState(false)
  const [sound,setSound]=useState()

  let navigate = useNavigate();

  
  useEffect(() => {      
      if (Sound === 'Cream'){
        setSound(new Howl({
          src: cream,    
          volume: 1,    
        }))
      } 
      if (Sound === 'RazerGreen'){
        setSound(new Howl({
          src: razergreen,    
          volume: 0.3,    
        }))
      } 
      if (Sound === 'MXSpeedsSilver'){
        setSound(new Howl({
          src: mxspeedsilver,    
          volume: 0.5,    
        }))
      }
      if (Sound === 'HolyPanda'){
        setSound(new Howl({
          src: holypanda,    
          volume: 0.5,    
        }))
      } 
      if (Sound === 'Bruh'){
        setSound(new Howl({
          src: bruh,    
          volume: 0.5,    
        }))
      } 
      if (Sound === 'Metal'){
        setSound(new Howl({
          src: metal,    
          volume: 0.2,    
        }))
      }      
  }, [Sound]);
  
  


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
    clearInterval(funRef.current);    
    document.getElementById("UserInput").readOnly = true;    
    setModalShow(true)
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
    try{
      if(Sound !== 'Mute'){
        sound.play()
      }
    }
    catch (err){
      
    }
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
    setStartTimer(true)    
    setCounter(0);
    navigate('/redirect')
  };  
  const closeModal = () => {         
    setModalShow(false)
    clearInterval(funRef.current);
    setStartTimer(true)
    setCounter(0);    
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